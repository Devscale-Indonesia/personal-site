import { expect, test } from "vitest";
import { getFrontMatter } from "../get-front-matter";
import { join } from "path";
import { cwd } from "process";

test("Should parse markdown front matter from file", async () => {
  const filePath = join(cwd(), "src/libs/__tests__/hello-world.md");
  const data = await getFrontMatter(filePath);

  expect(data).toHaveProperty("title");
  expect(data["title"]).toBe("Hello, World");

  expect(data).toHaveProperty("date");
  expect(data["date"]).toBe("11/September/2024");

  expect(data).toHaveProperty("tags");
  expect(data["tags"]).toBe("Test");
});
