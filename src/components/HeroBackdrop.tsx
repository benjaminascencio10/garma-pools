"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function HeroBackdrop({ alt }: { alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.16, 56);
        node.style.transform = `translate3d(0, ${shift}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div ref={ref} className="absolute -inset-16">
        <Image
          src="/images/hero-poolside.jpg"
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover object-[center_58%]"
        />
      </div>
    </div>
  );
}
