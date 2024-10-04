import Link from "next/link";
import React from "react";
import { ToggleTheme } from "../toggle-theme";

export const Header = () => {
  return (
    <header className="fixed w-screen top-0 z-50 px-16 py-6 bg-zinc-50 flex justify-between items-center">
      <div className="flex items-center gap-16">
        <Link href="/">
          <h4 className="text-black font-bold ">SimpFolio</h4>
        </Link>
        <Link href="/">
          <h5 className="nav">About</h5>
        </Link>
        <Link href="/">
          <h5 className="nav">Achievement</h5>
        </Link>
        <Link href="/blog">
          <h5 className="nav">Blog</h5>
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <button className="text-gray-600 border-gray-600 border rounded-full px-3 py-1 flex items-center gap-2 hover:bg-black hover:text-white transition-all duration-200 select-none">
          <p>Let&apos;s connect</p>
          <p className="text-xl">&#129125;</p>
        </button>
        <ToggleTheme />
      </div>
    </header>
  );
};
