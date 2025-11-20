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
    "PWA developer",
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
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`theme-blue ${geistSans.variable} ${geistMono.variable} antialiased 
                    flex flex-col min-h-screen transition-colors`}
      >
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 shadow-sm bg-white/80 backdrop-blur-md">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>

        {/* Footer */}
        <FooterTrust />
      </body>
    </html>
  );
}
