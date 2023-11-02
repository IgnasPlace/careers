import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { navLinks: { name: string; link: string }[] };

const HeaderLinks = (props: Props) => {
  const path = usePathname();

  return (
    <ul className="hidden items-center justify-center text-sm ml-5 lg:flex">
      {props.navLinks.map((link, index) => {
        return (
          <Link
            href={link.link}
            key={index}
            className="group mx-5 py-2 relative"
          >
            {link.name}
            <div
              className={`${
                link.link === path
                  ? "w-full bg-color3"
                  : "w-0 bg-color3 group-hover:w-full duration-300"
              } h-1 mt-1 absolute rounded-full`}
            ></div>
          </Link>
        );
      })}
    </ul>
  );
};

export default HeaderLinks;
