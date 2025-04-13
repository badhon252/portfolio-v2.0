"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function JourneyMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    };

    const drawMap = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      ctx.fillStyle = "rgba(99, 102, 241, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw path
      ctx.strokeStyle = "rgba(99, 102, 241, 0.5)";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const points = [
        { x: canvas.width * 0.1, y: canvas.height * 0.8 },
        { x: canvas.width * 0.3, y: canvas.height * 0.4 },
        { x: canvas.width * 0.5, y: canvas.height * 0.6 },
        { x: canvas.width * 0.7, y: canvas.height * 0.2 },
        { x: canvas.width * 0.9, y: canvas.height * 0.5 },
      ];

      // Draw dashed background path
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }

      ctx.stroke();

      // Draw animated path
      const currentProgress = progress * (points.length - 1);
      const currentIndex = Math.floor(currentProgress);
      const t = currentProgress - currentIndex;

      if (currentIndex < points.length - 1) {
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i <= currentIndex; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }

        if (currentIndex < points.length - 1) {
          const nextX =
            points[currentIndex].x +
            (points[currentIndex + 1].x - points[currentIndex].x) * t;
          const nextY =
            points[currentIndex].y +
            (points[currentIndex + 1].y - points[currentIndex].y) * t;
          ctx.lineTo(nextX, nextY);
        }

        ctx.stroke();
      }

      // Draw points
      const locations = [
        "Barishal",
        "University",
        "First Job",
        "Freelancing",
        "Future",
      ];

      points.forEach((point, i) => {
        // Draw point background
        ctx.fillStyle =
          i <= currentIndex
            ? "rgba(56, 189, 248, 0.2)"
            : "rgba(99, 102, 241, 0.1)";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Draw point border
        ctx.strokeStyle =
          i <= currentIndex
            ? "rgba(56, 189, 248, 0.8)"
            : "rgba(99, 102, 241, 0.3)";
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(point.x, point.y, 20, 0, Math.PI * 2);
        ctx.stroke();

        // Draw point label
        ctx.fillStyle = "#ffffff";
        ctx.font = "12px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(locations[i], point.x, point.y + 40);
      });

      // Draw moving orb
      if (currentIndex < points.length - 1) {
        const orbX =
          points[currentIndex].x +
          (points[currentIndex + 1].x - points[currentIndex].x) * t;
        const orbY =
          points[currentIndex].y +
          (points[currentIndex + 1].y - points[currentIndex].y) * t;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          orbX,
          orbY,
          0,
          orbX,
          orbY,
          15
        );
        gradient.addColorStop(0, "rgba(56, 189, 248, 0.8)");
        gradient.addColorStop(1, "rgba(56, 189, 248, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orbX, orbY, 15, 0, Math.PI * 2);
        ctx.fill();

        // Orb
        ctx.fillStyle = "#38BDF8";
        ctx.beginPath();
        ctx.arc(orbX, orbY, 8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update progress
      progress += 0.002;
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
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[400px] rounded-lg overflow-hidden border border-border"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}
