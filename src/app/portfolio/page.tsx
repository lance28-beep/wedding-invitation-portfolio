"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { Dancing_Script, Great_Vibes } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

const templates = [
  {
    name: "Sinta",
    image: "/img/template_one.png",
    description: "Modern, clean, and photo-focused. Perfect for couples who want a fresh, elegant look.",
    features: ["Photo Gallery", "RSVP Form", "Mobile-First Design", "Social Links"],
    demo: "https://wedding-template1-jet.vercel.app/", // replace with real demo link
    messenger: "https://m.me/mr.c0oletz",
  },
  {
    name: "Tadhana",
    image: "/img/template_one.png",
    description: "Classic and timeless, with a beautiful timeline and RSVP integration.",
    features: ["Timeline", "RSVP Form", "Social Links", "Elegant Typography"],
    demo: "https://wedding-template1-jet.vercel.app/", // replace with real demo link
    messenger: "https://m.me/mr.c0oletz",
  },
  {
    name: "Amor",
    image: "/img/template_one.png",
    description: "Whimsical and floral, with a romantic countdown and music embed.",
    features: ["Floral Design", "Countdown Timer", "RSVP", "Music Embed"],
    demo: "https://wedding-template1-jet.vercel.app/", // replace with real demo link
    messenger: "https://m.me/mr.c0oletz",
  },
  {
    name: "Ligaya",
    image: "/img/template_one.png",
    description: "Minimalist and pastel, with a guestbook and Google Maps integration.",
    features: ["Pastel Colors", "Guestbook", "RSVP", "Google Maps"],
    demo: "https://wedding-template1-jet.vercel.app/", // replace with real demo link
    messenger: "https://m.me/mr.c0oletz",
  },
  {
    name: "Harana",
    image: "/img/template_one.png",
    description: "Musical and lively, with a video background and playlist support.",
    features: ["Video Background", "Playlist", "RSVP", "Animated Elements"],
    demo: "https://wedding-template1-jet.vercel.app/", // replace with real demo link
    messenger: "https://m.me/mr.c0oletz",
  },
  {
    name: "Bituin",
    image: "/img/template_one.png",
    description: "Starry night theme, animated with a dreamy gallery and countdown.",
    features: ["Star Animation", "Gallery", "RSVP", "Countdown"],
    demo: "https://wedding-template1-jet.vercel.app/", // replace with real demo link
    messenger: "https://m.me/mr.c0oletz",
  },
  {
    name: "Dalisay",
    image: "/img/template_one.png",
    description: "Pure and gold-accented, with registry and FAQ sections.",
    features: ["White & Gold", "Registry", "RSVP", "FAQ Section"],
    demo: "https://wedding-template1-jet.vercel.app/", // replace with real demo link
    messenger: "https://m.me/mr.c0oletz",
  },
  {
    name: "Alon",
    image: "/img/template_one.png",
    description: "Beach-inspired, with wave animations and travel info for guests.",
    features: ["Wave Animation", "Travel Info", "RSVP", "Gallery"],
    demo: "https://wedding-template1-jet.vercel.app/", // replace with real demo link
    messenger: "https://m.me/mr.c0oletz",
  }
];

const testimonials = [
  {
    quote: "Our wedding website was so beautiful and easy to share! Our guests loved it.",
    name: "Anna & Mark",
    photo: "/img/couple/ian-dooley-PuA6F4FAElw-unsplash.jpg",
    website: "https://annaandmark.com",
    socials: {
      facebook: "https://facebook.com/annaandmark",
      instagram: "https://instagram.com/annaandmarkwedding",
      twitter: ""
    }
  },
  {
    quote: "The RSVP feature made everything so simple. Highly recommended!",
    name: "Jessa & Carlo",
    photo: "/img/couple/ivan-kazlouskij-N2BpPCGkt5Y-unsplash.jpg",
    website: "",
    socials: {
      facebook: "https://facebook.com/jessaandcarlo",
      instagram: "",
      twitter: ""
    }
  },
  {
    quote: "We felt our love story was truly captured. Thank you for making our day extra special!",
    name: "Mia & Paolo",
    photo: "/img/couple/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg",
    website: "https://miapaolowedding.com",
    socials: {
      facebook: "",
      instagram: "https://instagram.com/miapaolowedding",
      twitter: ""
    }
  },
  {
    quote: "Super affordable and all features included. Best decision for our wedding!",
    name: "Lara & Ben",
    photo: "/img/couple/wiktoria-skrzekotowska-uAQ81XckW0E-unsplash.jpg",
    website: "",
    socials: {
      facebook: "",
      instagram: "",
      twitter: ""
    }
  },
];

