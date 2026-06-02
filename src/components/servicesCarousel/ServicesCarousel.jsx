import React, { useRef, useCallback } from "react";
import { ServiceCard } from "../serviceCard/ServiceCard";

export const ServicesCarousel = ({ services }) => {
  const trackRef = useRef(null);

  const scrollByCard = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(".services-carousel__slide");
    const gap = parseFloat(getComputedStyle(track).gap) || 16;
    const distance = slide ? slide.offsetWidth + gap : 320;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  }, []);

  return (
    <div className="services-carousel">
      <div className="services-carousel__toolbar">
        <p className="services-carousel__hint">
          Swipe or use arrows to explore all services
        </p>
        <div className="services-carousel__controls">
          <button
            type="button"
            className="services-carousel__btn"
            onClick={() => scrollByCard(-1)}
            aria-label="Show previous services"
          >
            ‹
          </button>
          <button
            type="button"
            className="services-carousel__btn"
            onClick={() => scrollByCard(1)}
            aria-label="Show next services"
          >
            ›
          </button>
        </div>
      </div>
      <div className="services-carousel__viewport">
        <div
          className="services-carousel__track"
          ref={trackRef}
          role="list"
          aria-label="Our services"
          tabIndex={0}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="services-carousel__slide"
              role="listitem"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
