"use client";

import React from "react";
import {
  GiRunningShoe,
  GiCardExchange,
  GiFootprint,
} from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const ShoeBenefits = () => {
  const features = [
    {
      icon: <GiRunningShoe size={32} />,
      title: "Premium Comfort",
      desc: "Where comfort meets performance",
    },
    {
      icon: <TbTruckDelivery size={32} />,
      title: "Fast Delivery",
      desc: "Express shipping across Nepal",
    },
    {
      icon: <GiFootprint size={32} />,
      title: "Perfect Fit Guarantee",
      desc: "Free size exchange on every order",
    },
    {
      icon: <GiCardExchange size={32} />,
      title: "Easy Returns",
      desc: "Hassle-free returns within 7 days",
    },
  ];

  return (
    <section
      aria-label="Why Shop at Paaila"
      className="w-full bg-gray-50 py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 tracking-tight">
        Why Paaila Shoes?
      </h2>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="w-full sm:w-[45%] lg:w-[22%] bg-white rounded-2xl p-6 shadow-md 
                       hover:shadow-xl transition-all duration-300 
                       hover:-translate-y-2 cursor-pointer group"
          >
            <div className="text-teal-700 mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShoeBenefits;
