"use client";
import { Badge, TBadge } from "@/components/badge";
import { TagCloud } from "@/components/tag-cloud";
import { BlogPostGrid } from "./blog-post-grid";
import { useMemo, useState } from "react";

export type TMetadata = {
  title: string;
  date: string;
  tags: string;
  url: string;
};

export type ContentHubProps = {
  metadatas: TMetadata[];
};

export const ContentHub = ({ metadatas }: ContentHubProps) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    for (const metadata of metadatas) {
      const commaSeparatedTags = metadata.tags;
      for (const tag of commaSeparatedTags.split(",")) tagSet.add(tag);
    }
    return Array.from(tagSet);
  }, [metadatas]);

  return (
    <>
      <TagCloud className="mb-12">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={(e) => {
              const element = e.currentTarget.firstElementChild!;
              const tag = element.textContent!;
              const variant = element.getAttribute(
                "variant",
              ) as TBadge["variant"];

              if (variant === "inactive") {
                // Active
                setActiveTags((prev) => [...prev, tag]);
              } else {
                // Inactive
                setActiveTags((prev) =>
                  prev.filter((prevTag) => prevTag !== tag),
                );
              }
            }}
          >
            <Badge
              key={tag}
              variant={activeTags.includes(tag) ? "active" : "inactive"}
              size="md"
            >
              {tag}
            </Badge>
          </button>
        ))}
      </TagCloud>
      <BlogPostGrid
        metadatas={
          activeTags.length === 0
            ? metadatas
            : metadatas.filter((metadata) => {
                const tags = metadata.tags.split(",");
                const numberOfActiveTags = activeTags.filter(
                  (activeTag) => tags.indexOf(activeTag) !== -1,
                ).length;
                return numberOfActiveTags > 0;
              })
        }
      />
    </>
  );
};
