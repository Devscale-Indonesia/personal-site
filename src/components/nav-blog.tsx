"use client";

import Link from "next/link";

export type NavBlogProps = {
  estimatedReadingTime: string;
  date: string;
};

export function NavBlog({ date, estimatedReadingTime }: NavBlogProps) {
  const origin = window.location.origin;
  const blogUrl = `${origin}/blog`;

  return (
    <div className="text-mediumGray text-base flex justify-between items-center mb-5">
      <Link
        href={blogUrl}
        className="flex items-center justify-center space-x-2 text-mediumGray no-underline"
      >
        <svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 1.5L1.5 6.5L6.5 11.5"
            stroke="#747474"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        <span>Return to Blog</span>
      </Link>
      <div className="space-x-[8px]">
        <span>{estimatedReadingTime}</span>
        <span> &#x2022;</span>
        <span> {date}</span>
      </div>
    </div>
  );
}
