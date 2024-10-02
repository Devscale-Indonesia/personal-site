import { compileMDX } from "next-mdx-remote/rsc";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";

export type BlogProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: BlogProps) {
  const filePath = join(cwd(), "content", `${slug}.md`);
  const fileContent = await readFile(filePath, "utf-8");

  const { content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
  });

  return content;
}
