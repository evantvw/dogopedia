"use client";

import { cn } from "@/libs/utils";
import { usePathname } from "next/navigation";

import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

const Navbar = () => {
  const links = [
    {
      label: "Breeds",
      path: "/breeds",
    },
    { label: "About", path: "/about" },
  ];
  const pathName = usePathname();

  return (
    <nav className="flex justify-between items-center bg-base-100 py-3 px-5 sticky top-0 z-50 shadow-lg">
      <NavLink href="/">
        <Logo />
      </NavLink>

      <section className="hidden sm:flex gap-10">
        {links.map((item) => {
          const isActive = item.path === pathName;
          return (
            <NavLink
              key={item.path}
              href={item.path}
              className={cn({ "text-[#0FAE0F] font-bold": isActive })}
            >
              {item.label}
            </NavLink>
          );
        })}
        <NavLink href="https://github.com/evantvw" target="_blank">
          Github
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
