import React, { useCallback, useEffect, useRef, useState } from "react";
import { PackageCard } from "./PackageCard";

export const PackagesTeaserRail = ({ packages }) => {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const overflowing = max > 8;
    setCanPrev(overflowing && track.scrollLeft > 8);
    setCanNext(overflowing && track.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateArrows();
    const observer = new ResizeObserver(updateArrows);
    observer.observe(track);
    window.addEventListener("resize", updateArrows);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateArrows);
    };
  }, [packages, updateArrows]);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".package-card");
    const gap = 16;
    const amount = (card?.getBoundingClientRect().width || 280) + gap;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="packages-rail">
      <button
        type="button"
        className="packages-rail__nav packages-rail__nav--prev"
        aria-label="Previous package"
        disabled={!canPrev}
        onClick={() => scrollByCard(-1)}
      >
        ‹
      </button>
      <div
        ref={trackRef}
        className="packages-rail__track"
        role="region"
        aria-label="Website package options"
        tabIndex={0}
        onScroll={updateArrows}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollByCard(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollByCard(1);
          }
        }}
      >
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} {...pkg} />
        ))}
      </div>
      <button
        type="button"
        className="packages-rail__nav packages-rail__nav--next"
        aria-label="Next package"
        disabled={!canNext}
        onClick={() => scrollByCard(1)}
      >
        ›
      </button>
      <p className="packages-rail__hint">Swipe to compare packages</p>
    </div>
  );
};
