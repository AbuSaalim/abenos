"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PricingPlan {
  icon: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  delay?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    icon: "/images/icon-pricing-item-1.svg",
    name: "Basic Package",
    description: "Perfect for simple occasions.",
    price: "$299",
    features: ["2 Starters", "2 Veg Dishes", "Rice / Pulao", "Salad & Pickle"],
  },
  {
    icon: "/images/icon-pricing-item-2.svg",
    name: "Standard Package",
    description: "Perfect for simple occasions.",
    price: "$499",
    features: ["2 Starters", "2 Veg Dishes", "Rice / Pulao", "Salad & Pickle"],
    delay: "0.2s",
  },
  {
    icon: "/images/icon-pricing-item-3.svg",
    name: "Premium Package",
    description: "Perfect for simple occasions.",
    price: "$799",
    features: ["2 Starters", "2 Veg Dishes", "Rice / Pulao", "Salad & Pickle"],
    delay: "0.4s",
  },
];

export default function PricingSection() {
  return (
    <div className="our-pricing" id="pricing">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">Pricing Plan</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Flexible catering packages for every event
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              {/* Pricing Item Start */}
              <div
                className="pricing-item wow fadeInUp"
                data-wow-delay={plan.delay}
              >
                <div className="pricing-item-header">
                  <div className="icon-box">
                    <Image
                      src={plan.icon}
                      alt={plan.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="pricing-item-content">
                    <h2>{plan.name}</h2>
                    <p>{plan.description}</p>
                  </div>
                  <div className="pricing-item-price">
                    <h2>
                      {plan.price}
                      <sub>/Person</sub>
                    </h2>
                  </div>
                </div>
                <div className="pricing-item-body">
                  <div className="pricing-item-list">
                    <h3>What&apos;s Included:</h3>
                    <ul>
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing-item-btn">
                    <Link href="#contact" className="btn-default">
                      Get Started with plan
                    </Link>
                  </div>
                </div>
              </div>
              {/* Pricing Item End */}
            </div>
          ))}

          <div className="col-lg-12">
            {/* Pricing Benefit List Start */}
            <div
              className="pricing-benefit-list wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <ul>
                <li>
                  <Image
                    src="/images/icon-pricing-benefit-1.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Premium Quality Ingredients
                </li>
                <li>
                  <Image
                    src="/images/icon-pricing-benefit-2.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Fast & Reliable Catering
                </li>
                <li>
                  <Image
                    src="/images/icon-pricing-benefit-3.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Trusted by 1000+ Customers
                </li>
              </ul>
            </div>
            {/* Pricing Benefit List End */}
          </div>
        </div>
      </div>
    </div>
  );
}
