"use client";

import Link from "next/link";
import { useContext } from "react";

import { cn } from "@/lib/utils";
import { socialList } from "@/constants";
import { Button } from "@/components/ui/button";
import { CursorContext } from "@/components/cursor-context";

interface SocialsProps {
  className?: string;
}

export const Socials: React.FC<SocialsProps> = ({ className }) => {
  const cursorContext = useContext(CursorContext);

  const mouseEnterHandler = cursorContext?.mouseEnterHandler;
  const mouseLeaveHandler = cursorContext?.mouseLeaveHandler;

  return (
    <ul
      onMouseEnter={mouseEnterHandler ? mouseEnterHandler : undefined}
      onMouseLeave={mouseLeaveHandler ? mouseLeaveHandler : undefined}
      className={cn("ml-24 flex items-center gap-x-2", className)}
    >
      {socialList.map(({ name, href, icon: Icon }) => {
        return (
          <li key={name}>
            <Button variant="link" size="icon" asChild className="p-0">
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label="link to social media"
              >
                <Icon size={24} />
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
