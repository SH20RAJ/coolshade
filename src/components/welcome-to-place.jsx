"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

import {
  Calculator,
  Calendar,
  CreditCard,
  MapPin,
  Settings,
  Smile,
  UploadCloud,
  ShoppingBag,
  User,
  Hotel,
  Hospital,
  School,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "./ui/button";

export function Search() {
  let searches = [
    {
      name: "Get Tourist Guide",
      href: "/tourist-guide",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      name: "Share Your Memories",
      href: "/share-memories",
      icon: <UploadCloud className="mr-2 h-4 w-4" />,
    },
    {
      name: "Attractions nearby",
      href: "/attractions-nearby",
      icon: <MapPin className="mr-2 h-4 w-4" />,
    },
    {
      name: "Get Local Products",
      href: "/local-products",
      icon: <ShoppingBag className="mr-2 h-4 w-4" />,
    },
    {
      name: "Get Hotels",
      href: "/hotels",
      icon: <Hotel className="mr-2 h-4 w-4" />,
    },
    {
      name: "Get Hospitals",
      href: "/hospitals",
      icon: <Hospital className="mr-2 h-4 w-4" />,
    },
    {
      name: "Get Schools",
      href: "/schools",
      icon: <School className="mr-2 h-4 w-4" />,
    },
    {
      name: "Nearby Events",
      href: "/events",
      icon: <Calendar className="mr-2 h-4 w-4" />,
    },
    {
      name: "Get Popular Places",
      href: "/popular-places",
      icon: <MapPin className="mr-2 h-4 w-4" />,
    },
  ];
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {searches.map((search) => (
            <CommandItem key={search.name} href={search.href}>
              {search.icon}
              <span>{search.name}</span>
            </CommandItem>
          ))}
          <CommandItem disabled>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Open Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Go to Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>

          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Account Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export function WelcomeToPlace() {
  const [showMore, setShowMore] = useState(false);

  const categories = [
    {
      name: "Shops",
      href: "/shops",
    },
    {
      name: "Hospitals",
      href: "/hospitals",
    },
    {
      name: "Schools",
      href: "/schools",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Popular Places",
      href: "/popular-places",
    },
    {
      name: "Tourist Guides",
      href: "/tourist-guides",
    },
    {
      name: "Hotels",
      href: "/hotels",
    },
    {
      name: "Local Products",
      href: "/local-products",
    },
  ];

  const visibleCategories = showMore ? categories : categories.slice(0, 7);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="space-y-2 text-center">
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typewriter
                words={['Welcome to Ranchi', 'Discover Ranchi', 'Explore Ranchi']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Discover the best of Ranchi with our comprehensive search.
            </p>
          </div>
          <div className="w-full max-w-2xl">
            <div>
              <div className="w-full rounded-lg bg-background pl-8 pr-4 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary" />
              <Search />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {visibleCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                {category.name}
              </Link>
            ))}
          </div>
          <Button
            variant="link"
            onClick={() => setShowMore(!showMore)}
            className=" "
          >
            {showMore ? "See Less" : "See More"}
          </Button>
        </div>
      </div>
    </section>
  );
}
