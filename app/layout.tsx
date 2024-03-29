import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Footer from "./(components)/Footer";
import "./globals.css";

const Navbar = dynamic(() => import("./(components)/Navbar"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://saranglukis.netlify.app"),
  title: "Sarang Lukis Official",
  description: "Your Canvas awaits your story with Acrylic.",
  keywords: [
    "Acrylic",
    "Canvas",
    "Painting",
    "Acrylic Painting",
    "Class",
    "Art",
    "Art Class",
  ],
  icons: {
    icon: "/icon?<generated>",
  },
  appleWebApp: true,
  openGraph: {
    title: "Sarang Lukis Official",
    description: "Your Canvas awaits your story with Acrylic.",
  },
  verification: {
    google: "weN2Dgl5AzVy4xMAf9Q66ANAINjaP00wXGOZQ2R7dPo",
  },
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
