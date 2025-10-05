"use client";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🌐 Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">MyHost</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="/">Home</a></li>
          <li><a href="/domains">Domains</a></li>
          <li><a href="/hosting">Hosting</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>

      {/* 🎯 Hero Section */}
      <header className="flex flex-col items-center justify-center flex-grow py-24 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h2 className="text-5xl font-extrabold mb-6">Find the Perfect Domain for Your Business</h2>
        <p className="mb-8 text-lg max-w-2xl">
          Search, register, and manage your domains easily with MyHost. Affordable pricing and reliable hosting all in one place.
        </p>

        {/* 🔍 Domain Search Box */}

        {/* 🔍 Domain Search Box (New Working Code) */}
<form
  onSubmit={(e) => {
    e.preventDefault();
    const input = e.target.elements.domain.value;
    window.location.href = `/domains?q=${input}`;
  }}
  className="flex w-full max-w-2xl bg-white rounded-2xl shadow-md overflow-hidden"
>
  <input
    name="domain"
    type="text"
    placeholder="Search your domain..."
    className="flex-grow px-4 py-3 outline-none text-gray-700"
  />
  <button
    type="submit"
    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
  >
    Search
  </button>
</form>


        {/* 🔍 Domain Search Box (Old Code Backup)
        <div className="flex w-full max-w-2xl bg-white rounded-2xl shadow-md overflow-hidden">
          
          <input
            type="text"
            placeholder="Search your domain..."
            className="flex-grow px-4 py-3 outline-none text-gray-700"
          />
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Search
          </button>
        </div>

        */}




        <p className="mt-4 text-sm text-gray-200">.com $9.99 | .net $11.99 | .org $8.99</p>
      </header>

      {/* 💻 Hosting Plans */}
      <section className="py-20 px-8 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Our Hosting Plans</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2">Basic</h4>
            <p className="text-gray-600 mb-4">Perfect for small personal websites</p>
            <p className="text-3xl font-extrabold mb-6">$2.99<span className="text-base">/mo</span></p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>1 Website</li>
              <li>10GB SSD Storage</li>
              <li>Free SSL</li>
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Get Started</button>
          </div>

          {/* Pro */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition border-2 border-blue-600">
            <h4 className="text-xl font-bold mb-2">Pro</h4>
            <p className="text-gray-600 mb-4">Ideal for growing businesses</p>
            <p className="text-3xl font-extrabold mb-6">$5.99<span className="text-base">/mo</span></p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>5 Websites</li>
              <li>50GB SSD Storage</li>
              <li>Free SSL & Email</li>
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Get Started</button>
          </div>

          {/* Enterprise */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2">Enterprise</h4>
            <p className="text-gray-600 mb-4">For high traffic & e-commerce</p>
            <p className="text-3xl font-extrabold mb-6">$9.99<span className="text-base">/mo</span></p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>Unlimited Websites</li>
              <li>200GB SSD Storage</li>
              <li>Priority Support</li>
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Get Started</button>
          </div>
        </div>
      </section>

      {/* 💬 Why Choose Us */}
      <section className="py-20 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-md bg-gray-50 text-center">
            <h3 className="text-xl font-bold mb-3">Affordable Domains</h3>
            <p className="text-gray-600">Get domains starting from just $0.99/year.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-md bg-gray-50 text-center">
            <h3 className="text-xl font-bold mb-3">Fast Hosting</h3>
            <p className="text-gray-600">Super-fast and reliable hosting for your website.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-md bg-gray-50 text-center">
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-600">Our support team is available round the clock.</p>
          </div>
        </div>
      </section>

      {/* ⚙️ Footer */}
      <footer className="py-8 text-center bg-gray-900 text-gray-300">
        <p>© {new Date().getFullYear()} MyHost. All rights reserved.</p>
      </footer>
    </div>
  );
}
