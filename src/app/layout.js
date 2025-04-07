import { Geist, Geist_Mono,  Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display", // Define a CSS variable for the font
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Specify weights (optional)
});

export const metadata = {
  title: "Voice Bank",
  description: "Powerd by No Names Collective",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${playfairDisplay.variable} h-screen`}
      >
        <Navigation />
        {/* <Preloader /> */}
        {children}
      </body>
    </html>
  );
}
