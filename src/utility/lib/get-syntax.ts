import type {
  ComponentPropsWithRef,
  ElementType,
  JSX,
  ReactElement,
  ReactNode,
} from "react";

function getAstReact<T extends ElementType>(
  node: JSX.Element,
): ReactElement<ComponentPropsWithRef<T>> {
  return node;
}

export function getSyntax(node: ReactNode): { code: string; lang: string } {
  if ((node as ReactElement).type !== "code")
    throw new TypeError("React node must be type of `code`");

  const react = getAstReact<"code">(node as ReactElement);

  if (typeof react.props.children !== "string")
    throw new TypeError("The children must be a string");

  const code = react.props.children;
  const lang = react.props.className!.replace("language-", "") as string;

  return { code, lang };
}
