import { join } from "node:path";
import { cwd } from "node:process";
import { getFrontMatter } from "@/libs/get-front-matter";
import { readContent } from "@/utils/read-content";

export async function getContentDocs(limit?: number) {
  const filenames = await readContent().then((filenames) =>
    filenames.slice(0, limit || filenames.length),
  );
  const metadataCollectionPromises = Promise.all(
    filenames.map((filename) =>
      getFrontMatter(join(cwd(), "content", filename + ".md")).then(
        (frontmatter) => Object.assign(frontmatter, { url: filename }),
      ),
    ),
  );

  return metadataCollectionPromises;
}
