import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  Truck,
  Home,
  Briefcase,
  Star,
  Shield,
  Clock,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "SangoServices - Plateforme de Services à la Demande au Cameroun",
  description:
    "SangoServices, plateforme d'intermédiation pour services à la demande à Douala et Yaoundé. Ménage, plomberie, électricité, livraison, services professionnels. Économie collaborative au Cameroun.",
  keywords: [
    "services à la demande Cameroun",
    "services à domicile Douala",
    "prestataires qualifiés Yaoundé",
    "économie collaborative Cameroun",
    "SangoServices",
    "ménage Douala",
    "plomberie Yaoundé",
    "livraison Cameroun",
    "services professionnels Douala",
  ],
  alternates: { canonical: "https://sangosarl.com/services/sangoservices" },
};

export default function SangoServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/50 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Wrench size={16} />
                <span>Plateforme de Services à la Demande</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SangoServices
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                La plateforme qui connecte les particuliers et entreprises avec
                des prestataires de services qualifiés à Douala, Yaoundé et
                partout au Cameroun. Trouvez le bon professionnel en quelques
                clics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://sangoservices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Visiter SangoServices <ArrowRight size={18} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600/50 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-600/70 transition-colors border border-blue-400/30"
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1687422810663-c316494f725a?w=600&q=80"
                  alt="Artisan africain travaillant dans son atelier au Cameroun"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Catégories de Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Des dizaines de catégories de services disponibles à Douala, Yaoundé
            et dans les principales villes du Cameroun.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: "Services à Domicile",
                desc: "Ménage, cuisine, garde d'enfants, jardinage",
              },
              {
                icon: Wrench,
                title: "Réparation & Maintenance",
                desc: "Plomberie, électricité, peinture, climatisation",
              },
              {
                icon: Truck,
                title: "Transport & Livraison",
                desc: "Déménagement, livraison de colis, courses",
              },
              {
                icon: Briefcase,
                title: "Services Professionnels",
                desc: "Comptabilité, juridique, design, développement web",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <service.icon size={28} className="text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Comment Ça Marche ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Décrivez votre besoin",
                desc: "Publiez votre demande de service en décrivant ce dont vous avez besoin, le lieu et le budget.",
              },
              {
                step: "2",
                title: "Recevez des propositions",
                desc: "Des prestataires qualifiés et vérifiés vous envoient leurs propositions avec devis et délais.",
              },
              {
                step: "3",
                title: "Choisissez et profitez",
                desc: "Comparez les offres, choisissez votre prestataire et bénéficiez du service en toute sérénité.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Pourquoi SangoServices ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Prestataires Vérifiés", desc: "Tous les prestataires sont vérifiés et notés par la communauté." },
              { icon: Shield, title: "Paiement Sécurisé", desc: "Paiement sécurisé via SangoCash et mobile money." },
              { icon: Clock, title: "Disponibilité 24/7", desc: "Trouvez un prestataire à tout moment, même le weekend." },
              { icon: MapPin, title: "Couverture Nationale", desc: "Disponible à Douala, Yaoundé et les principales villes." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Besoin d&apos;un Service ?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Rejoignez des milliers de Camerounais qui utilisent SangoServices
            pour trouver des prestataires de confiance.
          </p>
          <a
            href="https://sangoservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            Visiter SangoServices <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}
