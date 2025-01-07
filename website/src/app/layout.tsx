import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import ThemeProvider from "@/_context/ThemeContext";

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
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
