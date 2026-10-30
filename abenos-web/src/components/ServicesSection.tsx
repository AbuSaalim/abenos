"use client";

import React from "react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Wedding Catering",
      desc: "Delicious catering tailored for every special event",
      image: "/images/service-image-1.jpg",
      delay: "0s",
    },
    {
      id: 2,
      title: "Corporate Catering",
      desc: "Professional catering solutions for conferences, and events.",
      image: "/images/service-image-2.jpg",
      delay: "0.2s",
    },
    {
      id: 3,
      title: "Private Party Catering",
      desc: "Perfect for anniversaries, and family events options.",
      image: "/images/service-image-3.jpg",
      delay: "0.4s",
    },
    {
      id: 4,
      title: "Event & Outdoor Catering",
      desc: "Complete catering setup for large event, and celebrations.",
      image: "/images/service-image-4.jpg",
      delay: "0.6s",
    },
  ];

  return (
    <div className="our-services dark-section" id="services">
      <div className="container">
        {/* Section Row Start */}
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">Our Services</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Premium catering crafted for every occasions
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>
        {/* Section Row End */}

        <div className="row">
          {services.map((item) => (
            <div className="col-xl-3 col-md-6" key={item.id}>
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay={item.delay}>
                <div className="service-item-image">
                  <Link href="/service-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={item.image} alt={item.title} />
                    </figure>
                  </Link>
                </div>
                <div className="service-item-content">
                  <h2>
                    <Link href="/service-single">{item.title}</Link>
                  </h2>
                  <p>{item.desc}</p>
                </div>
              </div>
              {/* Service Item End */}
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
                <Link href="/services">View our all services.</Link>
              </p>
            </div>
            {/* Section Footer Text End */}
          </div>
        </div>
      </div>
    </div>
  );
}
