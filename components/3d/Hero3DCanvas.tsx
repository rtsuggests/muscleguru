"use client";

import React, { useEffect, useRef, useState } from "react";

// Vertex shader
const VS_SOURCE = `
  attribute vec3 aPosition;
  attribute vec3 aNormal;
  attribute vec3 aColor;

  uniform mat4 uModel;
  uniform mat4 uView;
  uniform mat4 uProj;
  uniform mat3 uNormalMat;

  varying vec3 vNormal;
  varying vec3 vFragPos;
  varying vec3 vColor;

  void main() {
    vec4 worldPos = uModel * vec4(aPosition, 1.0);
    vFragPos = worldPos.xyz;
    vNormal = normalize(uNormalMat * aNormal);
    vColor = aColor;
    gl_Position = uProj * uView * worldPos;
  }
`;

// Fragment shader with dual-tone athletic lighting & specular shine
const FS_SOURCE = `
  precision mediump float;

  varying vec3 vNormal;
  varying vec3 vFragPos;
  varying vec3 vColor;

  uniform vec3 uLightPos1;
  uniform vec3 uLightColor1;
  uniform vec3 uLightPos2;
  uniform vec3 uLightColor2;
  uniform vec3 uViewPos;
  uniform float uShininess;

  void main() {
    vec3 norm = normalize(vNormal);
    vec3 viewDir = normalize(uViewPos - vFragPos);

    // Ambient
    vec3 ambient = 0.22 * vColor;

    // Light 1 (Primary Neon Emerald)
    vec3 lightDir1 = normalize(uLightPos1 - vFragPos);
    float diff1 = max(dot(norm, lightDir1), 0.0);
    vec3 diffuse1 = diff1 * uLightColor1 * vColor;
    vec3 reflectDir1 = reflect(-lightDir1, norm);
    float spec1 = pow(max(dot(viewDir, reflectDir1), 0.0), uShininess);
    vec3 specular1 = spec1 * uLightColor1 * 0.6;

    // Light 2 (Cyan/Ice Edge Light)
    vec3 lightDir2 = normalize(uLightPos2 - vFragPos);
    float diff2 = max(dot(norm, lightDir2), 0.0);
    vec3 diffuse2 = diff2 * uLightColor2 * vColor * 0.6;
    vec3 reflectDir2 = reflect(-lightDir2, norm);
    float spec2 = pow(max(dot(viewDir, reflectDir2), 0.0), uShininess);
    vec3 specular2 = spec2 * uLightColor2 * 0.4;

    // Rim lighting for athletic glow
    float rim = 1.0 - max(dot(viewDir, norm), 0.0);
    rim = pow(rim, 3.0) * 0.45;
    vec3 rimColor = vec3(0.06, 0.72, 0.51) * rim;

    vec3 result = ambient + diffuse1 + specular1 + diffuse2 + specular2 + rimColor;
    gl_FragColor = vec4(result, 1.0);
  }
`;

// Particle vertex & fragment shaders
const PARTICLE_VS = `
  attribute vec3 aPosition;
  attribute float aSize;
  attribute vec3 aColor;

  uniform mat4 uVP;

  varying vec3 vColor;

  void main() {
    vColor = aColor;
    gl_Position = uVP * vec4(aPosition, 1.0);
    gl_PointSize = aSize * (140.0 / gl_Position.w);
  }
`;

const PARTICLE_FS = `
  precision mediump float;
  varying vec3 vColor;

  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, dist);
    gl_FragColor = vec4(vColor, alpha * 0.85);
  }
`;

// 3D Matrix Utilities
function mat4Create() {
  return new Float32Array([
    1,0,0,0,
    0,1,0,0,
    0,0,1,0,
    0,0,0,1
  ]);
}

function mat4Perspective(out: Float32Array, fovy: number, aspect: number, near: number, far: number) {
  const f = 1.0 / Math.tan(fovy / 2);
  const nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) * nf;
  out[15] = 0;
  return out;
}

