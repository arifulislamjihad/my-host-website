import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "./components/ScrollToTopButton"; // ✅ ঠিক path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MyHost - Best Hosting Provider",
  description: "Find the perfect domain and hosting plan with MyHost.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* 🔹 Main content */}
        <main className="flex-grow">{children}</main>

        {/* 🔹 Footer সব পেজে থাকবে */}
        <footer className="py-8 text-center bg-gray-900 text-gray-300">
          <p>© {new Date().getFullYear()} MyHost. Built with ❤️ by Ariful Islam Jihad.</p>
        </footer>

        {/* 🔹 Scroll to Top Button */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
