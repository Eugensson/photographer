"use client";

import Link from "next/link";
import { useContext } from "react";
import { motion } from "framer-motion";

import { transition } from "@/lib/transition";
import { CursorContext } from "@/components/cursor-context";
import { Button } from "@/components/ui/button";

const Home = () => {
  const cursorContext = useContext(CursorContext);

  const mouseEnterHandler = cursorContext?.mouseEnterHandler;
  const mouseLeaveHandler = cursorContext?.mouseLeaveHandler;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition}
            onMouseEnter={mouseEnterHandler ? mouseEnterHandler : undefined}
            onMouseLeave={mouseLeaveHandler ? mouseLeaveHandler : undefined}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              photographer <br /> & film maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Los Angeles, CA
            </p>
            <Button asChild variant="custom" size="custom" className="mb-7">
              <Link href="/contact">hire me</Link>
            </Button>
          </motion.div>
          <div className="flex justify-end h-screen">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition}
              className="relative lg:-right-40 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition}
                src="/assets/images/home/woman.png"
                alt="hero"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
