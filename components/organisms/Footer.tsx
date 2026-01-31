import { Copyright } from "lucide-react";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-base-100 px-5 py-6">
      <section>
        <NavLink href="/">
          <Logo />
        </NavLink>
      </section>

      <section className="flex gap-10">
        <NavLink href="/breeds">Breeds</NavLink>
        <NavLink href="/random-dogs">Random Dogs</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="https://github.com/evantvw" target="_blank">
          Github
        </NavLink>
      </section>

      <section className="flex gap-2 items-center">
        <Copyright className="size-4 text-neutral-500" />
        <p className="text-sm text-neutral-500">
          2026 Dogopedia. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
