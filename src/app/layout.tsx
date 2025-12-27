import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cherry Thrift Shop | Hottest Thrift Shop in Cagayan de Oro",
  description: "Curated girlswear. Washed to perfection. Daily steals. Cherry-picked finds. The hottest thrift shop in Cagayan de Oro offering knitted tops, fashion blouses, baggy jeans, and sandals.",
keywords: ["thrift shop", "Cagayan de Oro", "girlswear", "fashion", "vintage", "secondhand"],
  authors: [{ name: "Cherry Thrift Shop" }],
  openGraph: {
    title: "Cherry Thrift Shop | Hottest Thrift Shop in Cagayan de Oro",
    description: "Curated girlswear. Washed to perfection. Daily steals. Cherry-picked finds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
