"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const locations = [
  { name: "Barishal", pos: { x: 0.1, y: 0.8 } },
  { name: "University", pos: { x: 0.3, y: 0.4 } },
  { name: "First Job", pos: { x: 0.5, y: 0.6 } },
  { name: "Freelancing", pos: { x: 0.7, y: 0.2 } },
  { name: "Future", pos: { x: 0.9, y: 0.5 } },
];

export default function JourneyMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let progress = 0;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      setPoints(
        locations.map((loc) => ({
          x: canvas.width * loc.pos.x,
          y: canvas.height * loc.pos.y,
        }))
      );
    };

    const drawMap = () => {
      if (!ctx || !canvas || points.length === 0) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, "rgba(30,41,59,0.9)");
      bgGradient.addColorStop(1, "rgba(15,23,42,0.9)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw dashed background path
      ctx.strokeStyle = "rgba(99, 102, 241, 0.3)";
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.stroke();

      // Animated path
      const currentProgress = progress * (points.length - 1);
      const currentIndex = Math.floor(currentProgress);
      const t = currentProgress - currentIndex;

      if (currentIndex < points.length - 1) {
        ctx.setLineDash([]);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.8)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i <= currentIndex; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }

        const nextX =
          points[currentIndex].x +
          (points[currentIndex + 1].x - points[currentIndex].x) * t;
        const nextY =
          points[currentIndex].y +
          (points[currentIndex + 1].y - points[currentIndex].y) * t;
        ctx.lineTo(nextX, nextY);

        ctx.stroke();
      }

      // Moving glowing orb
      if (currentIndex < points.length - 1) {
        const orbX =
          points[currentIndex].x +
          (points[currentIndex + 1].x - points[currentIndex].x) * t;
        const orbY =
          points[currentIndex].y +
          (points[currentIndex + 1].y - points[currentIndex].y) * t;

        const gradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, 20);
        gradient.addColorStop(0, "rgba(56, 189, 248, 0.9)");
        gradient.addColorStop(1, "rgba(56, 189, 248, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orbX, orbY, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#38BDF8";
        ctx.beginPath();
        ctx.arc(orbX, orbY, 10, 0, Math.PI * 2);
        ctx.fill();
      }

      progress += 0.0025;
      if (progress > 1) progress = 0;
    };

    const animate = () => {
      drawMap();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [points.length]);

  return (
    <div className="relative w-full h-[450px] rounded-xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* Overlay labels */}
      {points.map((point, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="absolute"
          style={{ left: point.x - 50, top: point.y + 30 }}
        >
          <div className="px-3 py-1 text-xs rounded-full bg-slate-900/80 text-slate-100 border border-slate-700 shadow-md backdrop-blur">
            {locations[i].name}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
