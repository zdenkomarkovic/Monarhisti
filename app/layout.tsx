import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Српски Покрет Монархиста",
  description: "Zvanični sajt Srpskog pokreta Monarhista - Zalažemo se za povratak ustavne monarhije u Srbiji, demokratske reforme i integraciju u Evropsku uniju.",
  keywords: "monarhija, srbija, demokratija, reforme, Karađorđević, evropska unija",
  authors: [{ name: "Vladimir Putnik - Jauci sa Pastrika" }],
  openGraph: {
    title: "Српски Покрет Монархиста",
    description: "Zvanični sajt Srpskog pokreta Monarhista",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
