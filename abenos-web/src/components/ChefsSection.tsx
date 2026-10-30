"use client";

import React from "react";
import Link from "next/link";

export default function ChefsSection() {
  const chefs = [
    {
      id: 1,
      name: "Daniel Carter",
      role: "Executive Chef",
      image: "/images/chef-1.jpg",
      delay: "0s",
    },
    {
      id: 2,
      name: "Emily Roberts",
      role: "Sous Chef",
      image: "/images/chef-2.jpg",
      delay: "0.2s",
    },
    {
      id: 3,
      name: "Michael Adams",
      role: "Pastry Chef",
      image: "/images/chef-3.jpg",
      delay: "0.4s",
    },
    {
      id: 4,
      name: "Sophia Turner",
      role: "Cuisine Specialist",
      image: "/images/chef-4.jpg",
      delay: "0.6s",
    },
  ];

  return (
    <div className="our-chefs" id="chefs">
      <div className="container">
        {/* Section Row Start */}
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">Our Chefs</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Meet the team behind every delicious event
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>
        {/* Section Row End */}

        <div className="row">
          {chefs.map((chef) => (
            <div className="col-xl-3 col-md-6" key={chef.id}>
              {/* Chef Item Start */}
              <div className="chef-item wow fadeInUp" data-wow-delay={chef.delay}>
                <div className="chef-item-image">
                  <Link href="/chef-single" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={chef.image} alt={chef.name} />
                    </figure>
                  </Link>
                </div>
                <div className="chef-item-content">
                  <h2>
                    <Link href="/chef-single">{chef.name}</Link>
                  </h2>
                  <p>{chef.role}</p>
                </div>
              </div>
              {/* Chef Item End */}
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
                <Link href="/chef">View our all chef.</Link>
              </p>
            </div>
            {/* Section Footer Text End */}
          </div>
        </div>
      </div>
    </div>
  );
}
