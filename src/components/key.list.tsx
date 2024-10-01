import React from "react";

interface Props {
  desc: string;
}

export const KeyList = (props: Props) => {
  return (
    <div>
      <p className="text-mediumGray">&#8226; {props.desc}</p>
    </div>
  );
};
