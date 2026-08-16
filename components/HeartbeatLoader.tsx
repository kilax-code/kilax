"use client";

import React from "react";

/**
 * Clean & Minimal Life-Support Heartbeat ECG Waveform
 */
export function ECGWaveform({ className = "h-8 w-48 text-orange-500", glow = true }: { className?: string; glow?: boolean }) {
  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${glow ? "filter drop-shadow-[0_0_8px_rgba(249,115,22,0.85)]" : ""}`}
      >
        <path
          d="M0,25 L60,25 L75,21 L85,25 L100,25 L110,6 L120,44 L130,17 L140,29 L150,25 L210,25 L225,21 L235,25 L250,25 L260,6 L270,44 L280,17 L290,29 L300,25 L360,25 L400,25"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-ecg-draw"
        />
      </svg>
      {/* Subtle sweeping light pulse */}
      <div className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent animate-ecg-scanline pointer-events-none" />
    </div>
  );
}

/**
 * Clean Heartbeat Inline Loader (replaces spinners across the app)
 */
export function HeartbeatInlineLoader({ text = "Loading...", className = "py-8" }: { text?: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2.5 ${className}`}>
      <div className="flex items-center justify-center">
        <ECGWaveform className="h-7 w-44 sm:w-56 text-orange-500" glow={true} />
      </div>
      {text && (
        <p className="text-xs sm:text-sm font-medium text-orange-400/90 tracking-wide font-mono animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}

/**
 * Clean Heartbeat Row Skeleton with Rhythmic Pulse
 */
export function HeartbeatRowSkeleton({ title }: { title?: string; count?: number }) {
  return (
    <div className="w-full">
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h2>
        </div>
      )}
      <div className="flex justify-center w-full py-8">
        <HeartbeatInlineLoader text={`Loading ${title ? title.toLowerCase() : "content"}...`} className="py-4" />
      </div>
    </div>
  );
}

/**
 * Clean Full Page Heartbeat Loader
 */
export function HeartbeatPageLoader({ text = "Loading Kilax..." }: { text?: string }) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <HeartbeatInlineLoader text={text} className="py-12" />
    </div>
  );
}
