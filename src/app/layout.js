import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "C-DAC Flashcards",
  description: "Flashcards for CDAC students",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}