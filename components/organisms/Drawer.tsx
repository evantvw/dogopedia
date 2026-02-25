import BurgerMenu from "@/icons/BurgerMenu";
import NavLink from "../atoms/NavLink";

import { cn } from "@/libs/utils";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useRef } from "react";

type links = (
  | {
      label: string;
      path: string;
      target?: undefined;
    }
  | {
      label: string;
      path: string;
      target: string;
    }
)[];

interface Props {
  links: links;
}

const Drawer = ({ links }: Props) => {
  const pathName = usePathname();
  const checkboxRef = useRef<HTMLInputElement>(null);

  const closeDrawer = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };
  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-5"
        type="checkbox"
        className="drawer-toggle"
        ref={checkboxRef}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-5" className="drawer-button block sm:hidden">
          <BurgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-5"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          <li className="mb-4 ml-auto">
            <label htmlFor="my-drawer-5" className="">
              <X />
            </label>
          </li>
          {links.map((item) => {
            const isActive = pathName.startsWith(item.path);
            return (
              <li key={item.path}>
                <NavLink
                  key={item.path}
                  href={item.path}
                  target={item.target}
                  onClick={closeDrawer}
                  className={cn("hover:text-[#0FAE0F]", {
                    "text-[#0FAE0F] font-bold": isActive,
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
