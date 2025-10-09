import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // ✅ Navbar import করো

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        {/* 🌐 Navbar */}
        <Navbar />

        {/* 📄 পেজ কনটেন্ট */}
        <main>{children}</main>

        {/* 💬 Footer */}
        <footer className="py-8 text-center bg-gray-900 text-gray-300 mt-12">
          <p>
            © {new Date().getFullYear()} MyHost. Built with ❤️ by Ariful Islam
            Jihad.
          </p>
        </footer>
      </body>
    </html>
  );
}
