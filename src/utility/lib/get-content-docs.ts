import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { getFrontMatter } from "@/utility/lib/get-front-matter";

export async function getContentDocs() {
  const filenames = await readdir(join(cwd(), "content"));
  const metadataCollectionPromises = Promise.all(
    filenames.map((filename) =>
      getFrontMatter(join(cwd(), "content", filename)),
    ),
  );

  return metadataCollectionPromises;
}
