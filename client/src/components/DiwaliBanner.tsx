import React, { useState } from "react";
import { Calendar, X, Sparkles } from "lucide-react";

/**
 * Luminous Golden Diya Lamp SVG (Kept intact as requested)
 */
const DiyaLamp = ({ className = "w-14 h-14" }: { className?: string }) => (
  <svg
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer Radiant Glow */}
    <ellipse cx="36" cy="24" rx="22" ry="24" fill="url(#diyaFlameAura)" opacity="0.9" />

    {/* Flame Outer Silhouette */}
    <path
      d="M36 4C36 4 23 20 23 29C23 36.5 28.8 42 36 42C43.2 42 49 36.5 49 29C49 20 36 4 36 4Z"
      fill="url(#diyaOuterFlame)"
    />

    {/* Flame Middle Glow */}
    <path
      d="M36 12C36 12 27 22 27 29C27 34 31 38 36 38C41 38 45 34 45 29C45 22 36 12 36 12Z"
      fill="url(#diyaMidFlame)"
    />

    {/* Flame Core White Highlight */}
    <path
      d="M36 18C36 18 31 25 31 30C31 32.8 33.2 35 36 35C38.8 35 41 32.8 41 30C41 25 36 18 36 18Z"
      fill="#ffffff"
    />

    {/* Diya Brass Rim Highlight */}
    <ellipse cx="36" cy="41" rx="26" ry="6" fill="url(#diyaRimGrad)" />
    <ellipse cx="36" cy="40" rx="23" ry="4" fill="url(#diyaOilPool)" />

    {/* Diya Brass Body */}
    <path
      d="M10 41C10 41 16 58 36 58C56 58 62 41 62 41C62 41 53 47 36 47C19 47 10 41 10 41Z"
      fill="url(#diyaBodyGrad)"
    />

    {/* Diya Decorative Filigree Ring */}
    <path
      d="M23 49.5C26.5 53 31 54.5 36 54.5C41 54.5 45.5 53 49 49.5"
      stroke="#fef08a"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.9"
    />

    {/* Diya Pedestal Base */}
    <path
      d="M27 57C27 57 29.5 63.5 24 65.5H48C42.5 63.5 45 57 45 57H27Z"
      fill="url(#diyaStandGrad)"
    />
    <ellipse cx="36" cy="65.5" rx="15" ry="2" fill="#451a03" opacity="0.65" />

    <defs>
      <radialGradient id="diyaFlameAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" />
        <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.65" />
        <stop offset="70%" stopColor="#ea580c" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
      </radialGradient>

      <linearGradient id="diyaOuterFlame" x1="36" y1="4" x2="36" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="20%" stopColor="#fde047" />
        <stop offset="65%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>

      <linearGradient id="diyaMidFlame" x1="36" y1="12" x2="36" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="45%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>

      <linearGradient id="diyaRimGrad" x1="10" y1="41" x2="62" y2="41" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#92400e" />
        <stop offset="20%" stopColor="#fde047" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="80%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#92400e" />
      </linearGradient>

      <radialGradient id="diyaOilPool" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#78350f" />
        <stop offset="75%" stopColor="#451a03" />
        <stop offset="100%" stopColor="#92400e" />
      </radialGradient>

      <linearGradient id="diyaBodyGrad" x1="36" y1="41" x2="36" y2="58" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="20%" stopColor="#d97706" />
        <stop offset="65%" stopColor="#92400e" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>

      <linearGradient id="diyaStandGrad" x1="36" y1="57" x2="36" y2="65.5" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="50%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
    </defs>
  </svg>
);

/**
 * Festive Diwali Firecracker Rocket with sparkling fuse & bursting stars
 */
const FirecrackerElement = ({ className = "w-10 h-16", flipped = false }: { className?: string; flipped?: boolean }) => (
  <svg
    viewBox="0 0 60 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? "-scale-x-100" : ""}`}
    aria-hidden="true"
  >
    {/* Rocket Stick */}
    <line x1="28" y1="42" x2="16" y2="86" stroke="#fef08a" strokeWidth="2.5" strokeLinecap="round" />

    {/* Rocket Cylinder Body (Tilted) */}
    <g transform="rotate(-15 28 36)">
      {/* Body Cylinder */}
      <rect x="20" y="20" width="16" height="32" rx="3" fill="url(#rocketBodyGrad)" stroke="#fef08a" strokeWidth="1" />
      {/* Decorative Gold Rings */}
      <rect x="20" y="27" width="16" height="4" fill="#fde047" />
      <rect x="20" y="37" width="16" height="4" fill="#fbbf24" />

      {/* Cone Tip */}
      <path d="M28 6L37 20H19L28 6Z" fill="url(#rocketTipGrad)" />

      {/* Burning Fuse */}
      <path d="M28 6C28 2 32 0 35 -4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="35" cy="-4" r="3.5" fill="#fef08a" />
      <path d="M35 -4L39 -7M35 -4L40 -2M35 -4L36 -9M35 -4L31 -6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Sparkling particles shooting from firecracker */}
    <circle cx="12" cy="18" r="2.5" fill="#fde047" opacity="0.9" />
    <circle cx="6" cy="32" r="1.8" fill="#ffffff" opacity="0.9" />
    <circle cx="48" cy="14" r="2" fill="#fef08a" opacity="0.85" />
    <circle cx="52" cy="28" r="2.5" fill="#fde047" opacity="0.9" />
    <circle cx="42" cy="62" r="1.8" fill="#ffffff" opacity="0.8" />

    {/* Starburst sparks */}
    <path d="M48 6L50 14L58 16L50 18L48 26L46 18L38 16L46 14Z" fill="#fef08a" opacity="0.9" />
    <path d="M8 20L9.5 25L14.5 26.5L9.5 28L8 33L6.5 28L1.5 26.5L6.5 25Z" fill="#ffffff" opacity="0.85" />

    <defs>
      <linearGradient id="rocketBodyGrad" x1="20" y1="20" x2="36" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="40%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#991b1b" />
      </linearGradient>

      <linearGradient id="rocketTipGrad" x1="19" y1="6" x2="37" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="60%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
    </defs>
  </svg>
);