// TestimonialCard for Marquee
const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <figure
    className={cn(
      "relative h-full w-[320px] min-w-[280px] max-w-[90vw] sm:w-80 sm:min-w-80 sm:max-w-80 flex flex-col overflow-hidden rounded-2xl border border-pink-100 bg-white p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl mx-4 align-top",
    )}
  >
    <div className="relative w-full h-48 sm:h-56 flex-shrink-0">
      <Image
        src={t.photo || '/testimonials/placeholder.jpg'}
        alt={t.name + ' photo'}
        fill
        className="object-cover w-full h-full"
      />
    </div>
    <div className="flex-1 flex flex-col p-6 relative">
      {/* Decorative Quotation SVGs */}
      <svg className="absolute left-2 top-2 w-10 h-10 text-pink-200 opacity-70 -z-0" viewBox="0 0 48 48" fill="none"><text x="0" y="38" fontSize="48" fontFamily="serif" fill="currentColor">“</text></svg>
      <svg className="absolute right-2 bottom-2 w-10 h-10 text-pink-200 opacity-70 -z-0" viewBox="0 0 48 48" fill="none"><text x="0" y="38" fontSize="48" fontFamily="serif" fill="currentColor">”</text></svg>
      <div className="flex-1 flex flex-col justify-center items-center min-h-[100px] mb-4 relative z-10">
        <div className="text-pink-600 text-lg md:text-xl font-serif italic font-semibold text-center break-words leading-relaxed whitespace-pre-line">{t.quote}</div>
      </div>
      {/* Divider */}
      <div className="w-10 h-1 mx-auto my-2 rounded-full bg-gradient-to-r from-pink-200 to-pink-100 opacity-60" />
      <div className="flex flex-col items-center mt-2">
        <span className="wedding-script text-pink-400 text-base md:text-lg mb-1 text-center break-words font-light">{t.name}</span>
        <div className="flex gap-3 mb-2 min-h-[32px] items-end justify-center w-full">
          {t.socials?.facebook && t.socials.facebook !== "" && (
            <a href={t.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-125 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-blue-600"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
          )}
          {t.socials?.instagram && t.socials.instagram !== "" && (
            <a href={t.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-125 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-pink-500"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
            </a>
          )}
          {t.socials?.twitter && t.socials.twitter !== "" && (
            <a href={t.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-125 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-sky-500"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
            </a>
          )}
          {t.website && t.website !== "" && (
            <a href={t.website} target="_blank" rel="noopener noreferrer" aria-label="Website" className="hover:scale-125 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-pink-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.25-9H21M3 12h2.25m12.364-6.364l-1.591 1.591m-9.192 9.192l-1.591 1.591m12.364 0l-1.591-1.591m-9.192-9.192L4.636 5.636M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"/></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  </figure>
);

export default function PortfolioPage() {
  useEffect(() => {
    const container = document.getElementById("floating-hearts-portfolio");
    if (!container) return;
    let running = true;
    function createHeart() {
      if (!running || !container) return;
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      const colors = ["#f9c2d1", "#f472b6", "#fbb6ce", "#b76e79"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      heart.style.left = `${40 + Math.random() * 20}%`;
      heart.style.animationDelay = `${Math.random() * 1.5}s`;
      heart.innerHTML = `<svg width='32' height='32' viewBox='0 0 24 24' fill='${color}' xmlns='http://www.w3.org/2000/svg'><path d='M12 21s-6.5-5.2-9-8.2C-1.5 8.5 2.5 3 7.5 5.5c2.1 1 3.5 3.1 4.5 5.1 1-2 2.4-4.1 4.5-5.1C21.5 3 25.5 8.5 21 12.8c-2.5 3-9 8.2-9 8.2z' stroke='#b76e79' stroke-width='1'/></svg>`;
      container.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 3500);
    }
    const interval = setInterval(createHeart, 900);
    return () => {
      running = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-pink-100 to-pink-300">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/img/alvin-mahmudov-9_XfcBxf_uo-unsplash.jpg)'}} />
        <div className="absolute inset-0 bg-black/70" />
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div id="floating-hearts-portfolio" className="w-full h-full" />
        </div>
        <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
          <h1 className="wedding-script text-4xl xs:text-5xl md:text-6xl text-white mb-2 md:mb-4 drop-shadow-2xl">
            Your Love Stories in Action
          </h1>
          <span className="block w-16 h-1 mx-auto mt-2 mb-4 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300" />
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg mb-2">
            See how we turn real love stories into beautiful wedding websites.
          </p>
          <p className="text-base md:text-lg text-pink-100 italic max-w-2xl mx-auto drop-shadow">
            &quot;Every couple is unique. Your website should be too.&quot;
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-2 sm:px-4 md:px-8 bg-white/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="wedding-script text-3xl md:text-5xl font-bold mb-4 text-pink-700 drop-shadow-lg flex flex-col items-center">
              All Templates Only ₱999!
              <span className="block w-16 h-1 mt-2 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Choose your favorite design—every template includes all features, for one affordable price.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {templates.map((tpl) => (
              <div key={tpl.name} className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col group heart-cursor-card">
                {/* ₱999 Badge */}
                <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow z-20 group-hover:scale-110 transition-transform">₱999 Only</span>
                {/* Image or Coming Soon */}
                <div className="relative h-[180px] xs:h-[220px] md:h-[220px] lg:h-[200px]">
                  {tpl.image ? (
                <Image
                      src={tpl.image}
                      alt={tpl.name + " Template"}
                  fill
                      className="object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-pink-50 text-pink-400 text-2xl font-bold italic">
                      Coming Soon
              </div>
                  )}
                  {!tpl.demo && (
                    <span className="absolute top-4 left-4 bg-yellow-300 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse z-10">
                      Coming Soon
                    </span>
                  )}
                  </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="wedding-script text-2xl md:text-3xl text-pink-600 mb-2">{tpl.name}</h3>
                  <p className="text-gray-600 mb-4 flex-1 text-base md:text-lg">{tpl.description}</p>
                  <ul className="mb-4 space-y-1">
                    {tpl.features.map((f, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:gap-2">
                    {tpl.demo ? (
                      <Link
                        href={tpl.demo}
                        target="_blank"
                        className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold text-base hover:bg-pink-700 transition-all shadow-md w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                        style={{boxShadow: '0 4px 16px 0 rgba(236, 72, 153, 0.15)'}}
                      >
                        View Website
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="bg-pink-200 text-white/80 px-6 py-2 rounded-full font-semibold text-base w-full sm:w-auto text-center cursor-not-allowed opacity-70"
                      >
                        Coming Soon
                      </button>
                    )}
                    <a
                      href={tpl.messenger}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold text-base hover:bg-pink-50 transition-all border-2 border-pink-600 shadow-md w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                      style={{boxShadow: '0 4px 16px 0 rgba(236, 72, 153, 0.10)'}}
                    >
                      Message Us
                    </a>
                  </div>
                </div>
              </div>
            ))}
            </div>

          {/* Custom Design Section */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h2 className="wedding-script text-3xl md:text-4xl font-bold mb-4 text-pink-700 drop-shadow-lg flex flex-col items-center">
              Why Choose Our Templates?
              <span className="block w-16 h-1 mt-2 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300" />
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Each template is crafted with love and attention to detail, blending elegance, romance, and modern features. Whether you dream of a classic, whimsical, or beach-inspired wedding, you&apos;ll find a design that perfectly fits your story. All templates are fully mobile-responsive, easy to personalize, and include every feature you need—no hidden fees, just one affordable price. Celebrate your love with a website as unique as your journey together!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Marquee (infinite, smooth) */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-pink-100 border-t border-pink-200 overflow-hidden w-full relative">
        <h2 className="wedding-script text-3xl md:text-4xl font-bold mb-10 text-pink-700 drop-shadow-lg text-center">What Couples Say</h2>
        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-30" style={{background: 'linear-gradient(to right, #fdf2f8 80%, transparent)'}} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-30" style={{background: 'linear-gradient(to left, #fdf2f8 80%, transparent)'}} />
        <div className="relative w-full flex flex-col gap-8 overflow-hidden">
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name + i} t={t} />
            ))}
          </Marquee>
        </div>
      </section>

      <Footer />
      <style jsx>{`
        .marquee-track {
          will-change: transform;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
} 