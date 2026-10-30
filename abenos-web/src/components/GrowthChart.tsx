"use client";

import React, { useState } from "react";

interface YearData {
  year: number;
  employees: number;
  meals: number;
  mealsLabel: string;
  heightPercent: number;
  yoy?: string;
  milestone: string;
}

const CHART_DATA: YearData[] = [
  {
    year: 2020,
    employees: 36,
    meals: 24547,
    mealsLabel: "24,547",
    heightPercent: 20,
    milestone: "Foundational KSA Launch",
  },
  {
    year: 2021,
    employees: 66,
    meals: 53689,
    mealsLabel: "53,689",
    heightPercent: 28,
    yoy: "+118%",
    milestone: "Workforce Doubled",
  },
  {
    year: 2022,
    employees: 157,
    meals: 209479,
    mealsLabel: "209,479",
    heightPercent: 42,
    yoy: "+290%",
    milestone: "Multi-Site Energy Deployments",
  },
  {
    year: 2023,
    employees: 190,
    meals: 1434685,
    mealsLabel: "1,434,685",
    heightPercent: 62,
    yoy: "+585%",
    milestone: "1M+ Meals Milestone Surpassed",
  },
  {
    year: 2024,
    employees: 285,
    meals: 2132235,
    mealsLabel: "2,132,235",
    heightPercent: 78,
    yoy: "+48%",
    milestone: "Qatar & UAE Regional Hubs",
  },
  {
    year: 2025,
    employees: 471,
    meals: 3571494,
    mealsLabel: "3,571,494",
    heightPercent: 94,
    yoy: "+67%",
    milestone: "3.57M Meals & 470+ Crew",
  },
];

export default function GrowthChart() {
  const [activeYear, setActiveYear] = useState<number>(2025);

  const selectedItem =
    CHART_DATA.find((d) => d.year === activeYear) || CHART_DATA[CHART_DATA.length - 1];

  return (
    <div className="growth-chart-wrapper mt-5 pt-3">
      {/* Container Box */}
      <div className="growth-chart-card">
        {/* Header Row */}
        <div className="row align-items-end mb-4">
          <div className="col-lg-8">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 growth-badge">
              <i className="fa-solid fa-chart-line" />
              <span>OUR JOURNEY OF EXCELLENCE</span>
            </div>
            <h3 className="growth-headline">
              Sustainable Growth Trajectory (2020 – 2025)
            </h3>
            <p className="growth-subtext mb-0">
              Between 2020 and 2025, ABENOS expanded from 36 personnel serving 24,547 meals to 471 professionals delivering over 3,571,494 meals annually — reflecting operational efficiency and expanding regional energy client partnerships.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <div className="growth-target-pill">
              <div className="target-icon">
                <i className="fa-solid fa-bullseye" />
              </div>
              <div className="text-start">
                <span className="target-label">2030 STRATEGIC MISSION</span>
                <strong className="target-val">10,000,000 Meals / Year</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Metric Highlight Tiles */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="metric-tile">
              <span className="metric-label">2025 ANNUAL MEAL PRODUCTION</span>
              <div className="metric-val text-emerald">3,571,494+</div>
              <div className="metric-note">
                <span className="growth-tag">+145x</span> Volume Growth Since 2020
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="metric-tile">
              <span className="metric-label">TOTAL OPERATIONAL WORKFORCE</span>
              <div className="metric-val text-marine">471 Professionals</div>
              <div className="metric-note">
                <span className="growth-tag blue">+13x</span> Multi-disciplinary Crew Scaling
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="metric-tile highlight-target">
              <span className="metric-label">NEXT HORIZON (2030 TARGET)</span>
              <div className="metric-val text-amber">10.0 Million</div>
              <div className="metric-note">
                Targeting 10M Meals Across Middle East &amp; Asia
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Visual Bar Chart Stage */}
        <div className="chart-stage-container">
          {/* Legend Row */}
          <div className="chart-legend-row">
            <div className="legend-item">
              <span className="legend-color-dot emerald" />
              <span>Annual Meals Served (Production Volume)</span>
            </div>
            <div className="legend-item">
              <span className="legend-color-dot marine" />
              <span>Workforce Strength (Certified Personnel)</span>
            </div>
            <div className="legend-item">
              <span className="legend-color-dot amber" />
              <span>2030 Strategic Horizon</span>
            </div>
          </div>

          {/* Chart Columns Stage */}
          <div className="chart-columns-grid">
            {CHART_DATA.map((item) => {
              const isSelected = activeYear === item.year;
              return (
                <div
                  key={item.year}
                  className={`chart-col ${isSelected ? "active" : ""}`}
                  onMouseEnter={() => setActiveYear(item.year)}
                  onClick={() => setActiveYear(item.year)}
                >
                  {/* Top Data Tag */}
                  <div className="col-top-tooltip">
                    <span className="tooltip-meals">{item.mealsLabel}</span>
                    {item.yoy && <span className="tooltip-yoy">{item.yoy}</span>}
                  </div>

                  {/* Vertical Track & Bar */}
                  <div className="bar-track">
                    <div
                      className="bar-fill-emerald"
                      style={{ height: `${item.heightPercent}%` }}
                    >
                      {/* Inner Shine Effect */}
                      <div className="bar-shine" />

                      {/* Workforce Pill Inside/Top of Bar */}
                      <div className="bar-headcount-badge">
                        <i className="fa-solid fa-user-group me-1" />
                        {item.employees}
                      </div>
                    </div>
                  </div>

                  {/* Base Year Label */}
                  <div className="col-base-label">
                    <strong className="year-text">{item.year}</strong>
                    <span className="headcount-sub">{item.employees} crew</span>
                  </div>
                </div>
              );
            })}

            {/* 7th Column: 2030 Ambition Target */}
            <div
              className={`chart-col target-col ${activeYear === 2030 ? "active" : ""}`}
              onMouseEnter={() => setActiveYear(2030)}
              onClick={() => setActiveYear(2030)}
            >
              <div className="col-top-tooltip target-badge">
                <span className="tooltip-meals">10,000,000</span>
                <span className="tooltip-yoy gold">Target</span>
              </div>

              <div className="bar-track target-track">
                <div className="bar-fill-amber" style={{ height: "100%" }}>
                  <div className="target-pulse-ring" />
                  <div className="target-inner-content">
                    <i className="fa-solid fa-rocket" />
                    <span>2030</span>
                  </div>
                </div>
              </div>

              <div className="col-base-label">
                <strong className="year-text text-amber">2030</strong>
                <span className="headcount-sub">10M Target</span>
              </div>
            </div>
          </div>

          {/* Active Year Detail Strip */}
          <div className="active-year-strip">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div className="d-flex align-items-center gap-3">
                <div className="year-bubble">
                  {activeYear === 2030 ? "2030 Goal" : activeYear}
                </div>
                <div>
                  <h5 className="mb-0 fw-bold text-dark">
                    {activeYear === 2030
                      ? "Targeting 10,000,000 Meals Annually"
                      : `${selectedItem.mealsLabel} Meals Served • ${selectedItem.employees} Staff`}
                  </h5>
                  <p className="mb-0 small text-muted">
                    {activeYear === 2030
                      ? "Strategic scaling across Saudi Arabia, UAE, Qatar, India and Southeast Asian energy hubs."
                      : selectedItem.milestone}
                  </p>
                </div>
              </div>

              {activeYear !== 2030 && selectedItem.yoy && (
                <div className="growth-yoy-box">
                  <span className="small text-muted d-block">Year-over-Year Surge</span>
                  <strong className="text-success fs-5">{selectedItem.yoy} Growth</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
