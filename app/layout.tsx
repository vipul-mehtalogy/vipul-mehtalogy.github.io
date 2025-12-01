import { ThemeProvider } from "next-themes";
import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterTrust from "@/components/FooterTrust";

/* -----------------------------------
   🧩 FONT SETUP
------------------------------------ */

const jakarta = Plus_Jakarta_Sans({
  weight: ["500", "600"],
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  weight: ["400", "500"],
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

/* (You can remove Geist when not using it)
------------------------------------------------ */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* -----------------------------------
   🧠 SEO
------------------------------------ */
export const metadata: Metadata = {
  metadataBase: new URL("https://mehtalogy.in"),
  title: {
    default: "Mehtalogy | Your Strategic Technology Partner",
    template: "%s | Mehtalogy",
  },
  description:
    "We partner with SMEs and enterprises to design, develop, and maintain scalable digital solutions.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png" },
      { url: "/favicon-16x16.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Mehtalogy | Your Strategic Technology Partner",
    url: "https://mehtalogy.in",
    images: [{ url: "/mehtalogy.svg" }],
  },
  robots: { index: true, follow: true },
};

/* -----------------------------------
   📱 Viewport
------------------------------------ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* -----------------------------------
   🌐 ROOT LAYOUT
------------------------------------ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${grotesk.variable}`}
    >
      <body className="antialiased">
        
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>

          <main className="container mx-auto w-full">
            {children}
          </main>

          <FooterTrust />
        
      </body>
    </html>
  );
}
