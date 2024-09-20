"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavButton from "@/components/nav-button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/tour-packages",
    label: "Tour Packages",
  },
  {
    href: "/gallery",
    label: "Gallery",
  },
  // {
  //   href: "/settings",
  //   label: "Settings",
  // },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant={"outline"}
            size={"sm"}
            className={
              "font-medium bg-blue-500 hover:bg-blue-500/80 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
            }
          >
            <Menu className={"size-4"} />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"} className={"px-2 bg-white"}>
          <nav className={"flex flex-col gap-y-2 pt-6 items-center"}>
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                className={"w-full justify-start"}
                onClick={() => onClick(route.href)} // used onclick since Link wont close the drawer
              >
                {route.label}
              </Button>
            ))}
            <Button
              size="sm"
              variant="outline"
              className={cn(
                "w-3/4 mt-20  font-normal  hover:bg-blue-500/80 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white  transition",
                `/contact-us` === pathname
                  ? "bg-blue-500/10 text-black"
                  : "bg-blue-500",
              )}
            >
              <Link href={"/contact-us"}>Contact us</Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className={"hidden lg:flex items-center gap-x-2 overflow-x-auto"}>
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={route.href === pathname}
        />
      ))}
      <Button
        asChild
        size="sm"
        variant="outline"
        className={cn(
          "w-full lg:w-auto justify-between font-normal hover:bg-blue-500/80 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white  transition",
          `/contact-us` === pathname
            ? "bg-blue-500/10 text-black"
            : "bg-blue-500",
        )}
      >
        <Link href={"/contact-us"}>Contact us</Link>
      </Button>
    </nav>
  );
};

export default Navigation;
