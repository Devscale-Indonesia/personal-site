import React from "react";
import Link from "next/link";
import Image from "next/image";

interface TagProps {
  href?: string;
  type: "website" | "repository" | "docs";
}

export const Tag = ({ href, type }: TagProps) => {
  const tagData = {
    website: { src: "/assets/website-tag.webp", label: "Website" },
    repository: { src: "/assets/repository-tag.webp", label: "Repository" },
    docs: { src: "/assets/docs-tag.webp", label: "Docs" },
  };

  if (!href) return null;

  return (
    <Link href={href} target="_blank">
      <div className="flex items-center gap-1 bg-blackColor text-white rounded-md w-fit px-2 py-1.5">
        <Image
          src={tagData[type].src}
          width={300}
          height={300}
          alt={`${tagData[type].label} icon`}
          className="w-5 h-5"
        />
        <p className="text-xs">{tagData[type].label}</p>
      </div>
    </Link>
  );
};

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  websiteHref?: string;
  repositoryHref?: string;
  docsHref?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="bg-transparent p-5 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Image
          src={props.src}
          width={500}
          height={500}
          alt="project icon"
          className="w-[60px] h-[60px]"
        />
        <h4 className="font-semibold">{props.title}</h4>
        <p className="text-mediumGray">{props.description}</p>
      </div>

      <div className="flex gap-2">
        <Tag href={props.websiteHref} type="website" />
        <Tag href={props.repositoryHref} type="repository" />
        <Tag href={props.docsHref} type="docs" />
      </div>
    </div>
  );
};