function mat4LookAt(out: Float32Array, eye: number[], center: number[], up: number[]) {
  const [eyex, eyey, eyez] = eye;
  const [centerx, centery, centerz] = center;
  const [upx, upy, upz] = up;

  let z0 = eyex - centerx;
  let z1 = eyey - centery;
  let z2 = eyez - centerz;
  let len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len; z1 *= len; z2 *= len;

  let x0 = upy * z2 - upz * z1;
  let x1 = upz * z0 - upx * z2;
  let x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);
  if (!len) { x0 = 0; x1 = 0; x2 = 0; } else { len = 1 / len; x0 *= len; x1 *= len; x2 *= len; }

  let y0 = z1 * x2 - z2 * x1;
  let y1 = z2 * x0 - z0 * x2;
  let y2 = z0 * x1 - z1 * x0;

  out[0] = x0; out[1] = y0; out[2] = z0; out[3] = 0;
  out[4] = x1; out[5] = y1; out[6] = z1; out[7] = 0;
  out[8] = x2; out[9] = y2; out[10] = z2; out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}

function mat4Multiply(out: Float32Array, a: Float32Array, b: Float32Array) {
  const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
  out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
  out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
  out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  return out;
}

function mat4RotateX(out: Float32Array, a: Float32Array, rad: number) {
  const s = Math.sin(rad), c = Math.cos(rad);
  const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  if (a !== out) {
    out[0] = a[0]; out[1] = a[1]; out[2] = a[2]; out[3] = a[3];
    out[12] = a[12]; out[13] = a[13]; out[14] = a[14]; out[15] = a[15];
  }
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a20 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

function mat4RotateY(out: Float32Array, a: Float32Array, rad: number) {
  const s = Math.sin(rad), c = Math.cos(rad);
  const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  if (a !== out) {
    out[4] = a[4]; out[5] = a[5]; out[6] = a[6]; out[7] = a[7];
    out[12] = a[12]; out[13] = a[13]; out[14] = a[14]; out[15] = a[15];
  }
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

function mat4RotateZ(out: Float32Array, a: Float32Array, rad: number) {
  const s = Math.sin(rad), c = Math.cos(rad);
  const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  if (a !== out) {
    out[8] = a[8]; out[9] = a[9]; out[10] = a[10]; out[11] = a[11];
    out[12] = a[12]; out[13] = a[13]; out[14] = a[14]; out[15] = a[15];
  }
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

function mat4Translate(out: Float32Array, a: Float32Array, v: number[]) {
  const x = v[0], y = v[1], z = v[2];
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    for (let i = 0; i < 12; i++) out[i] = a[i];
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  }
  return out;
}

function mat3NormalFromMat4(out: Float32Array, a: Float32Array) {
  const a00 = a[0], a01 = a[1], a02 = a[2];
  const a10 = a[4], a11 = a[5], a12 = a[6];
  const a20 = a[8], a21 = a[9], a22 = a[10];

  const b01 = a22 * a11 - a12 * a21;
  const b11 = -a22 * a10 + a12 * a20;
  const b21 = a21 * a10 - a11 * a20;

  let det = a00 * b01 + a01 * b11 + a02 * b21;
  if (!det) return null;
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

// 3D Geometry Builder for Dumbbell
function buildDumbbellGeometry(plateScale = 1.0, plateColor = [0.08, 0.72, 0.42]) {
  const positions: number[] = [];
  const normals: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  let vertexOffset = 0;

  const chromeColor = [0.85, 0.88, 0.92];
  const darkSteelColor = [0.18, 0.22, 0.27];
  const goldRingColor = [0.92, 0.75, 0.25];

  // Helper: cylinder along X axis
  function addCylinder(
    xStart: number,
    xEnd: number,
    radius: number,
    segments: number,
    color: number[],
    caps = true
  ) {
    const angleStep = (Math.PI * 2) / segments;
    const startIdx = vertexOffset;

    // Side vertices
    for (let i = 0; i <= segments; i++) {
      const theta = i * angleStep;
      const cy = Math.cos(theta);
      const cz = Math.sin(theta);
      const y = radius * cy;
      const z = radius * cz;

      // Start rim vertex
      positions.push(xStart, y, z);
      normals.push(0, cy, cz);
      colors.push(...color);
      vertexOffset++;

      // End rim vertex
      positions.push(xEnd, y, z);
      normals.push(0, cy, cz);
      colors.push(...color);
      vertexOffset++;
    }

    // Side indices
    for (let i = 0; i < segments; i++) {
      const idx = startIdx + i * 2;
      indices.push(idx, idx + 1, idx + 2);
      indices.push(idx + 1, idx + 3, idx + 2);
    }

    if (caps) {
      // Left Cap (facing -X)
      const capLeftCenterIdx = vertexOffset;
      positions.push(xStart, 0, 0);
      normals.push(-1, 0, 0);
      colors.push(...color);
      vertexOffset++;

      for (let i = 0; i <= segments; i++) {
        const theta = i * angleStep;
        positions.push(xStart, radius * Math.cos(theta), radius * Math.sin(theta));
        normals.push(-1, 0, 0);
        colors.push(...color);
        vertexOffset++;
      }

      for (let i = 0; i < segments; i++) {
        indices.push(capLeftCenterIdx, capLeftCenterIdx + 1 + i, capLeftCenterIdx + 2 + i);
      }

      // Right Cap (facing +X)
      const capRightCenterIdx = vertexOffset;
      positions.push(xEnd, 0, 0);
      normals.push(1, 0, 0);
      colors.push(...color);
      vertexOffset++;

      for (let i = 0; i <= segments; i++) {
        const theta = i * angleStep;
        positions.push(xEnd, radius * Math.cos(theta), radius * Math.sin(theta));
        normals.push(1, 0, 0);
        colors.push(...color);
        vertexOffset++;
      }

      for (let i = 0; i < segments; i++) {
        indices.push(capRightCenterIdx, capRightCenterIdx + 2 + i, capRightCenterIdx + 1 + i);
      }
    }
  }

  // 1. Central Grip Bar (Stainless Steel knurled shaft)
  addCylinder(-1.3, 1.3, 0.16, 24, chromeColor, false);

  // 2. Center grip textured accents
  addCylinder(-0.8, 0.8, 0.18, 24, darkSteelColor, true);

  // 3. Inner Collars (Left & Right)
  addCylinder(-1.42, -1.3, 0.28, 24, goldRingColor, true);
  addCylinder(1.3, 1.42, 0.28, 24, goldRingColor, true);

  // 4. Weight Plates (Left Side)
  // Large Plate 1
  addCylinder(-1.75, -1.45, 0.95 * plateScale, 32, plateColor, true);
  // Medium Plate 2
  addCylinder(-2.02, -1.78, 0.82 * plateScale, 32, plateColor, true);
  // Small Plate 3
  addCylinder(-2.24, -2.05, 0.70 * plateScale, 32, plateColor, true);

  // 5. Weight Plates (Right Side)
  // Large Plate 1
  addCylinder(1.45, 1.75, 0.95 * plateScale, 32, plateColor, true);
  // Medium Plate 2
  addCylinder(1.78, 2.02, 0.82 * plateScale, 32, plateColor, true);
  // Small Plate 3
  addCylinder(2.05, 2.24, 0.70 * plateScale, 32, plateColor, true);

  // 6. Outer Lock Collars
  addCylinder(-2.38, -2.25, 0.26, 24, chromeColor, true);
  addCylinder(2.25, 2.38, 0.26, 24, chromeColor, true);

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    colors: new Float32Array(colors),
    indices: new Uint16Array(indices),
  };
}

// Build 3D Kinetic Orbital Particles
function buildParticles(count = 140) {
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const r = 2.8 + (Math.random() - 0.5) * 1.6;
    const tilt = 0.4;

    positions[i * 3 + 0] = Math.cos(angle) * r;
    positions[i * 3 + 1] = Math.sin(angle) * r * Math.sin(tilt) + (Math.random() - 0.5) * 0.8;
    positions[i * 3 + 2] = Math.sin(angle) * r * Math.cos(tilt) + (Math.random() - 0.5) * 0.8;

    sizes[i] = Math.random() * 2.8 + 1.2;

    // Glowing shades of emerald, neon lime, and cyan
    const palette = [
      [0.06, 0.85, 0.45], // emerald
      [0.2, 0.9, 0.75],   // cyan-mint
      [0.55, 0.95, 0.25],  // neon lime
      [1.0, 0.85, 0.3],   // gold
    ];
    const c = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3 + 0] = c[0];
    colors[i * 3 + 1] = c[1];
    colors[i * 3 + 2] = c[2];
  }

  return { positions, sizes, colors };
}

