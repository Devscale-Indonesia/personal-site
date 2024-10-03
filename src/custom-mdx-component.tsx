import { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getSyntax } from "@/libs/get-syntax";
import { CSSProperties } from "react";

const theme: { [key: string]: CSSProperties } = atomOneDark;

export function CustomMDXComponent(): MDXComponents {
  return {
    p: ({ children }) => (
      <p className="text-base text-mediumGray">{children}</p>
    ),
    li: ({ children }) => (
      <li className="text-base text-mediumGray">{children}</li>
    ),
    h1: ({ children }) => <h1 className="text-5xl mb-4">{children}</h1>,
    pre: (props) => {
      const { code, lang } = getSyntax(props.children);
      return (
        <SyntaxHighlighter
          showLineNumbers
          wrapLines
          language={lang}
          style={theme}
        >
          {code}
        </SyntaxHighlighter>
      );
    },
  };
}
