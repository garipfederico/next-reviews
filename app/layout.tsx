import type {ReactNode} from "react";
import Link from "next/link";
import "./globals.css";
import NavBar from "../components/NavBar";
import { orbitron } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: LayoutProps) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
         <NavBar/>
        </header>
        <main className="py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          Game data and images courtesy 
          of{' '}<a href="https://rawg.io/" target="_blank">RAWG</a>
        </footer>
      </body>
    </html>
  );
}
