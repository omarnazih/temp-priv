"use client";

import { Menu, LayoutGrid, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky shadow-xs top-0 z-20 w-full flex justify-between items-center p-4 sm:p-5 bg-background">
      {/* Blur effect layers */}
      <div className="pointer-events-none absolute inset-0 z-[1] h-[20vh] backdrop-blur-[0.0625px] [mask-image:linear-gradient(0deg,transparent_0%,#000_12.5%,#000_25%,transparent_37.5%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-[2] h-[20vh] backdrop-blur-[0.125px] [mask-image:linear-gradient(0deg,transparent_12.5%,#000_25%,#000_37.5%,transparent_50%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-[3] h-[20vh] backdrop-blur-[0.25px] [mask-image:linear-gradient(0deg,transparent_25%,#000_37.5%,#000_50%,transparent_62.5%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-[4] h-[20vh] backdrop-blur-[0.5px] [mask-image:linear-gradient(0deg,transparent_37.5%,#000_50%,#000_62.5%,transparent_75%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-[5] h-[20vh] backdrop-blur-[1px] [mask-image:linear-gradient(0deg,transparent_50%,#000_62.5%,#000_75%,transparent_87.5%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-[6] h-[20vh] backdrop-blur-[2px] [mask-image:linear-gradient(0deg,transparent_62.5%,#000_75%,#000_87.5%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-[7] h-[20vh] backdrop-blur-[4px] [mask-image:linear-gradient(0deg,transparent_75%,#000_87.5%,#000_100%,transparent_112.5%)]"></div>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="z-[10] md:pl-2 flex items-center"
      >
        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className="mr-2 md:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo/Brand */}
        <a
          href="/"
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <span className="font-semibold text-lg md:text-xl">Energent.ai</span>
        </a>

        {/* Gallery Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="ml-4 sm:ml-6 mt-1 border border-border rounded-md"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:text-primary hover:bg-primary/5 transition-all duration-200 group"
            title="Gallery"
          >
            <LayoutGrid className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            <span className="text-sm font-medium hidden sm:inline">
              Gallery
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="z-[10] flex items-center gap-2 sm:gap-4"
      >
        {/* Theme Toggle */}
        <ModeToggle />
      </motion.div>
    </div>
  );
}