export default function Hero3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [plateWeight, setPlateWeight] = useState<"20kg" | "35kg" | "10kg">("20kg");
  const [glowTheme, setGlowTheme] = useState<"emerald" | "cyan" | "gold">("emerald");
  const [isHovered, setIsHovered] = useState(false);

  // References for rotation and user interaction
  const rotX = useRef(0.28);
  const rotY = useRef(-0.55);
  const rotZ = useRef(0.12);
  const velX = useRef(0);
  const velY = useRef(0.007);
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: true, alpha: true });
    if (!gl) {
      console.warn("WebGL not supported; using fallback 3D card.");
      return;
    }

    // Shader compilation helper
    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    // Create Main Mesh Program
    const vs = createShader(gl, gl.VERTEX_SHADER, VS_SOURCE);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FS_SOURCE);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    // Particle Program
    const pvs = createShader(gl, gl.VERTEX_SHADER, PARTICLE_VS);
    const pfs = createShader(gl, gl.FRAGMENT_SHADER, PARTICLE_FS);
    if (!pvs || !pfs) return;
    const particleProg = gl.createProgram();
    if (!particleProg) return;
    gl.attachShader(particleProg, pvs);
    gl.attachShader(particleProg, pfs);
    gl.linkProgram(particleProg);

    // Uniform & Attribute locations for Main Program
    const aPosition = gl.getAttribLocation(program, "aPosition");
    const aNormal = gl.getAttribLocation(program, "aNormal");
    const aColor = gl.getAttribLocation(program, "aColor");
    const uModel = gl.getUniformLocation(program, "uModel");
    const uView = gl.getUniformLocation(program, "uView");
    const uProj = gl.getUniformLocation(program, "uProj");
    const uNormalMat = gl.getUniformLocation(program, "uNormalMat");
    const uLightPos1 = gl.getUniformLocation(program, "uLightPos1");
    const uLightColor1 = gl.getUniformLocation(program, "uLightColor1");
    const uLightPos2 = gl.getUniformLocation(program, "uLightPos2");
    const uLightColor2 = gl.getUniformLocation(program, "uLightColor2");
    const uViewPos = gl.getUniformLocation(program, "uViewPos");
    const uShininess = gl.getUniformLocation(program, "uShininess");

    // Particle Program locations
    const paPosition = gl.getAttribLocation(particleProg, "aPosition");
    const paSize = gl.getAttribLocation(particleProg, "aSize");
    const paColor = gl.getAttribLocation(particleProg, "aColor");
    const puVP = gl.getUniformLocation(particleProg, "uVP");

    // Buffers for Dumbbell
    const posBuffer = gl.createBuffer();
    const normBuffer = gl.createBuffer();
    const colorBuffer = gl.createBuffer();
    const indexBuffer = gl.createBuffer();

    // Color definitions based on chosen theme
    const themeColors: Record<string, number[]> = {
      emerald: [0.06, 0.72, 0.42], // Athletic Emerald
      cyan: [0.08, 0.65, 0.88],    // Electric Cyan
      gold: [0.90, 0.68, 0.18],    // Solar Gold
    };

    const scaleMap = { "10kg": 0.82, "20kg": 1.05, "35kg": 1.35 };

    const selectedColor = themeColors[glowTheme] || themeColors.emerald;
    const selectedScale = scaleMap[plateWeight] || 1.05;

    const geo = buildDumbbellGeometry(selectedScale, selectedColor);

    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, geo.positions, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, normBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, geo.normals, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, geo.colors, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, geo.indices, gl.STATIC_DRAW);

    // Particle Buffers
    const particles = buildParticles(140);
    const pPosBuffer = gl.createBuffer();
    const pSizeBuffer = gl.createBuffer();
    const pColorBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, pPosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, particles.positions, gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, pSizeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, particles.sizes, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, pColorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, particles.colors, gl.STATIC_DRAW);

    // GL settings
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let animationFrameId: number;
    let startTime = performance.now();

    const projMat = mat4Create();
    const viewMat = mat4Create();
    const modelMat = mat4Create();
    const normalMat = new Float32Array(9);
    const vpMat = mat4Create();

    // Render loop
    function render(now: number) {
      if (!gl || !canvas) return;

      const elapsed = (now - startTime) * 0.001;

      // Handle resize
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = Math.floor(canvas.clientWidth * dpr);
      const displayHeight = Math.floor(canvas.clientHeight * dpr);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // Inertia & slow auto-rotate
      if (!isDragging.current) {
        rotY.current += velY.current;
        velY.current *= 0.96;
        if (Math.abs(velY.current) < 0.005) {
          velY.current = 0.005; // Idle speed
        }
        rotX.current += velX.current;
        velX.current *= 0.94;
      }

      // Camera & Projection
      const aspect = canvas.width / canvas.height;
      mat4Perspective(projMat, Math.PI / 4, aspect, 0.1, 100.0);
      const eyeZ = 6.8;
      const eyeY = Math.sin(elapsed * 1.5) * 0.22; // subtle float
      mat4LookAt(viewMat, [0, eyeY, eyeZ], [0, 0, 0], [0, 1, 0]);

      // Model Matrix (Dumbbell)
      mat4Create();
      modelMat.fill(0);
      modelMat[0] = 1; modelMat[5] = 1; modelMat[10] = 1; modelMat[15] = 1;

      mat4Translate(modelMat, modelMat, [0, Math.sin(elapsed * 1.8) * 0.15, 0]);
      mat4RotateX(modelMat, modelMat, rotX.current);
      mat4RotateY(modelMat, modelMat, rotY.current);
      mat4RotateZ(modelMat, modelMat, 0.25 + Math.sin(elapsed * 0.8) * 0.05);

      // Normal Matrix
      mat3NormalFromMat4(normalMat, modelMat);

      // --- Draw Dumbbell Mesh ---
      gl.useProgram(program);

      gl.uniformMatrix4fv(uProj, false, projMat);
      gl.uniformMatrix4fv(uView, false, viewMat);
      gl.uniformMatrix4fv(uModel, false, modelMat);
      if (normalMat) gl.uniformMatrix3fv(uNormalMat, false, normalMat);

      // Lights
      gl.uniform3f(uLightPos1, 5.0, 6.0, 5.0);
      if (glowTheme === "emerald") {
        gl.uniform3f(uLightColor1, 0.12, 0.95, 0.52);
      } else if (glowTheme === "cyan") {
        gl.uniform3f(uLightColor1, 0.15, 0.85, 1.0);
      } else {
        gl.uniform3f(uLightColor1, 1.0, 0.82, 0.25);
      }

      gl.uniform3f(uLightPos2, -6.0, -4.0, 3.0);
      gl.uniform3f(uLightColor2, 0.2, 0.6, 0.9);
      gl.uniform3f(uViewPos, 0, eyeY, eyeZ);
      gl.uniform1f(uShininess, 42.0);

      // Bind attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);

      gl.bindBuffer(gl.ARRAY_BUFFER, normBuffer);
      gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aNormal);

      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aColor);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.drawElements(gl.TRIANGLES, geo.indices.length, gl.UNSIGNED_SHORT, 0);

      // --- Draw Orbital Particles ---
      gl.useProgram(particleProg);

      mat4Multiply(vpMat, projMat, viewMat);
      gl.uniformMatrix4fv(puVP, false, vpMat);

      // Animate particles in orbital circle
      const pCount = particles.positions.length / 3;
      for (let i = 0; i < pCount; i++) {
        const curA = Math.atan2(particles.positions[i * 3 + 2], particles.positions[i * 3 + 0]);
        const r = Math.hypot(particles.positions[i * 3 + 0], particles.positions[i * 3 + 2]);
        const newA = curA + 0.012 * (1 + (i % 3) * 0.3);
        particles.positions[i * 3 + 0] = Math.cos(newA) * r;
        particles.positions[i * 3 + 2] = Math.sin(newA) * r;
        particles.positions[i * 3 + 1] += Math.sin(elapsed * 2 + i) * 0.003;
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, pPosBuffer);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, particles.positions);

      gl.vertexAttribPointer(paPosition, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(paPosition);

      gl.bindBuffer(gl.ARRAY_BUFFER, pSizeBuffer);
      gl.vertexAttribPointer(paSize, 1, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(paSize);

      gl.bindBuffer(gl.ARRAY_BUFFER, pColorBuffer);
      gl.vertexAttribPointer(paColor, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(paColor);

      gl.drawArrays(gl.POINTS, 0, pCount);

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [plateWeight, glowTheme]);

  // Mouse & Touch Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    velX.current = 0;
    velY.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    rotY.current += dx * 0.009;
    rotX.current += dy * 0.009;
    velY.current = dx * 0.005;
    velX.current = dy * 0.005;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 580,
        height: 480,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handlePointerUp();
      }}
    >
      {/* Dynamic 3D Radial Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            glowTheme === "emerald"
              ? "radial-gradient(circle, rgba(16,185,129,0.28) 0%, rgba(5,150,105,0.08) 50%, transparent 70%)"
              : glowTheme === "cyan"
              ? "radial-gradient(circle, rgba(6,182,212,0.28) 0%, rgba(14,165,233,0.08) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(234,179,8,0.28) 0%, rgba(217,119,6,0.08) 50%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          transition: "background 0.5s ease",
        }}
      />

      {/* WebGL Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          width: "100%",
          height: "100%",
          cursor: isDragging.current ? "grabbing" : "grab",
          touchAction: "none",
          position: "relative",
          zIndex: 10,
        }}
      />

      {/* Interactive Controls Overlay Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          background: "rgba(17, 24, 39, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "0.4rem 0.75rem",
          borderRadius: "9999px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          zIndex: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
          <span style={{ fontSize: "0.72rem", color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginRight: "0.2rem" }}>
            3D Gear
          </span>
          {(["10kg", "20kg", "35kg"] as const).map((w) => (
            <button
              key={w}
              onClick={() => setPlateWeight(w)}
              style={{
                background: plateWeight === w ? "var(--color-brand)" : "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "none",
                borderRadius: "9999px",
                padding: "0.22rem 0.6rem",
                fontSize: "0.74rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {w.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", margin: "0 0.2rem" }} />

        {/* Color Palette Switcher */}
        <div style={{ display: "flex", gap: "0.3rem" }}>
          <button
            onClick={() => setGlowTheme("emerald")}
            title="Emerald Neon"
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#10b981",
              border: glowTheme === "emerald" ? "2px solid #fff" : "none",
              cursor: "pointer",
            }}
          />
          <button
            onClick={() => setGlowTheme("cyan")}
            title="Electric Cyan"
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#06b6d4",
              border: glowTheme === "cyan" ? "2px solid #fff" : "none",
              cursor: "pointer",
            }}
          />
          <button
            onClick={() => setGlowTheme("gold")}
            title="Solar Gold"
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#eab308",
              border: glowTheme === "gold" ? "2px solid #fff" : "none",
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      {/* Interactive Helper Hint */}
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          fontSize: "0.72rem",
          fontWeight: 600,
          color: "rgba(255, 255, 255, 0.75)",
          background: "rgba(17, 24, 39, 0.6)",
          backdropFilter: "blur(8px)",
          padding: "0.25rem 0.65rem",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          pointerEvents: "none",
          opacity: isHovered ? 1 : 0.75,
          transition: "opacity 0.2s",
        }}
      >
        <span style={{ display: "inline-block", animation: "spin 4s linear infinite" }}>🔄</span>
        <span>Drag to Rotate in 3D</span>
      </div>
    </div>
  );
}
