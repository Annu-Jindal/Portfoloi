"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { galleryItems } from "@/data/portfolio";

type CardStyle = {
  transform: string;
  opacity: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ScrollGallery() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = document.getElementById("story");
    if (!element) {
      return;
    }

    let frame = 0;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const total = window.innerHeight + rect.height;
      const raw = (window.innerHeight - rect.top) / total;
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

  const cards = useMemo<CardStyle[]>(
    () =>
      galleryItems.map((_, index) => {
        const local = clamp((progress - index * 0.14) / 0.46, 0, 1);
        const rotate = 12 - local * 14 - index * 1.8;
        const offsetY = 100 - local * 128 + index * 28;
        const offsetX = (index % 2 === 0 ? -1 : 1) * (22 - local * 22);
        const scale = 0.9 + local * 0.12;
        const opacity = 0.24 + local * 0.76;

        return {
          transform: `translate3d(${offsetX}px, ${offsetY}px, 0) rotate(${rotate}deg) scale(${scale})`,
          opacity,
        };
      }),
    [progress],
  );

  return (
    <section className="story-section" id="story">
      <div className="shell story-intro">
        <div>
          <p className="section-kicker">Visual Storytelling</p>
          <h2>Scroll through a premium reveal system built for your future image set.</h2>
        </div>
        <p>
          The stage below uses layered card motion, soft rotation, and sequential reveals so your real visuals can
          drop in later without changing the structure.
        </p>
      </div>

      <div className="story-stage">
        <div className="story-stage__sticky">
          <div className="shell story-stage__grid">
            <div className="story-copy">
              <p className="section-kicker">Editorial Motion</p>
              <h3>Less template. More atmosphere, pacing, and intention.</h3>
              <p>
                Each frame behaves like a magazine spread in motion: staggered depth, quiet animation, and enough
                restraint to feel premium instead of flashy.
              </p>
              <div className="story-note">
                Add your final photos later in <code>/public/images</code> and wire them into the gallery data file.
              </div>
            </div>
            <div className="gallery-stack" aria-label="Animated visual showcase">
              {galleryItems.map((item, index) => (
                <article
                  className="gallery-card"
                  key={item.id}
                  style={
                    {
                      "--card-accent": item.palette,
                      zIndex: galleryItems.length - index,
                      transform: cards[index]?.transform,
                      opacity: cards[index]?.opacity,
                    } as CSSProperties
                  }
                >
                  <div className="gallery-card__surface">
                    <div className="gallery-card__badge">Frame {index + 1}</div>
                    <div className="gallery-card__art" aria-hidden="true" />
                    <div className="gallery-card__copy">
                      <h4>{item.title}</h4>
                      <p>{item.caption}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
