import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Sango SARL à Bonapriso, Douala, Cameroun",
  description:
    "Contactez Sango SARL à Bonapriso, Douala, Cameroun. Téléphone : +237 6 81 10 84 39. Services numériques, paiement mobile, appels d'offres et conseil en transformation digitale.",
  keywords: [
    "contact Sango SARL",
    "Bonapriso Douala",
    "entreprise technologique Douala",
    "contact services numériques Cameroun",
  ],
  alternates: { canonical: "https://sangosarl.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-<span className="text-primary">nous</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Vous avez un projet, une question ou souhaitez en savoir plus sur
              nos services ? N&apos;hésitez pas à nous contacter. Notre équipe
              est à votre disposition.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Nos Coordonnées
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Bonapriso, Douala
                      <br />
                      Cameroun
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                    <a
                      href="tel:+237681108439"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +237 6 81 10 84 39
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:contact@sangosarl.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      contact@sangosarl.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi : 8h00 - 18h00
                      <br />
                      Samedi : 9h00 - 13h00
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7!2d9.69!3d4.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDEnMTIuMCJOIDnCsDQxJzI0LjAiRQ!5e0!3m2!1sfr!2scm!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sango SARL - Bonapriso, Douala, Cameroun"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Envoyez-nous un Message
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="+237 6XX XX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="sangoservices">SangoServices</option>
                    <option value="sangocash">SangoCash</option>
                    <option value="sangobids">SangoBids</option>
                    <option value="conseil">Conseil en Transformation Digitale</option>
                    <option value="developpement">Développement sur mesure</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-lg"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nos Plateformes
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "SangoServices",
                url: "https://sangoservices.com",
                desc: "Services à la demande",
                color: "blue",
              },
              {
                name: "SangoCash",
                url: "https://sangocash.com",
                desc: "Paiement mobile",
                color: "green",
              },
              {
                name: "SangoBids",
                url: "https://sangobids.com",
                desc: "Appels d'offres",
                color: "amber",
              },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-1">
                  {platform.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{platform.desc}</p>
                <span className="text-primary text-sm font-medium">
                  {platform.url.replace("https://", "")}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
