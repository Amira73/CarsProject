// InfiniteLogoLoop.jsx
import React from "react";
import "./infinite-loop.css"; // include the CSS below

export default function InfiniteLogoLoop({
  logos = [],              // [{src, alt}] or string[] of srcs
  height = 500,             // px
  gap = 48,                // px between logos
  duration = 60,           // seconds for one full loop
  pauseOnHover = true,
}) {
  const items = logos.map(l => (typeof l === "string" ? { src: l, alt: "logo" } : l));
  // duplicate to create a seamless loop
  const loop = [...items, ...items];

  return (
    <div
      className={`logo-loop ${pauseOnHover ? "logo-loop--pause" : ""}`}
      style={{
        "--loop-gap": `${gap}px`,
        "--logo-h": `${height}px`,
        "--loop-duration": `${duration}s`,
      }}
      aria-label="Partner logos"
    >
      <div className="logo-track">
        {loop.map((l, i) => (
          <div className="logo-item" key={i}>
            <img src={l.src} alt={l.alt || "logo"} height={height} />
          </div>
        ))}
      </div>
      {/* optional gradient fade edges */}
      <div className="logo-fade left" />
      <div className="logo-fade right" />
    </div>
  );
}
