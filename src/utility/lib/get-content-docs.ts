import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { getFrontMatter } from "@/utility/lib/get-front-matter";

export async function getContentDocs(limit?: number) {
  const filenames = await readdir(join(cwd(), "content")).then((filenames) =>
    filenames.slice(0, limit || filenames.length),
  );
  const metadataCollectionPromises = Promise.all(
    filenames.map((filename) =>
      getFrontMatter(join(cwd(), "content", filename)).then((frontmatter) =>
        Object.assign(frontmatter, { url: filename.replace(".md", "") }),
      ),
    ),
  );

  return metadataCollectionPromises;
}
