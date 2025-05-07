import type { Metadata } from "next";
import "./globals.css";
import FloatingMessenger from "@/components/FloatingMessenger";
import { dancingScript, greatVibes, lora } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Wedding Templates - Beautiful Wedding Website Templates",
  description: "Discover our collection of elegant and customizable wedding website templates. Perfect for showcasing your special day with style and sophistication.",
  metadataBase: new URL('https://wedding-invitation-portfolio.vercel.app'),
  openGraph: {
    title: "Wedding Templates - Beautiful Wedding Website Templates",
    description: "Discover our collection of elegant and customizable wedding website templates. Perfect for showcasing your special day with style and sophistication.",
    url: 'https://wedding-invitation-portfolio.vercel.app',
    siteName: 'Wedding Templates',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Templates',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  facebook: {
    appId: 'https://www.facebook.com/WeddingInvitationNaga',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/favicon/site.webmanifest',
      },
    ],
  },
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
