import type { Metadata } from "next";
import "./globals.css";
import FloatingMessenger from "@/components/FloatingMessenger";
import { dancingScript, greatVibes, lora } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Wedding Templates - Beautiful Wedding Website Templates",
  description: "Discover our collection of elegant and customizable wedding website templates. Perfect for showcasing your special day with style and sophistication.",
  other: {
    "fb:app_id": "https://www.facebook.com/WeddingInvitationNaga", // Replace with your Facebook App ID
    "og:url": "https://wedding-invitation-portfolio.vercel.app", // Replace with your website URL
    "og:type": "website",
    "og:title": "Wedding Templates - Beautiful Wedding Website Templates",
    "og:description": "Discover our collection of elegant and customizable wedding website templates. Perfect for showcasing your special day with style and sophistication.",
    "og:image": "https://wedding-invitation-portfolio.vercel.app/og-image.jpg", // Replace with your website's social media image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${greatVibes.variable} ${lora.variable}`}>
      <head>
        <meta property="fb:app_id" content="https://www.facebook.com/WeddingInvitationNaga" /> {/* Replace with your Facebook App ID */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        {children}
        <FloatingMessenger />
      </body>
    </html>
  );
}
