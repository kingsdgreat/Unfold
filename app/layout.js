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
  title: "Unfold",
  description: ` Unfold is an AI-enhanced journaling app designed to help you
            reflect, grow, and connect the dots between your emotional and
            physical wellness. By integrating with popular health wearables like
            Apple Health, Fitbit, and Oura Ring, Unfold brings your thoughts and
            body data together in one place.`,
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
