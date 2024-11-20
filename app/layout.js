import { Nunito, Gorditas } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "700", "900"],
});
const gordita = Gorditas({
  subsets: ["latin"],
  variable: "--font-gordita",
  weight: ["700", "400"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${gordita.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}