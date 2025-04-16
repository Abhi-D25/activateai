import { Inter } from "next/font/google";
import "./globals.css";
import MobileLayout from "./components/MobileLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} mobile-scroll`}>
        <MobileLayout>
          {children}
        </MobileLayout>
      </body>
    </html>
  );
} 