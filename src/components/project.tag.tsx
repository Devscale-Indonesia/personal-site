import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  href: string;
}

export const WebsiteTag = (props: Props) => {
  return (
    <div>
      <Link href={props.href} target="_blank">
        <div className="flex items-center gap-1 bg-blackColor text-white rounded-md w-fit px-2 py-1.5">
          <Image
            src={`/assets/website-tag.webp`}
            width={300}
            height={300}
            alt="website icon"
            className="w-5 h-5"
          />
          <p className="text-xs ">Website</p>
        </div>
      </Link>
    </div>
  );
};

export const RepositoryTag = (props: Props) => {
  return (
    <div>
      <Link href={props.href} target="_blank">
        <div className="flex items-center gap-1 bg-blackColor text-white rounded-md w-fit px-2 py-1.5">
          <Image
            src={`/assets/repository-tag.webp`}
            width={300}
            height={300}
            alt="website icon"
            className="w-5 h-5"
          />
          <p className="text-xs">Repository</p>
        </div>
      </Link>
    </div>
  );
};

export const DocsTag = (props: Props) => {
  return (
    <div>
      <Link href={props.href} target="_blank">
        <div className="flex items-center gap-1 bg-blackColor text-white rounded-md w-fit px-2 py-1.5">
          <Image
            src={`/assets/docs-tag.webp`}
            width={300}
            height={300}
            alt="website icon"
            className="w-5 h-5"
          />
          <p className="text-xs">Docs</p>
        </div>
      </Link>
    </div>
  );
};
