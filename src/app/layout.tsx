import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import OrderModal from "@/src/components/OrderModal/OrderModal";

import "./globals.css";

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
