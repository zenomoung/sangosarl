import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Send,
  CreditCard,
  Zap,
  Shield,
  Clock,
  Users,
  Wallet,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "SangoCash - Paiement Mobile & Services Financiers Numériques au Cameroun",
  description:
    "SangoCash, solution de paiement mobile et services financiers numériques au Cameroun. Transfert d'argent, paiement de factures, recharge téléphonique. Mobile money à Douala et Yaoundé.",
  keywords: [
    "paiement mobile Cameroun",
    "mobile money Cameroun",
    "transfert d'argent Cameroun",
    "cash transfer Cameroon",
    "SangoCash",
    "paiement facture Douala",
    "recharge téléphonique Cameroun",
    "services financiers numériques Cameroun",
    "money transfer Douala",
    "mobile payment Yaoundé",
  ],
  alternates: { canonical: "https://sangosarl.com/services/sangocash" },
};

export default function SangoCashPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-600/50 border border-green-400/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Smartphone size={16} />
                <span>Paiement Mobile & Services Financiers</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SangoCash
              </h1>
              <p className="text-lg text-green-100 leading-relaxed mb-8">
                La solution de paiement mobile qui simplifie vos transactions
                financières au Cameroun. Envoyez de l&apos;argent, payez vos
                factures et gérez vos finances en toute simplicité depuis votre
                téléphone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://sangocash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Visiter SangoCash <ArrowRight size={18} />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-green-600/50 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-green-600/70 transition-colors border border-green-400/30"
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1608286022625-bc07f7a21154?w=600&q=80"
                  alt="Personne africaine utilisant le paiement mobile SangoCash au Cameroun"
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
            Fonctionnalités
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Tout ce dont vous avez besoin pour gérer vos finances numériques au
            Cameroun.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Send,
                title: "Transfert d'Argent",
                desc: "Envoyez et recevez de l'argent instantanément entre utilisateurs SangoCash et vers d'autres réseaux mobile money.",
              },
              {
                icon: CreditCard,
                title: "Paiement de Factures",
                desc: "Payez vos factures d'eau, d'électricité, d'internet et de téléphone en quelques clics.",
              },
              {
                icon: Zap,
                title: "Recharge Téléphonique",
                desc: "Rechargez votre crédit téléphonique MTN, Orange et Camtel directement depuis l'application.",
              },
              {
                icon: Wallet,
                title: "Portefeuille Numérique",
                desc: "Un portefeuille sécurisé pour stocker, gérer et suivre toutes vos transactions financières.",
              },
              {
                icon: Users,
                title: "Paiement Marchand",
                desc: "Payez chez les commerçants partenaires sans espèces, par simple scan de QR code.",
              },
              {
                icon: Shield,
                title: "Sécurité Maximale",
                desc: "Transactions chiffrées, authentification forte et protection de vos données personnelles.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-200 transition-all"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-green-600" />
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

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Simple, Rapide, Sécurisé
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Inscrivez-vous", desc: "Créez votre compte SangoCash en quelques minutes avec votre numéro de téléphone." },
              { step: "2", title: "Approvisionnez", desc: "Alimentez votre portefeuille via mobile money, agent SangoCash ou virement bancaire." },
              { step: "3", title: "Effectuez vos paiements", desc: "Envoyez de l'argent, payez vos factures ou achetez du crédit téléphonique." },
              { step: "4", title: "Suivez vos transactions", desc: "Consultez l'historique complet de vos transactions et gérez votre budget." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-200">Disponibilité</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt;5s</div>
              <div className="text-green-200">Temps de transaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-200">Sécurisé</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Rejoignez SangoCash
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Simplifiez vos paiements et transferts d&apos;argent au Cameroun
            avec SangoCash.
          </p>
          <a
            href="https://sangocash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
          >
            Commencer avec SangoCash <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}
