"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToggleTheme } from "../toggle-theme";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname(); // Get the current pathname

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false); // Close the navbar on pathname change
  }, [pathname]);

  return (
    <>
      <header className="fixed w-screen top-0 z-50 lg:px-16 lg:py-6 p-5 bg-zinc-50 dark:bg-zinc-800 flex justify-between items-center flex-wrap">
        <div className="hidden lg:flex lg:items-center lg:gap-16">
          <Link href="/">
            <h4 className="text-black font-bold dark:text-white">SimpFolio</h4>
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

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <button className="text-gray-600 border-gray-600 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black border rounded-full px-3 py-1 hover:bg-black hover:text-white transition-all duration-200 select-none">
            <p>
              Let&apos;s connect <span className="text-xl">&#129125;</span>
            </p>
          </button>
          <ToggleTheme />
        </div>

        <div className="lg:hidden flex justify-between items-center w-full">
          <Link href="/">
            <h4 className="text-black font-bold ">SimpFolio</h4>
          </Link>
          <div className="flex gap-4 items-center">
            <ToggleTheme />
            <button onClick={toggleNavbar}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="h-[25px] w-[25px] fill-gray-600"
                >
                  <path d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 14 14"
                  className="h-[20px] w-[20px] fill-gray-600"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 2H.5m13 5H.5m13 5H.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="flex basis-full flex-col gap-3 pt-20 pb-3 mobile-nav border-b border-black">
          <Link href="/">
            <h5 className="nav text-sm text-center">About</h5>
          </Link>
          <Link href="/">
            <h5 className="nav text-sm text-center">Achievement</h5>
          </Link>
          <Link href="/blog">
            <h5 className="nav text-sm text-center">Blog</h5>
          </Link>
          <Link href="/">
            <h5 className="nav text-sm text-center">
              Let&apos;s connect &#129125;
            </h5>
          </Link>
        </div>
      )}
    </>
  );
};
