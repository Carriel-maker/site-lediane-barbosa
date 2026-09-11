import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lediane Barbosa | Arquitetura e Interiores",
  description:
    "Projetos de arquitetura e interiores em Manaus, do primeiro traço à obra.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
