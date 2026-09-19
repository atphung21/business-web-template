import React, { useId, useState } from "react";

export const ServicesCarousel = ({ services }) => {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const current = services[active];

  return (
    <div className="services-showcase">
      <div
        className="services-showcase__nav"
        role="tablist"
        aria-label="Our services"
        aria-orientation="vertical"
      >
        {services.map((service, index) => {
          const selected = index === active;
          return (
            <button
              key={service.title}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              className={
                selected
                  ? "services-showcase__tab is-active"
                  : "services-showcase__tab"
              }
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                  event.preventDefault();
                  const next = (index + 1) % services.length;
                  setActive(next);
                  event.currentTarget.parentElement
                    ?.querySelectorAll('[role="tab"]')
                    [next]?.focus();
                }
                if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                  event.preventDefault();
                  const prev = (index - 1 + services.length) % services.length;
                  setActive(prev);
                  event.currentTarget.parentElement
                    ?.querySelectorAll('[role="tab"]')
                    [prev]?.focus();
                }
              }}
            >
              {service.title}
            </button>
          );
        })}
      </div>
      <div
        className="services-showcase__panel"
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
      >
        <h3 className="services-showcase__heading">{current.title}</h3>
        <p className="services-showcase__copy">{current.description}</p>
        {current.highlights?.length > 0 ? (
          <ul className="services-showcase__points">
            {current.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
