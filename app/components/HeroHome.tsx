"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

const easeExpo = [0.16, 1, 0.3, 1] as const;

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[62fr_38fr] gap-12 items-center">
        {/* TESTO */}
        <div>
          {/* Titolo con split + typed */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-extrabold leading-[1.15] text-slate-900 mb-5">
            <motion.span
              initial={{ y: -80, opacity: 0, rotateX: 25 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.2, ease: easeExpo }}
              className="block"
            >
              Aiuto professionisti e PMI a scalare il mercato digitale con siti web ed e-commerce
            </motion.span>
            <motion.span
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: easeExpo }}
              className="inline-block"
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
            </motion.span>
          </h1>

          {/* Sottotitolo */}
          <motion.p
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeExpo }}
            className="text-lg leading-relaxed text-slate-600 max-w-2xl mb-6"
          >
            Sono il tuo referente unico per la creazione, la gestione e il
            posizionamento del tuo sito o del tuo negozio online. Un supporto
            diretto, senza intermediari, per far crescere la tua attività
            online.
          </motion.p>

          {/* Bottoni */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: easeExpo }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
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
          </motion.div>
        </div>

        {/* FOTO PROFILO */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ x: 120, y: 60, rotate: 12, scale: 0.85, opacity: 0 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: easeExpo }}
            className="relative w-full max-w-md"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}