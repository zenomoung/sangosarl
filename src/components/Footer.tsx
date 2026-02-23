import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">
                Sango<span className="text-primary">SARL</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Services Numériques et Technologies de l&apos;Information au Cameroun.
              Votre partenaire de confiance pour la transformation digitale.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Plateformes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/sangoservices" className="hover:text-primary transition-colors">
                  SangoServices
                </Link>
              </li>
              <li>
                <Link href="/services/sangocash" className="hover:text-primary transition-colors">
                  SangoCash
                </Link>
              </li>
              <li>
                <Link href="/services/sangobids" className="hover:text-primary transition-colors">
                  SangoBids
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Conseil Digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens Utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Bonapriso, Douala, Cameroun</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-primary" />
                <a href="tel:+237681108439" className="hover:text-primary transition-colors">
                  +237 6 81 10 84 39
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-primary" />
                <a href="mailto:contact@sangosarl.com" className="hover:text-primary transition-colors">
                  contact@sangosarl.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sango SARL. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a
              href="https://sangoservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              sangoservices.com
            </a>
            <a
              href="https://sangocash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              sangocash.com
            </a>
            <a
              href="https://sangobids.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              sangobids.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
