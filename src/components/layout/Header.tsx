"use client";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import MenuButton from "../ui/MenuButton";
import Link from "next/link";
import HeaderLinks from "./HeaderLinks";

const navLinks = [
  { name: "Jobs", link: "/jobs" },
  { name: "Journey", link: "/journey" },
  { name: "Stories", link: "/people-stories" },
];

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <header className=" bg-color1 text-colorWhite font-sans">
      <nav className=" max-w-[1400px] mx-auto flex justify-between align-middle px-5 py-4">
        <div className="flex">
          <Link href="/" className="flex align-middle justify-center">
            <span className="font-thin text-4xl self-center">iP</span>
            <span className="ml-3 font-light text-2xl self-center">
              careers
            </span>
            <div className="hidden "></div>
          </Link>
          <HeaderLinks navLinks={navLinks} />
        </div>

        <div className="flex">
          <div className="group h-14 hidden relative md:block">
            <div className="absolute h-full w-full top-0 left-0 bg-color1 border-2 border-colorWhite rounded-full"></div>

            <Link
              href="/apply"
              className="relative flex items-center justify-center h-14 px-6 rounded-full bg-colorWhite text-color1 text-sm duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
            >
              Spontaneous application
            </Link>
          </div>
          <MenuButton toggle={toggleMenu} />
        </div>

        {/* overlay */}
        <MenuOverlay menuOpened={menuOpened} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
