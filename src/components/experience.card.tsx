import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "border border-[#DEDEDE] border-l border-r-0 border-b-0 border-t-0 pl-8",
});

type TCard = VariantProps<typeof style>;
interface Props extends TCard, React.ComponentPropsWithRef<"div"> {}

interface Props {
  company: string;
  position: string;
  period: string;
  description?: string;
}

export const PresentExperienceCard = (props: Props) => {
  return (
    <div {...props} className={twMerge(style({ ...props }), props.className)}>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <h4>{props.company}</h4>
              <div className="bg-blackColor rounded-full px-5 flex items-center justify-center">
                <p className="text-white uppercase text-sm">Present</p>
              </div>
            </div>
            <p className="text-[#979797]">{props.position}</p>
          </div>
          <p className="text-[#979797] uppercase">{props.period}</p>
        </div>
        <p className="text-mediumGray">{props.description}</p>
        <p className="text-mediumGray">Key Responsibilites:</p>
        {props.children}
      </div>
    </div>
  );
};
