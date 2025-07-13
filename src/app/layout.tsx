import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { navMenus } from "@/common/data/navMenus";
import GoogleAnalytics from "@/common/components/GoogleAnalytics";
import WebVitals from "@/common/components/WebVitals";
// import FloatingNavbar from "@/common/components/navbar/FloatingNavbar";
import FloatingNavbarClient from "@/common/components/navbar/FloatingNavbarClient";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sandhiya-portfolio",
  description:
    "Sandhiya is a passionate Software Engineer and Frontend / Full Stack Developer from India, proficient in front-end and back-end development using modern tech stacks.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
  { url: "/favicon-16x16.ico", rel: "icon", sizes: "16x16", type: "image/x-icon" },
  { url: "/favicon-32x32.ico", rel: "icon", sizes: "32x32", type: "image/x-icon" },
  { url: "/favicon-48x48.ico", rel: "icon", sizes: "48x48", type: "image/x-icon" },
  { url: "/favicon-64x64.ico", rel: "icon", sizes: "64x64", type: "image/x-icon" },
  ],
  keywords: [
    "sandhiya g",
    "sandhiya",
    "senior frontend developer",
    "full stack developer india",
    "react developer",
    "node developer",
    "mern stack developer",
    "typescript developer",
    "tailwindcss expert",
    "portfolio sandhiya",
  ],
};

const ScrollToTop = dynamic(() => import("@/common/components/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
        {isDebug ? <WebVitals /> : null}
        <FloatingNavbarClient className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
