import type { Metadata } from "next";
import Header from "../components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "IgnasPlace Social",
  description: "Simple Social Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
