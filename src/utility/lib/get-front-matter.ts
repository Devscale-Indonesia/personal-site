import { createReadStream, PathLike } from "fs";
import { createInterface } from "node:readline";
import matter from "gray-matter";

/**
 *Extract front matter from a Markdown file by reading the first 10 lines.
 * */
export function getFrontMatter(s: PathLike): Promise<Record<string, string>> {
  return new Promise((resolve, reject) => {
    try {
      const lineReader = createInterface({
        input: createReadStream(s),
      });
      let lineNumber = 0;
      let chunk = "";

      lineReader.on("line", (line) => {
        lineNumber++;
        if (lineNumber >= 0 && lineNumber < 10) {
          chunk += `${line}\n`;
        } else {
          lineReader.close();
        }
      });

      lineReader.on("close", () => {
        const { data } = matter(chunk.trim());
        resolve(data);
      });
    } catch (e) {
      reject(e);
    }
  });
}
