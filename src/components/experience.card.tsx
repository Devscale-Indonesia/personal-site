import React from "react";

interface Props {
  company: string;
  position: string;
  startPeriod: string;
  endPeriod?: string;
  description: string;
  keys: string[];
}

export const PresentTag = () => {
  return (
    <span className="font-normal text-white uppercase text-sm bg-blackColor rounded-full px-5 flex items-center justify-center">
      Present
    </span>
  );
};

export const ExperienceCard = (props: Props) => {
  return (
    <div className="h-full w-full relative flex">
      <div>
        <div className=" bg-[#DEDEDE] w-[1px] h-full"></div>
        {props.endPeriod ? (
          <div className="absolute w-3 h-3 rounded-full z-100 bg-[#DEDEDE] -left-1.5 top-0"></div>
        ) : (
          <div className="absolute w-3 h-3 rounded-full z-100 bg-blackColor -left-1.5 top-0"></div>
        )}
      </div>

      <div className="h-full w-full relative pb-3">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="space-y-3 pl-8 py-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h4 className="flex gap-4 font-semibold">
                {props.company}
                {props.endPeriod ? null : <PresentTag />}
              </h4>
              <p className="text-[#979797]">{props.position}</p>
            </div>
            <p className="text-[#979797] uppercase">
              {props.startPeriod}
              {props.endPeriod ? ` - ${props.endPeriod}` : null}
            </p>
          </div>
        </div>

        <div className="space-y-1 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-none pl-8">
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
