"use client";

import React from "react";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 01",
      title: "Share Your Details",
      desc: "Tell us about your event, guest preference specific catering requirements.",
      image: "/images/how-it-work-image-1.jpg",
      delay: "0s",
    },
    {
      step: "Step 02",
      title: "Customize Your Menu",
      desc: "Select or personalize dishes that perfectly match your taste, event style & budget.",
      image: "/images/how-it-work-image-2.jpg",
      delay: "0.2s",
    },
    {
      step: "Step 03",
      title: "We Prepare & Serve",
      desc: "Our team handle for food preparation to setup presentation professional service.",
      image: "/images/how-it-work-image-3.jpg",
      delay: "0.4s",
    },
  ];

  return (
    <div className="how-it-work dark-section" id="how-it-works">
      <div className="container">
        {/* Section Row Start */}
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">How It Works</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Simple process for perfect event catering
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-xl-6">
            {/* Section Content Button Start */}
            <div className="section-content-btn">
              {/* Section Title Content Start */}
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>
                  We simplify catering with clear steps, expert planning, quality food preparation, and professional service to make your event truly stress-free.
                </p>
              </div>
              {/* Section Title Content End */}

              {/* Section Title Button Start */}
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                <Link href="/contact" className="btn-default btn-highlighted">
                  Get Started
                </Link>
              </div>
              {/* Section Title Button End */}
            </div>
            {/* Section Content Button End */}
          </div>
        </div>
        {/* Section Row End */}

        <div className="row">
          {steps.map((item, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              {/* How Work Item Start */}
              <div className="how-work-item wow fadeInUp" data-wow-delay={item.delay}>
                <div className="how-work-item-image">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
                <div className="how-work-item-content">
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
              {/* How Work Item End */}
            </div>
          ))}

          <div className="col-lg-12">
            {/* Section Footer Text Start */}
            <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.8s">
              {/* Satisfy Client Images Start */}
              <div className="satisfy-client-images">
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="/images/author-1.jpg" alt="Client 1" />
                  </figure>
                </div>
                <div className="satisfy-client-image add-more">
                  <img src="/images/icon-phone-white.svg" alt="Phone" />
                </div>
              </div>
              {/* Satisfy Client Images End */}
              <p>
                Your perfect catering experience starts with us.{" "}
                <Link href="/contact">Contact Us</Link>
              </p>
            </div>
            {/* Section Footer Text End */}
          </div>
        </div>
      </div>
    </div>
  );
}
