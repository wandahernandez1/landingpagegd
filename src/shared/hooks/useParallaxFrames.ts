import { useCallback, useEffect, useRef, useState } from "react";
import { getFrameUrl, FRAME_CONFIG } from "@/shared/constants";

interface UseParallaxFramesOptions {
  totalFrames?: number;
  priorityFrames?: number;
}

interface UseParallaxFramesReturn {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  currentFrame: number;
  isLoading: boolean;
  progress: number;
}

export function useParallaxFrames(
  options: UseParallaxFramesOptions = {}
): UseParallaxFramesReturn {
  const {
    totalFrames = FRAME_CONFIG.totalFrames,
    priorityFrames = FRAME_CONFIG.priorityFrames,
  } = options;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isSetupRef = useRef(false);

  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  const progress = Math.round((loadedCount / totalFrames) * 100);

  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Set canvas size if needed
    if (
      canvas.width !== displayWidth * dpr ||
      canvas.height !== displayHeight * dpr
    ) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate cover scaling
    const imgRatio = img.width / img.height;
    const canvasRatio = displayWidth / displayHeight;

    let drawWidth, drawHeight, drawX, drawY;

    if (imgRatio > canvasRatio) {
      // Image is wider - fit to height
      drawHeight = displayHeight * dpr;
      drawWidth = drawHeight * imgRatio;
      drawX = (displayWidth * dpr - drawWidth) / 2;
      drawY = 0;
    } else {
      // Image is taller - fit to width
      drawWidth = displayWidth * dpr;
      drawHeight = drawWidth / imgRatio;
      drawX = 0;
      drawY = (displayHeight * dpr - drawHeight) / 2;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Direct scroll-to-frame mapping - no easing, no interpolation
  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Linear 1:1 mapping
      const scrollProgress = Math.max(0, Math.min(1, scrollTop / docHeight));
      const frameIndex = Math.floor(scrollProgress * (totalFrames - 1));
      const clampedFrame = Math.max(0, Math.min(totalFrames - 1, frameIndex));

      if (clampedFrame !== currentFrameRef.current) {
        currentFrameRef.current = clampedFrame;
        setCurrentFrame(clampedFrame);
        renderFrame(clampedFrame);
      }
    });
  }, [totalFrames, renderFrame]);

  // Load images
  useEffect(() => {
    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesRef.current[index]) {
          resolve();
          return;
        }

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.decoding = "async";

        img.onload = () => {
          imagesRef.current[index] = img;
          setLoadedCount((prev) => prev + 1);
          resolve();
        };

        img.onerror = () => {
          console.warn(`Failed to load frame ${index}`);
          resolve();
        };

        img.src = getFrameUrl(index);
      });
    };

    const loadFrames = async () => {
      // Load priority frames first
      const priorityPromises = Array.from({ length: priorityFrames }, (_, i) =>
        loadImage(i)
      );
      await Promise.all(priorityPromises);

      setIsLoading(false);

      // Initial render
      if (!isSetupRef.current) {
        isSetupRef.current = true;
        renderFrame(0);
      }

      // Load remaining frames in background
      for (let i = priorityFrames; i < totalFrames; i++) {
        await loadImage(i);
      }
    };

    loadFrames();
  }, [totalFrames, priorityFrames, renderFrame]);

  // Setup scroll listener
  useEffect(() => {
    if (isLoading) return;

    // Initial frame based on current scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isLoading, handleScroll]);

  return {
    canvasRef,
    currentFrame,
    isLoading,
    progress,
  };
}
