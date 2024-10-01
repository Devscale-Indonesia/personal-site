"use client";

import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type TagCloudProps = {
  className?: string;
};

export const TagCloud = ({
  children,
  className,
}: PropsWithChildren<TagCloudProps>) => {
  return (
    <div className={twMerge("flex flex-wrap w-full gap-3", className)}>
      {children}
    </div>
  );
};
