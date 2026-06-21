import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import OrderModal from "@/src/components/OrderModal/OrderModal";

import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: {
    default: "Developer Service | Розробка сайтів та AI-асистентів",
    template: "%s | Developer Service",
  },
  description:
    "Створення сучасних інтернет-магазинів, корпоративних сайтів та інтеграція штучного інтелекту (AI-асистентів) для вашого бізнесу.",
  keywords: [
    "розробка сайтів",
    "створення інтернет магазину",
    "AI асистент для бізнесу",
    "Next js розробник",
    "програмування",
  ],
  authors: [{ name: "Developer Service Team" }],

  openGraph: {
    title: "Developer Service | Розробка сайтів та AI-асистентів",
    description:
      "Професійне створення веб-сайтів та інтеграція AI для автоматизації бізнесу. Обговорімо ваш проєкт!",
    url: "https://developerservice-theta.vercel.app/",
    siteName: "Developer Service",
    images: [
      {
        url: "/hero-bg.wedp",
        width: 1200,
        height: 630,
        alt: "Developer Service Preview",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },

  // Теги для Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Developer Service | Розробка сайтів",
    description:
      "Створення веб-сайтів та інтеграція AI для автоматизації бізнесу.",
    images: ["https://yourdomain.com"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
        <OrderModal />
      </body>
    </html>
  );
}
