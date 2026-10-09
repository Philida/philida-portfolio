import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://philida-portfolio.vercel.app"),

  title: {
    default: "Philida Amas Igharo | Junior Backend Engineer",
    template: "%s | Philida Amas Igharo",
  },

  description:
    "Portfolio of Philida Amas Igharo, a Junior Backend Engineer specializing in Node.js, TypeScript, NestJS, PostgreSQL, REST APIs, and backend development.",

  keywords: [
    "Philida Amas Igharo",
    "Junior Backend Engineer",
    "Backend Engineer",
    "Node.js Developer",
    "TypeScript Developer",
    "NestJS Developer",
    "PostgreSQL",
    "REST API",
    "Backend Development",
    "Full Stack Developer",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Philida Amas Igharo",
    },
  ],

  creator: "Philida Amas Igharo",

  verification: {
    google: "DXGrtrEzw99E1v0COIGveRYDRvLSewZGALAF6uVL8z0"
  },
  

  openGraph: {
    title: "Philida Amas Igharo | Junior Backend Engineer",
    description:
      "Junior Backend Engineer specializing in Node.js, TypeScript, NestJS, PostgreSQL, REST APIs, and backend development.",
    url: "https://philida-portfolio.vercel.app",
    siteName: "Philida Amas Igharo Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Philida Amas Igharo | Junior Backend Engineer",
    description:
      "Junior Backend Engineer specializing in Node.js, TypeScript, NestJS, PostgreSQL, and REST APIs.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0D1117] text-slate-100">
        {children}
      </body>
    </html>
  );
}