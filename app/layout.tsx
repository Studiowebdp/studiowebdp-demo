import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { buildBaseSchema, buildGraph } from "../lib/schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Studio Web DP | Siti Web Professionali a Belluno",
  description:
    "Studio Web DP: realizzazione siti web professionali, e-commerce e SEO a Belluno.",
  metadataBase: new URL("https://studiowebdp.it"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    locale: "it_IT",
    type: "website",
    siteName: "Stefano De Pasqual",
    url: "https://studiowebdp.it",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalSchema = buildGraph(buildBaseSchema());

  return (
    <html lang="it" className={poppins.variable}>
      <body className="font-sans antialiased bg-white text-slate-700">
        <JsonLd data={globalSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}