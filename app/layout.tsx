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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
