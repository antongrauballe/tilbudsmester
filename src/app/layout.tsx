import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SessionProvider from "@/components/providers/SessionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TilbudsMester — Professionelle tilbud på 60 sekunder",
  description:
    "Tag et billede, skriv hvad kunden vil have — TilbudsMester formulerer, prissætter og sender et flot tilbud i dit firmanavn. Bygget til tømrere, af tømrere.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let session = null;
  try {
    session = await getServerSession(authOptions);
  } catch {
    // JWT decryption failed — treat as unauthenticated
  }

  return (
    <html
      lang="da"
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-full" suppressHydrationWarning>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
