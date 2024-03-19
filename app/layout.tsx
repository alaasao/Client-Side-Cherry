import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import ScrollBar from "./components/ScrollBar";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: "400",
});
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ScrollBar className={"relative  w-screen overflow-hidden"}>
          <Nav />
          {children}
          <Footer/>
        </ScrollBar>
      </body>
    </html>
  );
}
