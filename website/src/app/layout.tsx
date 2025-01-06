import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vous transportez, notre métier — TeuTeuTrain Company",
  description:
    "La TeuTeuTrain Company est l'entreprise de transport, de gestion et de construction d'infrastructure ferroviaire minecraftienne de prédilection de la Raie Publique de TeuTeuLand.",
  icons: "/imgs/icon-colored.webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="teaui">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
