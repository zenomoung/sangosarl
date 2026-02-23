import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileSearch,
  Bell,
  BarChart3,
  FileText,
  Building2,
  Globe,
  Target,
  TrendingUp,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "SangoBids - Appels d'Offres & Marchés Publics au Cameroun",
  description:
    "SangoBids, plateforme de veille sur les appels d'offres publics et privés au Cameroun. Marchés publics, consultations gouvernementales, opportunités d'affaires à Douala et Yaoundé. Intelligence d'affaires.",
  keywords: [
    "appels d'offres Cameroun",
    "marchés publics Cameroun",
    "government tenders Cameroon",
    "SangoBids",
    "veille économique Cameroun",
    "intelligence d'affaires Cameroun",
    "appels d'offres Douala",
    "marchés publics Yaoundé",
    "tenders Cameroon",
    "consultations publiques Cameroun",
    "opportunités affaires Cameroun",
    "bids Cameroon",
  ],
  alternates: { canonical: "https://sangosarl.com/services/sangobids" },
};

export default function SangoBidsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-600/50 border border-amber-400/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <FileSearch size={16} />
                <span>Veille Économique & Intelligence d&apos;Affaires</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SangoBids
              </h1>
              <p className="text-lg text-amber-100 leading-relaxed mb-8">
                Ne manquez plus aucune opportunité. SangoBids centralise tous
                les appels d&apos;offres publics et privés du Cameroun et vous
                aide à remporter des marchés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://sangobids.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                >
                  Visiter SangoBids <ArrowRight size={18} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-amber-600/50 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-amber-600/70 transition-colors border border-amber-400/30"
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                  alt="Appels d'offres et marchés publics au Cameroun"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Fonctionnalités SangoBids
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Tous les outils pour identifier et remporter des marchés publics et
            privés au Cameroun.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileSearch,
                title: "Recherche d'Appels d'Offres",
                desc: "Explorez notre base de données complète d'appels d'offres publics et privés au Cameroun, filtrés par secteur, région et budget.",
              },
              {
                icon: Bell,
                title: "Alertes Personnalisées",
                desc: "Recevez des notifications instantanées dès qu'un nouvel appel d'offres correspond à votre profil et secteur d'activité.",
              },
              {
                icon: BarChart3,
                title: "Analyse de Marché",
                desc: "Accédez à des analyses détaillées du marché des appels d'offres au Cameroun par secteur et par région.",
              },
              {
                icon: FileText,
                title: "Aide à la Réponse",
                desc: "Bénéficiez de modèles et d'accompagnement pour préparer des réponses professionnelles aux appels d'offres.",
              },
              {
                icon: Building2,
                title: "Marchés Publics",
                desc: "Accédez aux appels d'offres du gouvernement camerounais, ministères, collectivités territoriales et entreprises publiques.",
              },
              {
                icon: Globe,
                title: "Marchés Internationaux",
                desc: "Découvrez les appels d'offres d'organisations internationales actives au Cameroun (Banque Mondiale, BAD, UE, etc.).",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-200 transition-all"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Secteurs Couverts
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "BTP & Construction",
              "Technologies & IT",
              "Santé & Pharmacie",
              "Éducation & Formation",
              "Transport & Logistique",
              "Agriculture & Agro-industrie",
              "Énergie & Environnement",
              "Télécommunications",
              "Finance & Banque",
              "Commerce & Distribution",
              "Sécurité & Défense",
              "Mines & Industries",
            ].map((sector) => (
              <div
                key={sector}
                className="bg-white rounded-lg px-4 py-3 text-center border border-gray-200 hover:border-amber-300 hover:shadow-sm transition-all"
              >
                <span className="text-gray-700 font-medium">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Avantages de SangoBids
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Ciblage Précis",
                desc: "Ne recevez que les appels d'offres qui correspondent à votre secteur d'activité et vos capacités.",
              },
              {
                icon: Clock,
                title: "Gain de Temps",
                desc: "Fini les heures de recherche. Toutes les opportunités sont centralisées sur une seule plateforme.",
              },
              {
                icon: TrendingUp,
                title: "Plus de Marchés",
                desc: "Augmentez vos chances de remporter des marchés grâce à notre accompagnement et nos outils.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ne Manquez Plus Aucune Opportunité
          </h2>
          <p className="text-lg text-amber-100 mb-8">
            Inscrivez-vous sur SangoBids et accédez à tous les appels
            d&apos;offres du Cameroun.
          </p>
          <a
            href="https://sangobids.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-amber-50 transition-colors text-lg"
          >
            Accéder à SangoBids <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}
