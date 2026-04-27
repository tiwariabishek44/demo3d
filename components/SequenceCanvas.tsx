"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;

function currentFrame(index: number) {
      const paddedIndex = index.toString().padStart(3, "0");
      return `/headphones/ezgif-frame-${paddedIndex}.jpg`;
}

export default function SequenceCanvas() {
      const canvasRef = useRef<HTMLCanvasElement>(null);
      const imagesRef = useRef<HTMLImageElement[]>([]);
      const [isLoaded, setIsLoaded] = useState(false);

      // Track scroll position of the entire page
      const { scrollYProgress } = useScroll();

      // Map scroll progress (0-1) to frame index (1-240)
      const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

      // Drawing to canvas
      const drawFrame = (index: number) => {
            if (!canvasRef.current || imagesRef.current.length === 0) return;
            const ctx = canvasRef.current.getContext("2d");
            if (!ctx) return;

            const maxIndex = imagesRef.current.length - 1;
            const arrayIndex = Math.min(Math.max(Math.floor(index) - 1, 0), maxIndex);
            const img = imagesRef.current[arrayIndex];

            if (!img || !img.complete) return;

            const canvas = canvasRef.current;

            // Set internal canvas resolution to match window to look crisp
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Draw the image with "cover" behavior to fill the screen width
            const imgRatio = img.width / img.height;
            const canvasRatio = canvas.width / canvas.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
                  // Canvas is wider than the image
                  drawWidth = canvas.width;
                  drawHeight = img.height * (drawWidth / img.width);
                  offsetX = 0;
                  offsetY = (canvas.height - drawHeight) / 2;
            } else {
                  // Canvas is taller than the image
                  drawHeight = canvas.height;
                  drawWidth = img.width * (drawHeight / img.height);
                  offsetX = (canvas.width - drawWidth) / 2;
                  offsetY = 0;
            }

            // Match the background perfectly
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };

      // Preload images once on mount
      useEffect(() => {
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (let i = 1; i <= FRAME_COUNT; i++) {
                  const img = new Image();
                  img.src = currentFrame(i);
                  img.onload = () => {
                        loadedCount++;
                        // Trigger generic first draw if this is the first frame
                        if (i === 1) {
                              drawFrame(1);
                        }
                        if (loadedCount === FRAME_COUNT) {
                              setIsLoaded(true);
                        }
                  };
                  loadedImages.push(img);
            }
            // Set ref immediately so we can read it in the onload callbacks
            imagesRef.current = loadedImages;
      }, []);

      // Listen to framer-motion value changes
      useMotionValueEvent(frameIndex, "change", (latest) => {
            drawFrame(latest);
      });

      // Re-draw on window resize
      useEffect(() => {
            const handleResize = () => {
                  drawFrame(frameIndex.get());
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
      }, []);

      return (
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#FFFFFF] z-0">
                  <canvas
                        ref={canvasRef}
                        className="w-full h-full block"
                  />
            </div>
      );
}
