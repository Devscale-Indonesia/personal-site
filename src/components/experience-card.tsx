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
    <span className="font-normal text-white uppercase text-sm bg-black rounded-full px-5 flex items-center justify-center">
      Present
    </span>
  );
};

export const ExperienceCard = (props: Props) => {
  return (
    <div className="h-full w-full border border-l border-t-0 border-b-0 border-r-0 border-zinc-300 group">
      <div className="relative pb-3">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
        />
        <div className="absolute w-3 h-3 rounded-full z-100 bg-zinc-300 -left-1.5 top-0 group-hover:bg-black peer-checked:bg-black"></div>
        <div className="lg:flex lg:justify-between lg:items-center lg:space-y-3 space-y-1 lg:pl-8 pl-4 py-3">
          <div className="space-y-1">
            <h4 className="flex gap-4 font-semibold">
              {props.company}
              {props.endPeriod ? null : <PresentTag />}
            </h4>
            <p className="text-neutral-400">{props.position}</p>
          </div>
          <p className="text-neutral-400 uppercase">
            {props.startPeriod}
            {props.endPeriod ? ` - ${props.endPeriod}` : null}
          </p>
        </div>

        <div className="space-y-1 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-[800px] lg:pl-8 pl-4">
          <p className="text-neutral-500">{props.description}</p>
          <p className="text-neutral-500">Key Responsibilites:</p>
          {props.keys?.map((key, index) => (
            <p key={index} className="text-neutral-500">
              &#8226; {key}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
