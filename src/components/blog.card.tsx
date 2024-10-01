import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const style = tv({
  base: "rounded-md bg-white p-4 h-24 max-w-[300px] h-[220px] flex flex-col justify-between",
});

type TCard = VariantProps<typeof style>;
interface Props extends TCard, React.ComponentPropsWithRef<"div"> {}

interface Props {
  date: string;
  title: string;
}

export const BlogCard = (props: Props) => {
  return (
    <div {...props} className={twMerge(style({ ...props }), props.className)}>
      <div className="space-y-3">
        <p className="text-sm text-mediumGray">{props.date}</p>
        <p className="text-blackColor font-semibold">{props.title}</p>
      </div>
      <div className="flex gap-x-1 gap-y-2 flex-wrap">{props.children}</div>
    </div>
  );
};
