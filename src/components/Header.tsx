"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Sango SARL" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">
              Sango<span className="text-primary">SARL</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              À Propos
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium">
                Services <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                <div className="bg-white shadow-lg rounded-lg py-2 w-56 border border-gray-100">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary"
                  >
                    Tous les Services
                  </Link>
                  <Link
                    href="/services/sangoservices"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary"
                  >
                    SangoServices
                  </Link>
                  <Link
                    href="/services/sangocash"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary"
                  >
                    SangoCash
                  </Link>
                  <Link
                    href="/services/sangobids"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary"
                  >
                    SangoBids
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2">
            <Link
              href="/"
              className="block py-3 text-gray-700 hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className="block py-3 text-gray-700 hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos
            </Link>
            <button
              className="flex items-center gap-1 py-3 text-gray-700 hover:text-primary font-medium w-full"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={16} className={servicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  href="/services"
                  className="block py-2 text-gray-600 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tous les Services
                </Link>
                <Link
                  href="/services/sangoservices"
                  className="block py-2 text-gray-600 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SangoServices
                </Link>
                <Link
                  href="/services/sangocash"
                  className="block py-2 text-gray-600 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SangoCash
                </Link>
                <Link
                  href="/services/sangobids"
                  className="block py-2 text-gray-600 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SangoBids
                </Link>
              </div>
            )}
            <Link
              href="/blog"
              className="block py-3 text-gray-700 hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block mt-2 text-center bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
