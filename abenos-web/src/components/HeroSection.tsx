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
                    fontSize: "clamp(22px, 2.8vw, 36px)",
                    lineHeight: 1.28,
                  }}
                >
                  International service standards with Local expertise. Quality,
                  Safety and People at the center of every operation.
                </h1>

                {/* Responsive 5 Business Segments Chips / Grid */}
                <div className="hero-segments-grid">
                  {[
                    { title: "Offshore & Marine", tag: "Energy O&M" },
                    {
                      title: "Remote Site & Camp Management",
                      tag: "RESCOM",
                    },
                    { title: "Integrated FM Services", tag: "IFM" },
                    {
                      title: "Victualing Support Services",
                      tag: "VSS",
                    },
                    {
                      title: "Corporate & Industrial Services",
                      tag: "CIS",
                    },
                  ].map((seg, i) => (
                    <div key={i} className="hero-segment-chip">
                      <span className="hero-chip-glow-dot" />
                      <span className="hero-chip-title">{seg.title}</span>
                      <span className="hero-chip-badge">{seg.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Section Title End */}

              {/* Hero Action Buttons (Primary & Secondary) */}
              <div
                className="hero-actions-group wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Link href="#contact" className="hero-btn-primary">
                  <span>Request a Proposal</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link href="#sectors-showcase" className="hero-btn-secondary">
                  <span>Explore Our Services</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
              {/* Hero Action Buttons End */}

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
