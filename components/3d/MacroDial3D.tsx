"use client";

import React, { useState } from "react";
import Link from "next/link";

type GoalType = "muscle" | "fatloss" | "recomp" | "endurance";

export default function MacroDial3D() {
  const [weightKg, setWeightKg] = useState<number>(68);
  const [goal, setGoal] = useState<GoalType>("muscle");
  const [dietPref, setDietPref] = useState<"veg" | "nonveg">("veg");

  // Calorie & macro multipliers based on sports nutrition guidelines adapted for Indian bodies
  const goalSettings = {
    muscle: {
      label: "Lean Muscle Hypertrophy",
      calMultiplier: 33,
      proteinPerKg: 1.9,
      fatPercent: 0.25,
      accentColor: "#10b981",
      icon: "💪",
    },
    fatloss: {
      label: "Evidence-Based Fat Loss",
      calMultiplier: 25,
      proteinPerKg: 2.1,
      fatPercent: 0.23,
      accentColor: "#f59e0b",
      icon: "🔥",
    },
    recomp: {
      label: "Body Recomposition",
      calMultiplier: 29,
      proteinPerKg: 2.0,
      fatPercent: 0.25,
      accentColor: "#06b6d4",
      icon: "⚖️",
    },
    endurance: {
      label: "Marathon & Running",
      calMultiplier: 35,
      proteinPerKg: 1.6,
      fatPercent: 0.22,
      accentColor: "#3b82f6",
      icon: "🏃",
    },
  };

  const current = goalSettings[goal];

  const totalCalories = Math.round(weightKg * current.calMultiplier);
  const proteinGrams = Math.round(weightKg * current.proteinPerKg);
  const proteinCalories = proteinGrams * 4;

  const fatCalories = Math.round(totalCalories * current.fatPercent);
  const fatGrams = Math.round(fatCalories / 9);

  const carbCalories = Math.max(0, totalCalories - (proteinCalories + fatCalories));
  const carbGrams = Math.round(carbCalories / 4);

  // Percentages for 3D visualization
  const pPct = Math.round((proteinCalories / totalCalories) * 100);
  const cPct = Math.round((carbCalories / totalCalories) * 100);
  const fPct = 100 - pPct - cPct;

  // Indian Diet Meal Plan Equivalencies
  const foodPortions =
    dietPref === "veg"
      ? [
          { item: "Paneer (low-fat/normal)", amount: `${Math.round(proteinGrams * 0.35 * 5.5)}g`, p: `${Math.round(proteinGrams * 0.35)}g` },
          { item: "Soya Chunks / Mealmaker", amount: `${Math.round(proteinGrams * 0.30 * 1.9)}g`, p: `${Math.round(proteinGrams * 0.30)}g` },
          { item: "Moong / Chana Dal (dry)", amount: "1.5 Bowls (cooked)", p: "18g" },
          { item: "Curd / Dahi + 1 Scoop Whey", amount: "1 Cup + 1 Scoop", p: `${Math.round(proteinGrams * 0.35 - 18 + 24)}g` },
        ]
      : [
          { item: "Whole Eggs / Egg Whites", amount: "3-4 Eggs", p: "24g" },
          { item: "Chicken Breast / Fish", amount: `${Math.round(proteinGrams * 0.50 * 3.3)}g`, p: `${Math.round(proteinGrams * 0.50)}g` },
          { item: "Paneer / Curd", amount: "150g Paneer / 1 Cup Curd", p: "22g" },
          { item: "1 Scoop Whey Isolate", amount: "1 Scoop (30g)", p: "24g" },
        ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0b1329 0%, #111827 100%)",
        borderRadius: "1.75rem",
        padding: "clamp(1.5rem, 4vw, 3rem)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "#fff",
        boxShadow: "0 20px 50px -10px rgba(0,0,0,0.4)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D Atmospheric Lighting */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${current.accentColor}25 0%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ textAlign: "center", marginBottom: "2.5rem", position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            padding: "0.35rem 1rem",
            borderRadius: "9999px",
            fontSize: "0.82rem",
            fontWeight: 700,
            color: "#6ee7b7",
            marginBottom: "0.75rem",
          }}
        >
          <span>📊</span> Live 3D Macro Engine
        </div>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.4rem)", fontWeight: 800, margin: "0 0 0.5rem", color: "#fff" }}>
          Indian Diet Macro & Calorie Blueprint
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "0.95rem", maxWidth: 600, margin: "0 auto" }}>
          Calculate optimal protein, carbs, and fats calibrated for Indian body types and staple foods.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left Column: Interactive Goal & Slider Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Goal Selector */}
          <div>
            <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "0.6rem" }}>
              Select Your Target Goal:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              {(Object.keys(goalSettings) as GoalType[]).map((g) => {
                const isSelected = goal === g;
                const cfg = goalSettings[g];
                return (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 0.85rem",
                      borderRadius: "0.75rem",
                      border: isSelected ? `2px solid ${cfg.accentColor}` : "1.5px solid rgba(255,255,255,0.1)",
                      background: isSelected ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.6)",
                      color: "#fff",
                      cursor: "pointer",
                      textAlign: "left",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{cfg.icon}</span>
                    <span>{cfg.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Body Weight Slider */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.7)",
              borderRadius: "1rem",
              padding: "1.25rem",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#cbd5e1" }}>Your Current Weight:</span>
              <span style={{ fontSize: "1.4rem", fontWeight: 800, color: current.accentColor }}>
                {weightKg} <span style={{ fontSize: "0.9rem", color: "#94a3b8" }}>KG</span> ({Math.round(weightKg * 2.20462)} lbs)
              </span>
            </div>
            <input
              type="range"
              min="45"
              max="120"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              style={{
                width: "100%",
                accentColor: current.accentColor,
                cursor: "pointer",
                height: 8,
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#64748b", marginTop: "0.4rem" }}>
              <span>45 kg</span>
              <span>80 kg</span>
              <span>120 kg</span>
            </div>
          </div>

          {/* Diet Preference Pill */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600 }}>Food Preference:</span>
            <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.08)", borderRadius: "9999px", padding: "0.2rem" }}>
              <button
                onClick={() => setDietPref("veg")}
                style={{
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  border: "none",
                  background: dietPref === "veg" ? "#10b981" : "transparent",
                  color: "#fff",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                🌱 Vegetarian
              </button>
              <button
                onClick={() => setDietPref("nonveg")}
                style={{
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  border: "none",
                  background: dietPref === "nonveg" ? "#10b981" : "transparent",
                  color: "#fff",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                🍗 Non-Veg / Eggs
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Holographic Macro Cylinder & Results */}
        <div
          style={{
            background: "rgba(30, 41, 59, 0.75)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderRadius: "1.25rem",
            padding: "clamp(1.25rem, 3vw, 2rem)",
            border: "1.5px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
          }}
        >
          {/* Calorie Banner */}
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.82rem", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>
              Estimated Daily Intake
            </div>
            <div style={{ fontSize: "2.75rem", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: "0.25rem 0" }}>
              {totalCalories} <span style={{ fontSize: "1.2rem", fontWeight: 600, color: current.accentColor }}>kcal/day</span>
            </div>
            <div style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>
              Goal: <strong>{current.label}</strong>
            </div>
          </div>

          {/* 3D Isometric Macro Depth Bar */}
          <div style={{ marginBottom: "1.75rem", perspective: 600 }}>
            <div
              style={{
                display: "flex",
                height: 32,
                borderRadius: "0.75rem",
                overflow: "hidden",
                border: "1.5px solid rgba(255,255,255,0.2)",
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.4)",
                transform: "rotateX(12deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  width: `${pPct}%`,
                  background: "linear-gradient(180deg, #34d399 0%, #059669 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  transition: "width 0.3s ease",
                }}
              >
                {pPct}% Protein
              </div>
              <div
                style={{
                  width: `${cPct}%`,
                  background: "linear-gradient(180deg, #60a5fa 0%, #2563eb 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  transition: "width 0.3s ease",
                }}
              >
                {cPct}% Carbs
              </div>
              <div
                style={{
                  width: `${fPct}%`,
                  background: "linear-gradient(180deg, #fcd34d 0%, #d97706 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  transition: "width 0.3s ease",
                }}
              >
                {fPct}% Fat
              </div>
            </div>
          </div>

          {/* Three Macro Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {/* Protein */}
            <div style={{ background: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "0.75rem", padding: "0.85rem 0.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "0.72rem", color: "#6ee7b7", fontWeight: 700, textTransform: "uppercase" }}>Protein</div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", margin: "0.2rem 0" }}>{proteinGrams}g</div>
              <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>{proteinCalories} kcal</div>
            </div>

            {/* Carbs */}
            <div style={{ background: "rgba(59, 130, 246, 0.12)", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "0.75rem", padding: "0.85rem 0.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "0.72rem", color: "#93c5fd", fontWeight: 700, textTransform: "uppercase" }}>Carbs</div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", margin: "0.2rem 0" }}>{carbGrams}g</div>
              <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>{carbCalories} kcal</div>
            </div>

            {/* Fats */}
            <div style={{ background: "rgba(245, 158, 11, 0.12)", border: "1px solid rgba(245, 158, 11, 0.3)", borderRadius: "0.75rem", padding: "0.85rem 0.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "0.72rem", color: "#fde68a", fontWeight: 700, textTransform: "uppercase" }}>Fats</div>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", margin: "0.2rem 0" }}>{fatGrams}g</div>
              <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>{fatCalories} kcal</div>
            </div>
          </div>

          {/* Real Indian Plate Breakdown */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              borderRadius: "0.75rem",
              padding: "0.85rem 1rem",
              border: "1px solid rgba(255,255,255,0.06)",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#cbd5e1", marginBottom: "0.5rem" }}>
              🇮🇳 How to hit {proteinGrams}g Protein in Indian Meals:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {foodPortions.map((f, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "#94a3b8" }}>
                  <span>• {f.item} ({f.amount})</span>
                  <strong style={{ color: "#34d399" }}>+{f.p}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Link to Calculators */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/calculators/macro"
              style={{
                flex: 1,
                padding: "0.75rem 1rem",
                background: "var(--color-brand)",
                color: "#fff",
                borderRadius: "0.625rem",
                textAlign: "center",
                fontWeight: 700,
                fontSize: "0.88rem",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(16,185,129,0.35)",
              }}
            >
              Exact Macro Calculator →
            </Link>
            <Link
              href="/nutrition/indian-protein-sources"
              style={{
                padding: "0.75rem 1rem",
                background: "rgba(255,255,255,0.08)",
                color: "#cbd5e1",
                borderRadius: "0.625rem",
                textAlign: "center",
                fontWeight: 600,
                fontSize: "0.88rem",
                textDecoration: "none",
              }}
            >
              View Food Charts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
