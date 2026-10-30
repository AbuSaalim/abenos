"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  image: string;
  category: string;
  title: string;
  link: string;
  delay?: string;
}

const blogPosts: BlogPost[] = [
  {
    image: "/images/post-1.jpg",
    category: "Offshore Logistics",
    title: "Cold-Chain Integrity in Marine Victualing: DNV 2.7-1 Reefer Container Support",
    link: "#!",
  },
  {
    image: "/images/post-2.jpg",
    category: "QHSE & Safety",
    title: "Zero-LTI Culture Across Remote Desert Camps: Operational Lessons from 3.5M+ Meals",
    link: "#!",
    delay: "0.2s",
  },
  {
    image: "/images/post-3.jpg",
    category: "Crew Welfare",
    title: "Multi-Ethnic Nutritional Planning for Demanding 24/7 Offshore Exploration Personnel",
    link: "#!",
    delay: "0.4s",
  },
];

export default function BlogSection() {
  return (
    <div className="our-blog" id="blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">
                Industry Insights &amp; Field Reports
              </span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Technical Insights on Offshore Victualing, QHSE &amp; Camp Operations
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              {/* Post Item Start */}
              <div
                className="post-item wow fadeInUp"
                data-wow-delay={post.delay}
              >
                <div className="post-featured-image">
                  <a href="#!" onClick={(e) => e.preventDefault()} data-cursor-text="View">
                    <figure>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={410}
                        height={266}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </figure>
                  </a>
                </div>
                <div className="post-item-body">
                  <div className="post-item-content">
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#1B75BC",
                        background: "rgba(27, 117, 188, 0.08)",
                        padding: "3px 10px",
                        borderRadius: "20px",
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {post.category}
                    </span>
                    <h2>
                      <a href="#!" onClick={(e) => e.preventDefault()}>
                        {post.title}
                      </a>
                    </h2>
                  </div>
                  <div className="post-item-btn">
                    <a
                      href="#!"
                      onClick={(e) => e.preventDefault()}
                      className="readmore-btn"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
              {/* Post Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
