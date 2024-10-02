import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1080px] w-full mt-[5rem] p-16 mx-auto">
      {children}
    </div>
  );
}
