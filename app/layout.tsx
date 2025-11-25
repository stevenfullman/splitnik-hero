import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Splitnik - Stop Wasting Half Your Traffic",
  description: "Premium split testing for modern teams",
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
