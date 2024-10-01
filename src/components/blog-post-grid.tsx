"use client";

import { Badge } from "@/components/badge";
import { BlogCard } from "@/components/blog.card";
import type { TMetadata } from "@/components/content-hub";
import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const style = tv({
  base: "grid grid-cols-3 gap-6",
});

type TBlogPostGrid = VariantProps<typeof style>;
export type BlogPostGridProps = {
  metadatas: TMetadata[];
} & TBlogPostGrid &
  ComponentPropsWithRef<"div">;

export const BlogPostGrid = (props: BlogPostGridProps) => {
  return (
    <div {...props} className={twMerge(style({ ...props }))}>
      {props.metadatas.map((metadata) => {
        const { title } = metadata;
        const tagCollection = metadata.tags.split(",");
        const date = metadata.date.replaceAll("/", " ");

        return (
          <BlogCard date={date} title={title} key={title}>
            {tagCollection.map((tag) => (
              <Badge key={`${title}-${tag}`} variant="inactive" size="sm">
                {tag}
              </Badge>
            ))}
          </BlogCard>
        );
      })}
    </div>
  );
};
