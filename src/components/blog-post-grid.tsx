"use client";

import { Badge } from "@/components/badge";
import { BlogCard } from "@/components/blog.card";
import type { TMetadata } from "@/components/content-hub";
import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const style = tv({
  base: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
});

type TBlogPostGrid = VariantProps<typeof style>;
export type BlogPostGridProps = {
  metadatas: TMetadata[];
} & TBlogPostGrid &
  ComponentPropsWithRef<"div">;

export const BlogPostGrid = (props: BlogPostGridProps) => {
  const pathname = usePathname();

  return (
    <div {...props} className={twMerge(style({ ...props }))}>
      {props.metadatas.map((metadata) => {
        const { title } = metadata;
        const tagCollection = metadata.tags.split(",");
        const date = metadata.date.replaceAll("/", " ");
        const url = pathname.concat(`/${metadata.url}`);

        return (
          <Link
            href={url}
            key={title}
            className="w-fit block mx-auto sm:mx-none"
          >
            <BlogCard date={date} title={title}>
              {tagCollection.map((tag) => (
                <Badge key={`${title}-${tag}`} variant="inactive" size="sm">
                  {tag}
                </Badge>
              ))}
            </BlogCard>
          </Link>
        );
      })}
    </div>
  );
};
