"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/app/config/navigation";

export default function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  const hasChildren = item.children && item.children.length > 0;
  const isActive =
    pathname === item.href ||
    (hasChildren && item.children?.some((c) => pathname.startsWith(c.href)));

  // Chiudi il dropdown cliccando fuori
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href}
          className={`inline-block px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors hover:text-orange-500 ${
            isActive ? "text-orange-500" : "text-slate-800"
          }`}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors hover:text-orange-500 ${
          isActive ? "text-orange-500" : "text-slate-800"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <ul
        className={`absolute left-0 top-full pt-2 min-w-[240px] z-50 transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1"
        }`}
      >
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden">
          {item.children!.map((child) => {
            const childActive = pathname === child.href;
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={`block px-5 py-3 text-sm font-medium transition-colors ${
                    childActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </li>
  );
}