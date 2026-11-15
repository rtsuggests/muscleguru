"use client";

import React, { useState } from "react";
import Link from "next/link";

interface MuscleData {
  id: string;
  name: string;
  latin: string;
  view: "front" | "back";
  keyRole: string;
  exercises: { name: string; href?: string }[];
  indianFuel: string;
  calcHref: string;
  calcName: string;
  color: string;
  highlightCoords: { x: number; y: number; r: number }[];
}

const MUSCLE_GROUPS: Record<string, MuscleData> = {
  chest: {
    id: "chest",
    name: "Chest",
    latin: "Pectoralis Major & Minor",
    view: "front",
    keyRole: "Horizontal pushing, upper body posture, pressing power",
    exercises: [
      { name: "Barbell Bench Press", href: "/exercise-guides/how-to-bench-press" },
      { name: "Dumbbell Press", href: "/exercise-guides/dumbbell-exercises" },
      { name: "Push-Ups Progression", href: "/workout-plans/hiit-beginner" },
    ],
    indianFuel: "Paneer (18g/100g) + 2 Whole Eggs + 1 Scoop Whey",
    calcHref: "/calculators/one-rep-max",
    calcName: "Calculate 1-Rep Max Bench",
    color: "#10b981",
    highlightCoords: [
      { x: 132, y: 145, r: 24 },
      { x: 188, y: 145, r: 24 },
    ],
  },
  shoulders: {
    id: "shoulders",
    name: "Shoulders",
    latin: "Anterior, Lateral & Posterior Deltoids",
    view: "front",
    keyRole: "Shoulder stability, overhead pressing, creating V-taper breadth",
    exercises: [
      { name: "Overhead Military Press", href: "/workout-plans/4-day-upper-lower" },
      { name: "Dumbbell Lateral Raises", href: "/exercise-guides/dumbbell-exercises" },
      { name: "Face Pulls (Rear Delts)", href: "/exercise-guides" },
    ],
    indianFuel: "Soya Chunks (52g protein/100g) sauteed with bell peppers",
    calcHref: "/calculators/protein",
    calcName: "Calculate Daily Protein Needs",
    color: "#06b6d4",
    highlightCoords: [
      { x: 92, y: 130, r: 22 },
      { x: 228, y: 130, r: 22 },
    ],
  },
  arms: {
    id: "arms",
    name: "Arms",
    latin: "Biceps Brachii, Triceps Brachii & Forearms",
    view: "front",
    keyRole: "Elbow flexion/extension, pulling grip strength, arm aesthetics",
    exercises: [
      { name: "Weighted Pull-Ups (Underhand)", href: "/exercise-guides/pull-ups-guide" },
      { name: "Dips / Diamond Push-ups", href: "/workout-plans/3-day-full-body" },
      { name: "Incline Dumbbell Curls", href: "/exercise-guides/dumbbell-exercises" },
    ],
    indianFuel: "Greek Yogurt / Hung Curd (15g) with roasted pumpkin seeds",
    calcHref: "/calculators/muscle-gain-rate",
    calcName: "Monthly Muscle Growth Rate",
    color: "#3b82f6",
    highlightCoords: [
      { x: 75, y: 195, r: 20 },
      { x: 245, y: 195, r: 20 },
    ],
  },
  core: {
    id: "core",
    name: "Core & Abs",
    latin: "Rectus Abdominis & Transverse Abdominis",
    view: "front",
    keyRole: "Spine protection, anti-rotational stability, athletic power transfer",
    exercises: [
      { name: "Proper Plank Variations", href: "/exercise-guides/plank-guide" },
      { name: "Hanging Knee/Leg Raises", href: "/workout-plans/hiit-beginner" },
      { name: "Ab Wheel Rollouts", href: "/exercise-guides" },
    ],
    indianFuel: "Moong Dal Sprouts chaat + Kala Chana (low GI, zero visceral fat bloat)",
    calcHref: "/calculators/waist-hip-ratio",
    calcName: "Calculate Waist-to-Hip Ratio",
    color: "#eab308",
    highlightCoords: [
      { x: 160, y: 215, r: 30 },
      { x: 160, y: 260, r: 24 },
    ],
  },
  quads: {
    id: "quads",
    name: "Quads & Thighs",
    latin: "Quadriceps Femoris (Rectus Femoris, Vastus Lateralis)",
    view: "front",
    keyRole: "Knee extension, sprinting power, highest metabolic calorie burn",
    exercises: [
      { name: "Barbell Back Squat", href: "/exercise-guides/how-to-squat" },
      { name: "Bulgarian Split Squats", href: "/workout-plans/4-day-upper-lower" },
      { name: "Goblet Squats", href: "/exercise-guides/dumbbell-exercises" },
    ],
    indianFuel: "Lobia / Rajma curry with brown rice + 200g curd",
    calcHref: "/calculators/tdee",
    calcName: "Calculate Leg Day TDEE Burn",
    color: "#10b981",
    highlightCoords: [
      { x: 130, y: 350, r: 32 },
      { x: 190, y: 350, r: 32 },
    ],
  },
  back: {
    id: "back",
    name: "Back & Lats",
    latin: "Latissimus Dorsi, Trapezius & Rhomboids",
    view: "back",
    keyRole: "Vertical/horizontal pulling, thoracic posture, heavy compound base",
    exercises: [
      { name: "Deadlift Form & Execution", href: "/exercise-guides/how-to-deadlift" },
      { name: "Dead Hangs & Strict Pull-Ups", href: "/exercise-guides/pull-ups-guide" },
      { name: "Barbell Bent-Over Rows", href: "/workout-plans/3-day-full-body" },
    ],
    indianFuel: "Chicken breast / Soya chunk pulav with jeera curd",
    calcHref: "/calculators/ffmi",
    calcName: "Check Lean FFMI Potential",
    color: "#06b6d4",
    highlightCoords: [
      { x: 160, y: 155, r: 42 },
      { x: 125, y: 210, r: 26 },
      { x: 195, y: 210, r: 26 },
    ],
  },
  glutes: {
    id: "glutes",
    name: "Glutes & Hamstrings",
    latin: "Gluteus Maximus, Biceps Femoris & Semitendinosus",
    view: "back",
    keyRole: "Hip extension, posterior chain explosion, lower back resilience",
    exercises: [
      { name: "Conventional / Sumo Deadlift", href: "/exercise-guides/how-to-deadlift" },
      { name: "Barbell Hip Thrusts", href: "/women/strength-training-guide" },
      { name: "Romanian Dumbbell Deadlifts", href: "/exercise-guides/dumbbell-exercises" },
    ],
    indianFuel: "Roasted Chana + Almonds + Whey protein shake",
    calcHref: "/calculators/body-fat",
    calcName: "Estimate Body Composition",
    color: "#f59e0b",
    highlightCoords: [
      { x: 135, y: 295, r: 28 },
      { x: 185, y: 295, r: 28 },
      { x: 135, y: 360, r: 24 },
      { x: 185, y: 360, r: 24 },
    ],
  },
};

