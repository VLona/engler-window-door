"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  /**
   * Delay before fade-in starts after the element enters view.
   * Useful for staggering siblings — pass index * 100 for a chain reveal.
   */
  delay?: number;
  /**
   * Extra Tailwind classes applied to the wrapper div.
   * Pass `h-full` when wrapping CSS grid items so they stretch correctly.
   */
  className?: string;
};

/**
 * Wraps children in an IntersectionObserver-driven fade-up animation.
 *
 * On first scroll into view: opacity 0 → 1, translateY +24px → 0, over 700ms.
 * Then disconnects — animation runs once per page load, doesn't re-trigger.
 *
 * Respects `prefers-reduced-motion`: users who opt out of animations get
 * the element visible immediately, no movement.
 */
export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Accessibility: skip animation entirely if user prefers reduced motion.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Honor the delay prop for stagger effects across siblings.
          window.setTimeout(() => setVisible(true), delay);
        } else {
          // Out of view → reset to hidden so the next scroll-in re-animates.
          setVisible(false);
        }
      },
      {
        // Fire when at least 15% of the element is visible.
        threshold: 0.15,
        // Trigger slightly before the element is fully on-screen — feels
        // more natural than waiting for the element to fully enter view.
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
