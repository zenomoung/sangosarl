import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos de Sango SARL - Entreprise Technologique au Cameroun",
  description:
    "Découvrez Sango SARL, entreprise camerounaise spécialisée dans les services numériques et technologies de l'information. Basée à Bonapriso, Douala. Développement de plateformes numériques innovantes.",
  keywords: [
    "à propos Sango SARL",
    "entreprise technologique Cameroun",
    "startup numérique Douala",
    "innovation technologique Cameroun",
    "Bonapriso Douala",
  ],
  alternates: { canonical: "https://sangosarl.com/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos de <span className="text-primary">Sango SARL</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sango SARL est une entreprise camerounaise spécialisée dans les
              Services Numériques et Technologies de l&apos;Information. Basée à
              Bonapriso, Douala, nous développons des solutions technologiques
              innovantes pour le Cameroun et l&apos;Afrique.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Notre Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Accélérer la transformation digitale au Cameroun en développant
                et exploitant des plateformes numériques accessibles,
                performantes et adaptées aux réalités locales.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye size={32} className="text-primary" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Notre Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Devenir le leader des services numériques en Afrique Centrale,
                en créant un écosystème technologique complet qui répond aux
                besoins des entreprises, institutions et particuliers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart size={32} className="text-primary" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Innovation, fiabilité, proximité et excellence. Nous croyons en
                la puissance de la technologie pour transformer positivement la
                vie des Camerounais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ce que nous faisons
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Développement de Plateformes Numériques
                  </h3>
                  <p className="text-gray-600">
                    Conception, développement et exploitation de plateformes
                    numériques et applications mobiles innovantes pour le marché
                    africain.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Veille Économique & Intelligence d&apos;Affaires
                  </h3>
                  <p className="text-gray-600">
                    À travers SangoBids, nous fournissons des services de veille
                    sur les appels d&apos;offres publics et privés, marchés
                    publics et opportunités d&apos;affaires au Cameroun.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Solutions de Paiement Mobile
                  </h3>
                  <p className="text-gray-600">
                    SangoCash propose des solutions de paiement mobile et
                    services financiers numériques accessibles à tous les
                    Camerounais.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Services à la Demande
                  </h3>
                  <p className="text-gray-600">
                    SangoServices est notre plateforme d&apos;intermédiation
                    pour les services à la demande et l&apos;économie
                    collaborative au Cameroun.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Conseil en Transformation Digitale
                  </h3>
                  <p className="text-gray-600">
                    Nous accompagnons les entreprises et institutions dans leur
                    transformation digitale avec des solutions sur mesure et
                    innovantes.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=800&q=80"
                  alt="Équipe africaine travaillant sur des solutions numériques à Douala, Cameroun"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Notre Localisation
          </h2>
          <div className="max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin size={24} className="text-primary" />
              <p className="text-lg text-gray-700">
                Bonapriso, Douala, Cameroun
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Phone size={24} className="text-primary" />
              <a
                href="tel:+237681108439"
                className="text-lg text-gray-700 hover:text-primary"
              >
                +237 6 81 10 84 39
              </a>
            </div>
            <p className="text-gray-600 mb-8">
              Situé au cœur de Bonapriso, le quartier d&apos;affaires de Douala,
              notre bureau est facilement accessible et ouvert du lundi au
              vendredi de 8h à 18h.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Nous rendre visite <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
