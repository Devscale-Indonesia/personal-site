import { createOnigurumaEngine } from "shiki";

async function* engineGenerator() {
  const onigurumaEngine = await createOnigurumaEngine(import("shiki/wasm"));
  yield null;

  while (!(onigurumaEngine instanceof Promise) && onigurumaEngine) {
    yield onigurumaEngine;
  }
}

export const engine = engineGenerator();
