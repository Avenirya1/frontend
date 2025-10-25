import React from "react";
import { Helmet } from "react-helmet";
import { MessageCircle } from "lucide-react";

const MembershipPage = () => {
  const plans = [
    {
      name: "Monthly Plan",
      price: "₹499",
      oldPrice: "₹699",
      subText: "Free for 7 Days",
      period: "/month",
      features: [
        { name: "Upto 100 Menu Items", available: true },
        { name: "Full Dashboard Access", available: true },
        { name: "Premium QR Code & Menu Designs", available: true },
        { name: "Upload Menu with Images", available: true },
        { name: "AI Menu Upload", available: true },
        { name: "AI Image Upload", available: true },
        { name: "Dedicated WhatsApp Support", available: true },
        { name: "WhatsApp Ordering Feature", available: true },
        { name: "Take Google Map Reviews", available: true },
        { name: "Add Offer Banners", available: true },
        { name: "Connect Instagram / Social to Menu", available: true },
        { name: "Add Custom Line (We take Party Orders)", available: true },
      ],
      buttonText: "Get Monthly Plan",
      gradient: "from-blue-500 to-indigo-600",
      highlight: true,
    },
    {
      name: "Yearly Plan",
      price: "₹3500",
      oldPrice: "₹6000",
      subText: "Free for 7 Days",
      period: "/year",
      features: [
        { name: "Upto 100 Menu Items", available: true },
        { name: "Full Dashboard Access", available: true },
        { name: "Premium QR Code & Menu Designs", available: true },
        { name: "Upload Menu with Images", available: true },
        { name: "AI Menu Upload", available: true },
        { name: "AI Image Upload", available: true },
        { name: "Dedicated WhatsApp Support", available: true },
        { name: "WhatsApp Ordering Feature", available: true },
        { name: "Take Google Map Reviews", available: true },
        { name: "Add Offer Banners", available: true },
        { name: "Connect Instagram / Social to Menu", available: true },
        { name: "Add Custom Line (We take Party Orders)", available: true },
      ],
      buttonText: "Get Yearly Plan",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <>
      <section className="relative py-16 bg-white">
        <Helmet>
          <title>Petoba | Digital QR Menu & Ordering</title>
          <meta
            name="description"
            content="Petoba lets restaurants create digital QR menus. Customers scan, order, and enjoy a contactless dining experience."
          />
          <link
            rel="icon"
            href="https://petoba.avenirya.com/wp-content/uploads/2025/09/download-1.png"
            type="image/png"
          />
          <meta
            property="og:image"
            content="https://petoba.avenirya.com/wp-content/uploads/2025/09/Untitled-design-6.png"
          />
          <meta property="og:title" content="Petoba - Digital QR Menu" />
          <meta
            property="og:description"
            content="Turn your restaurant’s menu into a digital QR code menu."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yash.avenirya.com" />
        </Helmet>

        {/* Background blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-40 -right-20 h-80 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Plan</h2>
          <p className="text-center text-gray-600 mb-12">
            Start free and upgrade anytime — simple and transparent pricing.
          </p>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col justify-between rounded-3xl p-8 bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl hover:shadow-2xl transition-all ${
                  plan.highlight ? "scale-100" : ""
                } min-h-[750px]`}
              >
                <h3 className="text-3xl font-semibold text-center mb-4 text-gray-900">
                  {plan.name}
                </h3>

                <div className="text-center mb-6">
                  <span className="text-2xl text-gray-400 line-through mr-2">
                    {plan.oldPrice}
                  </span>
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>

                <p className="text-center text-sm text-green-600 mb-6 font-medium">
                  {plan.subText}
                </p>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      {feature.available ? (
                        <span className="text-green-500">✔</span>
                      ) : (
                        <span className="text-red-500">✖</span>
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>

                {/* WhatsApp redirect */}
                <a
                  href={`https://wa.me/919656015000?text=Hi! I’m interested in the ${encodeURIComponent(
                    plan.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`w-full py-3 rounded-full bg-gradient-to-r ${plan.gradient} text-white font-semibold shadow-md hover:scale-105 transition-transform`}
                  >
                    {plan.buttonText}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Help Floating Button */}
      <a
        href="https://wa.me/919656015000?text=Hi! is there anyone to chat?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        <MessageCircle size={22} />
        <span>Need Help?</span>
      </a>
    </>
  );
};

export default MembershipPage;
