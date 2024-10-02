import { engine } from "@/utility/lib/shiki-engine";
import { createHighlighterCoreSync, RegexEngine } from "shiki";
import tokyoNight from "shiki/themes/tokyo-night.mjs";
import * as languagesBundle from "shiki/langs";

export async function register() {
  /*
   * Reference: https://shiki.style/guide/sync-usage
   * */
  console.info("=== Initiating Shiki engine for syntax highlighter ===");
  await engine.next();
  console.info("=== Shiki engine initiated ===");

  const languages = Object.keys(languagesBundle.bundledLanguagesBase);
  const onigurumaEngine = (await engine.next()).value as RegexEngine;
  const languagesRegistration = await Promise.all(
    languages.map((language) =>
      languagesBundle.bundledLanguagesBase[language]().then(
        (registration) => registration.default,
      ),
    ),
  );

  // @ts-expect-error sharing shiki highlighter to global variable
  global["shiki"] = createHighlighterCoreSync({
    themes: [tokyoNight],
    engine: onigurumaEngine,
    langs: languagesRegistration,
  });
}
