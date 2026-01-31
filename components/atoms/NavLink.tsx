import Link, { LinkProps } from "next/link";

import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/libs/utils";

type Props = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    className?: string;
  };

const NavLink = ({ children, className = "", ...props }: Props) => {
  return (
    <Link
      {...props}
      className={cn("text-base text-neutral-500 font-medium", className)}
    >
      {children}
    </Link>
  );
};

export default NavLink;