/**
 * Celebratory Firecracker Sparkle Burst SVG
 */
const FirecrackerBurst = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Central warm glow */}
    <circle cx="40" cy="40" r="14" fill="url(#burstCentralGlow)" opacity="0.85" />

    {/* Radiating firework sparks */}
    {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => {
      const length = i % 2 === 0 ? 32 : 22;
      return (
        <g key={deg} transform={`rotate(${deg} 40 40)`}>
          <line
            x1="40"
            y1="40"
            x2="40"
            y2={40 - length}
            stroke="url(#burstSparkGrad)"
            strokeWidth={i % 2 === 0 ? "2.2" : "1.6"}
            strokeLinecap="round"
          />
          <circle cx="40" cy={40 - length} r={i % 2 === 0 ? "2.4" : "1.8"} fill="#ffffff" />
        </g>
      );
    })}

    {/* Center 8-point bright star */}
    <path
      d="M40 26L42 37L53 38.5L42 41L40 52L38 41L27 38.5L38 37Z"
      fill="#ffffff"
      opacity="0.95"
    />

    <defs>
      <radialGradient id="burstCentralGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="45%" stopColor="#fef08a" stopOpacity="0.75" />
        <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>

      <linearGradient id="burstSparkGrad" x1="40" y1="40" x2="40" y2="8" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="35%" stopColor="#fde047" />
        <stop offset="80%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
    </defs>
  </svg>
);

export default function DiwaliBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div
      role="region"
      aria-label="Diwali Holiday Notice"
      className="relative overflow-hidden bg-[#3780f6] text-white py-3 px-3 sm:px-6 border-b border-blue-400 shadow-md"
    >
      {/* Ambient warm lighting under lamps */}
      <div className="absolute left-6 sm:left-14 top-1/2 -translate-y-1/2 w-40 h-28 rounded-full bg-amber-400/20 blur-xl pointer-events-none" />
      <div className="absolute right-6 sm:right-14 top-1/2 -translate-y-1/2 w-40 h-28 rounded-full bg-amber-400/20 blur-xl pointer-events-none" />

      {/* LEFT SIDE: Lamp + Firecracker (Desktop & Tablet) */}
      <div className="hidden md:flex items-center gap-2.5 absolute left-4 lg:left-10 xl:left-16 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10">
        <div className="relative flex items-center justify-center">
          <DiyaLamp className="w-12 h-12 lg:w-14 lg:h-14 relative z-10 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
        </div>
        <div className="relative flex items-center justify-center">
          <FirecrackerElement className="w-10 h-16 lg:w-11 lg:h-18 relative z-10 drop-shadow-[0_0_10px_rgba(254,240,138,0.8)]" />
          <div className="absolute -top-3 -right-2">
            <FirecrackerBurst className="w-12 h-12 animate-pulse" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Lamp + Firecracker (Desktop & Tablet) */}
      <div className="hidden md:flex items-center gap-2.5 absolute right-4 lg:right-10 xl:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10">
        <div className="relative flex items-center justify-center">
          <FirecrackerElement className="w-10 h-16 lg:w-11 lg:h-18 relative z-10 drop-shadow-[0_0_10px_rgba(254,240,138,0.8)]" flipped />
          <div className="absolute -top-3 -left-2">
            <FirecrackerBurst className="w-12 h-12 animate-pulse" />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <DiyaLamp className="w-12 h-12 lg:w-14 lg:h-14 relative z-10 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
        </div>
      </div>

      {/* Center Notice Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-16">
        {/* Row 1: Notice Badge with clean Theme Styling */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold mb-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-sm text-white">
            <Calendar className="w-4 h-4 text-amber-300 shrink-0" />
            <span className="font-bold tracking-wide">Diwali Holiday:</span>
            <span className="text-blue-100 hidden sm:inline">Our team will be celebrating Diwali from</span>
            <span className="bg-amber-400 text-slate-950 font-extrabold px-2.5 py-0.5 rounded-full text-xs sm:text-sm shadow-sm whitespace-nowrap">
              November 7–11
            </span>
          </span>
        </div>

        {/* Row 2: Availability Statement */}
        <p className="text-xs sm:text-[13px] text-blue-50/95 font-medium leading-relaxed max-w-4xl mx-auto">
          During this time, support will be available on a limited basis, and responses may take a little longer than usual.
        </p>

        {/* Row 3: Festive Greeting with Firecracker Sparkle */}
        <p className="text-xs sm:text-[13px] text-white font-medium mt-1">
          Thank you for your patience and understanding.{" "}
          <span className="inline-flex items-center gap-1 font-bold text-amber-300 tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)] whitespace-nowrap">
            Happy Diwali! 🪔 🎆 <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          </span>
        </p>
      </div>

      {/* Close / Dismiss Button */}
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="absolute right-2 top-2 sm:right-3 sm:top-3 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-all z-20"
        aria-label="Dismiss Diwali holiday notice"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
