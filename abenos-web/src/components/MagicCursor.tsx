"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const cursorEl = cursorRef.current;
    const textEl = textRef.current;
    if (!cursorEl || !textEl) return;

    // Smooth GSAP coordinate follower matching Caterix magiccursor.js
    const xTo = gsap.quickTo(cursorEl, "x", { duration: 0.25, ease: "power3.out" });
    const yTo = gsap.quickTo(cursorEl, "y", { duration: 0.25, ease: "power3.out" });

    const updateCursorAtPoint = (target: HTMLElement | null) => {
      if (!target) return;

      // 1. Text badge (Play, View, Drag)
      const cursorTextEl = target.closest<HTMLElement>("[data-cursor-text]");
      if (cursorTextEl) {
        const text = cursorTextEl.getAttribute("data-cursor-text") || "";
        textEl.textContent = text;
        cursorEl.classList.add("-text");
        cursorEl.classList.remove("-opaque", "-pointer");
        return;
      } else {
        textEl.textContent = "";
        cursorEl.classList.remove("-text");
      }

      // 2. Clickable pointer (links, buttons, inputs)
      const pointerEl = target.closest<HTMLElement>("a, button, input, textarea, select, [role='button']");
      if (pointerEl) {
        cursorEl.classList.add("-pointer");
        cursorEl.classList.remove("-opaque");
        return;
      } else {
        cursorEl.classList.remove("-pointer");
      }

      // 3. Headings & -opaque elements (Inversion Bubble)
      const headingEl = target.closest<HTMLElement>(
        "[data-cursor='-opaque'], [data-cursor], h1, h2, h3, .section-title h2, .section-title h1, .text-anime-style-3, .text-anime-style-2, .section-title"
      );
      if (headingEl) {
        const state = headingEl.getAttribute("data-cursor") || "-opaque";
        cursorEl.classList.add(state);
      } else {
        cursorEl.classList.remove("-opaque");
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      if (!cursorEl.classList.contains("-visible")) {
        cursorEl.classList.add("-visible");
      }
      const target = (e.target as HTMLElement | null) || (document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null);
      updateCursorAtPoint(target);
    };

    const onMouseOver = (e: MouseEvent) => {
      updateCursorAtPoint(e.target as HTMLElement | null);
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const related = e.relatedTarget as HTMLElement | null;
      if (!target) return;

      const headingEl = target.closest<HTMLElement>(
        "[data-cursor='-opaque'], [data-cursor], h1, h2, h3, .section-title h2, .section-title h1, .text-anime-style-3, .text-anime-style-2, .section-title"
      );
      if (headingEl && (!related || !headingEl.contains(related))) {
        cursorEl.classList.remove("-opaque");
      }
    };

    const onMouseLeave = () => {
      cursorEl.classList.remove("-visible", "-opaque", "-pointer", "-text");
    };

    const onMouseEnter = () => {
      cursorEl.classList.add("-visible");
    };

    const onMouseDown = () => {
      cursorEl.classList.add("-active");
    };

    const onMouseUp = () => {
      cursorEl.classList.remove("-active");
    };

    // Attach listeners
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cb-cursor">
      <div ref={textRef} className="cb-cursor-text"></div>
    </div>
  );
}
