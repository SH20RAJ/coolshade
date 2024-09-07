'use client';

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggleSheet = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleSheet}
          >
            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </SheetTrigger>

        <SheetContent>
          <SheetClose asChild>
            <button
              type="button"
              className="absolute top-4 right-4 text-black"
              onClick={toggleSheet}
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </SheetClose>
          <div className="p-4">
            <nav>
              <ul className="space-y-4">
                <li><a href="#" className="text-xl text-black hover:text-opacity-80">Features</a></li>
                <li><a href="#" className="text-xl text-black hover:text-opacity-80">Solutions</a></li>
                <li><a href="#" className="text-xl text-black hover:text-opacity-80">Resources</a></li>
                <li><a href="#" className="text-xl text-black hover:text-opacity-80">Pricing</a></li>
                <li>
                  <a href="#" className="block px-6 py-3 text-base text-white bg-yellow-500 rounded-full text-center hover:bg-yellow-600">
                    Join Now
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
