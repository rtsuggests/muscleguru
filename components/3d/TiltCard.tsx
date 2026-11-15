"use client";

import React, { useRef, useState, useCallback } from "react";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number; // max tilt angle in degrees
  perspective?: number;
  glare?: boolean;
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TiltCard({
  children,
  maxTilt = 12,
  perspective = 900,
  glare = true,
  scale = 1.025,
  className = "",
  style = {},
  ...rest
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>("");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
          2
        )}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        setGlareStyle({
          opacity: 0.18,
          background: `radial-gradient(circle 260px at ${glareX}% ${glareY}%, rgba(255,255,255,0.7) 0%, rgba(16,185,129,0.15) 40%, transparent 80%)`,
        });
      }
    },
    [glare, maxTilt, perspective, scale]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card-container ${className}`}
      style={{
        position: "relative",
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 0.08s ease-out, box-shadow 0.25s ease-out"
          : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease-out",
        transform: transform || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
        willChange: "transform",
        ...style,
      }}
      {...rest}
    >
      {/* Dynamic Specular Glare Layer */}
      {glare && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            zIndex: 10,
            transition: "opacity 0.3s ease",
            ...glareStyle,
          }}
        />
      )}

      {/* Card Content with 3D Depth support */}
      <div style={{ position: "relative", zIndex: 1, height: "100%", width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
