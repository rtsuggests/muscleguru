"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SearchItem {
  name: string;
  desc: string;
  href: string;
  category: "Calculator" | "Guide" | "Workout" | "Defence";
  icon: string;
  tags?: string[];
}

const SEARCH_DATABASE: SearchItem[] = [
  // Calculators
  { name: "BMI Calculator (ICMR Cutoffs)", desc: "Indian-adapted cutoffs where overweight starts at 23", href: "/calculators/bmi", category: "Calculator", icon: "⚖️", tags: ["icmr", "weight", "obesity", "body mass"] },
  { name: "TDEE Calculator", desc: "Total daily energy expenditure and maintenance calories", href: "/calculators/tdee", category: "Calculator", icon: "🔥", tags: ["calories", "metabolism", "bmr"] },
  { name: "Protein Calculator", desc: "Daily protein target for Indian adults by activity level", href: "/calculators/protein", category: "Calculator", icon: "💪", tags: ["macros", "muscle", "whey", "paneer"] },
  { name: "Army & Defence Fitness", desc: "Agniveer, NDA, CDS standards and physical fitness test", href: "/calculators/army-fitness", category: "Defence", icon: "🪖", tags: ["military", "police", "running", "chest"] },
  { name: "Running Pace Calculator", desc: "Calculate pace, 5K, 10K, half marathon finishing times", href: "/calculators/running-pace", category: "Calculator", icon: "🏃", tags: ["cardio", "marathon", "speed"] },
  { name: "Calorie Deficit Calculator", desc: "Safe fat loss calorie deficit projections", href: "/calculators/calorie-deficit", category: "Calculator", icon: "📉", tags: ["fat loss", "weight loss", "cutting"] },
  { name: "Vegetarian Protein Calculator", desc: "Hit protein goals purely from Indian vegetarian foods", href: "/calculators/vegetarian-protein", category: "Calculator", icon: "🌱", tags: ["veg", "soya", "dal", "sattu"] },
  { name: "Diabetes & BMI Risk", desc: "Type 2 diabetes risk screening based on Indian BMI & waist", href: "/calculators/diabetes-bmi", category: "Calculator", icon: "🩸", tags: ["health", "sugar", "insulin"] },
  { name: "One Rep Max (1RM)", desc: "Estimate max lift for bench press, squat, and deadlift", href: "/calculators/one-rep-max", category: "Calculator", icon: "🏋️", tags: ["strength", "gym", "hypertrophy"] },
  { name: "Body Fat Calculator", desc: "US Navy & Indian Anthropometric body fat percentage", href: "/calculators/body-fat", category: "Calculator", icon: "📊", tags: ["composition", "lean mass"] },
  { name: "Intermittent Fasting (IF)", desc: "16:8, 18:6, and 20:4 fasting window scheduler", href: "/calculators/intermittent-fasting", category: "Calculator", icon: "⏰", tags: ["fasting", "autophagy"] },
  { name: "Macro Calculator", desc: "Carbs, protein, and healthy fats breakdown", href: "/calculators/macro", category: "Calculator", icon: "🥗", tags: ["nutrition", "diet", "keto"] },
  { name: "FFMI Calculator", desc: "Fat-Free Mass Index & natural muscle building limit", href: "/calculators/ffmi", category: "Calculator", icon: "📈", tags: ["muscle", "genetics", "natural"] },
  { name: "Waist-to-Hip Ratio", desc: "Visceral abdominal fat risk assessment for Indians", href: "/calculators/waist-hip-ratio", category: "Calculator", icon: "📏", tags: ["visceral fat", "heart health"] },
  { name: "Sleep & Recovery Cycles", desc: "90-minute REM sleep cycle calculator for muscle growth", href: "/calculators/sleep", category: "Calculator", icon: "😴", tags: ["rest", "recovery", "circadian"] },
  { name: "Water Intake Calculator", desc: "Daily hydration based on Indian climate & exercise", href: "/calculators/water-intake", category: "Calculator", icon: "💧", tags: ["hydration", "sweat"] },

  // Guides & Workouts
  { name: "3-Day Full Body Workout", desc: "The ultimate routine for busy Indian working professionals", href: "/workout-plans/3-day-full-body", category: "Workout", icon: "🏋️", tags: ["routine", "beginner", "gym"] },
  { name: "Push Pull Legs (PPL) Split", desc: "Hypertrophy workout plan for intermediate & advanced", href: "/muscle-gain/push-pull-legs", category: "Workout", icon: "💥", tags: ["split", "muscle"] },
  { name: "Indian High-Protein Diet Plan", desc: "Complete 7-day budget meal plan using local groceries", href: "/nutrition/7-day-meal-plan", category: "Guide", icon: "🥘", tags: ["meal plan", "budget", "hostel"] },
  { name: "Creatine Monohydrate Guide", desc: "How to use creatine safely: dosage, timing, and myths", href: "/supplements/creatine-guide", category: "Guide", icon: "⚡", tags: ["supplements", "kidney", "water retention"] },
  { name: "Agniveer Physical Standards", desc: "Height, weight, chest expansion and 1.6km running cutoffs", href: "/defence/agniveer-height-weight-chest-chart", category: "Defence", icon: "🎖️", tags: ["army", "rally"] },
  { name: "How to Bench Press Safely", desc: "Proper arch, grip width, and elbow tucking guide", href: "/exercise-guides/how-to-bench-press", category: "Guide", icon: "💪", tags: ["chest", "strength"] },
  { name: "How to Squat with Perfect Form", desc: "Ankle mobility, depth, and knee positioning", href: "/exercise-guides/how-to-squat", category: "Guide", icon: "🦵", tags: ["legs", "quads"] },
  { name: "Women's Strength Training Guide", desc: "Overcoming bulky lifting myths and hormone optimization", href: "/women/strength-training-guide", category: "Guide", icon: "👩", tags: ["women", "pcos", "toning"] },
];

