import { getShiki } from "@/utility/lib/shiki";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { compileMDX } from "next-mdx-remote/rsc";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

import "@/styles/code-line-number.css";
import { readingTime } from "reading-time-estimator";
import { TMetadata } from "@/components/content-hub";
import { NavBlog } from "@/components/nav-blog";

export type SlugBlogProps = {
  params: {
    slug: string;
  };
};

export default async function SlugBlog({ params: { slug } }: SlugBlogProps) {
  const filePath = join(cwd(), "content", `${slug}.md`);
  const fileContent = await readFile(filePath, "utf-8");
  const shiki = getShiki();
  const [{ text: estimatedReadingTime }, { content, frontmatter }] =
    await Promise.all([
      Promise.resolve(readingTime(fileContent)),
      compileMDX<TMetadata>({
        source: fileContent,
        options: {
          parseFrontmatter: true,
        },
        components: {
          p: ({ children }) => (
            <p className="text-base text-mediumGray">{children}</p>
          ),
          li: ({ children }) => (
            <li className="text-base text-mediumGray">{children}</li>
          ),
          h1: ({ children }) => <h1 className="text-5xl mb-4">{children}</h1>,
          pre: (props) => {
            // @ts-expect-error accessing inner html string in React node
            const code = props.children.props.children as string;
            // @ts-expect-error accessing inner className as language identifier in React node
            const language = (props.children.props.className as string).replace(
              "language-",
              "",
            );
            const preHast = shiki.codeToHast(code, {
              lang: language,
              theme: "tokyo-night",
            });
            // @ts-expect-error parsing hast into jsx
            const pre = toJsxRuntime(preHast, { Fragment, jsx, jsxs });

            return pre;
          },
        },
      }),
    ]);
  const date = frontmatter.date.replaceAll("/", " ");

  return (
    <div className="prose prose-slate prose-lg mx-auto">
      <NavBlog estimatedReadingTime={estimatedReadingTime} date={date} />
      {content}
    </div>
  );
}
