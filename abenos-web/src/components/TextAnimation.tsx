"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextAnimation() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    let scrollTriggersList: ScrollTrigger[] = [];

    const initAnimations = () => {
      // 1. Text Anime Style 3 (3D Perspective character reveal - Caterix signature heading animation)
      const textAnime3Elements = document.querySelectorAll<HTMLElement>(
        ".text-anime-style-3"
      );

      textAnime3Elements.forEach((element) => {
        if (element.getAttribute("data-anime-init") === "true") return;
        element.setAttribute("data-anime-init", "true");

        const originalText = element.textContent || "";
        if (!originalText.trim()) return;

        element.innerHTML = "";
        const words = originalText.trim().split(/\s+/);
        const chars: HTMLElement[] = [];

        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = "split-word";
          wordSpan.style.display = "inline-block";
          wordSpan.style.whiteSpace = "nowrap";

          Array.from(word).forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.className = "split-char";
            charSpan.style.display = "inline-block";
            charSpan.style.position = "relative";
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            chars.push(charSpan);
          });

          element.appendChild(wordSpan);

          if (wordIndex < words.length - 1) {
            element.appendChild(document.createTextNode(" "));
          }
        });

        gsap.set(element, { perspective: 400 });
        gsap.set(chars, {
          opacity: 0,
          x: 50,
          rotateY: 15,
        });

        const anim = gsap.to(chars, {
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            toggleActions: "play none none none",
          },
          x: 0,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          opacity: 1,
          duration: 0.9,
          ease: "back.out(1.4)",
          stagger: 0.02,
        });

        if (anim.scrollTrigger) {
          scrollTriggersList.push(anim.scrollTrigger);
        }
      });

      // 2. Text Anime Style 1 & 2 (Smooth slide & fade)
      const textAnime2Elements = document.querySelectorAll<HTMLElement>(
        ".text-anime-style-2, .text-anime-style-1"
      );

      textAnime2Elements.forEach((element) => {
        if (element.getAttribute("data-anime-init") === "true") return;
        element.setAttribute("data-anime-init", "true");

        const originalText = element.textContent || "";
        if (!originalText.trim()) return;

        element.innerHTML = "";
        const words = originalText.trim().split(/\s+/);
        const chars: HTMLElement[] = [];

        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = "split-word";
          wordSpan.style.display = "inline-block";
          wordSpan.style.whiteSpace = "nowrap";

          Array.from(word).forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.className = "split-char";
            charSpan.style.display = "inline-block";
            charSpan.style.position = "relative";
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            chars.push(charSpan);
          });

          element.appendChild(wordSpan);

          if (wordIndex < words.length - 1) {
            element.appendChild(document.createTextNode(" "));
          }
        });

        gsap.set(chars, {
          opacity: 0,
          x: 20,
        });

        const anim = gsap.to(chars, {
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.03,
        });

        if (anim.scrollTrigger) {
          scrollTriggersList.push(anim.scrollTrigger);
        }
      });

      // 3. WOW fadeInUp Animation for subtitle badges, buttons, and cards
      const wowElements = document.querySelectorAll<HTMLElement>(".wow");
      wowElements.forEach((el) => {
        if (el.getAttribute("data-wow-init") === "true") return;
        el.setAttribute("data-wow-init", "true");

        const delayStr = el.getAttribute("data-wow-delay");
        const delay = delayStr ? parseFloat(delayStr) : 0;

        const anim = gsap.fromTo(
          el,
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: delay,
            ease: "power2.out",
          }
        );

        if (anim.scrollTrigger) {
          scrollTriggersList.push(anim.scrollTrigger);
        }
      });

      // 4. Counter Up Animation for numerical metrics
      const counterElements = document.querySelectorAll<HTMLElement>(".counter");
      counterElements.forEach((el) => {
        if (el.getAttribute("data-counter-init") === "true") return;
        el.setAttribute("data-counter-init", "true");

        const raw = el.textContent?.trim() || "0";
        const targetVal = parseFloat(raw);
        const isFloat = raw.includes(".");
        if (isNaN(targetVal)) return;

        const counterObj = { val: 0 };
        const anim = gsap.to(counterObj, {
          val: targetVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = isFloat
              ? counterObj.val.toFixed(1)
              : Math.floor(counterObj.val).toString();
          },
        });

        if (anim.scrollTrigger) {
          scrollTriggersList.push(anim.scrollTrigger);
        }
      });

      // Refresh ScrollTrigger once everything is parsed
      ScrollTrigger.refresh();
    };

    // Run after document fonts are loaded to avoid layout jumps
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // Small delay to ensure React DOM layout settled
        setTimeout(initAnimations, 100);
      });
    } else {
      setTimeout(initAnimations, 200);
    }

    return () => {
      scrollTriggersList.forEach((st) => st.kill());
      scrollTriggersList = [];
    };
  }, []);

  return null;
}
