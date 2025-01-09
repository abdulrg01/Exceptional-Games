"use client";

import { Button } from "./ui/button";
import { Gamepad2, LogIn } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/constant/page";

const NavBar = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 cursor-pointer">
          <Gamepad2 className="h-6 w-6" />
          <span className="font-bold text-xl">Games</span>
        </a>
        <div className="py-2 text-sm hidden lg:flex items-center">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`${
                pathname === item.href && "bg-muted/100 rounded-lg"
              } block px-4 py-2 text-sm hover:border-b hover:border-gray-100 dark:hover:border-gray-600 dark:text-gray-200 dark:hover:text-white transition ease-in-out duration-100`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button className="hidden md:flex">
            <LogIn className="mr-2 h-4 w-4" />
            Get Started
          </Button>
          <button
            type="button"
            data-collapse-toggle="game-navbar-menu-1"
            aria-controls="game-navbar-menu-1"
            aria-expanded="false"
            onClick={() => setIsMobile((prev) => !prev)}
            className="relative inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-muted/50 p-2 text-gray-900 dark:text-white"
          >
            <span className="sr-only">Open Menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        {/* Mobile */}
        {isMobile && (
          <div className="absolute top-12 w-[80%] right-5 bg-background dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-4">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsMobile(false)}
                className={`${
                  pathname === item.href && "bg-muted/100 rounded-lg"
                } block px-4 py-2 text-sm hover:border-b hover:border-gray-100 dark:hover:border-gray-600 dark:text-gray-200 dark:hover:text-white transition ease-in-out duration-100`}
              >
                {item.title}
              </Link>
            ))}
            <Button className="my-5">
              <LogIn className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
