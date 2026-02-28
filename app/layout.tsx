import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://spm.rs"),
  title: {
    default: "Српски Покрет Монархиста",
    template: "%s | Српски Покрет Монархиста",
  },
  description: "Званични сајт Српског покрета Монархиста. Залажемо се за повратак уставне монархије у Србији, демократске реформе и интеграцију у Европску унију.",
  keywords: [
    "монархија", "Србија", "Српски покрет монархиста", "СПМ",
    "Карађорђевић", "уставна монархија", "демократија", "реформе",
    "Александар Кундачина", "spm.rs",
  ],
  authors: [{ name: "Српски покрет Монархиста" }],
  creator: "Српски покрет Монархиста",
  publisher: "Српски покрет Монархиста",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Српски Покрет Монархиста",
    description: "Званични сајт Српског покрета Монархиста — за повратак уставне монархије у Србији.",
    url: "https://spm.rs",
    siteName: "Српски Покрет Монархиста",
    locale: "sr_RS",
    type: "website",
  },
  alternates: {
    canonical: "https://spm.rs",
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
