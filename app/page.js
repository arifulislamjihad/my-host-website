"use client";
import { Search } from "lucide-react"; // search icon
import HostingPlans from "./components/HostingPlans";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🎯 Hero Section (Namecheap-style) */}
      <header className="relative bg-gradient-to-b from-indigo-700 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto text-center py-28 px-4 relative z-10">
          {/* Main heading */}
          <h2 className="text-3xl md:text-[3.5rem] font-extrabold mb-6 leading-[1.1] tracking-tight">
            Make more online, for less
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Search, register, and manage your domains easily with MyHost.  
            Affordable pricing and reliable hosting all in one place.
          </p>

          {/* Register / Transfer buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">
              Register
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition border border-white/40">
              Transfer
            </button>
          </div>




          {/* 🔍 Domain Search Box (Fixed for Mobile Cut Issue) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.target.elements.domain.value;
              window.location.href = `/domains?q=${input}`;
            }}
            className="w-full max-w-2xl mx-auto flex items-center bg-white rounded-full shadow-lg overflow-hidden border border-gray-200 focus-within:ring-4 focus-within:ring-blue-300 transition-all"
          >
            {/* Input Field */}
            <input
              name="domain"
              type="text"
              placeholder="Register a domain name to start..."
              className="flex-grow px-5 py-3 text-gray-700 outline-none text-base sm:text-lg rounded-l-full"
            />

            {/* Search Button */}
            <button
              type="submit"
              className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-r-full px-5 sm:px-8 py-3 transition-all"
            >
              {/* 📱 Mobile: Icon | 💻 Desktop: Text */}
              <span className="sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z"
                  />
                </svg>
              </span>
              <span className="hidden sm:inline font-semibold text-lg">Search</span>
            </button>
          </form>







          {/* Domain Prices */}
          <div className="mt-6 text-sm text-blue-100 flex flex-wrap justify-center gap-3">
            <span>.COM only <strong>$6.49*</strong></span>
            <span>.ORG <strong>$7.48*</strong></span>
            <span>.ONLINE <strong>$0.98*</strong></span>
          </div>
        </div>
      </header>




{/* 💻 Hosting Plans */}
<HostingPlans />







    </div>
  );
}
