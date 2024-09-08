import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cool Shade",
  description: "Discover the Heart of India – One Culture at a Time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="manifest" href="/manifest.json" />

      </head>
      <body className={inter.className + "dark "}>{children}</body>
    </html>
  );
}
