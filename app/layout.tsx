import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Speechy AI — Speak Up. Stand Out.",
  description:
    "The AI voice coach that makes you sharper, bolder, and more confident — one conversation at a time.",
  openGraph: {
    title: "Speechy AI — Speak Up. Stand Out.",
    description:
      "Practice job interviews, public speaking, and real-life conversations with a lifelike AI partner.",
    siteName: "Speechy AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
