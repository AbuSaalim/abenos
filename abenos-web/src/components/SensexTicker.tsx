"use client";

import React, { useState, useEffect } from "react";
import { TrendingUp, ShieldCheck, Award, Users, Utensils, Globe, Clock } from "lucide-react";

export default function SensexTicker() {
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  const stats = [
    {
      label: "WORKFORCE (2025)",
      value: "471 Active Staff",
      change: "+65.2% vs 2024",
      isPositive: true,
      tag: "LIVE SENSEX UPDATE",
    },
    {
      label: "ANNUAL MEALS (2025)",
      value: "3,571,494 Meals",
      change: "+67.5% YoY Growth",
      isPositive: true,
      tag: "RECORD PRODUCTION",
    },
    {
      label: "2030 AMBITION",
      value: "10,000,000 Meals",
      change: "Target Vision",
      isPositive: true,
      tag: "EXPANSION MILESTONE",
    },
    {
      label: "SAFETY INTEGRITY",
      value: "Zero LTI & Fatalities",
      change: "100% Safe Hours",
      isPositive: true,
      tag: "HSE AUDIT PASSED",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="bg-[#101419] border-b border-white/10 text-white text-xs py-2 px-4 relative z-50 overflow-hidden font-sans">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Sensex Flashing Box */}
        <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{stats[activeStatIndex].tag}</span>
          </div>

          <div className="flex items-center space-x-2 text-[13px]">
            <span className="text-white/60 font-medium">{stats[activeStatIndex].label}:</span>
            <span className="font-bold text-white tracking-wide">{stats[activeStatIndex].value}</span>
            <span className="inline-flex items-center text-emerald-400 font-semibold text-[11px] bg-emerald-500/10 px-1.5 py-0.5 rounded">
              <TrendingUp className="w-3 h-3 mr-0.5" />
              {stats[activeStatIndex].change}
            </span>
          </div>
        </div>

        {/* Center / Right: Marquee of Approvals & Regional Hubs */}
        <div className="hidden lg:flex items-center space-x-6 text-[12px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#C89B73]" />
            <span>Approved: <strong>Saudi Aramco • ADNOC • QatarEnergy • KOC • KJO</strong></span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>HQ: <strong>Kingdom of Saudi Arabia (Est. 2018)</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
