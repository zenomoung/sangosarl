import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  FileSearch,
  Wrench,
  Code,
  BarChart3,
  GraduationCap,
  Cog,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Services - Solutions Numériques au Cameroun",
  description:
    "Découvrez les services numériques de Sango SARL : SangoServices (services à la demande), SangoCash (paiement mobile), SangoBids (appels d'offres), et conseil en transformation digitale à Douala, Cameroun.",
  keywords: [
    "services numériques Cameroun",
    "paiement mobile Douala",
    "appels d'offres Cameroun",
    "services à la demande Cameroun",
    "transformation digitale Douala",
    "développement application Cameroun",
    "software development Cameroon",
    "mobile money Cameroon",
  ],
  alternates: { canonical: "https://sangosarl.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sango SARL propose un écosystème complet de solutions numériques
              adaptées aux besoins du marché camerounais et africain.
            </p>
          </div>
        </div>
      </section>

      {/* Three Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nos Plateformes
          </h2>

          <div className="space-y-16">
            {/* SangoServices */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Wrench size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    SangoServices
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Plateforme d&apos;intermédiation pour services à la demande et
                  économie collaborative. SangoServices connecte les
                  particuliers et entreprises avec des prestataires de services
                  qualifiés dans tout le Cameroun.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Services de ménage, plomberie, électricité",
                    "Livraison et transport de colis",
                    "Services professionnels et freelance",
                    "Réparation et maintenance",
                    "Disponible à Douala et Yaoundé",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/sangoservices"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Découvrir SangoServices <ArrowRight size={18} />
                </Link>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt="Services à la demande au Cameroun - SangoServices"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* SangoCash */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt="Paiement mobile au Cameroun - SangoCash"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Smartphone size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    SangoCash
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Solutions de paiement mobile et services financiers numériques.
                  SangoCash permet aux Camerounais d&apos;envoyer et recevoir de
                  l&apos;argent, payer des factures et accéder à des services
                  financiers depuis leur téléphone.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Transfert d'argent mobile instantané",
                    "Paiement de factures (eau, électricité, internet)",
                    "Recharge téléphonique",
                    "Paiement marchand sans contact",
                    "Historique et gestion des transactions",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/sangocash"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Découvrir SangoCash <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* SangoBids */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <FileSearch size={24} className="text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    SangoBids
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Service de veille économique et intelligence d&apos;affaires.
                  SangoBids centralise les appels d&apos;offres publics et
                  privés du Cameroun et facilite la réponse aux marchés publics.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Appels d'offres publics et gouvernementaux",
                    "Marchés privés et consultations",
                    "Alertes personnalisées par secteur",
                    "Aide à la réponse aux appels d'offres",
                    "Veille sur les opportunités d'affaires",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/sangobids"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Découvrir SangoBids <ArrowRight size={18} />
                </Link>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Appels d'offres et marchés publics au Cameroun - SangoBids"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Conseil & Développement
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            En plus de nos plateformes, nous offrons des services de conseil et
            développement sur mesure.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Code size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                Développement Logiciel
              </h3>
              <p className="text-gray-600 text-sm">
                Applications web, mobiles et APIs sur mesure pour votre
                entreprise.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <BarChart3 size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                Stratégie Digitale
              </h3>
              <p className="text-gray-600 text-sm">
                Audit, conseil et élaboration de votre stratégie de
                transformation digitale.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Globe size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                Intégration Systèmes
              </h3>
              <p className="text-gray-600 text-sm">
                Intégration de solutions de paiement, ERP et systèmes
                d&apos;information.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <GraduationCap size={32} className="text-primary mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                Formation
              </h3>
              <p className="text-gray-600 text-sm">
                Formation des équipes aux outils numériques et nouvelles
                technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Un Projet en Tête ?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Discutons de vos besoins et trouvons ensemble la solution numérique
            idéale pour votre activité au Cameroun.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Demander un devis <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
