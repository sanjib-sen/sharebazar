import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "ShareBazar for SEN Family",
  description:
    "A simple DSE stock update tracker for SEN family. Made by Sanjib Kumar Sen for his parents.",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
