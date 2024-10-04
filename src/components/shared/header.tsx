import Link from "next/link";
import React from "react";
import Image from "next/image";

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
        <Link href="/">
          <h5 className="nav">Blog</h5>
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <div className="text-gray-600 border-gray-600 border rounded-full px-3 py-2 flex items-center gap-2">
          <h5>Let&apos;s connect</h5>
          <Image
            src={`/assets/arrow.webp`}
            width={100}
            height={100}
            alt="arrow icon"
            className="w-[15px] h-[15px]"
          />
        </div>
        <div className="flex items-center gap-4 divide-x-2">
          <div>
            <Image
              src={`/assets/darkmode.webp`}
              width={100}
              height={100}
              alt="dark mode icon"
              className="w-[25px] h-[25px]"
            />
          </div>
          <div className="pl-3">
            <Image
              src={`/assets/language.webp`}
              width={100}
              height={100}
              alt="language icon"
              className="w-[25px] h-[25px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
