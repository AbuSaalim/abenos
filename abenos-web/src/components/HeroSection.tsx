"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="hero dark-section parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">
                  Catering excellences
                </span>
                <h1
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 32px)",
                    lineHeight: 1.3,
                  }}
                >
                  International service standards with Local expertise. Quality,
                  Safety and People at the center of every operation.
                </h1>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "12px 0 0",
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "9px",
                  }}
                >
                  {[
                    { title: "Offshore & Marine", sub: "Energy O&M Segment" },
                    {
                      title: "Remote Site & Camp Management",
                      sub: "RESCOM Segment",
                    },
                    { title: "Integrated FM Services", sub: "IFM Segment" },
                    {
                      title: "Victualing Support Services",
                      sub: "VSS Segment",
                    },
                    {
                      title: "Corporate & Industrial Services",
                      sub: "CIS Segment",
                    },
                  ].map((seg, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "7px 14px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderLeft: "3px solid #FBAF41",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                        }}
                      >
                        {seg.title}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#94A3B8",
                          fontWeight: 500,
                        }}
                      >
                        ({seg.sub})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Section Title End */}

              {/* Hero Content Body Start */}
              <div
                className="hero-content-body hero-btns-row wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Hero Button Start */}
                <div className="hero-btn">
                  <Link href="#contact" className="btn-default btn-highlighted">
                    Request a Proposal
                  </Link>
                </div>
                <div className="hero-btn">
                  <Link href="#sectors-showcase" className="btn-default btn-highlighted">
                    Explore Our Services
                  </Link>
                </div>
                {/* Hero Button End */}
              </div>
              {/* Hero Content Body End */}

              {/* Hero Counter Item List Start */}
              <div className="hero-counter-list wow fadeInUp">
                {/* Hero Counter Item Start */}
                <div className="hero-counter-item">
                  <div className="icon-box">
                    <img
                      src="/images/icon-hero-counter-item-1.svg"
                      alt="Events Served"
                    />
                  </div>
                  <div className="hero-counter-item-content">
                    <h2>
                      <span className="counter">471</span>+
                    </h2>
                    <p> professionals in 2025 </p>
                  </div>
                </div>
                {/* Hero Counter Item End */}

                {/* Hero Counter Item Start */}
                <div className="hero-counter-item">
                  <div className="icon-box">
                    <img
                      src="/images/icon-hero-counter-item-2.svg"
                      alt="Happy Clients"
                    />
                  </div>
                  <div className="hero-counter-item-content">
                    <h2>
                      <span className="counter">3,571,494</span>+
                    </h2>
                    <p>meals served in 2025</p>
                  </div>
                </div>
                {/* Hero Counter Item End */}

                {/* Hero Counter Item Start */}
                <div className="hero-counter-item">
                  <div className="icon-box">
                    <img
                      src="/images/icon-hero-counter-item-3.svg"
                      alt="Years Experience"
                    />
                  </div>
                  <div className="hero-counter-item-content">
                    <h2>
                      <span className="counter">8</span>+
                    </h2>
                    <p>Years Experience</p>
                  </div>
                </div>
                {/* Hero Counter Item End */}
              </div>
              {/* Hero Counter Item List End */}
            </div>
            {/* Hero Content End */}
          </div>
        </div>

        {/* ===================================================
            TRUSTED CLIENTS MARQUEE STRIP
            Continuous infinite slow slide — no JS, pure CSS
            =================================================== */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "28px",
            marginTop: "10px",
          }}
        >
          {/* Label */}
          <p
            style={{
              fontFamily: "var(--accent-font)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.75)",
              textTransform: "uppercase",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Trusted by Industry Leaders
          </p>

          {/* Marquee wrapper — clip overflow, show smooth edges */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Left fade */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: "80px",
                background:
                  "linear-gradient(to right, rgba(8,14,26,0.95) 0%, transparent 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            {/* Right fade */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "80px",
                background:
                  "linear-gradient(to left, rgba(8,14,26,0.95) 0%, transparent 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />

            {/* Sliding track — duplicated 3x for seamless loop */}
            <div className="hero-trusted-track">
              {[...Array(3)].map((_, set) =>
                [1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <div
                    key={`logo-${set}-${n}`}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "12px",
                      padding: "16px 24px",
                      height: "120px",
                      minWidth: "200px",
                      width: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
                    }}
                  >
                    <img
                      src={`/images/trusted-by/${n}.jpg`}
                      alt={`Trusted Client ${n}`}
                      style={{
                        maxHeight: "120px",
                        maxWidth: "160px",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee CSS animation — pure CSS, no JS */}
      <style>{`
        .hero-trusted-track {
          display: flex;
          align-items: center;
          gap: 20px;
          width: max-content;
          animation: heroTrustedScroll 28s linear infinite;
        }
        .hero-trusted-track:hover {
          animation-play-state: paused;
        }
        @keyframes heroTrustedScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
