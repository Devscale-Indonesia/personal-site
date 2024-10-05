import Link from "next/link";
import React from "react";

interface Props {
  date: string;
  title: string;
  url: string;
  children: React.ReactNode;
}

export const BlogCard = (props: Props) => {
  return (
    <Link href={props.url} className="w-fit block mx-auto sm:mx-none">
      <div className="border-zinc-300 dark:hover:border-zinc-200 dark:border-0 dark:hover:shadow-sm dark:hover:shadow-zinc-400 border rounded-xl bg-white dark:bg-zinc-700 p-4 max-w-[300px] h-[220px] flex flex-col justify-between hover:drop-shadow-md active:drop-shadow-md transition-all duration-300">
        <div className="space-y-3">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {props.date}
          </span>
          <h2 className="text-black dark:text-white font-semibold line-clamp-2 text-lg">
            {props.title}
          </h2>
        </div>
        <div className="flex gap-x-1 gap-y-2 flex-wrap">{props.children}</div>
      </div>
    </Link>
  );
};
