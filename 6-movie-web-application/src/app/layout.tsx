import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";
import type { PropsWithChildren } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const metadata: Metadata = {
  title: { template: "MovieZ - %s", default: "MovieZ - Discover Your Favorite Movies" },
  description: "Welcome to MovieZ, the ultimate destination for movie enthusiasts. Explore the latest films, trailers, reviews, and more.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />

          {children}

          <Footer />
        </NextThemesProvider>
      </body>
    </html>
  );
}
