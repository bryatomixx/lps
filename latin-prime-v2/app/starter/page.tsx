import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StarterPage from "@/components/StarterPage";

export const metadata: Metadata = {
  title: "Starter AI System — $497/mo | Latin Prime Systems",
  description:
    "Your first real business system. CRM configured, automations running, every lead followed up — live in 7–14 days. Built for solo operators and small teams who are still doing everything manually.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/starter",
    languages: {
      en: "https://latinprimesystems.com/starter",
      es: "https://latinprimesystems.com/es/starter",
      "x-default": "https://latinprimesystems.com/starter",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/starter",
    siteName: "Latin Prime Systems",
    title: "Starter AI System — $497/mo | Latin Prime Systems",
    description:
      "Stop losing leads to missed calls and slow follow-ups. The Starter AI System is your first real business infrastructure — CRM, automations, and a website. Live in 7–14 days.",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
        width: 1200,
        height: 630,
        alt: "Latin Prime Systems — Starter AI System",
      },
    ],
  },
};

export default function StarterPlanPage() {
  return (
    <>
      <Nav />
      <StarterPage />
      <Footer />
    </>
  );
}
