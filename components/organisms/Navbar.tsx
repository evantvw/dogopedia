import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-base-100 py-3 px-5 sticky top-0">
      <NavLink href="/">
        <Logo />
      </NavLink>

      <section className="flex gap-10">
        <NavLink href="/breeds">Breeds</NavLink>
        <NavLink href="/random-dogs">Random Dogs</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="https://github.com/evantvw" target="_blank">
          Github
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
