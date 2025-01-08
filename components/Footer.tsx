import { Gamepad2 } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Gamepad2 className="h-6 w-6" />
            <span className="font-bold text-xl">Games</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Games. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
