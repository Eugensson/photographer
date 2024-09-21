"use client";

import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex xl:hidden">
      <Sheet>
        <SheetTrigger>
          <CgMenuRight size={30} />
        </SheetTrigger>
        <SheetContent className="bg-white">
          <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
            {navLinks.map(({ name, href }) => {
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={cn(
                      "text-[#696c6d] hover:text-primary transition-colors",
                      pathname === href ? "text-primary" : ""
                    )}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
