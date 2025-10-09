"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function HostingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [expanded, setExpanded] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (name) => {
    if (isMobile) {
      setExpanded((prev) => ({
        [name]: !prev[name],
      }));
    } else {
      const allExpanded = Object.values(expanded).every(Boolean);
      const newState = {};
      plans.forEach((p) => (newState[p.name] = !allExpanded));
      setExpanded(newState);
    }
  };

  // Hosting Plans Data
  const plans = [
    {
      name: "Student Plan 🎓",
      icon: "📘",
      description: "Specially designed for students & beginners on a budget",
      monthly: 199,
      yearly: 1999,
      student: true,
      popular: false,
      features: [
        "1 Website",
        "10 GB NVMe Storage",
        "1 Core CPU",
        "1 GB RAM",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
      ],
      more: {
        General: [
          "Free Website Transfer",
          "Free Malware Scan",
          "Free Malware Protection",
        ],
        Server: [
          "LiteSpeed Web Server & Cache",
          "cPanel Access",
          "NVMe SSD Hosting",
          "Free SSL Certificates",
        ],
        Security: [
          "24/7 Monitoring by Experts",
          "Basic Malware Scan",
          "DDoS Protection",
        ],
        Support: [
          "Email Support",
          "Community Forum Access",
          "24/7 Chatbot Support",
        ],
      },
    },
    {
      name: "Starter",
      icon: "⭐",
      description: "Perfect for Mid-Level Websites",
      monthly: 1999,
      yearly: 19999,
      popular: true,
      features: [
        "80 GB NVMe Storage",
        "100 Websites",
        "6 Core CPU",
        "6 GB RAM",
        "70 MB I/O Speed",
        "150 Number of Process",
      ],
      more: {
        General: [
          "Free Website Transfer",
          "Free SSL Certificates",
          "Free Malware Protection",
        ],
        Server: [
          "LiteSpeed Web Server & Cache",
          "cPanel Access",
          "NVMe SSD Hosting",
          "Advanced Performance",
        ],
        Security: [
          "24/7 Monitoring by Experts",
          "AI-Powered Malware Scan",
          "Automatic Backup System",
        ],
        Support: [
          "24/7 WhatsApp Support",
          "24/7 Ticket Support",
          "Priority Website Support",
        ],
      },
    },
    {
      name: "Pro",
      icon: "🚀",
      description: "Best for Professional Websites",
      monthly: 2999,
      yearly: 29999,
      popular: false,
      features: [
        "120 GB NVMe Storage",
        "200 Websites",
        "8 Core CPU",
        "8 GB RAM",
        "80 MB I/O Speed",
        "200 Number of Process",
      ],
      more: {
        General: [
          "Free Website Transfer",
          "Free SSL Certificates",
          "Free Malware Protection",
        ],
        Server: [
          "LiteSpeed Web Server & Cache",
          "High Performance NVMe SSD",
          "cPanel Access",
          "Daily Auto Backup",
        ],
        Security: [
          "24/7 Monitoring by Experts",
          "Real-Time Virus Scan",
          "Advanced DDoS Protection",
        ],
        Support: [
          "24/7 WhatsApp Support",
          "24/7 Ticket Support",
          "Priority Support Included",
        ],
      },
    },
    {
      name: "Ultimate",
      icon: "👑",
      description: "Best for Large-Scale Websites",
      monthly: 4999,
      yearly: 49999,
      popular: false,
      features: [
        "200 GB NVMe Storage",
        "Unlimited Websites",
        "10 Core CPU",
        "10 GB RAM",
        "100 MB I/O Speed",
        "250 Number of Process",
      ],
      more: {
        General: [
          "Free Website Transfer",
          "Free SSL Certificates",
          "Unlimited Bandwidth",
        ],
        Server: [
          "LiteSpeed Web Server & Cache",
          "High Performance NVMe SSD",
          "cPanel Access",
          "Daily Auto Backup",
        ],
        Security: [
          "24/7 Monitoring by Experts",
          "Imunify360 Security",
          "Advanced DDoS Protection",
        ],
        Support: [
          "24/7 WhatsApp Support",
          "24/7 Ticket Support",
          "Dedicated Account Manager",
        ],
      },
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Choose Your Perfect Plan
        </h2>
        <p className="text-gray-500 mt-2">
          You're just 5 minutes away from a faster website
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center mt-6">
          <div className="flex bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === "yearly"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700"
              }`}
            >
              Yearly
            </button>
          </div>
          <span className="ml-3 text-blue-600 text-sm font-semibold">
            Up to 50% save
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col justify-between bg-white border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 
              ${
                plan.student
                  ? "border-green-500 shadow-[0_0_25px_rgba(16,185,129,0.8)] animate-[studentGlow_3s_ease-in-out_infinite] hover:animate-[shimmer_2s_linear_infinite]"
                  : plan.popular
                  ? "border-blue-600 scale-[1.03]"
                  : "border-gray-200"
              }`}
          >
            {/* Highlight Badges */}
            {plan.student && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                Student Offer 🎓
              </div>
            )}
            {plan.popular && !plan.student && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                Most Popular
              </div>
            )}

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="text-4xl mb-2">{plan.icon}</div>
              <h4
                className={`text-xl font-bold mb-1 ${
                  plan.student ? "text-green-700" : "text-gray-800"
                }`}
              >
                {plan.name}
              </h4>
              <p className="text-gray-600 text-sm">{plan.description}</p>
            </div>

            {/* Pricing */}
            <p
              className={`text-3xl font-extrabold text-center mb-2 ${
                plan.student ? "text-green-600" : "text-gray-900"
              }`}
            >
              ৳
              {billingCycle === "yearly"
                ? plan.yearly.toLocaleString()
                : plan.monthly.toLocaleString()}
              <span className="text-base text-gray-600 font-medium">
                /Per {billingCycle === "yearly" ? "Year" : "Month"}
              </span>
            </p>
            <p className="text-xs text-gray-500 text-center mb-4">
              Save 50% on Yearly Billing
            </p>

            <button
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                plan.student
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Add to Cart
            </button>

            <p className="text-xs text-gray-400 mt-3 text-center">
              ৳
              {billingCycle === "yearly"
                ? (plan.yearly * 1.1).toLocaleString()
                : (plan.monthly * 1.1).toLocaleString()}{" "}
              /{billingCycle === "yearly" ? "year" : "month"} when you renew
            </p>

            {/* Features */}
            <div className="mt-6 text-left">
              <h5 className="text-gray-800 font-semibold mb-3">Features</h5>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <AnimatePresence>
                {expanded[plan.name] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-6 space-y-5"
                  >
                    {Object.entries(plan.more).map(([category, items]) => (
                      <div key={category}>
                        <h6 className="font-semibold text-gray-700 mb-2">
                          {category}
                        </h6>
                        <ul className="space-y-1 text-sm">
                          {items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => toggleExpand(plan.name)}
              className={`mt-8 w-full flex justify-center items-center gap-1 font-medium text-sm border rounded-lg py-2 hover:bg-opacity-10 transition ${
                plan.student
                  ? "text-green-600 border-green-300 hover:bg-green-50"
                  : "text-blue-600 border-blue-200 hover:bg-blue-50"
              }`}
            >
              {expanded[plan.name] ? (
                <>
                  Hide All Features <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  See All Features <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
