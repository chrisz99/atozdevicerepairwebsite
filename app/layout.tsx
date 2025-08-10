import { BottomBar } from "@/components/common/BottomBar";
import { NavBar } from "@/components/common/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "Deploy your static Next.js site to GitHub Pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=3, user-scalable=yes" />
      </head>

      <body style={{ padding: "0px", margin: "0px", overflowX: "hidden" }}>
        <NavBar />
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
