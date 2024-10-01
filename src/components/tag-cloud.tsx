"use client";

import type { ComponentPropsWithRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const style = tv({
  base: "flex flex-wrap w-full gap-3",
});

type TTagCloud = VariantProps<typeof style>;
export type TagCloudProps = TTagCloud & ComponentPropsWithRef<"div">;

export const TagCloud = (props: PropsWithChildren<TagCloudProps>) => {
  return (
    <div {...props} className={twMerge(style({ ...props }))}>
      {props.children}
    </div>
  );
};
