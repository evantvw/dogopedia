import { Copyright } from "lucide-react";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-9 md:gap-4 bg-base-100 px-5 py-6">
      <section>
        <NavLink href="/">
          <Logo />
        </NavLink>
      </section>

      <section className="flex flex-col gap-1 md:flex-row md:gap-10 md:self-center">
        <NavLink href="/breeds">Breeds</NavLink>
        <NavLink href="/random-dogs">Random Dogs</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="https://github.com/evantvw" target="_blank">
          Github
        </NavLink>
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
