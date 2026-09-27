"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNavigation } from "@/app/config/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Apri menu"
        className="md:hidden p-2 text-slate-800"
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <span className="font-bold text-slate-900">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Chiudi menu"
            className="p-2 text-slate-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-5 overflow-y-auto h-[calc(100%-70px)]">
          <ul className="space-y-1">
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isSubOpen = openSub === item.label;

              if (!hasChildren) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 px-2 font-semibold uppercase text-slate-800 hover:text-orange-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <button
                    onClick={() => setOpenSub(isSubOpen ? null : item.label)}
                    className="w-full flex items-center justify-between py-3 px-2 font-semibold uppercase text-slate-800 hover:text-orange-500"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isSubOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isSubOpen && (
                    <ul className="pl-4 border-l-2 border-blue-100 ml-2 space-y-1">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 px-2 text-sm text-slate-600 hover:text-blue-600"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <a
            href="tel:+393505439819"
            className="mt-6 block text-center bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold py-3 rounded-xl"
          >
            CHIAMA ORA
          </a>
        </nav>
      </div>
    </>
  );
}