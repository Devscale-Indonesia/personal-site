import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center bg-zinc-50 dark:bg-zinc-800">
      <div className="max-w-[1080px] w-full mt-[5rem] lg:p-16 py-8 px-5 bg-zinc-50 dark:bg-zinc-800 min-h-screen">
        {children}
      </div>
    </div>
  );
}
