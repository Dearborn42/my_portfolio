import { Inter } from "next/font/google";
import { GeometryContextWrapper } from "@/Components/GeometryContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GeometryContextWrapper>
          {children}
        </GeometryContextWrapper>
      </body>
    </html>
  );
}
