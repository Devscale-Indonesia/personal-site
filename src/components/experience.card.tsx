import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "h-full w-full flex relative ",
});

type TCard = VariantProps<typeof style>;
interface Props extends TCard, React.ComponentPropsWithRef<"div"> {}

interface Props {
  company: string;
  position: string;
  period: string;
  description?: string;
  keys?: string[];
}

export const PresentExperienceCard = (props: Props) => {
  return (
    <div {...props} className={twMerge(style({ ...props }), props.className)}>
      <div>
        <div className=" bg-[#DEDEDE] w-[1px] h-full"></div>
        <div className="absolute w-3 h-3 rounded-full z-10 bg-blackColor -left-1.5 top-0"></div>
      </div>
      <div className="flex flex-col gap-3 pl-8 py-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h4 className="flex gap-4 font-semibold">
              {props.company}{" "}
              <span className="font-normal text-white uppercase text-sm bg-blackColor rounded-full px-5 flex items-center justify-center">
                Present
              </span>
            </h4>
            <p className="text-[#979797]">{props.position}</p>
          </div>
          <p className="text-[#979797] uppercase">{props.period}</p>
        </div>

        <div className="space-y-1">
          <p className="text-mediumGray">{props.description}</p>
          <p className="text-mediumGray">Key Responsibilites:</p>
          {props.keys?.map((key, index) => (
            <p key={index} className="text-mediumGray">
              &#8226; {key}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PastExperienceCard = (props: Props) => {
  return (
    <div {...props} className={twMerge(style({ ...props }), props.className)}>
      <div>
        <div className=" bg-[#DEDEDE] w-[1px] h-full"></div>
        <div className="absolute w-3 h-3 rounded-full z-10 bg-[#DEDEDE] -left-1.5 top-1"></div>
      </div>

      <div className="flex justify-between items-center w-full pl-8 py-3">
        <div className="flex flex-col">
          <h4 className="font-semibold">{props.company}</h4>
          <p className="text-[#979797]">{props.position}</p>
        </div>
        <p className="text-[#979797] uppercase">{props.period}</p>
      </div>
    </div>
  );
};
