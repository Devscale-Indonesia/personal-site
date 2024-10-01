import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1096px] px-4 mt-44 mb-56 mx-auto">{children}</div>
  );
}
