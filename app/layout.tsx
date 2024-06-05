import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import ScrollBar from "./components/ScrollBar";

import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: "400",
});

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Chery Speed Motors - Votre Concessionnaire de Confiance",
  description: "Lancé en septembre 2023, Chery Speed Motors privilégie une expérience d'achat de voiture simplifiée, en utilisant des solutions innovantes pour permettre aux clients de prendre des décisions éclairées. Engagé envers l'excellence, Chery Speed Motors vise à se positionner comme un leader dans l'industrie automobile en Algérie en pleine évolution.",
  openGraph: {
    title: "Chery Speed Motors - Voitures de Qualité, Service Exceptionnel",
    description: "Lancé en septembre 2023, Chery Speed Motors privilégie une expérience d'achat de voiture simplifiée, en utilisant des solutions innovantes pour permettre aux clients de prendre des décisions éclairées. Engagé envers l'excellence, Chery Speed Motors vise à se positionner comme un leader dans l'industrie automobile en Algérie en pleine évolution.",
    url: "https://client-side-cherry.vercel.app",
    siteName: "Chery Speed Motors",
    images: [
      {
        url: "../assets/logo.png",
        width: 1260,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <title>Chery Speed Motors Votre Concessionnaire de Confiance</title>
        <meta name="description" content="Lancé en septembre 2023, Chery Speed Motors privilégie une expérience d'achat de voiture simplifiée, en utilisant des solutions innovantes pour permettre aux clients de prendre des décisions éclairées. Engagé envers l'excellence, Chery Speed Motors vise à se positionner comme un leader dans l'industrie automobile en Algérie en pleine évolution." />
        <meta name="keywords" content="concessionnaire automobile, Chery Speed Motors, voitures neuves, voitures d'occasion, financement automobile, service de voitures, réparation de voitures, concessionnaire de voitures, vente de voitures, achat de voitures, certifié d'occasion, reprise de voiture, location de voiture, prêts automobiles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="app/favicon.ico" />
      </Head>
      <body className={poppins.className}>
        <ScrollBar className={"relative ww overflow-x-hidden bg-white text-black"}>
          <Nav />
          <Toaster position="bottom-center" />
          {children}
          <Footer />
        </ScrollBar>
   
      </body>
    </html>
  );
}
