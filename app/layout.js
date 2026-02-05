import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}