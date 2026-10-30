import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import MagicCursor from "@/components/MagicCursor";
import SmoothScroll from "@/components/SmoothScroll";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--accent-font",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--default-font",
});

export const metadata: Metadata = {
  title: "ABENOS | Offshore, Marine & Remote Site Catering & Allied Services",
  description: "ABENOS is an ARAMCO, ADNOC & QatarEnergy approved partner delivering integrated catering, camp management, ship chandelling and facilities support across Saudi Arabia, UAE, Qatar, India, and Asia.",
  keywords: ["ABENOS Catering", "Offshore Catering", "Marine Catering", "Remote Camp Management", "Victualing Support", "Saudi Aramco Approved", "ADNOC Approved", "QatarEnergy Approved"],
  authors: [{ name: "ABENOS Catering Services Co." }],
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${sourceSans.variable}`}>
      <head>
        {/* Preconnect Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome 6.5.1 CDN for solid and brand icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <SmoothScroll />
        <MagicCursor />
        {children}
      </body>
    </html>
  );
}
