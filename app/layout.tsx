import { ThemeProvider } from "next-themes";

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterTrust from "@/components/FooterTrust";

/* -----------------------------------
   🧩 Font Setup
------------------------------------ */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* -----------------------------------
   🧠 SEO Metadata — Business Focused
------------------------------------ */
export const metadata: Metadata = {
  metadataBase: new URL("https://mehtalogy.in"),

  title: {
    default: "Mehtalogy | Your Strategic Technology Partner",
    template: "%s | Mehtalogy",
  },

  description:
    "We partner with SMEs and enterprises to design, develop, and maintain scalable digital solutions — including PWAs, mobile apps, cloud systems, and modernization initiatives.",

  keywords: [
    "technology partner",
    "software development",
    "enterprise solutions",
    "SME digital transformation",
    "mobile app development",
    "cloud modernization",
    "Mehtalogy",
  ],

  authors: [{ name: "Mehtalogy" }],

  /* ✅ PWA Manifest */
  manifest: "/site.webmanifest",

  /* ✅ Icons (all favicon sizes, apple icon) */
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },



  openGraph: {
    title: "Mehtalogy | Your Strategic Technology Partner",
    description:
      "Empowering SMEs and enterprises with scalable software, mobile apps, PWAs, and long-term tech stewardship.",
    url: "https://mehtalogy.in",
    siteName: "Mehtalogy",
    images: [
      {
        url: "/mehtalogy.svg",
        width: 600,
        height: 600,
        alt: "Mehtalogy Technology Partner Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mehtalogy | Technology Partner for SMEs & Enterprises",
    description:
      "Building scalable digital products and long-term technology partnerships.",
    images: ["/twitter-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* -----------------------------------
   📱 Viewport Controls
------------------------------------ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* -----------------------------------
   🌐 Root Layout
------------------------------------ */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <ThemeProvider
          attribute="class"
          defaultTheme="theme-black"
          enableSystem={false}
          value={{
            "theme-blue": "theme-blue",
            "theme-black": "theme-black",
            "theme-light": "theme-light",
            "theme-modern": "theme-modern",
          }}
        >

          <header className="sticky top-0 z-50">
            <Navbar />
          </header>

          <main className="flex-grow container mx-auto px-4 py-6">
            {children}
          </main>

          <FooterTrust />

        </ThemeProvider>
      </body>
    </html>
  );
}
