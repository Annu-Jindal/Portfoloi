"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ScrollOrbBridge() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const hero = document.getElementById("top");
      const story = document.getElementById("story");

      if (!hero || !story) {
        frame = 0;
        return;
      }

      const heroRect = hero.getBoundingClientRect();
      const storyRect = story.getBoundingClientRect();
      const start = heroRect.top + window.scrollY;
      const end = storyRect.top + window.scrollY + storyRect.height * 0.58;
      const raw = (window.scrollY - start + window.innerHeight * 0.18) / Math.max(end - start, 1);

      setProgress(clamp(raw, 0, 1));
      frame = 0;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const translateX = 58 - progress * 22;
  const translateY = 22 + progress * 29;
  const scale = 0.82 + progress * 0.34;
  const rotate = -16 + progress * 44;
  const glow = 0.45 + progress * 0.55;

  return (
    <div
      aria-hidden="true"
      className="scroll-orb-bridge"
      style={
        {
          "--orb-x": `${translateX}vw`,
          "--orb-y": `${translateY}vh`,
          "--orb-scale": scale,
          "--orb-rotate": `${rotate}deg`,
          "--orb-glow": glow,
        } as CSSProperties
      }
    >
      <div className="scroll-orb">
        <div className="scroll-orb__halo" />
        <div className="scroll-orb__ring" />
        <div className="scroll-orb__core">
          <div className="scroll-orb__highlight scroll-orb__highlight--primary" />
          <div className="scroll-orb__highlight scroll-orb__highlight--secondary" />
          <div className="scroll-orb__grain" />
        </div>
      </div>
    </div>
  );
}
