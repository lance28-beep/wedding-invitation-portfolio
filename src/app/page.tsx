"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import PromoModal from "@/components/PromoModal";

export default function Home() {
  useEffect(() => {
    const container = document.getElementById("floating-hearts");
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
      <PromoModal />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/img/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div id="floating-hearts" className="w-full h-full" />
        </div>

        {/* Content */}
        <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-black/60 rounded-2xl px-4 md:px-8 py-8 shadow-2xl w-full">
            <div className="mb-6 md:mb-8">
              <span className="text-white/90 text-base md:text-lg tracking-widest drop-shadow-lg" style={{fontFamily: 'var(--font-playfair)'}}>WELCOME TO YOUR SPECIAL DAY</span>
            </div>
            <h1 className="mb-2 md:mb-6 text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-8xl text-white leading-tight md:leading-tight drop-shadow-2xl" style={{fontFamily: 'var(--font-playfair)'}}>
              Wedding Invitation Naga<br />
              <span className="text-pink-200 drop-shadow-2xl block mt-2 md:mt-0">Deserves This</span>
            </h1>
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl text-white/90 mb-4 md:mb-8 font-light drop-shadow-lg" style={{fontFamily: 'var(--font-playfair)'}}>
              All-in-One Wedding Website
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto drop-shadow-lg">
              Elegant One-Page Wedding Websites Crafted Just for You.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Link
                href="#about"
                className="w-full sm:w-auto text-center bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-all border border-white/20 drop-shadow"
                style={{maxWidth: '400px'}}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white py-4 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-bold animate-pulse">
            🎉 All Templates Only P999! All Features Included! Limited Time Offer! 🎉
          </p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-white/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-pink-700 drop-shadow-lg flex flex-col items-center justify-center">
              <span>Who We Are</span>
              <span className="block w-16 h-1 mt-2 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300" />
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              Your Partner in Stress-Free Wedding Prep
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                We are passionate about telling love stories through stunning wedding websites. Every couple has a unique story, and our goal is to showcase yours in a way that feels personal, heartfelt, and unforgettable.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                We believe every love story is worth celebrating. Let us help you create a digital experience that captures the magic of your special day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#portfolio"
                  className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-pink-700 transition-all shadow-md w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                  style={{boxShadow: '0 4px 16px 0 rgba(236, 72, 153, 0.15)'}}
                >
                  Check Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all border-2 border-pink-600 shadow-md w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                  style={{boxShadow: '0 4px 16px 0 rgba(236, 72, 153, 0.10)'}}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-pink-100/40 blur-xl scale-105" />
              <Image
                src="/img/jeremy-wong-weddings-K41SGnGKxVk-unsplash.jpg"
                alt="Wedding couple"
                fill
                className="object-cover rounded-lg shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-pink-700 mb-4 flex flex-col items-center">
              The Perfect Blend
              <span className="block w-16 h-1 mt-2 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300" />
            </h2>
            <p className="text-2xl text-gray-600 font-light">
              Why Couples Love Our Wedding Websites
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              title: 'Beautiful One Page Design',
              desc: 'Simple, elegant, and easy to navigate.'
            }, {
              title: 'Custom Copywriting',
              desc: 'Personalized love story and event details crafted just for you.'
            }, {
              title: 'Post-Wedding Updates',
              desc: 'Share wedding memories within 1-2 business days.'
            }, {
              title: 'Social Media Integration',
              desc: 'Share via one link or QR—quick and easy for everyone.'
            }].map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center group feature-icon-heart">
                <span className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-heartBeat">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto transition-colors duration-300 group-hover:fill-pink-500 group-hover:stroke-pink-600"
                    style={{ cursor: 'url("data:image/svg+xml,%3Csvg width=\'32\' height=\'32\' viewBox=\'0 0 24 24\' fill=\'%23f472b6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M12 21s-6.5-5.2-9-8.2C-1.5 8.5 2.5 3 7.5 5.5c2.1 1 3.5 3.1 4.5 5.1 1-2 2.4-4.1 4.5-5.1C21.5 3 25.5 8.5 21 12.8c-2.5 3-9 8.2-9 8.2z\' stroke=\'%23b76e79\' stroke-width=\'1\'/%3E%3C/svg%3E") 16 16, pointer' }}
                  >
                    <path
                      d="M12 21s-6.5-5.2-9-8.2C-1.5 8.5 2.5 3 7.5 5.5c2.1 1 3.5 3.1 4.5 5.1 1-2 2.4-4.1 4.5-5.1C21.5 3 25.5 8.5 21 12.8c-2.5 3-9 8.2-9 8.2z"
                      fill="#f9c2d1"
                      stroke="#b76e79"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Your Love Stories in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we turn real love stories into beautiful wedding websites. Each one is designed to reflect the couple&apos;s journey and love story.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items will be added here */}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-pink-700 drop-shadow-lg flex flex-col items-center">
              Simple & Hassle-Free
              <span className="block w-16 h-1 mt-2 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300" />
            </h2>
            <p className="text-2xl text-gray-600 font-light">
              Your Wedding Website in 3 Easy Steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="4" fill="#f9c2d1" stroke="#b76e79" strokeWidth="1.5"/><path d="M8 12h8" stroke="#b76e79" strokeWidth="1.5" strokeLinecap="round"/></svg>
                ),
                title: 'Choose Your Template',
                desc: 'Select the design that best fits your style and needs. All features are included with any template.'
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#fbb6ce" stroke="#b76e79" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="#b76e79" strokeWidth="1.5" strokeLinecap="round"/></svg>
                ),
                title: 'Personalize Your Details',
                desc: 'Pick your colors and fill in your love story, event info, and more. Make it truly yours!'
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-6.5-5.2-9-8.2C-1.5 8.5 2.5 3 7.5 5.5c2.1 1 3.5 3.1 4.5 5.1 1-2 2.4-4.1 4.5-5.1C21.5 3 25.5 8.5 21 12.8c-2.5 3-9 8.2-9 8.2z" fill="#f9c2d1" stroke="#b76e79" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" fill="#fbb6ce" stroke="#b76e79" strokeWidth="1.2"/></svg>
                ),
                title: 'Go Live Instantly',
                desc: 'We&apos;ll handle the rest—your website is deployed and ready to share with your loved ones!'
              }
            ].map((step) => (
              <div key={step.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 group">
                <span className="mb-4 group-hover:animate-heartBeat">{step.icon}</span>
                <h3 className="text-xl font-semibold mb-2 text-pink-700">{step.title}</h3>
                <p className="text-gray-600 text-base md:text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-pink-700 drop-shadow-lg flex flex-col items-center wedding-script">
              Frequently Asked Questions
              <span className="block w-16 h-1 mt-2 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300" />
            </h2>
            <p className="text-2xl text-gray-600 font-light">
              Everything you need to know about our wedding websites
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: '#fff' }}>Start Your Dream Wedding Website Today!</h2>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Transform your love story into a stunning digital experience.
          </p>
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              All Templates & Features for Only P999!
            </p>
            <p className="text-lg opacity-90">
              Everything included - no hidden fees! Limited time offer to make your big day unforgettable!
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-medium hover:bg-pink-50 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            I&apos;m ready to book!
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
      @keyframes heartBeat {
        0% { transform: scale(1); }
        20% { transform: scale(1.15); }
        40% { transform: scale(0.95); }
        60% { transform: scale(1.08); }
        80% { transform: scale(0.97); }
        100% { transform: scale(1); }
      }
      .feature-icon-heart:hover svg {
        animation: heartBeat 0.7s;
      }
      .faq-content {
        transition: max-height 0.3s ease-in-out;
      }
      .faq-content.max-h-0 {
        padding-top: 0;
        padding-bottom: 0;
      }
      .faq-content.max-h-[500px] {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      @media (max-width: 768px) {
        .faq-content.max-h-[500px] {
          max-height: 1000px;
        }
      }
      .wedding-script {
        font-family: 'Dancing Script', 'Great Vibes', cursive, serif;
        letter-spacing: 0.01em;
      }
      `}</style>
    </div>
  );
}

// FAQ Component
function FAQ() {
  const faqs = [
    {
      question: "What's included in the P999 package?",
      answer: "Everything! You get a beautiful one-page wedding website with all features including custom copywriting, photo gallery, RSVP form, social media integration, and post-wedding updates. No hidden fees or additional charges."
    },
    {
      question: "How long does it take to get my website?",
      answer: "We typically deliver your website within 1-2 business days after receiving your content. We'll work closely with you to ensure everything is perfect for your special day."
    },
    {
      question: "Can I customize the design?",
      answer: "Yes! All our templates are fully customizable. You can choose colors, fonts, and layouts to match your wedding theme perfectly."
    },
    {
      question: "Do I need technical skills to manage the website?",
      answer: "Not at all! We handle all the technical aspects. You just need to provide your content and photos, and we'll take care of the rest."
    },
    {
      question: "Can I update the website after the wedding?",
      answer: "Absolutely! We'll help you update the website with wedding photos and memories within 1-2 business days after your wedding."
    },
    {
      question: "Is there a contract or long-term commitment?",
      answer: "No long-term contracts! The P999 is a one-time payment for your complete wedding website. We'll keep it live for your special day and beyond."
    }
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-8">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`bg-white rounded-2xl shadow-xl transition-all duration-300 border border-transparent hover:shadow-2xl ${isOpen ? 'border-pink-200 bg-pink-50/60' : ''}`}
            style={{ boxShadow: isOpen ? '0 8px 32px 0 rgba(236, 72, 153, 0.10)' : undefined }}
          >
            <button
              className={`w-full px-6 py-5 text-left focus:outline-none flex items-center justify-between gap-2 transition-colors duration-300 ${isOpen ? 'bg-pink-50/60' : ''}`}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${idx}`}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              style={{ minHeight: 64 }}
            >
              <span className="wedding-script text-pink-600 text-lg md:text-xl font-semibold flex-1">{faq.question}</span>
              <svg
                className={`w-7 h-7 text-pink-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`faq-content-${idx}`}
              className="overflow-hidden transition-all duration-400"
              style={{
                maxHeight: isOpen ? 300 : 0,
                opacity: isOpen ? 1 : 0,
                padding: isOpen ? '0 1.5rem 1.25rem 1.5rem' : '0 1.5rem',
                transition: 'max-height 0.4s cubic-bezier(.4,0,.2,1), opacity 0.3s, padding 0.3s',
              }}
            >
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
