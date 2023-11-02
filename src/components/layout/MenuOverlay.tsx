import Link from "next/link";
import React from "react";

type Props = {
  menuOpened: boolean;
  toggleMenu: () => void;
};

const MenuOverlay = (props: Props) => {
  return (
    <div
      className={`${
        props.menuOpened ? "translate-x-0" : "translate-x-full"
      } fixed duration-300 inset-0 bg-color1 lg:hidden`}
    >
      <div className=" max-w-2xl mx-auto">
        <div className="flex justify-between align-middle px-5 py-4">
          <div className="flex align-middle justify-center">
            <span className="font-thin text-4xl">iP</span>
            <span className="ml-3 font-light text-2xl self-center">
              careers
            </span>
          </div>
          <button
            className="h-7 w-7 self-center flex flex-col items-center justify-center gap-1"
            onClick={props.toggleMenu}
          >
            <div className="bg-color6 w-5 h-0.5 rotate-45 rounded translate-y-1"></div>
            <div className="bg-color6 w-5 h-0.5 -rotate-45 rounded -translate-y-0.5"></div>
          </button>
        </div>

        <div className="flex flex-col gap-5 justify-between align-middle p-5">
          <hr className="border-color7 opacity-30" />
          <p className="text-color7 text-xl font-semibold">Find a job</p>
          <div className="flex flex-col">
            <Link
              href={"/jobs"}
              className=" text-2xl"
              onClick={props.toggleMenu}
            >
              All our jobs
            </Link>
          </div>
          <hr className="border-color7 opacity-30" />
          <p className="text-color7 text-xl font-semibold">
            Work at IgnasPlace
          </p>
          <div className="flex flex-col">
            <Link
              href={"/journey"}
              className=" text-2xl"
              onClick={props.toggleMenu}
            >
              Journey
            </Link>
            <Link
              href={"/people-stories"}
              className=" text-2xl"
              onClick={props.toggleMenu}
            >
              Stories
            </Link>
          </div>
          <hr className="border-color7 opacity-30" />
          <p className="text-color7 text-xl font-semibold">Resources</p>
          <div className="flex flex-col">
            <Link
              href={"/privacy"}
              className=" text-2xl"
              onClick={props.toggleMenu}
            >
              Privacy
            </Link>
            <Link
              href={"https:ignasplace.com"}
              target="_blank"
              className=" text-2xl"
              onClick={props.toggleMenu}
            >
              IgnasPlace.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
