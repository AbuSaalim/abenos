"use client";

import React from "react";
import Link from "next/link";

/* ──────────────────────────────────────────────────────────────────────────────
   DATA: 5 CORE BUSINESS SEGMENTS + ALLIED SERVICES
   ────────────────────────────────────────────────────────────────────────────── */

interface SegmentCard {
  step: string;
  badge: string;
  title: string;
  desc: string;
  image: string;
  delay: string;
  link: string;
}

const SECTOR_SEGMENTS: SegmentCard[] = [
  {
    step: "Segment 01",
    badge: "Energy O&M",
    title: "Offshore | Marine | Islands",
    desc: "Integrated Business Solutions (Catering, Housekeeping, Laundry & Allied Services) for jack-up rigs, platforms, barges & flotels.",
    image: "/images/sectors/segment-offshore-marine.jpg",
    delay: "0s",
    link: "/sectors/offshore",
  },
  {
    step: "Segment 02",
    badge: "RESCOM Segment",
    title: "Onshore Camp Management",
    desc: "Integrated Business Solutions (Camp Administration, Security, Accommodation Management, Catering, Housekeeping, Laundry & Allied Services).",
    image: "/images/sectors/segment-onshore-camp.jpg",
    delay: "0.2s",
    link: "/sectors/onshore",
  },
  {
    step: "Segment 03",
    badge: "IFM Services",
    title: "Facility Management & Support Services",
    desc: "Cleaning, Office Support Services, Technical & Electromechanical Maintenance Support Services for industrial & corporate headquarters.",
    image: "/images/sectors/segment-facility-management.jpg",
    delay: "0.4s",
    link: "/sectors/facility-management",
  },
  {
    step: "Segment 04",
    badge: "Certified Crews",
    title: "Offshore Catering Manpower Supplies",
    desc: "BOSIET & OPITO certified maritime crews, Executive Chefs, Camp Bosses, Chief Stewards & specialized offshore culinary personnel.",
    image: "/images/sectors/segment-catering-manpower.jpg",
    delay: "0s",
    link: "/sectors/manpower",
  },
  {
    step: "Segment 05",
    badge: "Port Chandelling",
    title: "Ship Chandelling & Maritime Provisions",
    desc: "Food (Fresh, Frozen & Dry Provisions), Deck Stores, Cabin Supplies & Engine Technical Supplies delivered alongside berthed or anchorage vessels.",
    image: "/images/sectors/segment-ship-chandelling.jpg",
    delay: "0.2s",
    link: "/sectors/ship-chandelling",
  },
  {
    step: "Allied Support",
    badge: "Logistics & Reefers",
    title: "Offshore Logistics & DNV Food Containers",
    desc: "Port gate passes, sub-agency coordination, security clearances & DNV 2.7-1 certified refrigerated reefer container cold-chain support.",
    image: "/images/sectors/segment-dnv-logistics.jpg",
    delay: "0.4s",
    link: "/sectors/logistics",
  },
];

export default function SectorsScrollShowcase() {
  return (
    <div className="how-it-work dark-section sectors-master-section" id="sectors-showcase">
      <div className="container">
        {/* Section Row Start */}
        <div className="row section-row align-items-center mb-5">
          <div className="col-xl-6">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">Sectors We Serve</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Specialized Catering, Camp Management &amp; Allied Solutions
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
                  ABENOS delivers full-spectrum turnkey catering, remote workforce life-support, certified maritime staffing, and port chandelling engineered for demanding onshore and offshore operations.
                </p>
              </div>
              {/* Section Title Content End */}

              {/* Section Title Button Start */}
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                <Link href="#contact" className="btn-default btn-highlighted">
                  Request Proposal
                </Link>
              </div>
              {/* Section Title Button End */}
            </div>
            {/* Section Content Button End */}
          </div>
        </div>
        {/* Section Row End */}

        {/* 6 Segments Card Grid Start */}
        <div className="row g-4">
          {SECTOR_SEGMENTS.map((item, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              {/* Enhanced Sector Card */}
              <div className="sector-segment-card wow fadeInUp" data-wow-delay={item.delay}>
                {/* Background Image Container */}
                <div className="sector-card-image-wrap">
                  <img src={item.image} alt={item.title} className="sector-card-bg-img" />
                  {/* Heavy Bottom Shadow & Gradient Overlay for Maximum Legibility */}
                  <div className="sector-card-dark-gradient" />
                </div>

                {/* Card Content Overlay (Positioned at Bottom) */}
                <div className="sector-card-content">
                  {/* Top Badges Row */}
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="sector-step-pill">{item.step}</span>
                    <span className="sector-badge-pill">{item.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="sector-card-title">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="sector-card-desc">{item.desc}</p>

                  {/* Choti Si, Elegant Micro Button */}
                  <div className="sector-card-btn-wrap">
                    <span className="sector-micro-btn" role="button">
                      <span>Explore Division</span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{ display: "inline-block", verticalAlign: "middle" }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* Enhanced Sector Card End */}
            </div>
          ))}

          {/* Master Closing Copy Section Footer */}
          <div className="col-lg-12 mt-4">
            <div
              className="section-footer-text section-satisfy-img wow fadeInUp"
              data-wow-delay="0.6s"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                padding: "24px 30px",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
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
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#E2E8F0" }}>
                <strong style={{ color: "#FBAF41" }}>OPERATIONAL COMMITMENT: </strong>
                From daily meal production and crew welfare to provisioning, housekeeping, logistics and manpower support, ABENOS is structured to keep demanding operations running safely, efficiently and consistently.{" "}
                <Link
                  href="#contact"
                  style={{ color: "#FBAF41", fontWeight: 700, textDecoration: "underline" }}
                >
                  Contact Our Team →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
