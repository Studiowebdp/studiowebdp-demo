// app/components/HeroHome.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TypewriterText from "./TypewriterText";

export default function HeroHome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Piccolo delay per far partire l'animazione dopo il mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[62fr_38fr] gap-12 items-center">
        {/* TESTO */}
        <div>
          {/* Titolo con split + typed */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-extrabold leading-[1.15] text-slate-900 mb-5">
            {/* Riga 1 - animazione y: -80, rotateX: 25, durata 1.2s */}
            <span
              className="block transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isVisible
                  ? 'translateY(0) rotateX(0deg)'
                  : 'translateY(-80px) rotateX(25deg)',
                opacity: isVisible ? 1 : 0,
                transformOrigin: 'top center',
                perspective: '1000px',
              }}
            >
              Aiuto professionisti e PMI a scalare il mercato digitale con siti web ed e-commerce
            </span>

            {/* Riga 2 - animazione y: -40, delay 0.3s, durata 1s */}
            <span
              className="inline-block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(-40px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: '0.3s',
              }}
            >
              <TypewriterText
                strings={[
                  "su misura.",
                  "veloci.",
                  "che convertono.",
                  "professionali.",
                ]}
                typeSpeed={60}
                backSpeed={30}
                className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
              />
            </span>
          </h1>

          {/* Sottotitolo - animazione x: -60, delay 0.5s, durata 1s */}
          <p
            className="text-lg leading-relaxed text-slate-600 max-w-2xl mb-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '0.5s',
            }}
          >
            Sono il tuo referente unico per la creazione, la gestione e il
            posizionamento del tuo sito o del tuo negozio online. Un supporto
            diretto, senza intermediari, per far crescere la tua attività
            online.
          </p>

          {/* Bottoni - animazione y: 40, delay 0.7s, durata 0.9s */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-6 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '0.7s',
            }}
          >
            <Link
              href="#contattami"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold px-7 py-4 rounded-lg shadow-lg shadow-yellow-200/60 border border-yellow-500/40 transition-all hover:-translate-y-0.5"
            >
              Richiedi preventivo ➔
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-lg border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* FOTO PROFILO - animazione x: 120, y: 60, rotate: 12, scale: 0.85, durata 1.4s */}
        <div className="relative flex justify-center">
          <div
            className="relative w-full max-w-md transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isVisible
                ? 'translateX(0) translateY(0) rotate(0deg) scale(1)'
                : 'translateX(120px) translateY(60px) rotate(12deg) scale(0.85)',
              opacity: isVisible ? 1 : 0,
            }}
          >
            <Image
              src="/images/foto-profilo.webp"
              alt="Stefano De Pasqual - Specialista WordPress & E-commerce"
              width={610}
              height={900}
              className="w-full h-auto object-contain"
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}