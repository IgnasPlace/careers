"use client";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import MenuButton from "../ui/MenuButton";
import Link from "next/link";
import HeaderLinks from "./HeaderLinks";
import SpontaneousButton from "../ui/SpontaneousButton";

const navLinks = [
  { name: "Jobs", link: "/jobs" },
  { name: "Journey", link: "/journey" },
  { name: "Stories", link: "/people-stories" },
];

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenu = () => {
    setMenuOpened(true);
  };
  const closeMenu = () => {
    setMenuOpened(false);
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
          <div className="hidden md:block">
            <SpontaneousButton
              title="Spontaneous Apply"
              href="/apply"
              action={closeMenu}
            />
          </div>
          <MenuButton toggle={openMenu} />
        </div>

        {/* overlay */}
        <MenuOverlay menuOpened={menuOpened} closeMenu={closeMenu} />
      </nav>
    </header>
  );
};

export default Header;
