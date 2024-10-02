import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const style = tv({
  base: "bg-transparent p-5 flex flex-col gap-8",
});

type TCard = VariantProps<typeof style>;
interface Props extends TCard, React.ComponentPropsWithRef<"div"> {}

interface Props {
  src: string;
  title: string;
  description: string;
}

export const ProjectCard = (props: Props) => {
  return (
    <div {...props} className={twMerge(style({ ...props }), props.className)}>
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
      <div className="flex gap-2">{props.children}</div>
    </div>
  );
};
