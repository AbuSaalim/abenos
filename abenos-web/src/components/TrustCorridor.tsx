"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ──────────────────────────────────────────────────────────────────────────────
   DATA: REGIONAL STATIONS & MILESTONES (WINDING S-CURVE ROUTE)
   ────────────────────────────────────────────────────────────────────────────── */

interface MilestoneStation {
  id: string;
  year: string;
  flag: string;
  country: string;
  region: string;
  sectorTag: string;
  detail: string;
  operatorApproval: {
    name: string;
    badge: string;
    icon: string;
    color: string;
    bgColor: string;
  };
  coords: { x: number; y: number };
  cardSide: "left" | "right" | "center";
  isFuture?: boolean;
}

const STATIONS: MilestoneStation[] = [
  {
    id: "ksa",
    year: "2018",
    flag: "🇸🇦",
    country: "KSA",
    region: "Kingdom of Saudi Arabia",
    sectorTag: "Foundational Hub",
    detail:
      "Remote desert camp operations, industrial catering, and workforce life support for upstream energy exploration.",
    operatorApproval: {
      name: "Saudi Aramco",
      badge: "Approved Vendor",
      icon: "fa-solid fa-shield-halved",
      color: "#15803D",
      bgColor: "#ECFDF5",
    },
    coords: { x: 180, y: 120 },
    cardSide: "right",
  },
  {
    id: "uae",
    year: "2024",
    flag: "🇦🇪",
    country: "UAE",
    region: "United Arab Emirates",
    sectorTag: "Offshore Expansion",
    detail:
      "Jack-up rigs, offshore marine living quarters (LQ), and high-spec maritime vessel victualing across Arabian waters.",
    operatorApproval: {
      name: "ADNOC",
      badge: "ICV Certified Partner",
      icon: "fa-solid fa-certificate",
      color: "#1B75BC",
      bgColor: "#EFF6FF",
    },
    coords: { x: 1020, y: 340 },
    cardSide: "left",
  },
  {
    id: "qatar",
    year: "2024",
    flag: "🇶🇦",
    country: "Qatar",
    region: "State of Qatar",
    sectorTag: "Energy Logistics Hub",
    detail:
      "QatarEnergy offshore platforms, Ras Laffan industrial dining, and certified reefer cold-chain marine provisioning.",
    operatorApproval: {
      name: "QatarEnergy",
      badge: "QP & QG Registered",
      icon: "fa-solid fa-check-double",
      color: "#8A1538",
      bgColor: "#FDF2F4",
    },
    coords: { x: 180, y: 560 },
    cardSide: "right",
  },
  {
    id: "india",
    year: "2026",
    flag: "🇮🇳",
    country: "India",
    region: "Republic of India",
    sectorTag: "Sub-Continental Base",
    detail:
      "Pan-India corporate catering, talent recruitment command, and central strategic supply-chain headquarters.",
    operatorApproval: {
      name: "KJO / KOC",
      badge: "Joint Ops Qualified",
      icon: "fa-solid fa-handshake",
      color: "#B45309",
      bgColor: "#FFFBEB",
    },
    coords: { x: 1020, y: 780 },
    cardSide: "left",
  },
  {
    id: "malaysia",
    year: "Expanding",
    flag: "🇲🇾",
    country: "Malaysia",
    region: "Selected Asian Markets",
    sectorTag: "Maritime Growth Horizon",
    detail:
      "Regional maritime ship chandelling network extending across Malaysia, Singapore Straits, and Far-East Asian shipping routes.",
    operatorApproval: {
      name: "Asian Maritime Corridor",
      badge: "Strategic Expansion",
      icon: "fa-solid fa-anchor",
      color: "#0284C7",
      bgColor: "#F0F9FF",
    },
    coords: { x: 600, y: 990 },
    cardSide: "center",
    isFuture: true,
  },
];

/* Global Approvals Strip */
const MASTER_APPROVALS = [
  { name: "Saudi Aramco", badge: "Official Vendor ID", country: "KSA", icon: "fa-solid fa-shield-halved", color: "#15803D" },
  { name: "ADNOC", badge: "ICV Certified Contractor", country: "UAE", icon: "fa-solid fa-certificate", color: "#1B75BC" },
  { name: "QatarEnergy", badge: "QP & QG Registered", country: "Qatar", icon: "fa-solid fa-check-double", color: "#8A1538" },
  { name: "KJO / KOC", badge: "Joint Operations Qualified", country: "Neutral Zone", icon: "fa-solid fa-handshake", color: "#B45309" },
];

