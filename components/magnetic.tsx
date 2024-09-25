"use client";

import React, { ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({ children }: { children: ReactElement }) {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic?.current?.addEventListener("mousemove", (e: MouseEvent) => {
      if (!magnetic.current) return;
      const { clientX, clientY } = e;

      const { height, width, left, top } =
        magnetic?.current?.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    });

    magnetic?.current?.addEventListener("mouseleave", (e: MouseEvent) => {
      if (!magnetic.current) return;
      const { clientX, clientY } = e;

      const { height, width, left, top } =
        magnetic?.current?.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0);
      yTo(y * 0);
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}