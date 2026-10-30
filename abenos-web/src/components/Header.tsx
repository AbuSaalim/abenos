"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string>("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const fromTop = window.scrollY;

      if (fromTop > 100) {
        setIsSticky(fromTop > 250);
        setIsHide(fromTop > lastScrollY && fromTop > 450);
      } else {
        setIsSticky(false);
        setIsHide(false);
      }

      lastScrollY = fromTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? "" : menu);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu("");
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="main-header active-sticky-header">
      <div
        className={`header-sticky ${isSticky ? "active" : ""} ${
          isHide ? "hide" : ""
        }`}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid px-3 px-md-4 px-xl-5">
            {/* Logo Start */}
            <Link className="navbar-brand me-0" href="/" onClick={closeMenu}>
              <img
                src="/images/logo.svg"
                alt="ABENOS Logo"
                className="header-brand-logo"
              />
            </Link>
            {/* Logo End */}

            {/* Desktop Navigation Menu (Center) */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper mx-auto">
                <ul
                  className="navbar-nav align-items-center justify-content-center"
                  id="menu"
                >
                  {/* 1. Home */}
                  <li className={`nav-item ${isActive("/") ? "active" : ""}`}>
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>

                  {/* 2. About Us */}
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About Us
                    </a>
                  </li>

                  {/* 3. Our Values */}
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      Our Values
                    </a>
                  </li>

                  {/* 4. Sectors We Serve */}
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#sectors-showcase">
                      Sectors We Serve
                    </a>
                    <ul>
                      <li className="nav-item">
                        <a className="nav-link" href="#sectors-showcase">
                          Offshore &amp; Marine (O&amp;M)
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#sectors-showcase">
                          Onshore Camp Management
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#sectors-showcase">
                          Facility Management (IFM)
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#sectors-showcase">
                          Catering Manpower Crews
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#sectors-showcase">
                          Ship Chandelling &amp; Provisions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#sectors-showcase">
                          DNV Food Logistics
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* 5. Quality */}
                  <li className="nav-item">
                    <a className="nav-link" href="#regional-presence">
                      Quality
                    </a>
                  </li>

                  {/* 6. Trusted By */}
                  <li className="nav-item">
                    <a className="nav-link" href="#regional-presence">
                      Trusted By
                    </a>
                  </li>

                  {/* 7. Contact Us */}
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Desktop Navigation Menu End */}

            {/* Desktop Header Action Button */}
            <div className="header-action-wrap d-none d-lg-flex align-items-center">
              <div className="header-btn">
                <Link href="#contact" className="btn-default btn-highlighted">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Modern Attractive Hamburger Trigger (Mobile) */}
            <button
              type="button"
              className={`modern-hamburger-btn ${mobileMenuOpen ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
              <span className="hamburger-line line-3" />
            </button>
          </div>
        </nav>
      </div>

      {/* Backdrop Overlay for Mobile Drawer */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Modern Slide-Out Off-Canvas Drawer */}
      <aside
        className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="mobile-drawer-header">
          <Link href="/" onClick={closeMenu} className="d-flex align-items-center">
            <img
              src="/images/logo.svg"
              alt="ABENOS Logo"
              style={{ height: "46px", width: "auto" }}
            />
          </Link>
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="mobile-drawer-body">
          <nav className="mobile-drawer-nav">
            <ul className="mobile-drawer-list">
              {/* Home */}
              <li className="mobile-drawer-item">
                <Link
                  href="/"
                  className={`mobile-drawer-link ${isActive("/") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  <span>Home</span>
                  <span className="mobile-link-arrow">›</span>
                </Link>
              </li>

              {/* About Us */}
              <li className="mobile-drawer-item">
                <a
                  href="#about"
                  className="mobile-drawer-link"
                  onClick={closeMenu}
                >
                  <span>About Us</span>
                  <span className="mobile-link-arrow">›</span>
                </a>
              </li>

              {/* Our Values */}
              <li className="mobile-drawer-item">
                <a
                  href="#about"
                  className="mobile-drawer-link"
                  onClick={closeMenu}
                >
                  <span>Our Values</span>
                  <span className="mobile-link-arrow">›</span>
                </a>
              </li>

              {/* Sectors We Serve (Collapsible Submenu) */}
              <li className="mobile-drawer-item has-sub">
                <button
                  type="button"
                  className={`mobile-drawer-link sub-trigger ${
                    openSubmenu === "sectors" ? "open" : ""
                  }`}
                  onClick={() => toggleSubmenu("sectors")}
                >
                  <span>Sectors We Serve</span>
                  <span
                    className={`mobile-link-chevron ${
                      openSubmenu === "sectors" ? "rotate" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openSubmenu === "sectors" && (
                  <div className="mobile-drawer-sublist">
                    <a
                      href="#sectors-showcase"
                      className="mobile-sublink"
                      onClick={closeMenu}
                    >
                      <span className="sublink-dot" />
                      <span>Offshore &amp; Marine (O&amp;M)</span>
                    </a>
                    <a
                      href="#sectors-showcase"
                      className="mobile-sublink"
                      onClick={closeMenu}
                    >
                      <span className="sublink-dot" />
                      <span>Onshore Camp Management</span>
                    </a>
                    <a
                      href="#sectors-showcase"
                      className="mobile-sublink"
                      onClick={closeMenu}
                    >
                      <span className="sublink-dot" />
                      <span>Facility Management (IFM)</span>
                    </a>
                    <a
                      href="#sectors-showcase"
                      className="mobile-sublink"
                      onClick={closeMenu}
                    >
                      <span className="sublink-dot" />
                      <span>Catering Manpower Crews</span>
                    </a>
                    <a
                      href="#sectors-showcase"
                      className="mobile-sublink"
                      onClick={closeMenu}
                    >
                      <span className="sublink-dot" />
                      <span>Ship Chandelling &amp; Provisions</span>
                    </a>
                    <a
                      href="#sectors-showcase"
                      className="mobile-sublink"
                      onClick={closeMenu}
                    >
                      <span className="sublink-dot" />
                      <span>DNV 2.7-1 Food Logistics</span>
                    </a>
                  </div>
                )}
              </li>

              {/* Quality */}
              <li className="mobile-drawer-item">
                <a
                  href="#regional-presence"
                  className="mobile-drawer-link"
                  onClick={closeMenu}
                >
                  <span>Quality &amp; Safety</span>
                  <span className="mobile-link-arrow">›</span>
                </a>
              </li>

              {/* Trusted By */}
              <li className="mobile-drawer-item">
                <a
                  href="#regional-presence"
                  className="mobile-drawer-link"
                  onClick={closeMenu}
                >
                  <span>Approved By Majors</span>
                  <span className="mobile-link-arrow">›</span>
                </a>
              </li>

              {/* Contact Us */}
              <li className="mobile-drawer-item">
                <a
                  href="#contact"
                  className="mobile-drawer-link"
                  onClick={closeMenu}
                >
                  <span>Contact Us</span>
                  <span className="mobile-link-arrow">›</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Drawer Footer Action & Quick Contact */}
        <div className="mobile-drawer-footer">
          <a
            href="#contact"
            className="mobile-drawer-cta-btn"
            onClick={closeMenu}
          >
            <span>Request A Proposal</span>
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
          </a>

          <div className="mobile-drawer-contact-info">
            <a href="tel:+966583734217" className="mobile-contact-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+966 583 734 217</span>
            </a>
            <span className="mobile-cert-tag">
              ★ Approved by Saudi Aramco &amp; ADNOC
            </span>
          </div>
        </div>
      </aside>
    </header>
  );
}
