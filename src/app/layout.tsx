import type { Metadata } from "next";
import iranYekanFont from "@/src/fonts/iranYekanFont";
import Providers from "@/store/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "mammad",
  description: "mammad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning dir="rtl" lang="fa">
      <body className={`${iranYekanFont.variable} font-sans antialiased`} >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}