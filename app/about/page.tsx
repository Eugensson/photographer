"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { motion } from "framer-motion";

import { transition } from "@/lib/transition";
import { CursorContext } from "@/components/cursor-context";
import { Button } from "@/components/ui/button";

const About = () => {
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
      <div
        onMouseEnter={mouseEnterHandler ? mouseEnterHandler : undefined}
        onMouseLeave={mouseLeaveHandler ? mouseLeaveHandler : undefined}
        className="container mx-auto h-full relative"
      >
        <div className="h-full flex flex-col lg:flex-row justify-center items-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="order-2 lg:order-1 flex-1 relative w-full h-[80vh]">
            <Image
              src="/assets/images/about/woman.png"
              alt="Photo of woman"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition}
            className="order-1 lg:order-2 flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Sit amet consectetur, adipisicing elit. <b>Lorem ipsum dolor.</b>{" "}
              Sunt, ab commodi quos repudiandae in aperiam similique laboriosam
              ut earum perspiciatis.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et
              quo nam sequi ullam repellat.
            </p>
            <Button asChild variant="custom" size="custom">
              <Link href="/portfolio">View my work</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
