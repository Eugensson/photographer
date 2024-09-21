"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { motion } from "framer-motion";

import { transition } from "@/lib/transition";
import { CursorContext } from "@/components/cursor-context";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const cursorContext = useContext(CursorContext);

  const mouseEnterHandler = cursorContext?.mouseEnterHandler;
  const mouseLeaveHandler = cursorContext?.mouseLeaveHandler;

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
    >
      <div className="container mx-auto h-full relative">
        <div className="h-full flex flex-col lg:flex-row justify-center items-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition}
            onMouseEnter={mouseEnterHandler ? mouseEnterHandler : undefined}
            onMouseLeave={mouseLeaveHandler ? mouseLeaveHandler : undefined}
            className="flex flex-col items-center lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Sit amet consectetur, adipisicing elit. <b>Lorem ipsum dolor.</b>{" "}
              Sunt, ab commodi quos repudiandae in aperiam similique laboriosam
              ut earum perspiciatis.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et
              quo nam sequi ullam repellat.
            </p>
            <Button
              asChild
              variant="custom"
              size="custom"
              className="mx-auto lg:mx-0 mb-7"
            >
              <Link href="/contact">hire me</Link>
            </Button>
          </motion.div>

          <ul
            onMouseEnter={mouseEnterHandler ? mouseEnterHandler : undefined}
            onMouseLeave={mouseLeaveHandler ? mouseLeaveHandler : undefined}
            className="w-full grid grid-cols-2 lg:grid-cols-3 lg:gap-2"
          >
            <li className="relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                src="/assets/images/portfolio/1.jpg"
                alt="Photo from my portfolio"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                quality={100}
                priority
              />
            </li>
            <li className="relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                src="/assets/images/portfolio/2.jpg"
                alt="Photo from my portfolio"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                quality={100}
                priority
              />
            </li>
            <li className="relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                src="/assets/images/portfolio/3.jpg"
                alt="Photo from my portfolio"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                quality={100}
                priority
              />
            </li>
            <li className="relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                src="/assets/images/portfolio/4.jpg"
                alt="Photo from my portfolio"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                quality={100}
                priority
              />
            </li>
            <li className="relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                src="/assets/images/portfolio/5.jpg"
                alt="Photo from my portfolio"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                quality={100}
                priority
              />
            </li>
            <li className="relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                src="/assets/images/portfolio/6.jpg"
                alt="Photo from my portfolio"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                quality={100}
                priority
              />
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
