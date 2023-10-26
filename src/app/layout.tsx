import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { Metadata } from "next";
import TransitionLayout from "../components/TransitionLayout";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "z3hn.dev",
  description: "This is my portfolio",
};

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
          <TransitionLayout>{children}</TransitionLayout>
        </div>
      </body>
    </html>
  );
}
