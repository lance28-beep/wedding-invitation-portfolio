import type { Metadata } from "next";
import "./globals.css";
import FloatingMessenger from "@/components/FloatingMessenger";
import { dancingScript, greatVibes, lora } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Wedding Templates - Beautiful Wedding Website Templates",
  description: "Discover our collection of elegant and customizable wedding website templates. Perfect for showcasing your special day with style and sophistication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${greatVibes.variable} ${lora.variable}`}>
      <body>
        {children}
        <FloatingMessenger />
      </body>
    </html>
  );
}
