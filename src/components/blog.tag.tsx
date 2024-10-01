import React from "react";

interface Props {
  tag: string;
}

export const BlogTag = (props: Props) => {
  return (
    <div className="w-fit rounded-md bg-[#F2F6F9] p-1.5">
      <p className="text-xs text-darkGray">{props.tag}</p>
    </div>
  );
};
