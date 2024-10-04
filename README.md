# Devscale Personal Website Template

### How to use it

### Customize Components and Design

#### Customize MDX Components

We use [`next-mdx-remote/rsc`](https://github.com/hashicorp/next-mdx-remote) to render Markdown.
This means you could replace HTML tags by custom component in `custom-mdx-component.tsx` at the `src/` directory. You can find the lists of HTML tags produce by MDX compiler in MDXJS [Table of components](https://mdxjs.com/table-of-components/)

In example you want to change the styling of a component with tailwind classes.

```tsx
// custom-mdx-component.tsx
return {
  h1: ({ children }) => <h1 className="text-5xl mb-4">{children}</h1>,
};
```

#### Customize Syntax Highlighter

[`react-syntax-highlighter`](https://github.com/react-syntax-highlighter/react-syntax-highlighter) is used for syntax highlighting by default.
You can change the theme by assgin `react-syntax-highlighter` theme to `const theme` variable in `custom-mdx-component.tsx`

```tsx
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const theme: { [key: string]: CSSProperties } = atomOneDark;
```

And if you want to change the syntax highlighting library, you could assign your own custom component for `pre` HTML tag

```tsx
return {
  pre: (props) => {
    // use getSyntax function to extract string of syntax code and language
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
```
