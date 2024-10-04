import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:flex lg:justify-center lg:items-center bg-zinc-50">
      <div className="max-w-[1080px] w-full mt-[5rem] p-16 bg-zinc-50 min-h-screen">
        {children}
      </div>
    </div>
  );
}
