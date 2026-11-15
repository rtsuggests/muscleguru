"use client";

import React, { useEffect, useState } from "react";

// Self-contained, zero-dependency celebration confetti
function triggerCelebrationConfetti() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#10b981", "#34d399", "#6ee7b7", "#059669", "#fbbf24", "#38bdf8"];
  const particles = Array.from({ length: 48 }, () => ({
    x: canvas.width * (0.35 + Math.random() * 0.3),
    y: canvas.height * 0.72,
    vx: (Math.random() - 0.5) * 14,
    vy: -(Math.random() * 12 + 7),
    size: Math.random() * 7 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: 1,
    rotation: Math.random() * 360,
    vr: (Math.random() - 0.5) * 12,
  }));

  let start: number | null = null;
  function animate(t: number) {
    if (!start) start = t;
    const progress = (t - start) / 1800;
    if (progress >= 1 || !ctx) {
      canvas.remove();
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.38; // gravity
      p.rotation += p.vr;
      p.alpha = Math.max(0, 1 - progress);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

interface Zone {
  label: string;
  min: number;
  max: number;
  color: string;
}

interface CalculatorGauge3DProps {
  value: number;
  min?: number;
  max?: number;
  unit?: string;
  zones?: Zone[];
  healthyRangeLabel?: string;
  isHealthy?: boolean;
}

const DEFAULT_BMI_ZONES: Zone[] = [
  { label: "Underweight (<18.5)", min: 14, max: 18.5, color: "#3b82f6" },
  { label: "Normal (18.5–22.9)", min: 18.5, max: 23, color: "#10b981" },
  { label: "Overweight (23–27.4)", min: 23, max: 27.5, color: "#f59e0b" },
  { label: "Obese (≥27.5)", min: 27.5, max: 38, color: "#ef4444" },
];

export default function CalculatorGauge3D({
  value,
  min = 14,
  max = 38,
  unit = "",
  zones = DEFAULT_BMI_ZONES,
  healthyRangeLabel = "Healthy Indian Cutoff: 18.5 – 22.9",
  isHealthy = false,
}: CalculatorGauge3DProps) {
  const [animatedValue, setAnimatedValue] = useState(min);

  useEffect(() => {
    // Smooth counter animation
    const duration = 800;
    const start = animatedValue;
    const end = value;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setAnimatedValue(parseFloat((start + (end - start) * ease).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Trigger celebratory confetti if in healthy range
        if (isHealthy) {
          triggerCelebrationConfetti();
        }
      }
    }

    requestAnimationFrame(step);
  }, [value, isHealthy]);

  // Calculate needle angle (-90deg to +90deg)
  const clampedVal = Math.max(min, Math.min(max, animatedValue));
  const fraction = (clampedVal - min) / (max - min);
  const angleDeg = -90 + fraction * 180;

  // Determine current active zone
  const activeZone = zones.find((z) => clampedVal >= z.min && clampedVal <= z.max) || zones[1];

  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.95) 100%)",
        border: `1.5px solid ${activeZone.color}40`,
        borderRadius: "1.25rem",
        padding: "1.5rem",
        boxShadow: `0 15px 35px -10px ${activeZone.color}25`,
        color: "#fff",
        maxWidth: 420,
        margin: "1.25rem auto 0",
        perspective: 800,
        overflow: "hidden",
      }}
    >
      {/* 3D Gauge Arc Canvas / SVG */}
      <div style={{ position: "relative", width: 280, height: 160, margin: "0 auto", transform: "rotateX(10deg)" }}>
        <svg viewBox="0 0 280 160" style={{ width: "100%", height: "100%", overflow: "visible" }}>
          <defs>
            <filter id="gaugeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Track Arc */}
          <path
            d="M 30 140 A 110 110 0 0 1 250 140"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="16"
            strokeLinecap="round"
          />

          {/* Zones segments */}
          {zones.map((z, idx) => {
            const startFrac = (z.min - min) / (max - min);
            const endFrac = (z.max - min) / (max - min);

            const startAngle = Math.PI + startFrac * Math.PI;
            const endAngle = Math.PI + endFrac * Math.PI;

            const x1 = 140 + 110 * Math.cos(startAngle);
            const y1 = 140 + 110 * Math.sin(startAngle);
            const x2 = 140 + 110 * Math.cos(endAngle);
            const y2 = 140 + 110 * Math.sin(endAngle);

            return (
              <path
                key={idx}
                d={`M ${x1} ${y1} A 110 110 0 0 1 ${x2} ${y2}`}
                fill="none"
                stroke={z.color}
                strokeWidth={activeZone === z ? "18" : "14"}
                strokeOpacity={activeZone === z ? "1" : "0.55"}
                filter={activeZone === z ? "url(#gaugeGlow)" : undefined}
                style={{ transition: "stroke-width 0.2s, stroke-opacity 0.2s" }}
              />
            );
          })}

          {/* 3D Center Hub */}
          <circle cx="140" cy="140" r="14" fill="#0f172a" stroke={activeZone.color} strokeWidth="3" />
          <circle cx="140" cy="140" r="6" fill="#fff" />

          {/* 3D Needle with drop shadow */}
          <g
            style={{
              transform: `rotate(${angleDeg}deg)`,
              transformOrigin: "140px 140px",
              transition: "transform 0.1s linear",
            }}
          >
            <polygon points="137,140 143,140 140,42" fill="#fff" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.8))" />
            <polygon points="138,140 142,140 140,42" fill={activeZone.color} />
          </g>
        </svg>

        {/* Current Readout Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
            {animatedValue} {unit && <span style={{ fontSize: "1rem", color: activeZone.color }}>{unit}</span>}
          </div>
          <div
            style={{
              display: "inline-block",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: activeZone.color,
              background: "rgba(255,255,255,0.08)",
              padding: "0.2rem 0.65rem",
              borderRadius: "9999px",
              marginTop: "0.25rem",
            }}
          >
            {activeZone.label}
          </div>
        </div>
      </div>

      {/* Target Info */}
      <div
        style={{
          marginTop: "1.25rem",
          paddingTop: "0.85rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          fontSize: "0.8rem",
          color: "#94a3b8",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span>🇮🇳</span>
        <span>{healthyRangeLabel}</span>
      </div>
    </div>
  );
}
