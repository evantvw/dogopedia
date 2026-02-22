"use client";

import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

import { Copyright } from "lucide-react";
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

const Footer = () => {
  const pathName = usePathname();
  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-9 md:gap-4 bg-base-100 px-5 py-6">
      <section>
        <NavLink href="/">
          <Logo />
        </NavLink>
      </section>

      <section className="flex flex-col gap-1 md:flex-row md:gap-10 md:self-center">
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

      <section className="flex gap-2 items-center">
        <Copyright className="size-4 text-neutral-500" />
        <p className="text-xs md:text-sm text-neutral-500">
          2026 Dogopedia. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