/* ──────────────────────────────────────────────────────────────────────────────
   CURVED SVG PATH (SPACIOUS 1200 x 1120 DESKTOP CANVAS — ZERO OVERLAP)
   ────────────────────────────────────────────────────────────────────────────── */

// Desktop Winding S-Curve connecting Node 1 (180,120) -> Node 2 (1020,340) -> Node 3 (180,560) -> Node 4 (1020,780) -> Node 5 (600,990)
const DESKTOP_PATH =
  "M 80 120 L 180 120 C 480 80, 800 200, 1020 340 C 1170 420, 520 460, 180 560 C 30 630, 680 680, 1020 780 C 1160 850, 850 970, 600 990";

// Mobile Serpentine Curve
const MOBILE_PATH =
  "M 45 40 C 45 130, 75 220, 45 320 C 15 420, 75 520, 45 620 C 15 720, 75 820, 45 920 C 15 1020, 75 1100, 45 1180";

export default function TrustCorridor() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  const desktopCometRef = useRef<SVGCircleElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // ─────────────────────────────────────────────────────────────
    // DESKTOP: NATURAL SCROLL-DRIVEN LASER BEAM (NO LOCK / NO OVERLAP)
    // ─────────────────────────────────────────────────────────────
    mm.add("(min-width: 992px)", () => {
      const path = desktopPathRef.current;
      const comet = desktopCometRef.current;
      if (!path) return;

      const totalLength = path.getTotalLength();

      // Setup initial hidden path
      gsap.set(path, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });

      // Position comet at starting point
      const startPt = path.getPointAtLength(0);
      if (comet) {
        comet.setAttribute("cx", String(startPt.x));
        comet.setAttribute("cy", String(startPt.y));
        gsap.set(comet, { opacity: 0, scale: 0 });
      }

      // Initial card and node states
      stationRefs.current.forEach((node) => {
        if (node) gsap.set(node, { scale: 0.6, opacity: 0.4 });
      });
      cardRefs.current.forEach((card) => {
        if (card) gsap.set(card, { opacity: 0, y: 30 });
      });

      // Master Scroll-Linked Drawing Timeline (Natural page scroll, zero freeze)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "bottom 85%",
          scrub: 1.2,
        },
      });

      // Headline soft reveal
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0
      );

      // Show comet
      if (comet) {
        tl.to(comet, { opacity: 1, scale: 1, duration: 0.4 }, 0.1);
      }

      // Scrub SVG Path and Move Comet Head
      const pathProxy = { offset: totalLength };
      tl.to(
        pathProxy,
        {
          offset: 0,
          duration: 10,
          ease: "none",
          onUpdate: () => {
            if (path) {
              path.style.strokeDashoffset = String(pathProxy.offset);
            }
            if (comet && path) {
              const currentLength = totalLength - pathProxy.offset;
              const pt = path.getPointAtLength(Math.max(0, currentLength));
              comet.setAttribute("cx", String(pt.x));
              comet.setAttribute("cy", String(pt.y));
            }
          },
        },
        0.2
      );

      // Station triggers along the curve
      const triggerTimes = [0.8, 3.2, 5.8, 8.2, 9.8];
      STATIONS.forEach((_, i) => {
        const time = triggerTimes[i];
        const node = stationRefs.current[i];
        const card = cardRefs.current[i];

        if (node) {
          tl.to(
            node,
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "back.out(2)",
            },
            time
          );
        }

        if (card) {
          tl.to(
            card,
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
            },
            time + 0.1
          );
        }
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    // ─────────────────────────────────────────────────────────────
    // MOBILE / TABLET: NATURAL SCROLL ANIMATION
    // ─────────────────────────────────────────────────────────────
    mm.add("(max-width: 991px)", () => {
      const mobPath = mobilePathRef.current;
      if (mobPath) {
        const mobLength = mobPath.getTotalLength();
        gsap.set(mobPath, {
          strokeDasharray: mobLength,
          strokeDashoffset: mobLength,
        });

        gsap.to(mobPath, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 90%",
            scrub: 1,
          },
        });
      }

      // Mobile cards stagger reveal
      const mobileItems = sectionRef.current?.querySelectorAll(".tc-mobile-item");
      if (mobileItems) {
        mobileItems.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="trust-corridor-light" id="regional-presence">
      <div className="container-fluid px-3 px-md-4 px-xl-5 tc-layout-wrapper">
        {/* ─────────────────────────────────────────────────────────
            1. LEAD POSITIONING HEADLINE & BRAND STATEMENT (LIGHT THEME)
            ───────────────────────────────────────────────────────── */}
        <div className="tc-header-block text-center">
          <div className="tc-pill-badge">
            <i className="fa-solid fa-globe" />
            <span>Regional Footprint & Accreditations</span>
          </div>

          <h2 ref={headlineRef} className="tc-display-headline" data-cursor="-opaque">
            Regional Operations & Support Across KSA, Qatar, UAE, India, and Selected Asian Markets
          </h2>

          <p className="tc-tagline-sub">
            Officially approved partner for Saudi Aramco, ADNOC, QatarEnergy, and KJO — uniting high-spec
            offshore victualing with rugged onshore life support across the Middle East & Asia.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────
            2. DESKTOP INTERACTIVE WINDING S-CURVE CORRIDOR (LIGHT THEME)
            ───────────────────────────────────────────────────────── */}
        <div className="tc-desktop-corridor d-none d-lg-block">
          <div className="tc-svg-stage-container">
            {/* SVG Curve Canvas with Light Theme Gradients */}
            <svg
              className="tc-svg-canvas"
              viewBox="0 0 1200 1120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Vibrant Brand Energy Gradient (Blue -> Amber -> Cyan) */}
                <linearGradient id="lightBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1B75BC" />
                  <stop offset="35%" stopColor="#FBAF41" />
                  <stop offset="70%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#0284C7" />
                </linearGradient>

                {/* Soft Light-Mode Glow Filter */}
                <filter id="lightGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Guide Road Track (Dashed Light-Blue Line) */}
              <path
                d={DESKTOP_PATH}
                stroke="rgba(27, 117, 188, 0.16)"
                strokeWidth="4"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />

              {/* Active Animated Energy Beam */}
              <path
                ref={desktopPathRef}
                d={DESKTOP_PATH}
                stroke="url(#lightBeamGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#lightGlow)"
              />

              {/* Traveling Comet Laser Head */}
              <circle
                ref={desktopCometRef}
                r="7.5"
                fill="#1B75BC"
                stroke="#FBAF41"
                strokeWidth="3"
                filter="url(#lightGlow)"
              />
            </svg>

            {/* Station Nodes & Interactive Floating Cards Overlay */}
            {STATIONS.map((st, i) => {
              // Exact coordinate mapping onto 1200x1120 canvas
              const leftPct = (st.coords.x / 1200) * 100;
              const topPct = (st.coords.y / 1120) * 100;

              return (
                <div
                  key={st.id}
                  className={`tc-station-anchor tc-side-${st.cardSide}`}
                  style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                >
                  {/* Station Node Pin (Light Theme) */}
                  <div
                    ref={(el) => {
                      stationRefs.current[i] = el;
                    }}
                    className={`tc-station-node ${st.isFuture ? "tc-node-future" : ""}`}
                  >
                    <div className="tc-node-pulse-ring" />
                    <div className="tc-node-center">
                      <span className="tc-node-flag">{st.flag}</span>
                    </div>
                    <div className="tc-node-year-badge">{st.year}</div>
                  </div>

                  {/* Interactive Floating Card (Light Theme: Crisp White & Soft Luxury Shadow) */}
                  <div
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    className={`tc-floating-card tc-card-${st.cardSide} ${
                      st.isFuture ? "tc-card-future" : ""
                    }`}
                  >
                    <div className="tc-card-top-row">
                      <span className="tc-card-tag">{st.sectorTag}</span>
                      <div
                        className="tc-operator-badge"
                        style={{
                          borderColor: `${st.operatorApproval.color}35`,
                          backgroundColor: st.operatorApproval.bgColor,
                          color: st.operatorApproval.color,
                        }}
                      >
                        <i className={st.operatorApproval.icon} />
                        <span>{st.operatorApproval.name}</span>
                      </div>
                    </div>

                    <div className="tc-card-main-title">
                      <h3>{st.region}</h3>
                      <span className="tc-card-country-pill">{st.country}</span>
                    </div>

                    <p className="tc-card-detail-text">{st.detail}</p>

                    <div className="tc-card-footer-strip">
                      <span className="tc-status-dot" style={{ background: st.operatorApproval.color }} />
                      <span className="tc-approval-status-label">{st.operatorApproval.badge}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            3. MOBILE / TABLET STREAMLINED SERPENTINE ROAD (LIGHT THEME)
            ───────────────────────────────────────────────────────── */}
        <div className="tc-mobile-corridor d-block d-lg-none">
          <div className="tc-mobile-track-wrapper">
            {/* Mobile SVG Road */}
            <svg
              className="tc-mobile-svg"
              viewBox="0 0 90 1220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={MOBILE_PATH}
                stroke="rgba(27, 117, 188, 0.15)"
                strokeWidth="3.5"
                strokeDasharray="5 7"
              />
              <path
                ref={mobilePathRef}
                d={MOBILE_PATH}
                stroke="url(#lightBeamGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Mobile Cards Stack */}
            <div className="tc-mobile-cards-stack">
              {STATIONS.map((st) => (
                <div key={st.id} className="tc-mobile-item">
                  <div className="tc-mobile-pin">
                    <div className="tc-mobile-flag">{st.flag}</div>
                    <div className="tc-mobile-year">{st.year}</div>
                  </div>

                  <div className="tc-mobile-card">
                    <div className="tc-card-top-row">
                      <span className="tc-card-tag">{st.sectorTag}</span>
                      <div
                        className="tc-operator-badge"
                        style={{
                          borderColor: `${st.operatorApproval.color}35`,
                          backgroundColor: st.operatorApproval.bgColor,
                          color: st.operatorApproval.color,
                        }}
                      >
                        <i className={st.operatorApproval.icon} />
                        <span>{st.operatorApproval.name}</span>
                      </div>
                    </div>

                    <h4 className="tc-mobile-country-title">{st.region}</h4>
                    <p className="tc-mobile-desc">{st.detail}</p>

                    <div className="tc-card-footer-strip">
                      <span className="tc-status-dot" style={{ background: st.operatorApproval.color }} />
                      <span className="tc-approval-status-label">{st.operatorApproval.badge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            4. MASTER APPROVALS STRIP & METRICS BAR (DEDICATED BELOW ZONE)
            ───────────────────────────────────────────────────────── */}
        <div className="tc-bottom-authority-zone">
          {/* Energy Majors Approvals Strip */}
          <div className="tc-approvals-strip">
            <div className="tc-approvals-label">
              <span>Officially Approved Service Provider to Energy Majors</span>
            </div>

            <div className="tc-approvals-grid">
              {MASTER_APPROVALS.map((app) => (
                <div key={app.name} className="tc-approval-card" data-cursor="-opaque">
                  <div
                    className="tc-app-icon-wrap"
                    style={{ color: app.color, backgroundColor: `${app.color}14` }}
                  >
                    <i className={app.icon} />
                  </div>
                  <div className="tc-app-info">
                    <span className="tc-app-name">{app.name}</span>
                    <span className="tc-app-badge">{app.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Operational Metrics Summary */}
          <div className="tc-metrics-bar">
            <div className="tc-metric-box">
              <span className="tc-metric-num">5+</span>
              <span className="tc-metric-desc">Countries Operating</span>
            </div>
            <div className="tc-metric-sep" />

            <div className="tc-metric-box">
              <span className="tc-metric-num">3,571,494+</span>
              <span className="tc-metric-desc">Meals Served Annually</span>
            </div>
            <div className="tc-metric-sep" />

            <div className="tc-metric-box">
              <span className="tc-metric-num">0</span>
              <span className="tc-metric-desc">Lost Time Incidents (Zero LTI)</span>
            </div>
            <div className="tc-metric-sep" />

            <div className="tc-metric-box">
              <span className="tc-metric-num">471+</span>
              <span className="tc-metric-desc">Professionals in 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          LIGHT THEME STYLING — ZERO OVERLAP & NATURAL SCROLL FLOW
          ───────────────────────────────────────────────────────────── */}
      <style jsx>{`
        /* Master Section Light Theme */
        .trust-corridor-light {
          position: relative;
          width: 100%;
          background: linear-gradient(180deg, #f9efed 0%, #ffffff 18%, #f8fafc 82%, #f1f5f9 100%);
          padding: 90px 0 80px;
          overflow: hidden;
        }

        .tc-layout-wrapper {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* ── Header Block ── */
        .tc-header-block {
          max-width: 900px;
          margin: 0 auto 10px;
        }

        .tc-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(27, 117, 188, 0.08);
          border: 1px solid rgba(27, 117, 188, 0.25);
          border-radius: 40px;
          padding: 6px 18px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #1b75bc;
          margin-bottom: 16px;
        }

        .tc-pill-badge i {
          color: #fbaf41;
        }

        .tc-display-headline {
          font-family: var(--accent-font, "Bricolage Grotesque", sans-serif);
          font-weight: 800;
          font-size: clamp(24px, 2.6vw, 36px);
          line-height: 1.28;
          color: #0b1528;
          margin-bottom: 14px;
          letter-spacing: -0.015em;
        }

        .tc-tagline-sub {
          font-family: var(--default-font, "Source Sans 3", sans-serif);
          font-size: clamp(15px, 1.1vw, 17px);
          line-height: 1.6;
          color: #475569;
          margin: 0 auto;
        }

        /* ── DESKTOP STAGE: SPACIOUS 1200x1120 CANVAS (ZERO OVERLAP) ── */
        .tc-desktop-corridor {
          position: relative;
          width: 100%;
        }

        .tc-svg-stage-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          height: 1120px;
          margin: 0 auto;
        }

        .tc-svg-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
        }

        /* Station Anchor Coordinates */
        .tc-station-anchor {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          pointer-events: auto;
          z-index: 5;
        }

        .tc-side-right {
          flex-direction: row;
        }

        .tc-side-left {
          flex-direction: row-reverse;
        }

        .tc-side-center {
          flex-direction: column;
          transform: translate(-50%, -35%);
        }

        /* Station Node Pin (Light Theme) */
        .tc-station-node {
          position: relative;
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          z-index: 2;
        }

        .tc-node-pulse-ring {
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 2px solid rgba(251, 175, 65, 0.45);
          animation: tcPulseGlowLight 2.5s ease-in-out infinite;
        }

        @keyframes tcPulseGlowLight {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.35);
            opacity: 0.15;
          }
        }

        .tc-node-center {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #ffffff;
          border: 2.5px solid #fbaf41;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 4px 18px rgba(251, 175, 65, 0.4),
            0 0 0 6px rgba(27, 117, 188, 0.06);
        }

        .tc-node-flag {
          font-size: 21px;
          line-height: 1;
        }

        .tc-node-year-badge {
          position: absolute;
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--accent-font, "Bricolage Grotesque", sans-serif);
          font-weight: 800;
          font-size: 13px;
          color: #b45309;
          background: #ffffff;
          border: 1px solid rgba(251, 175, 65, 0.5);
          padding: 1px 8px;
          border-radius: 12px;
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
        }

        .tc-node-future .tc-node-center {
          border-color: #0284c7;
          border-style: dashed;
        }

        .tc-node-future .tc-node-year-badge {
          color: #0284c7;
          border-color: rgba(2, 132, 199, 0.4);
        }

        /* Floating Cards (Light Theme: Crisp White & Soft Shadows) */
        .tc-floating-card {
          position: relative;
          width: 320px;
          padding: 18px 22px;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid rgba(27, 117, 188, 0.14);
          box-shadow:
            0 12px 35px -8px rgba(11, 21, 40, 0.08),
            0 2px 6px rgba(0, 0, 0, 0.03);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
          overflow: hidden;
        }

        .tc-card-right {
          margin-left: 24px;
        }

        .tc-card-left {
          margin-right: 24px;
        }

        .tc-card-center {
          margin-top: 30px;
          width: 340px;
        }

        .tc-floating-card:hover {
          transform: translateY(-4px);
          border-color: #1b75bc;
          box-shadow:
            0 18px 45px -8px rgba(27, 117, 188, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .tc-card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 8px;
        }

        .tc-card-tag {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .tc-operator-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 9px;
          border-radius: 20px;
          border: 1px solid;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .tc-card-main-title {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 6px;
        }

        .tc-card-main-title h3 {
          font-family: var(--accent-font, "Bricolage Grotesque", sans-serif);
          font-size: 17px;
          font-weight: 700;
          color: #0b1528;
          margin: 0;
          line-height: 1.25;
        }

        .tc-card-country-pill {
          font-size: 11px;
          font-weight: 700;
          color: #b45309;
          letter-spacing: 0.5px;
        }

        .tc-card-detail-text {
          font-family: var(--default-font, "Source Sans 3", sans-serif);
          font-size: 13.5px;
          line-height: 1.5;
          color: #475569;
          margin-bottom: 12px;
        }

        .tc-card-footer-strip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-top: 8px;
          border-top: 1px solid rgba(27, 117, 188, 0.08);
        }

        .tc-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .tc-approval-status-label {
          font-size: 12px;
          font-weight: 600;
          color: #1e293b;
        }

        .tc-card-future {
          border-style: dashed;
          border-color: rgba(2, 132, 199, 0.4);
        }

        /* ── MOBILE CORRIDOR (LIGHT THEME) ── */
        .tc-mobile-corridor {
          position: relative;
          width: 100%;
          padding: 20px 0;
        }

        .tc-mobile-track-wrapper {
          position: relative;
          display: flex;
          gap: 16px;
        }

        .tc-mobile-svg {
          position: absolute;
          left: 0;
          top: 0;
          width: 60px;
          height: 100%;
          pointer-events: none;
        }

        .tc-mobile-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 26px;
          width: 100%;
          padding-left: 64px;
        }

        .tc-mobile-item {
          position: relative;
        }

        .tc-mobile-pin {
          position: absolute;
          left: -64px;
          top: 18px;
          width: 44px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .tc-mobile-flag {
          font-size: 22px;
          line-height: 1;
        }

        .tc-mobile-year {
          font-family: var(--accent-font, "Bricolage Grotesque", sans-serif);
          font-size: 11px;
          font-weight: 800;
          color: #b45309;
        }

        .tc-mobile-card {
          padding: 16px 18px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid rgba(27, 117, 188, 0.14);
          box-shadow: 0 8px 24px rgba(11, 21, 40, 0.06);
        }

        .tc-mobile-country-title {
          font-family: var(--accent-font, "Bricolage Grotesque", sans-serif);
          font-size: 16px;
          font-weight: 700;
          color: #0b1528;
          margin: 6px 0 4px;
        }

        .tc-mobile-desc {
          font-size: 13px;
          line-height: 1.45;
          color: #475569;
          margin-bottom: 8px;
        }

        /* ── BOTTOM ZONE: MASTER APPROVALS + METRICS (GENEROUS MARGIN, ZERO OVERLAP) ── */
        .tc-bottom-authority-zone {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: 50px;
          padding-top: 20px;
        }

        /* Master Approvals Strip */
        .tc-approvals-strip {
          text-align: center;
        }

        .tc-approvals-label {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 16px;
        }

        .tc-approvals-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .tc-approval-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 22px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid rgba(27, 117, 188, 0.12);
          box-shadow: 0 4px 16px rgba(11, 21, 40, 0.05);
          transition: all 0.3s ease;
        }

        .tc-approval-card:hover {
          border-color: #1b75bc;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(27, 117, 188, 0.12);
        }

        .tc-app-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .tc-app-info {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .tc-app-name {
          font-family: var(--accent-font, "Bricolage Grotesque", sans-serif);
          font-weight: 700;
          font-size: 15px;
          color: #0b1528;
        }

        .tc-app-badge {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        /* Metrics Bar (Light Theme) */
        .tc-metrics-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          padding: 24px 0;
          border-top: 1px solid rgba(27, 117, 188, 0.12);
          border-bottom: 1px solid rgba(27, 117, 188, 0.12);
        }

        .tc-metric-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .tc-metric-num {
          font-family: var(--accent-font, "Bricolage Grotesque", sans-serif);
          font-weight: 800;
          font-size: clamp(24px, 2.2vw, 32px);
          color: #1b75bc;
          line-height: 1;
        }

        .tc-metric-desc {
          font-size: 13px;
          font-weight: 600;
          color: #475569;
        }

        .tc-metric-sep {
          width: 1px;
          height: 36px;
          background: rgba(27, 117, 188, 0.16);
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .trust-corridor-light {
            padding: 60px 0 50px;
          }

          .tc-layout-wrapper {
            gap: 30px;
          }

          .tc-display-headline {
            font-size: 24px;
          }

          .tc-tagline-sub {
            font-size: 14.5px;
          }

          .tc-metric-sep {
            display: none;
          }

          .tc-metric-box {
            flex: 1 1 calc(50% - 20px);
          }

          .tc-approval-card {
            flex: 1 1 calc(50% - 10px);
            min-width: 160px;
          }
        }

        @media (max-width: 480px) {
          .tc-approval-card {
            flex: 1 1 100%;
          }

          .tc-metric-box {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </section>
  );
}
