import React, { useState } from "react";
import { X, Calendar } from "lucide-react";

/**
 * Animated Festive Diya Lamp SVG (Inspired by SalesHiker festive design)
 * High-definition vector diya with golden brass bowl, oil pool, multi-stop gradient flame, and inner core
 */
const DiyaLampSVG = ({
  id = "diya",
  className = "w-6 h-5.5 sm:w-8 sm:h-7.5",
}: {
  id?: string;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id={`flameGrad-${id}`}
        x1="12"
        y1="1"
        x2="12"
        y2="12"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#FDE047" />
        <stop offset="70%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
      <linearGradient
        id={`diyaGrad-${id}`}
        x1="3"
        y1="13"
        x2="21"
        y2="21"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
    </defs>
    {/* Animated Teardrop Flame */}
    <path
      d="M12 1 C10 5, 8.5 8, 12 12 C15.5 8, 14 5, 12 1 Z"
      fill={`url(#flameGrad-${id})`}
    />
    {/* White-hot Inner Flame Core */}
    <circle cx="12" cy="9" r="2.2" fill="#FFFBEB" />
    {/* Golden Diya Bowl */}
    <path
      d="M3 13 C3 18.5, 8 21, 12 21 C16 21, 21 18.5, 21 13 H3 Z"
      fill={`url(#diyaGrad-${id})`}
    />
    {/* Diya Rim & Oil Pool */}
    <ellipse cx="12" cy="13" rx="9" ry="2" fill="#D97706" />
  </svg>
);

export default function DiwaliBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div
      role="region"
      aria-label="Diwali Holiday Notice"
      className="relative overflow-hidden bg-[#3780f6] text-white py-2 px-3 sm:px-6 shadow-md border-b border-blue-400/50 select-none"
      style={{
        background: "linear-gradient(90deg, #1d4ed8 0%, #3780f6 50%, #1d4ed8 100%)",
      }}
    >
      <style>{`
        /* ===================================================
           DIWALI FESTIVE CRACKERS & FIREWORKS (from SalesHiker)
           =================================================== */
        .diwali-effects {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        /* Bursting Firework Particles */
        .diwali-firework {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .df-1 {
          top: 50%;
          left: 6%;
          animation: firework-burst-1 2.8s infinite ease-out;
        }

        .df-2 {
          top: 45%;
          right: 6%;
          animation: firework-burst-2 3.2s infinite ease-out 1s;
        }

        .df-3 {
          top: 35%;
          left: 18%;
          animation: firework-burst-3 3.6s infinite ease-out 0.5s;
        }

        .df-4 {
          top: 55%;
          right: 18%;
          animation: firework-burst-4 3s infinite ease-out 1.7s;
        }

        .df-5 {
          top: 40%;
          left: 32%;
          animation: firework-burst-2 3.4s infinite ease-out 1.2s;
        }

        .df-6 {
          top: 50%;
          right: 32%;
          animation: firework-burst-1 3.1s infinite ease-out 0.8s;
        }

        /* Firecracker Burst Keyframes */
        @keyframes firework-burst-1 {
          0% {
            transform: scale(0.1);
            opacity: 0;
            box-shadow: 0 0 0 #fff;
          }
          15% {
            opacity: 1;
          }
          50% {
            opacity: 1;
            box-shadow:
              0 -22px 0 0 #FFE600,
              16px -16px 0 0 #FF1744,
              22px 0 0 0 #FFFFFF,
              16px 16px 0 0 #FF9100,
              0 22px 0 0 #00E5FF,
              -16px 16px 0 0 #FFD700,
              -22px 0 0 0 #FF0055,
              -16px -16px 0 0 #FFFFFF,
              0 -12px 2px 0 #FFF,
              9px 9px 2px 0 #FFD700,
              -9px 9px 2px 0 #FF5722,
              -9px -9px 2px 0 #00E676;
          }
          85%, 100% {
            transform: scale(1.3) translateY(8px);
            opacity: 0;
            box-shadow:
              0 -30px 1px 0 rgba(255, 230, 0, 0),
              22px -22px 1px 0 rgba(255, 23, 68, 0),
              30px 0 1px 0 rgba(255, 255, 255, 0),
              22px 22px 1px 0 rgba(255, 145, 0, 0),
              0 30px 1px 0 rgba(0, 229, 255, 0),
              -22px 22px 1px 0 rgba(255, 215, 0, 0),
              -30px 0 1px 0 rgba(255, 0, 85, 0),
              -22px -22px 1px 0 rgba(255, 255, 255, 0);
          }
        }

        @keyframes firework-burst-2 {
          0% {
            transform: scale(0.1);
            opacity: 0;
            box-shadow: 0 0 0 #fff;
          }
          15% {
            opacity: 1;
          }
          50% {
            opacity: 1;
            box-shadow:
              0 -24px 0 0 #FFD700,
              17px -17px 0 0 #FF1744,
              24px 0 0 0 #00E5FF,
              17px 17px 0 0 #FFEB3B,
              0 24px 0 0 #FFFFFF,
              -17px 17px 0 0 #FF9100,
              -24px 0 0 0 #E040FB,
              -17px -17px 0 0 #76FF03;
          }
          85%, 100% {
            transform: scale(1.4) translateY(10px);
            opacity: 0;
          }
        }

        @keyframes firework-burst-3 {
          0% {
            transform: scale(0.1);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            opacity: 1;
            box-shadow:
              0 -18px 0 0 #FFFFFF,
              13px -13px 0 0 #FFAB00,
              18px 0 0 0 #FF3D00,
              13px 13px 0 0 #FFEA00,
              0 18px 0 0 #00B0FF,
              -13px 13px 0 0 #F50057,
              -18px 0 0 0 #FFFFFF,
              -13px -13px 0 0 #FFD600;
          }
          85%, 100% {
            transform: scale(1.3) translateY(6px);
            opacity: 0;
          }
        }

        @keyframes firework-burst-4 {
          0% {
            transform: scale(0.1);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            opacity: 1;
            box-shadow:
              0 -20px 0 0 #FFEB3B,
              14px -14px 0 0 #FF4081,
              20px 0 0 0 #FFFFFF,
              14px 14px 0 0 #00E676,
              0 20px 0 0 #FF9100,
              -14px 14px 0 0 #FFD700,
              -20px 0 0 0 #651FFF,
              -14px -14px 0 0 #00E5FF;
          }
          85%, 100% {
            transform: scale(1.3) translateY(8px);
            opacity: 0;
          }
        }

        /* Rocket Sparkler Trails */
        .diwali-rocket {
          position: absolute;
          width: 2px;
          height: 14px;
          background: linear-gradient(to top, rgba(255, 215, 0, 0), #FFD700, #FFFFFF);
          border-radius: 2px;
          opacity: 0;
        }

        .dr-left {
          left: 10%;
          bottom: -5px;
          animation: rocket-shoot 3.8s infinite ease-out 0.3s;
        }

        .dr-right {
          right: 11%;
          bottom: -5px;
          animation: rocket-shoot 4.2s infinite ease-out 1.8s;
        }

        @keyframes rocket-shoot {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          60% {
            transform: translateY(-38px) scaleY(1.8);
            opacity: 0.8;
          }
          80%, 100% {
            transform: translateY(-50px) scaleY(0.4);
            opacity: 0;
          }
        }

        /* Twinkling Sparkles */
        .diwali-sparkle {
          position: absolute;
          background: #FFD700;
          border-radius: 50%;
          opacity: 0;
        }

        .ds-1 {
          width: 4px;
          height: 4px;
          top: 20%;
          left: 14%;
          animation: sparkle-twinkle 2s infinite ease-in-out;
        }

        .ds-2 {
          width: 5px;
          height: 5px;
          top: 68%;
          left: 28%;
          animation: sparkle-twinkle 2.5s infinite ease-in-out 0.4s;
          background: #FFFFFF;
        }

        .ds-3 {
          width: 3px;
          height: 3px;
          top: 30%;
          right: 28%;
          animation: sparkle-twinkle 1.8s infinite ease-in-out 0.8s;
          background: #FF9100;
        }

        .ds-4 {
          width: 4px;
          height: 4px;
          top: 65%;
          right: 14%;
          animation: sparkle-twinkle 2.2s infinite ease-in-out 1.2s;
          background: #FFE600;
        }

        .ds-5 {
          width: 3px;
          height: 3px;
          top: 15%;
          right: 46%;
          animation: sparkle-twinkle 2.7s infinite ease-in-out 0.2s;
          background: #FFFFFF;
        }

        @keyframes sparkle-twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.3) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.4) rotate(180deg);
            box-shadow: 0 0 8px #FFD700;
          }
        }

        /* ===================================================
           DIYA FLICKER ANIMATION (from SalesHiker)
           =================================================== */
        .diya-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: diya-flicker 1.6s infinite alternate ease-in-out;
          filter: drop-shadow(0 0 6px rgba(255, 230, 0, 0.85));
          flex-shrink: 0;
        }

        @keyframes diya-flicker {
          0% {
            transform: scale(0.96) rotate(-2deg);
            filter: drop-shadow(0 0 4px rgba(255, 200, 0, 0.7));
          }
          100% {
            transform: scale(1.08) rotate(2deg);
            filter: drop-shadow(0 0 10px rgba(255, 240, 50, 1));
          }
        }

        /* Twirling Sparkle Emoji */
        .diwali-sparkle-emoji {
          display: inline-block;
          animation: spin-sparkle 3s infinite linear;
          flex-shrink: 0;
        }

        @keyframes spin-sparkle {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.25) rotate(18deg);
            filter: drop-shadow(0 0 6px #FFFFFF);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        /* ===================================================
           DIFFERENT & SLOWER LABEL ZOOM ANIMATION
           Smooth 3.2s breathing cycle with radiant festive glow
           =================================================== */
        .diwali-holiday-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: linear-gradient(135deg, #FEF08A 0%, #FDE047 50%, #F59E0B 100%);
          color: #0F172A;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.3px;
          padding: 2.5px 12px;
          border-radius: 9999px;
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), 0 0 12px rgba(254, 240, 138, 0.65);
          animation: slowFestiveZoom 3.2s infinite ease-in-out;
          transform-origin: center;
          user-select: none;
          margin: 0 4px;
        }

        @keyframes slowFestiveZoom {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), 0 0 10px rgba(254, 240, 138, 0.5);
          }
          40% {
            transform: scale(1.02);
            box-shadow: 0 4px 18px rgba(0, 0, 0, 0.22), 0 0 22px rgba(254, 240, 138, 0.95);
          }
          70% {
            transform: scale(1.04);
            box-shadow: 0 3px 14px rgba(0, 0, 0, 0.18), 0 0 16px rgba(254, 240, 138, 0.7);
          }
        }

        @media (max-width: 768px) {
          .df-3, .df-4, .df-5, .df-6 {
            display: none;
          }
          .diwali-holiday-badge {
            font-size: 11.5px;
            padding: 2px 9px;
          }
        }
      `}</style>

      {/* Ambient Firecracker & Firework Particle Layer (SalesHiker Effects) */}
      <div className="diwali-effects" aria-hidden="true">
        <div className="diwali-firework df-1" />
        <div className="diwali-firework df-2" />
        <div className="diwali-firework df-3" />
        <div className="diwali-firework df-4" />
        <div className="diwali-firework df-5" />
        <div className="diwali-firework df-6" />
        <div className="diwali-rocket dr-left" />
        <div className="diwali-rocket dr-right" />
        <div className="diwali-sparkle ds-1" />
        <div className="diwali-sparkle ds-2" />
        <div className="diwali-sparkle ds-3" />
        <div className="diwali-sparkle ds-4" />
        <div className="diwali-sparkle ds-5" />
      </div>

      {/* Main Festive Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-3.5 px-4 sm:px-12 text-center min-h-[38px]">
        {/* Left Animated Diya Lamp */}
        <span className="diya-icon">
          <DiyaLampSVG id="left" />
        </span>

        {/* Central Holiday Notice Text */}
        <div className="text-xs sm:text-[13.5px] text-white font-medium leading-relaxed tracking-normal flex items-center flex-wrap justify-center gap-x-1.5 gap-y-1">

          <span>Support and responses may take a little longer than usual due to our</span>
          <span className="diwali-holiday-badge">
            <Calendar className="w-3.5 h-3.5 inline mr-1 text-slate-800" />
            Diwali Holiday: November 7–11
          </span>
          <span>Thank you for your understanding.</span>
        </div>

        {/* Right Animated Diya Lamp */}
        <span className="diya-icon">
          <DiyaLampSVG id="right" />
        </span>
      </div>

      {/* Dismiss / Close Button */}
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-all z-20 cursor-pointer"
        aria-label="Dismiss Diwali holiday notice"
        title="Dismiss notice"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
