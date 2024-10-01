"use client";

import { Badge, TBadge } from "@/components/badge";
import { TagCloud } from "@/components/tag-cloud";
import { BlogCard } from "./blog-card";

export type TMetadata = {
  title: string;
  date: string;
  tags: string;
};

export type ContentHubProps = {
  metadatas: TMetadata[];
};

export const ContentHub = ({ metadatas }: ContentHubProps) => {
  const tags = new Set<string>();

  for (const metadata of metadatas) {
    const commaSpearatedTags = metadata.tags;
    for (const tag of commaSpearatedTags.split(",")) tags.add(tag);
  }

  return (
    <>
      <TagCloud>
        {Array.from(tags).map((tag) => (
          <button
            key={tag}
            onClick={(e) => {
              const element = e.currentTarget.firstElementChild!;
              const variant = element.getAttribute(
                "variant",
              ) as TBadge["variant"];

              if (variant === "inactive") {
                element.setAttribute("variant", "active");
              } else {
                element.setAttribute("variant", "inactive");
              }
            }}
          >
            <Badge key={tag} variant="inactive" size="md">
              {tag}
            </Badge>
          </button>
        ))}
      </TagCloud>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {metadatas.map(({ date, title, tags }) => (
          <BlogCard url="x" date={date} title={title} tags={tags} key={title} />
        ))}
      </div>
    </>
  );
};
