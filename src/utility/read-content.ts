import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";

const contentPath = join(cwd(), "content");

export async function readContent() {
  return readdir(contentPath).then((filenames) =>
    filenames.map((file) => file.replace(".md", "")),
  );
}
