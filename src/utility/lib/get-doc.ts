import { TMetadata } from "@/components/content-hub";
import { CustomMDXComponent } from "@/custom-mdx-component";
import { compileMDX } from "next-mdx-remote/rsc";
import { PathLike } from "node:fs";
import { readFile } from "node:fs/promises";
import { ReactElement } from "react";
import { readingTime } from "reading-time-estimator";

export async function getDoc(path: PathLike): Promise<{
  content: ReactElement;
  frontmatter: TMetadata;
  estimateReadingTime: string;
}> {
  const fileContent = await readFile(
    (path as string).endsWith(".md") ? path : path + ".md",
    "utf-8",
  );
  const [{ text: estimateReadingTime }, { content, frontmatter }] =
    await Promise.all([
      Promise.resolve(readingTime(fileContent)),
      compileMDX<TMetadata>({
        source: fileContent,
        options: {
          parseFrontmatter: true,
        },
        components: CustomMDXComponent(),
      }),
    ]);

  frontmatter.date = frontmatter.date.replaceAll("/", " ");
  return { estimateReadingTime, content, frontmatter };
}
