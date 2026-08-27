import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VISIO 2026 — Conferință de antreprenoriat pentru liceeni",
  description:
    "VISIO este mai mult decât o conferință. Liceeni ambițioși întâlnesc cei mai apreciați antreprenori din România, prin trei paneluri dinamice și ateliere practice. București, 2026.",
  icons: {
    icon: "/assets/img/visio-logo.png",
  },
  openGraph: {
    title: "VISIO 2026 — Conferință de antreprenoriat",
    description:
      "Locul în care viitorul antreprenoriatului românesc întâlnește oamenii care îl definesc astăzi. București, 2026.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
