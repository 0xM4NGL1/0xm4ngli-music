import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "0xm4ngli music",
  description: "Spotify-style clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-black text-[#a7a7a7] h-screen w-full flex flex-col overflow-hidden select-none" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
