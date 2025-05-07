"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PromoModal() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Show modal after scrolling 30% of the page
  useEffect(() => {
    if (dismissed) return;
    function onScroll() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0 && scrollY / docHeight > 0.3) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  // Trap focus and close on Escape
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Confetti/sparkle effect
  useEffect(() => {
    if (!open) return;
    const canvas = document.getElementById("promo-confetti") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrame: number;
    const confetti: {x: number, y: number, r: number, o: number, s: number, c: string}[] = [];
    const colors = ["#f9c2d1", "#fbb6ce", "#fffbe6", "#ffe4e6", "#ffd700", "#b76e79"];
    for (let i = 0; i < 24; i++) {
      confetti.push({
        x: Math.random() * 400,
        y: Math.random() * 320,
        r: 2 + Math.random() * 3,
        o: 0.5 + Math.random() * 0.5,
        s: 0.5 + Math.random() * 1.2,
        c: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, 400, 320);
      confetti.forEach(f => {
        ctx.globalAlpha = f.o;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, 2 * Math.PI);
        ctx.fillStyle = f.c;
        ctx.fill();
        f.y += f.s;
        if (f.y > 320) f.y = -10;
      });
      ctx.globalAlpha = 1;
      animationFrame = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationFrame);
  }, [open]);

  if (!open || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative w-[95vw] max-w-3xl mx-auto rounded-3xl border border-pink-100 shadow-2xl bg-gradient-to-br from-white via-pink-50 to-pink-100 flex flex-col md:flex-row items-stretch overflow-hidden animate-[modalPop_0.4s_ease]"
        role="dialog"
        aria-modal="true"
        aria-label="Promo: Get 30% Off Your Wedding Website"
        style={{ minHeight: 'auto', margin: '0 auto' }}
      >
        {/* Confetti Canvas */}
        <canvas id="promo-confetti" width={400} height={320} className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" />
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-pink-600 transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-pink-50"
          aria-label="Close promo modal"
          onClick={() => { setOpen(false); setDismissed(true); }}
        >
          &times;
        </button>
        {/* Left: Text & Form */}
        <div className="flex flex-col justify-center md:w-[56%] px-6 py-8 md:py-16 md:pl-12 md:pr-8 z-10 bg-white/90 md:rounded-l-3xl md:rounded-r-none shadow-xl md:shadow-2xl relative">
          <div className="mb-6">
            <h2 className="wedding-script text-4xl md:text-7xl font-extrabold leading-tight mb-2 text-pink-500 drop-shadow-sm tracking-tight text-center md:text-left">
              Get 30% Off
            </h2>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span className="text-2xl md:text-4xl font-serif font-extrabold text-gray-900 leading-tight tracking-tight">Your Wedding Website</span>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full mx-auto md:mx-0 mb-2" />
          </div>
          <p className="text-gray-700 mb-6 text-base md:text-lg text-center md:text-left">Sign up to our newsletter and receive an exclusive 30% discount on your dream wedding invitation website.</p>
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white/95 rounded-2xl shadow-lg p-4 md:p-8 mb-4 border border-pink-100 w-full max-w-xs md:max-w-md mx-auto md:mx-0 relative z-20">
              <form className="space-y-3 md:space-y-5">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors text-base md:text-lg"
                  required
                  aria-label="Full Name"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors text-base md:text-lg"
                  required
                  aria-label="Email"
                />
                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white px-6 py-3 md:py-4 rounded-md hover:bg-pink-700 transition-colors font-semibold shadow focus:outline-none focus:ring-2 focus:ring-pink-400 text-base md:text-lg"
                  aria-label="Claim My Discount Now"
                >
                  Claim My Discount Now
                </button>
              </form>
            </div>
          </div>
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute top-8 right-[-1px] h-[calc(100%-4rem)] w-px bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100 opacity-70" />
        </div>
        {/* Right: Images (hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center justify-center md:w-[44%] relative bg-white/40 backdrop-blur-lg px-8 py-12 z-10">
          <Image
            src="/img/promo-bg-flowers.png"
            alt="Floral background"
            fill
            className="object-cover absolute inset-0 rounded-r-3xl opacity-40 -z-10"
            style={{objectFit: 'cover'}}
          />
          <div className="flex flex-col gap-8 items-center relative z-10">
            <div className="relative animate-[badgePop_0.6s_ease]">
              <Image
                src="/img/template_one.png"
                alt="Template 1"
                width={160}
                height={110}
                className="rounded-lg shadow-lg rotate-[-8deg] border-2 border-white"
              />
              <span className="absolute top-3 left-3 bg-yellow-300 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full shadow animate-pulse">Best Seller</span>
            </div>
            <div className="relative animate-[badgePop_0.7s_ease]">
              <Image
                src="/img/template_two.png"
                alt="Template 2"
                width={160}
                height={110}
                className="rounded-lg shadow-lg rotate-[6deg] border-2 border-white"
              />
              <span className="absolute top-3 left-3 bg-pink-200 text-pink-700 text-sm font-bold px-3 py-1 rounded-full shadow animate-pulse">Most Popular</span>
            </div>
            <div className="relative animate-[badgePop_0.8s_ease]">
              <Image
                src="/img/template_two.png"
                alt="Template 3"
                width={160}
                height={110}
                className="rounded-lg shadow-lg rotate-[-4deg] border-2 border-white"
              />
            </div>
          </div>
        </div>
      <style jsx global>{`
        @keyframes modalPop {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes badgePop {
          0% { opacity: 0; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      </div>
    </div>
  );
} 