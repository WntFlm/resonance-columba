import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Vercel KV for Redis Next.js Starter",
  description: "A simple Next.js app with Vercel KV for Redis as the database",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen`}>
        <header className="flex items-center justify-between w-full p-2">
          <h1 className="text-3xl font-medium">
            <Link href="/">科伦巴商会</Link>
          </h1>
          <Link href="/about">关于</Link>
        </header>
        <main className="relative flex flex-col items-center justify-center">
          <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
