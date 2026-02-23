import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Actualités Numériques et Business au Cameroun",
  description:
    "Le blog de Sango SARL : articles sur la transformation digitale, les marchés publics, le paiement mobile et le business au Cameroun. Actualités technologiques Douala et Yaoundé.",
  keywords: [
    "blog technologie Cameroun",
    "actualités numériques Cameroun",
    "transformation digitale Cameroun",
    "marchés publics Cameroun",
    "paiement mobile Cameroun",
    "business Cameroun",
  ],
  alternates: { canonical: "https://sangosarl.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Découvrez nos articles sur la transformation digitale, les marchés
              publics, le paiement mobile et l&apos;entrepreneuriat au Cameroun.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Lire l&apos;article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
