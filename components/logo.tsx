"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

import { CursorContext } from "@/components/cursor-context";

export const Logo = () => {
  const cursorContext = useContext(CursorContext);

  const mouseEnterHandler = cursorContext?.mouseEnterHandler;
  const mouseLeaveHandler = cursorContext?.mouseLeaveHandler;

  return (
    <Link
      onMouseEnter={mouseEnterHandler ? mouseEnterHandler : undefined}
      onMouseLeave={mouseLeaveHandler ? mouseLeaveHandler : undefined}
      href="/"
      className="max-w-[200px]"
    >
      <Image
        src="/assets/images/header/logo.svg"
        alt="Logo"
        width={180}
        height={180}
      />
    </Link>
  );
};
