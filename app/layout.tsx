import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import ScrollBar from "./components/ScrollBar";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: "400",
});
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "Chery",
  description: "La meilleur ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ScrollBar
          className={"relative ww overflow-x-hidden bg-white text-black "}
        >
          <Nav/>
          {children}
          <Footer />
        </ScrollBar>
        <Toaster />
      </body>
    </html>
  );
}
