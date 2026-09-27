import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { mainNavigation } from "@/app/config/navigation";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
        <div className="relative w-30 h-30 lg:w-30 lg:h-30 shrink-0 ...">
  <Image
    src="/images/LogoStudiowebdp.png"
    alt="Studio Web DP"
    fill
    className="object-contain"
    sizes="(max-width: 1024px) 80px, 96px"
    priority
  />
</div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            {mainNavigation.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        {/* CTA + MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+393505439819"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold text-sm uppercase px-5 py-2.5 rounded-full shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all"
          >
            <Phone className="w-4 h-4" />
            Chiama
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}