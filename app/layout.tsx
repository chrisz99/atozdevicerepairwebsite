import { BottomBar } from "@/components/common/BottomBar";
import { NavBar } from "@/components/common/NavBar";

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
