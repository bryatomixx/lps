import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NichePageContent from "@/components/NichePageContent";
import { getNiche, getAllNicheSlugs } from "@/lib/niches";

interface Props {
  params: Promise<{ niche: string }>;
}

export function generateStaticParams() {
  return getAllNicheSlugs().map((slug) => ({ niche: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { niche: slug } = await params;
  const niche = getNiche(slug);
  if (!niche) return {};

  return {
    title: niche.metaTitle,
    description: niche.metaDesc,
    keywords: niche.keywords,
    alternates: {
      canonical: `/${slug}`,
      languages: {
        en: `/${slug}`,
        es: `/es/${slug}`,
        "x-default": `/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      url: `https://latinprimesystems.com/${slug}`,
      siteName: "Latin Prime Systems",
      title: niche.metaTitle,
      description: niche.metaDesc,
      locale: "en_US",
      alternateLocale: ["es_ES"],
      images: [
        {
          url: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
          width: 1200,
          height: 630,
          alt: niche.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: niche.metaTitle,
      description: niche.metaDesc,
      images: [
        "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
      ],
    },
  };
}

export default async function NichePageEN({ params }: Props) {
  const { niche: slug } = await params;
  const niche = getNiche(slug);
  if (!niche) notFound();

  return (
    <>
      <Nav />
      <NichePageContent niche={niche!} lang="en" />
      <Footer />
    </>
  );
}
