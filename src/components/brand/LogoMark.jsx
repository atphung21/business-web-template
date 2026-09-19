import React from "react";

/**
 * Compact brand mark:
 * Navy field (authority, B2B trust) with gold growth bars and partnership arc.
 */
export const LogoMark = ({
  size = 48,
  variant = "color",
  className = "",
  title = "ATP Consulting Services, LLC.",
}) => {
  const id = React.useId().replace(/:/g, "");
  const gradientId = `logo-gradient-${id}`;

  const palettes = {
    color: {
      gradStart: "#0b1624",
      gradEnd: "#163a5f",
      bars: "#ffffff",
      arc: "rgba(196,163,90,0.95)",
      node: "#c4a35a",
    },
    light: {
      gradStart: "#163a5f",
      gradEnd: "#2a5578",
      bars: "#ffffff",
      arc: "rgba(196,163,90,0.95)",
      node: "#c4a35a",
    },
    dark: {
      gradStart: "#0b1624",
      gradEnd: "#163a5f",
      bars: "#ffffff",
      arc: "rgba(196,163,90,0.9)",
      node: "#c4a35a",
    },
  };

  const c = palettes[variant] || palettes.color;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={gradientId} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor={c.gradStart} />
          <stop offset="1" stopColor={c.gradEnd} />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill={`url(#${gradientId})`} />
      {/* Growth bars — left-to-right ascent */}
      <rect x="17" y="36" width="9" height="14" rx="2" fill={c.bars} fillOpacity="0.92" />
      <rect x="27.5" y="28" width="9" height="22" rx="2" fill={c.bars} fillOpacity="0.96" />
      <rect x="38" y="20" width="9" height="30" rx="2" fill={c.bars} />
      {/* Partnership bridge */}
      <path
        d="M21.5 36 Q32 22 42.5 24"
        stroke={c.arc}
        strokeWidth="2.25"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="32" cy="18" r="3.25" fill={c.node} />
    </svg>
  );
};
