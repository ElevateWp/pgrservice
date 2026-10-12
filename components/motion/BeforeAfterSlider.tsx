'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  clinicalNote?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before the repair',
  afterLabel = 'After the repair',
  clinicalNote,
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [targetPos, setTargetPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);

  // Weighted 0.12 lerp loop for tactile inertia
  useEffect(() => {
    const updateLerp = () => {
      setSliderPos((current) => {
        const diff = targetPos - current;
        if (Math.abs(diff) < 0.05) return targetPos;
        return current + diff * 0.12;
      });
      animFrameRef.current = requestAnimationFrame(updateLerp);
    };

    animFrameRef.current = requestAnimationFrame(updateLerp);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [targetPos]);

  const handlePointerMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setTargetPos(percent);
  }, []);

  const onPointerDown = () => {
    isDraggingRef.current = true;
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent) => {
      if (isDraggingRef.current) handlePointerMove(e.clientX);
    };
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && e.touches[0]) handlePointerMove(e.touches[0].clientX);
    };
    const handleGlobalUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchmove', handleGlobalTouchMove);
    window.addEventListener('touchend', handleGlobalUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [handlePointerMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setTargetPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setTargetPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden select-none cursor-ew-resize bg-mist"
        onMouseDown={(e) => {
          onPointerDown();
          handlePointerMove(e.clientX);
        }}
        onTouchStart={(e) => {
          onPointerDown();
          if (e.touches[0]) handlePointerMove(e.touches[0].clientX);
        }}
        tabIndex={0}
        role="slider"
        aria-label="Before and after roof comparison"
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
      >
        {/* After Image (Full Base) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-forest/80 backdrop-blur-sm text-paper font-body text-13 px-3 py-1">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden will-change-[clip-path]"
          style={{
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-forest/80 backdrop-blur-sm text-paper font-body text-13 px-3 py-1">
            {beforeLabel}
          </div>
        </div>

        {/* Divider line and circular handle */}
        <div
          className="absolute top-0 bottom-0 w-[1px] bg-paper shadow-sm pointer-events-none will-change-[left]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-paper border border-forest/30 flex items-center justify-center shadow-md">
            <div className="flex items-center gap-[3px]">
              <span className="w-1 h-1 rounded-full bg-forest" />
              <span className="w-1 h-1 rounded-full bg-forest" />
            </div>
          </div>
        </div>
      </div>

      {clinicalNote && (
        <p className="font-body text-13 text-forest-ink/60 mt-3 max-w-full">
          {clinicalNote}
        </p>
      )}
    </div>
  );
}
