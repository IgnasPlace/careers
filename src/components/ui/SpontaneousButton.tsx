import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  href: string;
  action?: () => void;
};

const SpontaneousButton = (props: Props) => {
  const dispatchAction = () => {
    if (props.action) {
      props.action();
    }
  };
  return (
    <div
      onClick={dispatchAction}
      className="group h-14 relative"
    >
      <div className="absolute h-full w-full top-0 left-0 bg-color1 border-2 border-colorWhite rounded-full"></div>

      <Link
        href={props.href}
        className="relative flex items-center justify-center h-14 px-6 rounded-full bg-colorWhite text-color1 text-sm duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
      >
        {props.title}
      </Link>
    </div>
  );
};

export default SpontaneousButton;
