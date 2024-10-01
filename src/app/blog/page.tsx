import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";

const filenameRegExp = /\.md$|-/g;
const charMatchReplace: Record<string, string> = {
  ".md": "",
  "-": " ",
};

export default async function Page() {
  const filenames = await readdir(join(cwd(), "content")).then((filenames) =>
    filenames.map((filename) =>
      filename.replace(filenameRegExp, (match) => charMatchReplace[match]),
    ),
  );

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {filenames.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
}
