import { Inter } from "next/font/google";
import Navbar from "../components/layout/navbar";
import LayoutTransition from "../components/layoutTransition";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        ></link>
      </head>
      <body>
        <div className="flex flex-col min-h-screen min-w-0">
          <Navbar />
          <LayoutTransition>{children}</LayoutTransition>
        </div>
      </body>
    </html>
  );
}
