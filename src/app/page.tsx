import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  FileSearch,
  Wrench,
  Lightbulb,
  Globe,
  Shield,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569706971306-de5d78f6418e?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Globe size={16} className="text-accent" />
              <span className="text-green-300">Basé à Douala, Cameroun</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Services Numériques &{" "}
              <span className="text-primary">Technologies</span> de
              l&apos;Information
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Sango SARL développe et exploite des plateformes numériques
              innovantes pour le Cameroun et l&apos;Afrique. Paiement mobile,
              appels d&apos;offres, services à la demande et conseil en
              transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-lg"
              >
                Nos Services <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-lg border border-white/20"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white" id="platforms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Plateformes Numériques
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trois plateformes innovantes conçues pour répondre aux besoins du
              marché camerounais et africain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SangoServices */}
            <div className="group rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Wrench size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SangoServices
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Plateforme d&apos;intermédiation pour services à la demande et
                économie collaborative. Connectez-vous avec des prestataires de
                services qualifiés à Douala, Yaoundé et partout au Cameroun.
              </p>
              <Link
                href="/services/sangoservices"
                className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:gap-2 transition-all"
              >
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>

            {/* SangoCash */}
            <div className="group rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Smartphone size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SangoCash
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Solutions de paiement mobile et services financiers numériques.
                Envoyez et recevez de l&apos;argent facilement, payez vos
                factures et gérez vos finances depuis votre téléphone.
              </p>
              <Link
                href="/services/sangocash"
                className="inline-flex items-center gap-1 text-green-600 font-semibold hover:gap-2 transition-all"
              >
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>

            {/* SangoBids */}
            <div className="group rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                <FileSearch size={28} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SangoBids
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Veille économique et intelligence d&apos;affaires. Accédez aux
                appels d&apos;offres publics et privés, marchés publics et
                opportunités d&apos;affaires au Cameroun.
              </p>
              <Link
                href="/services/sangobids"
                className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:gap-2 transition-all"
              >
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sango Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Sango SARL ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une expertise locale combinée à une vision technologique
              internationale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fiabilité</h3>
              <p className="text-gray-600 text-sm">
                Solutions sécurisées et fiables, conçues pour le marché
                camerounais.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Technologies de pointe adaptées aux réalités locales africaines.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Proximité</h3>
              <p className="text-gray-600 text-sm">
                Équipe locale à Douala, Bonapriso, toujours disponible pour vous
                accompagner.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Croissance</h3>
              <p className="text-gray-600 text-sm">
                Accompagnement dans votre transformation digitale et croissance
                numérique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Consulting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Conseil en Transformation Digitale
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Au-delà de nos plateformes, Sango SARL accompagne les
                entreprises et institutions camerounaises dans leur
                transformation digitale. Notre expertise couvre :
              </p>
              <ul className="space-y-4">
                {[
                  "Développement d'applications web et mobiles sur mesure",
                  "Audit et stratégie de transformation digitale",
                  "Intégration de solutions de paiement numérique",
                  "Formation et accompagnement des équipes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors mt-8"
              >
                Découvrir nos services <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1653566031414-4ac6936a3e66?w=800&q=80"
                  alt="Professionnels africains travaillant sur des solutions numériques à Douala"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm text-green-200">
                  Plateformes actives
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Digitaliser Votre Activité ?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Que vous soyez une entreprise, une institution ou un particulier,
            Sango SARL a la solution numérique qu&apos;il vous faut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Contactez-nous
            </Link>
            <a
              href="tel:+237681108439"
              className="inline-flex items-center justify-center gap-2 bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-green-800 transition-colors text-lg border border-green-400/30"
            >
              <Phone size={20} /> +237 6 81 10 84 39
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin size={24} className="text-primary" />
              <h3 className="font-semibold text-gray-900">Adresse</h3>
              <p className="text-gray-600">Bonapriso, Douala, Cameroun</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone size={24} className="text-primary" />
              <h3 className="font-semibold text-gray-900">Téléphone</h3>
              <a
                href="tel:+237681108439"
                className="text-gray-600 hover:text-primary"
              >
                +237 6 81 10 84 39
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail size={24} className="text-primary" />
              <h3 className="font-semibold text-gray-900">Email</h3>
              <a
                href="mailto:contact@sangosarl.com"
                className="text-gray-600 hover:text-primary"
              >
                contact@sangosarl.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
