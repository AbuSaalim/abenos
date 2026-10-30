"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedHeadingProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  className?: string;
  delay?: number;
}

export default function AnimatedHeading({
  children,
  as: Component = "h2",
  className = "",
  delay = 0,
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll<HTMLSpanElement>(".anime-char");
    if (chars.length === 0) return;

    gsap.set(chars, {
      opacity: 0,
      x: 35,
      rotateX: -40,
      transformOrigin: "bottom center",
    });

    const anim = gsap.to(chars, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      rotateX: 0,
      duration: 0.8,
      delay: delay,
      stagger: 0.02,
      ease: "back.out(1.6)",
    });

    return () => {
      anim.kill();
    };
  }, [delay, children]);

  // Split words and characters preserving spaces
  const words = children.split(" ");

  return (
    <Component
      ref={containerRef as any}
      className={`perspective-[500px] leading-tight ${className}`}
      data-cursor="-opaque"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em]">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="anime-char inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}
