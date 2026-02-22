"use client";

import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

import { cn } from "@/libs/utils";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Breeds",
    path: "/breeds",
  },
  { label: "About", path: "/about" },
  { label: "Github", path: "https://github.com/evantvw", target: "_blank" },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex justify-between items-center bg-base-100 py-3 px-5 sticky top-0 z-50 shadow-lg">
      <NavLink href="/">
        <Logo />
      </NavLink>

      <section className="hidden sm:flex gap-10">
        {links.map((item) => {
          const isActive = pathName.startsWith(item.path);
          return (
            <NavLink
              key={item.path}
              href={item.path}
              target={item.target}
              className={cn("hover:text-[#0FAE0F]", {
                "text-[#0FAE0F] font-bold": isActive,
              })}
            >
              {item.label}
            </NavLink>
          );
        })}
      </section>
    </nav>
  );
};

export default Navbar;
