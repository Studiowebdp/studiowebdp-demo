import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerColumns } from "@/app/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* GRIGLIA PRINCIPALE */}
        <div className="grid md:grid-cols-6 gap-10">
          {/* COLONNA LOGO + DESCRIZIONE */}
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col items-center gap-3 mb-6 group">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/images/LogoStudiowebdp.png"
                  alt="Studio Web DP"
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 1024px) 128px, 160px"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 mb-8 max-w-sm mx-auto text-center">
              Specialista in e-commerce e siti web professionali su WordPress.
              Trasformo le tue idee in risultati concreti con oltre{" "}
              <span className="text-white font-semibold">15 anni di esperienza</span>{" "}
              nel settore digitale.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+393505439819" className="hover:text-white transition-colors">
                  +39 350 5439819
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@studiowebdp.it" className="hover:text-white transition-colors">
                  info@studiowebdp.it
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Via P. Pagello, 17 – 32100 Belluno (BL)</span>
              </li>
            </ul>
          </div>

          {/* COLONNE MENU */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {col.items.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <details className="group">
                        <summary className="cursor-pointer list-none flex items-center justify-between hover:text-white">
                          <span>{item.label}</span>
                        </summary>
                        <ul className="pl-3 mt-2 space-y-1 border-l border-slate-700">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="hover:text-cyan-400 transition-colors"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-slate-400 leading-relaxed">
          <p>
            Copyright © {new Date().getFullYear()} · Studioweb DP | Via P.
            Pagello, 17 – 32100 Belluno (BL) ITALIA | C.F. DPSSFN78E09A757Q |
            P.IVA 01102820253
          </p>
          <p className="mt-2">
            <a href="mailto:info@studiowebdp.it" className="hover:text-cyan-400 transition-colors">
              info@studiowebdp.it
            </a>{" "}
            |{" "}
            <a href="tel:+393505439819" className="hover:text-cyan-400 transition-colors">
              +39 350 5439819
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}