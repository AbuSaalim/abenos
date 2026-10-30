"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RevealImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  cursorText?: string;
  priority?: boolean;
}

export default function RevealImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  cursorText = "View",
  priority = false,
}: RevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, {
      duration: 1.1,
      xPercent: -100,
      ease: "power3.out",
    });
    tl.from(
      image,
      {
        duration: 1.1,
        xPercent: 100,
        scale: 1.1,
        ease: "power3.out",
      },
      "-=1.1"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden invisible ${className}`}
      data-cursor-text={cursorText}
    >
      <div ref={imageRef} className="image-anime w-full h-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}
