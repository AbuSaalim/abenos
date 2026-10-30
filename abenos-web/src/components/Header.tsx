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

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? "" : menu);
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
            <Link className="navbar-brand me-0" href="/">
              <img
                src="/images/logo.svg"
                alt="ABENOS Logo"
                style={{ height: "100px", width: "auto", display: "block" }}
              />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start (Desktop Center) */}
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

                  {/* 4. Sectors We Serve (Dropdown with Onshore & Offshore) */}
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#sectors-showcase">
                      Sectors We Serve
                    </a>
                    <ul>
                      <li className="nav-item">
                        <a className="nav-link" href="#sectors-showcase">
                          ONSHORE
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#sectors-showcase">
                          OFFSHORE
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
            {/* Main Menu End */}

            {/* Header Right CTA Button (Desktop Right) */}
            <div className="header-action-wrap d-none d-lg-flex align-items-center">
              <div className="header-btn">
                <Link href="#contact" className="btn-default btn-highlighted">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Navbar Toggle Start (Mobile) */}
            <div className="navbar-toggle">
              <a
                href="#menu"
                role="button"
                aria-label="Toggle Mobile Menu"
                className={`slicknav_btn ${
                  mobileMenuOpen ? "slicknav_open" : "slicknav_collapsed"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
              >
                <span className="slicknav_menutxt"></span>
                <span className="slicknav_icon">
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                </span>
              </a>
            </div>
            {/* Navbar Toggle End */}
          </div>
        </nav>

        {/* Responsive Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="responsive-menu" style={{ display: "block" }}>
            <div className="slicknav_menu">
              <ul className="slicknav_nav">
                <li>
                  <a href="/" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                    Our Values
                  </a>
                </li>
                <li
                  className={`slicknav_parent ${
                    openSubmenu === "sectors"
                      ? "slicknav_open"
                      : "slicknav_collapsed"
                  }`}
                >
                  <a
                    href="#sectors-showcase"
                    role="menuitem"
                    aria-haspopup="true"
                    className="slicknav_item slicknav_row"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSubmenu("sectors");
                    }}
                  >
                    <span>Sectors We Serve</span>
                    <span className="slicknav_arrow">
                      {openSubmenu === "sectors" ? " ▲" : " ▼"}
                    </span>
                  </a>
                  {openSubmenu === "sectors" && (
                    <ul className="slicknav_hidden" role="menu">
                      <li>
                        <a
                          href="#sectors-showcase"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          ONSHORE
                        </a>
                      </li>
                      <li>
                        <a
                          href="#sectors-showcase"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          OFFSHORE
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="#regional-presence"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Quality
                  </a>
                </li>
                <li>
                  <a
                    href="#regional-presence"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Trusted By
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </li>
                <li style={{ padding: "12px 20px" }}>
                  <a
                    href="#contact"
                    className="btn-default btn-highlighted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
