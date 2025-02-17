import type { Metadata } from "next";

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
    <article>
      {children}
    </article>
  );
}
