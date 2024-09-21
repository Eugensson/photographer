"use client";

import Image from "next/image";
import { useContext } from "react";
import { motion } from "framer-motion";

import { transition } from "@/lib/transition";
import { CursorContext } from "@/components/cursor-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const cursorContext = useContext(CursorContext);

  const mouseEnterHandler = cursorContext?.mouseEnterHandler;
  const mouseLeaveHandler = cursorContext?.mouseLeaveHandler;

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "80%" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
      className="bg-white"
    >
      <div className="container mx-auto h-full">
        <div className="h-full flex flex-col lg:flex-row justify-start items-center pt-36 gap-x-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition}
            className="hidden lg:flex bg-[#eef7f9] h-[75vh] absolute top-72 bottom-0 left-0 right-0 z-0"
          />
          <div
            onMouseEnter={mouseEnterHandler ? mouseEnterHandler : undefined}
            onMouseLeave={mouseLeaveHandler ? mouseLeaveHandler : undefined}
            className="lg:flex-1 px-4 lg:pt-32 z-10"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to get suggestions from you.</p>
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4">
              <Input
                type="text"
                placeholder="Your name"
                className="border-primary font-secondary placeholder:text-[#757879]"
              />
              <Input
                type="text"
                placeholder="Your email address"
                className="border-primary font-secondary placeholder:text-[#757879]"
              />
              <Textarea
                placeholder="Your message"
                className="lg:col-span-2 border-b border-primary font-secondary placeholder:text-[#757879]"
              />
              <Button
                type="submit"
                variant="custom"
                size="custom"
                className="max-w-40 my-7 mx-auto lg:mx-0 self-start"
              >
                Send it
              </Button>
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition, duration: 1.5 }}
            onMouseEnter={mouseEnterHandler ? mouseEnterHandler : undefined}
            onMouseLeave={mouseLeaveHandler ? mouseLeaveHandler : undefined}
            className="lg:flex-1 z-10 relative w-full h-screen"
          >
            <Image
              src="/assets/images/contact/woman.png"
              alt="Photo of woman"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
