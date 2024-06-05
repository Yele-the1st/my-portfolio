"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import NoSSR from "@/components/NoSSR";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "text-neutral-900 dark:text-neutral-50 text-xs sm:text-sm"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NoSSR>
            <Navigation />
          </NoSSR>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
