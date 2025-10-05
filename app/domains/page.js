"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function DomainsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [domain, setDomain] = useState(query || "");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (domain) {
      // Dummy search simulation
      setTimeout(() => {
        const available = Math.random() > 0.5; // Randomly available or not
        setResult({
          name: domain,
          available,
          price: available ? "$9.99/year" : null,
        });
      }, 1000);
    }
  }, [domain]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Domain Search Results</h1>

      <div className="max-w-lg w-full bg-white p-6 rounded-xl shadow">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const input = e.target.elements.domain.value;
            window.location.href = `/domains?q=${input}`;
          }}
          className="flex mb-6"
        >
          <input
            name="domain"
            type="text"
            placeholder="Enter domain..."
            defaultValue={domain}
            className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg"
          >
            Search
          </button>
        </form>

        {result ? (
          result.available ? (
            <div className="text-center">
              <p className="text-green-600 text-lg font-semibold">
                ✅ {result.name} is available!
              </p>
              <p className="text-gray-700 mb-4">{result.price}</p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          ) : (
            <p className="text-red-600 text-center text-lg font-semibold">
              ❌ {result.name} is already taken.
            </p>
          )
        ) : (
          <p className="text-gray-500 text-center">Type a domain name and search.</p>
        )}
      </div>
    </div>
  );
}
