import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";

const filenameRegExp = /\.md$|-/g;
const charMatchReplace: Record<string, string> = {
  ".md": "",
  "-": " ",
};

export async function getContenDocs() {
  return readdir(join(cwd(), "content")).then((filenames) =>
    filenames.map((filename) =>
      filename.replace(filenameRegExp, (match) => charMatchReplace[match]),
    ),
  );
}
