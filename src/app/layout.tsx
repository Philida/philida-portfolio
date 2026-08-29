import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philida Amas Igharo",
  description: "Backend Engineer Portfolio",
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