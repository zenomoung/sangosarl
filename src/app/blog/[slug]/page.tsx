import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    alternates: { canonical: `https://sangosarl.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Sango SARL",
      url: "https://sangosarl.com",
    },
  };

  // Simple markdown-like rendering for ## headers and paragraphs
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ").trim();
        if (text) {
          elements.push(
            <p
              key={`p-${elements.length}`}
              className="text-gray-600 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{
                __html: text.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="text-gray-900">$1</strong>'
                ),
              }}
            />
          );
        }
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul
            key={`ul-${elements.length}`}
            className="space-y-2 mb-6 ml-4"
          >
            {listItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: `<span class="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span><span>${item.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="text-gray-900">$1</strong>'
                  )}</span>`,
                }}
              />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h2
            key={`h2-${elements.length}`}
            className="text-2xl font-bold text-gray-900 mt-8 mb-4"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h3
            key={`h3-${elements.length}`}
            className="text-xl font-bold text-gray-900 mt-6 mb-3"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("#### ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h4
            key={`h4-${elements.length}`}
            className="text-lg font-bold text-gray-900 mt-4 mb-2"
          >
            {trimmed.replace("#### ", "")}
          </h4>
        );
      } else if (trimmed.startsWith("- ")) {
        flushParagraph();
        inList = true;
        listItems.push(trimmed.replace("- ", ""));
      } else if (
        trimmed.match(/^\d+\.\s/)
      ) {
        flushParagraph();
        inList = true;
        listItems.push(trimmed.replace(/^\d+\.\s/, ""));
      } else if (trimmed === "") {
        flushParagraph();
        if (inList) flushList();
      } else {
        currentParagraph.push(trimmed);
      }
    }

    flushParagraph();
    flushList();

    return elements;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} /> Retour au blog
          </Link>
          <span className="inline-block bg-primary/20 text-green-300 text-sm font-medium px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
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
              {post.readTime} de lecture
            </span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="aspect-[16/7] rounded-2xl overflow-hidden shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent(post.content)}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Découvrez Nos Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            Sango SARL développe des plateformes numériques innovantes pour le
            Cameroun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Nos Services <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-200"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
