import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Blog preview card",
  description: "This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.className}`}>{children}</body>
    </html>
  );
}
