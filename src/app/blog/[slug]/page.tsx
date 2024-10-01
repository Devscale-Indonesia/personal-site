import { compileMDX } from "next-mdx-remote/rsc";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";

export type BlogParam = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: BlogParam) {
  const filename = await readFile(
    join(cwd(), "content", `${slug}.md`),
    "utf-8",
  );
  const { content } = await compileMDX({
    source: filename,
  });

  console.log(filename);
  return content;
}
