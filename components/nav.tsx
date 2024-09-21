"use client";

import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";
import { CursorContext } from "@/components/cursor-context";

interface NavProps {
  className?: string;
}

export const Nav: React.FC<NavProps> = ({ className }) => {
  const pathname = usePathname();
  const cursorContext = useContext(CursorContext);

  const mouseEnterHandler = cursorContext?.mouseEnterHandler;
  const mouseLeaveHandler = cursorContext?.mouseLeaveHandler;

  return (
    <nav
      onMouseEnter={mouseEnterHandler ? mouseEnterHandler : undefined}
      onMouseLeave={mouseLeaveHandler ? mouseLeaveHandler : undefined}
      className={cn("items-center gap-x-12 font-semibold", className)}
    >
      {navLinks.map(({ name, href }) => {
        return (
          <Link
            key={name}
            href={href}
            className={cn(
              "text-xl font-bold text-[#696c6d] hover:text-primary transition-colors",
              pathname === href ? "text-primary" : ""
            )}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};
