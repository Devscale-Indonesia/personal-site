import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const style = tv({
  base: "border-silver border rounded-md bg-white p-4 h-24 max-w-[300px] h-[220px] rounded-xl flex flex-col justify-between",
});

type TCard = VariantProps<typeof style>;
interface Props extends TCard, React.ComponentPropsWithRef<"div"> {}

interface Props {
  date: string;
  title: string;
  url: string;
}

export const BlogCard = (props: Props) => {
  return (
    <Link href={props.url} className="w-fit block mx-auto sm:mx-none">
      <div {...props} className={twMerge(style({ ...props }))}>
        <div className="space-y-3">
          <span className="text-sm text-mediumGray">{props.date}</span>
          <h2 className="text-blackColor font-semibold line-clamp-2 text-lg">
            {props.title}
          </h2>
        </div>
        <div className="flex gap-x-1 gap-y-2 flex-wrap">{props.children}</div>
      </div>
    </Link>
  );
};