export default function MuscleExplorer3D() {
  const [activeMuscle, setActiveMuscle] = useState<string>("chest");
  const [view, setView] = useState<"front" | "back">("front");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const current = MUSCLE_GROUPS[activeMuscle] || MUSCLE_GROUPS.chest;

  // Change view automatically if selected muscle is on opposite side
  const handleSelectMuscle = (key: string) => {
    setActiveMuscle(key);
    if (MUSCLE_GROUPS[key]) {
      setView(MUSCLE_GROUPS[key].view);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: -y * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0b1120 0%, #0f172a 100%)",
        borderRadius: "1.75rem",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "clamp(1.5rem, 4vw, 3rem)",
        color: "#fff",
        boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.5)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Neon Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", marginBottom: "2.5rem" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.35)",
            padding: "0.35rem 1rem",
            borderRadius: "9999px",
            fontSize: "0.82rem",
            fontWeight: 700,
            color: "#34d399",
            marginBottom: "0.75rem",
          }}
        >
          <span>🧬</span> Interactive 3D Anatomy Visualizer
        </div>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3.8vw, 2.5rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "0.75rem",
            letterSpacing: "-0.02em",
          }}
        >
          Target Every Muscle Group with Precision
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#94a3b8",
            maxWidth: 620,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Click or hover on any muscle below to inspect scientific exercises, Indian dietary fuel, and tailored calculators for peak hypertrophy.
        </p>

        {/* View Switcher Tabs */}
        <div
          style={{
            display: "inline-flex",
            gap: "0.5rem",
            background: "rgba(15, 23, 42, 0.8)",
            padding: "0.3rem",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            marginTop: "1.25rem",
          }}
        >
          <button
            onClick={() => setView("front")}
            style={{
              padding: "0.45rem 1.25rem",
              borderRadius: "9999px",
              border: "none",
              background: view === "front" ? "var(--color-brand)" : "transparent",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            Anterior (Front)
          </button>
          <button
            onClick={() => setView("back")}
            style={{
              padding: "0.45rem 1.25rem",
              borderRadius: "9999px",
              border: "none",
              background: view === "back" ? "var(--color-brand)" : "transparent",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            Posterior (Back)
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive 3D Model on Left, Muscle Dashboard on Right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left: 3D Holographic Body Visualizer */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: 900,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 460,
          }}
        >
          <div
            style={{
              width: 320,
              height: 480,
              position: "relative",
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: "transform 0.15s ease-out",
              transformStyle: "preserve-3d",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Hologram Aura Light */}
            <div
              style={{
                position: "absolute",
                width: 260,
                height: 380,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${current.color}25 0%, transparent 70%)`,
                filter: "blur(32px)",
                pointerEvents: "none",
                transition: "background 0.4s ease",
              }}
            />

            {/* SVG Interactive Body Canvas */}
            <svg
              viewBox="0 0 320 480"
              style={{
                width: "100%",
                height: "100%",
                filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.6))",
              }}
            >
              <defs>
                <linearGradient id="bodyBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="glowRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                </linearGradient>
                <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Head & Neck */}
              <circle cx="160" cy="55" r="28" fill="url(#bodyBaseGrad)" stroke="#334155" strokeWidth="2" />
              <path d="M150 83 L150 102 L170 102 L170 83 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />

              {/* Torso & Core */}
              {view === "front" ? (
                <>
                  {/* Chest outline */}
                  <path
                    d="M106 112 Q160 120 214 112 L224 165 Q160 185 96 165 Z"
                    fill={activeMuscle === "chest" ? "rgba(16,185,129,0.35)" : "url(#bodyBaseGrad)"}
                    stroke={activeMuscle === "chest" ? "#10b981" : "#334155"}
                    strokeWidth={activeMuscle === "chest" ? "3" : "1.8"}
                    onClick={() => handleSelectMuscle("chest")}
                    style={{ cursor: "pointer", transition: "all 0.25s" }}
                  />
                  {/* Abdomen / Core outline */}
                  <path
                    d="M112 172 Q160 185 208 172 L198 275 Q160 282 122 275 Z"
                    fill={activeMuscle === "core" ? "rgba(234,179,8,0.3)" : "url(#bodyBaseGrad)"}
                    stroke={activeMuscle === "core" ? "#eab308" : "#334155"}
                    strokeWidth={activeMuscle === "core" ? "3" : "1.8"}
                    onClick={() => handleSelectMuscle("core")}
                    style={{ cursor: "pointer", transition: "all 0.25s" }}
                  />
                  {/* Six pack division lines */}
                  <line x1="160" y1="180" x2="160" y2="270" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <line x1="135" y1="210" x2="185" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <line x1="138" y1="240" x2="182" y2="240" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                </>
              ) : (
                <>
                  {/* Back & Lats outline */}
                  <path
                    d="M105 108 L215 108 L225 210 Q160 235 95 210 Z"
                    fill={activeMuscle === "back" ? "rgba(6,182,212,0.35)" : "url(#bodyBaseGrad)"}
                    stroke={activeMuscle === "back" ? "#06b6d4" : "#334155"}
                    strokeWidth={activeMuscle === "back" ? "3" : "1.8"}
                    onClick={() => handleSelectMuscle("back")}
                    style={{ cursor: "pointer", transition: "all 0.25s" }}
                  />
                  {/* Spinal groove */}
                  <line x1="160" y1="110" x2="160" y2="265" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  {/* Traps */}
                  <polygon points="160,88 128,125 192,125" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                </>
              )}

              {/* Shoulders (Left & Right) */}
              <circle
                cx="92"
                cy="126"
                r="20"
                fill={activeMuscle === "shoulders" ? "rgba(6,182,212,0.4)" : "url(#bodyBaseGrad)"}
                stroke={activeMuscle === "shoulders" ? "#06b6d4" : "#334155"}
                strokeWidth={activeMuscle === "shoulders" ? "3" : "1.8"}
                onClick={() => handleSelectMuscle("shoulders")}
                style={{ cursor: "pointer", transition: "all 0.25s" }}
              />
              <circle
                cx="228"
                cy="126"
                r="20"
                fill={activeMuscle === "shoulders" ? "rgba(6,182,212,0.4)" : "url(#bodyBaseGrad)"}
                stroke={activeMuscle === "shoulders" ? "#06b6d4" : "#334155"}
                strokeWidth={activeMuscle === "shoulders" ? "3" : "1.8"}
                onClick={() => handleSelectMuscle("shoulders")}
                style={{ cursor: "pointer", transition: "all 0.25s" }}
              />

              {/* Arms (Biceps & Forearms) */}
              <g
                onClick={() => handleSelectMuscle("arms")}
                style={{ cursor: "pointer", transition: "all 0.25s" }}
              >
                {/* Left Arm */}
                <path
                  d="M76 142 Q62 185 64 235 L82 235 Q86 185 92 142 Z"
                  fill={activeMuscle === "arms" ? "rgba(59,130,246,0.35)" : "url(#bodyBaseGrad)"}
                  stroke={activeMuscle === "arms" ? "#3b82f6" : "#334155"}
                  strokeWidth={activeMuscle === "arms" ? "3" : "1.8"}
                />
                {/* Right Arm */}
                <path
                  d="M244 142 Q258 185 256 235 L238 235 Q234 185 228 142 Z"
                  fill={activeMuscle === "arms" ? "rgba(59,130,246,0.35)" : "url(#bodyBaseGrad)"}
                  stroke={activeMuscle === "arms" ? "#3b82f6" : "#334155"}
                  strokeWidth={activeMuscle === "arms" ? "3" : "1.8"}
                />
              </g>

              {/* Lower Body: Pelvis & Legs */}
              {view === "front" ? (
                <>
                  {/* Quads (Left & Right) */}
                  <g
                    onClick={() => handleSelectMuscle("quads")}
                    style={{ cursor: "pointer", transition: "all 0.25s" }}
                  >
                    {/* Left Quad */}
                    <path
                      d="M120 282 L152 282 L144 395 L116 395 Z"
                      fill={activeMuscle === "quads" ? "rgba(16,185,129,0.35)" : "url(#bodyBaseGrad)"}
                      stroke={activeMuscle === "quads" ? "#10b981" : "#334155"}
                      strokeWidth={activeMuscle === "quads" ? "3" : "1.8"}
                    />
                    {/* Right Quad */}
                    <path
                      d="M168 282 L200 282 L204 395 L176 395 Z"
                      fill={activeMuscle === "quads" ? "rgba(16,185,129,0.35)" : "url(#bodyBaseGrad)"}
                      stroke={activeMuscle === "quads" ? "#10b981" : "#334155"}
                      strokeWidth={activeMuscle === "quads" ? "3" : "1.8"}
                    />
                  </g>
                </>
              ) : (
                <>
                  {/* Glutes & Hamstrings */}
                  <g
                    onClick={() => handleSelectMuscle("glutes")}
                    style={{ cursor: "pointer", transition: "all 0.25s" }}
                  >
                    {/* Left Glute & Hamstring */}
                    <path
                      d="M116 265 Q136 260 156 265 L146 395 L114 395 Z"
                      fill={activeMuscle === "glutes" ? "rgba(245,158,11,0.35)" : "url(#bodyBaseGrad)"}
                      stroke={activeMuscle === "glutes" ? "#f59e0b" : "#334155"}
                      strokeWidth={activeMuscle === "glutes" ? "3" : "1.8"}
                    />
                    {/* Right Glute & Hamstring */}
                    <path
                      d="M164 265 Q184 260 204 265 L206 395 L174 395 Z"
                      fill={activeMuscle === "glutes" ? "rgba(245,158,11,0.35)" : "url(#bodyBaseGrad)"}
                      stroke={activeMuscle === "glutes" ? "#f59e0b" : "#334155"}
                      strokeWidth={activeMuscle === "glutes" ? "3" : "1.8"}
                    />
                  </g>
                </>
              )}

              {/* Calves & Lower Legs */}
              <path d="M120 405 L140 405 L136 465 L124 465 Z" fill="#1e293b" stroke="#334155" strokeWidth="1.8" />
              <path d="M180 405 L200 405 L196 465 L184 465 Z" fill="#1e293b" stroke="#334155" strokeWidth="1.8" />

              {/* Pulsing Hotspot Markers */}
              {current.highlightCoords.map((coord, i) => (
                <circle
                  key={i}
                  cx={coord.x}
                  cy={coord.y}
                  r={coord.r * 0.75}
                  fill={current.color}
                  fillOpacity="0.35"
                  filter="url(#neonGlow)"
                  style={{ animation: "pulse 2s infinite" }}
                />
              ))}
            </svg>

            {/* 3D Depth Floor Ring */}
            <div
              style={{
                position: "absolute",
                bottom: -15,
                width: 220,
                height: 35,
                borderRadius: "50%",
                border: `1.5px solid ${current.color}60`,
                boxShadow: `0 0 20px ${current.color}40`,
                transform: "rotateX(70deg)",
              }}
            />
          </div>
        </div>

        {/* Right: Dynamic Hypertrophy & Nutrition Card */}
        <div
          style={{
            background: "rgba(30, 41, 59, 0.75)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderRadius: "1.25rem",
            padding: "clamp(1.25rem, 3vw, 2rem)",
            border: `1.5px solid ${current.color}50`,
            boxShadow: `0 20px 45px -10px ${current.color}25`,
            transition: "border 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Muscle Title with Glowing Indicator */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: current.color,
                  marginBottom: "0.25rem",
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: current.color }} />
                {current.latin}
              </div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", margin: 0 }}>
                {current.name} Training
              </h3>
            </div>
            <span
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                padding: "0.3rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                color: "#cbd5e1",
                fontWeight: 600,
              }}
            >
              {current.view === "front" ? "Anterior" : "Posterior"}
            </span>
          </div>

          <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            <strong>Biomechanics:</strong> {current.keyRole}
          </p>

          {/* Quick Muscle Selector Pills */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.78rem", color: "#64748b", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.5rem" }}>
              Switch Muscle Group
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {Object.keys(MUSCLE_GROUPS).map((key) => {
                const m = MUSCLE_GROUPS[key];
                const isSelected = activeMuscle === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleSelectMuscle(key)}
                    style={{
                      background: isSelected ? m.color : "rgba(255,255,255,0.06)",
                      color: isSelected ? "#000" : "#cbd5e1",
                      border: "none",
                      borderRadius: "0.5rem",
                      padding: "0.35rem 0.75rem",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {m.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Top Exercises */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.8rem", color: "#cbd5e1", fontWeight: 700, marginBottom: "0.6rem" }}>
              🏆 Top Evidence-Based Exercises:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {current.exercises.map((ex, i) => (
                <Link
                  key={i}
                  href={ex.href || "/exercise-guides"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.65rem 0.85rem",
                    background: "rgba(15, 23, 42, 0.6)",
                    borderRadius: "0.625rem",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#f1f5f9",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = current.color;
                    e.currentTarget.style.background = "rgba(15, 23, 42, 0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.background = "rgba(15, 23, 42, 0.6)";
                  }}
                >
                  <span>{ex.name}</span>
                  <span style={{ color: current.color, fontSize: "0.85rem" }}>Read Guide →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Indian Fuel Section */}
          <div
            style={{
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              borderRadius: "0.75rem",
              padding: "0.875rem 1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#34d399", marginBottom: "0.3rem" }}>
              🥗 Optimal Indian Recovery Fuel:
            </div>
            <div style={{ fontSize: "0.88rem", color: "#e2e8f0" }}>{current.indianFuel}</div>
          </div>

          {/* Calculator Call-to-Action */}
          <Link
            href={current.calcHref}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              background: `linear-gradient(135deg, ${current.color} 0%, #059669 100%)`,
              color: "#fff",
              padding: "0.85rem 1.5rem",
              borderRadius: "0.75rem",
              fontWeight: 800,
              fontSize: "0.95rem",
              textDecoration: "none",
              boxShadow: `0 8px 20px -5px ${current.color}50`,
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <span>⚡ {current.calcName}</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
