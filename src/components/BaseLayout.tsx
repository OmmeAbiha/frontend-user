import { ReactNode } from 'react';
import iranYekanFont from "@/src/fonts/iranYekanFont";
import { getMessages } from 'next-intl/server';
import Providers from './Providers';
import { Metadata } from "next"

type Props = {
  children: ReactNode;
  locale: string;
};

export const metadata: Metadata = {
  title: "Omme Abiha",
  description: "توضیحات اپلیکیشن",
  icons: {
    icon: [
      { url: "/common/logo/favicon.ico" },
      { url: "/common/logo/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/common/logo/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/common/logo/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/common/logo/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();

  return (
    <html
      className="h-full"
      lang={locale}
      dir={locale === 'fa' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Omme Abiha" />
      </head>
      <body className={`${iranYekanFont.variable} font-sans antialiased`}>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
