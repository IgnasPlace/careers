import React from "react";

type Props = {
  action: () => void;
};

const ClearInputButton = (props: Props) => {
  return (
    <button
      onClick={props.action}
      className="ml-2 w-5 h-5 rounded-full flex items-center justify-center border-color1 border-2"
    >
      <div className="bg-color1 w-2.5 h-0.5 rotate-45 rounded translate-x-1"></div>
      <div className="bg-color1 w-2.5 h-0.5 -rotate-45 rounded -translate-x-1"></div>
    </button>
  );
};

export default ClearInputButton;
