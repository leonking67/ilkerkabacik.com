import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İlker Kabacık",
  description: "Fintech • Kripto • Strateji • Ürün geliştirme",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
