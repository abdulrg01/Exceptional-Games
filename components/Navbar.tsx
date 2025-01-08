import { Button } from "./ui/button";
import { Gamepad2, LogIn } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Gamepad2 className="h-6 w-6" />
          <span className="font-bold text-xl">Games</span>
        </div>
        <div className="py-2 text-sm hidden md:flex items-center">
          {["about", "games", "service", "contact"].map((item, i) => (
            <Link
              key={i}
              href={item}
              className="block px-4 py-2 text-xs hover:border-b hover:border-gray-100 dark:hover:border-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button>
            <LogIn className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
