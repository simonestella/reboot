import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AppProviders } from "@/providers/theme-provider";
import { LocaleProvider } from "@/providers/locale-provider";
import { CustomCursor } from "@/components/shared/custom-cursor";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist"
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://simonestella.github.io/reboot"),
  title: "Reboot — Il tuo piano di allenamento giornaliero",
  description: "Una timeline di 24 ore con esercizi fisici, tempi di riposo e consigli per uno stile di vita attivo e sano.",
  appleWebApp: {
    capable: true,
    title: "Reboot",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "Reboot — Il tuo piano di allenamento giornaliero",
    description: "Una timeline di 24 ore con esercizi fisici, tempi di riposo e consigli per uno stile di vita attivo e sano.",
    images: [{ url: "/logo.png", width: 772, height: 254, alt: "Reboot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reboot — Il tuo piano di allenamento giornaliero",
    description: "Una timeline di 24 ore con esercizi fisici, tempi di riposo e consigli per uno stile di vita attivo e sano.",
    images: ["/logo.png"],
  },
  other: {
    referrer: "strict-origin-when-cross-origin",
  },
};

const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
].join("; ");

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
      </head>
      <body className={`${geist.variable} antialiased`}>
        <AppProviders>
          <LocaleProvider>
            <CustomCursor />
            <div className="bg-orb bg-orb-1" aria-hidden />
            <div className="bg-orb bg-orb-2" aria-hidden />
            <div className="bg-orb bg-orb-3" aria-hidden />
            <div className="mesh-bg">
              {children}
            </div>
          </LocaleProvider>
        </AppProviders>
      </body>
    </html>
  );
}