export default function QuickSearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIdx(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : onClose(); // toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? SEARCH_DATABASE.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.tags?.some((t) => t.toLowerCase().includes(q))
        );
      })
    : SEARCH_DATABASE.slice(0, 8); // show popular default

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(11, 15, 23, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "clamp(1rem, 6vh, 4rem) 1rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 620,
          background: "#0f172a",
          border: "1.5px solid rgba(255,255,255,0.15)",
          borderRadius: "1.25rem",
          boxShadow: "0 25px 60px -15px rgba(0,0,0,0.7), 0 0 35px rgba(16,185,129,0.15)",
          overflow: "hidden",
          color: "#fff",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontSize: "1.3rem", color: "#10b981" }}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search 27+ calculators, workouts, Indian diet plans... (e.g. BMI, Protein, Agniveer)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIdx(0);
            }}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              fontSize: "1rem",
              fontFamily: "inherit",
            }}
          />
          <kbd
            style={{
              background: "rgba(255,255,255,0.08)",
              padding: "0.2rem 0.5rem",
              borderRadius: "0.35rem",
              fontSize: "0.75rem",
              color: "#94a3b8",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: "55vh", overflowY: "auto", padding: "0.75rem" }}>
          {filtered.length === 0 ? (
            <div style={{ padding: "2.5rem 1rem", textAlign: "center", color: "#94a3b8" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔎</div>
              <div>No results found for &ldquo;{query}&rdquo;</div>
              <div style={{ fontSize: "0.82rem", marginTop: "0.3rem" }}>Try searching for &quot;BMI&quot;, &quot;Protein&quot;, &quot;Squat&quot;, or &quot;Defence&quot;</div>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  background: selectedIdx === idx ? "rgba(16, 185, 129, 0.15)" : "transparent",
                  border: selectedIdx === idx ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid transparent",
                  textDecoration: "none",
                  color: "#fff",
                  transition: "all 0.12s ease",
                  marginBottom: "0.3rem",
                }}
                onMouseEnter={() => setSelectedIdx(idx)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#f8fafc" }}>{item.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>{item.desc}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "9999px",
                      background:
                        item.category === "Calculator"
                          ? "rgba(16,185,129,0.2)"
                          : item.category === "Defence"
                          ? "rgba(245,158,11,0.2)"
                          : "rgba(59,130,246,0.2)",
                      color:
                        item.category === "Calculator"
                          ? "#34d399"
                          : item.category === "Defence"
                          ? "#fbbf24"
                          : "#93c5fd",
                    }}
                  >
                    {item.category}
                  </span>
                  <span style={{ color: "#64748b", fontSize: "0.8rem" }}>→</span>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div
          style={{
            padding: "0.7rem 1.25rem",
            background: "rgba(0,0,0,0.3)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.75rem",
            color: "#64748b",
          }}
        >
          <span>Tip: Press <strong>Esc</strong> to close</span>
          <span>⚡ 27 Evidence-Based Calculators</span>
        </div>
      </div>
    </div>
  );
}
