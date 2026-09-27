// app/components/MobileNav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { mainNavigation } from "@/app/config/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Chiudi il menu al cambio di pagina
  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  // Blocca lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <>
      {/* BOTTONE HAMBURGER */}
      <button
        aria-label="Apri menu"
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-slate-800"
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* OVERLAY + MENU FULLSCREEN */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Sfondo scuro dietro */}
        <div
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Pannello menu fullscreen */}
        <div
          className={`relative w-full h-full bg-white flex flex-col transform transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* HEADER DEL MENU */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100 shrink-0">
            <span className="font-bold text-slate-900 text-lg">Menu</span>
            <button
              aria-label="Chiudi menu"
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-700 hover:text-orange-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* CONTENUTO SCORRIBILE */}
          <nav className="flex-1 overflow-y-auto p-5">
            <ul className="space-y-1">
              {mainNavigation.map((item) => (
                <li key={item.label}>
                  {item.children && item.children.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex items-center justify-between py-3 px-2 font-semibold uppercase text-slate-800 hover:text-orange-500 transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openSubmenu === item.label
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="pl-4 py-2 space-y-1 border-l-2 border-slate-100 ml-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 px-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-2 font-semibold uppercase text-slate-800 hover:text-orange-500 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA FISSO IN BASSO */}
          <div className="p-5 border-t border-slate-100 shrink-0">
            <a
              href="tel:+393505439819"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold uppercase px-5 py-3.5 rounded-xl shadow-lg shadow-blue-200"
            >
              <Phone className="w-4 h-4" />
              Chiama Ora
            </a>
          </div>
        </div>
      </div>
    </>
  );
}