"use client";

import { ReactNode, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import Preloader from "@/components/preloader";
import { useTimeOut } from "@/hooks/use-timeout";
import { useLenis } from "@/hooks/use-lenis";

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }: { children: ReactNode }) {
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  useLenis();
  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: 2000,
    deps: [],
  });

  return (
    <div key={pathname} className="overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}
