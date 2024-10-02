import { getShiki } from "@/utility/lib/shiki";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { compileMDX } from "next-mdx-remote/rsc";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

import "@/styles/code-line-number.css";
import Link from "next/link";
import { readingTime } from "reading-time-estimator";
import { TMetadata } from "@/components/content-hub";

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
      <div className="text-mediumGray text-base flex justify-between items-center mb-5">
        <Link
          href="#"
          className="flex items-center justify-center space-x-2 text-mediumGray no-underline"
        >
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 1.5L1.5 6.5L6.5 11.5"
              stroke="#747474"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          <span>Return to Blog</span>
        </Link>
        <div className="space-x-[8px]">
          <span>{estimatedReadingTime}</span>
          <span> &#x2022;</span>
          <span> {date}</span>
        </div>
      </div>
      {content}
    </div>
  );
}
