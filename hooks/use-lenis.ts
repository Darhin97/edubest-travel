"use client";

import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // @ts-ignore
    return () => cancelAnimationFrame(raf);
  }, []);
}
