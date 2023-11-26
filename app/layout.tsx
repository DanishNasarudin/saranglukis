import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Footer from "./(components)/Footer";
import "./globals.css";

const Navbar = dynamic(() => import("./(components)/Navbar"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ideal Tech PC Career",
  description:
    "Start, discover and explore your career path through Ideal Tech PC.",
  keywords: [
    "Ideal Tech",
    "Custom PC",
    "Career",
    "Job",
    "Linkedin",
    "Malaysia Job",
  ],
  icons: {
    icon: "/icon?<generated>",
  },
  appleWebApp: true,
  // openGraph: {
  //   title: "Ideal Tech PC Career",
  //   description:
  //     "Start, discover and explore your career path through Ideal Tech PC.",
  //   images: [
  //     {
  //       url: "https://idealtech.com.my/wp-content/uploads/2023/07/01_Artwork-PC.png",
  //       width: 1000,
  //       height: 1000,
  //       alt: "Ideal Tech Custom PC",
  //     },
  //     {
  //       url: "https://idealtech.com.my/wp-content/uploads/2023/03/IDT_LOGO-150x150.png",
  //       width: 1000,
  //       height: 1000,
  //       alt: "Ideal Tech Gaming PC",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Navbar />
        <div className="mx-auto">{children}</div>
        <div className="h-[30vh]"></div>
        <Footer />
      </body>
    </html>
  );
}
