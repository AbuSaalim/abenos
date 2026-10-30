"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="main-footer dark-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            {/* Footer Header Start */}
            <div className="about-footer">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <Link href="/">
                  <Image
                    src="/images/logo.svg"
                    alt="ABENOS Logo"
                    width={160}
                    height={49}
                    style={{ height: "auto", width: "160px" }}
                  />
                </Link>
              </div>
              {/* Footer Logo End */}

              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>
                  We provide services for weddings, corporate events, and
                  private parties, and exceptional service for occasion.
                </p>
              </div>
              {/* About Footer Content End */}

              {/* Footer Social Links Start */}
              <div className="footer-social-links">
                <ul>
                  <li>
                    <a href="#" aria-label="Pinterest">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="X Twitter">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer Social Links End */}
            </div>
            {/* Footer Header End */}
          </div>

          <div className="col-xl-8">
            {/* Footer Links Box Start */}
            <div className="footer-links-box">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="#about">About Us</Link>
                  </li>
                  <li>
                    <Link href="#about">Our Values</Link>
                  </li>
                  <li>
                    <Link href="#regional-presence">Quality &amp; QHSE</Link>
                  </li>
                  <li>
                    <Link href="#regional-presence">Trusted by</Link>
                  </li>
                  <li>
                    <Link href="#contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* Footer Links End */}

              {/* Footer Links Start */}
              <div className="footer-links">
                <h2>Sectors &amp; Services</h2>
                <ul>
                  <li>
                    <Link href="#sectors-showcase">Onshore Camp Management</Link>
                  </li>
                  <li>
                    <Link href="#sectors-showcase">Offshore Rig Catering</Link>
                  </li>
                  <li>
                    <Link href="#sectors-showcase">Ship Chandelling &amp; Victualing</Link>
                  </li>
                  <li>
                    <Link href="#sectors-showcase">Industrial &amp; Camp Dining</Link>
                  </li>
                  <li>
                    <Link href="#sectors-showcase">Marine Life Support</Link>
                  </li>
                </ul>
              </div>
              {/* Footer Links End */}

              {/* Footer Links Start */}
              <div className="footer-links footer-working-hour">
                <h2>Working Hours</h2>
                <ul>
                  <li>
                    <span>Mon - Sat:</span>9:00 AM - 9:00 PM
                  </li>
                  <li>
                    <span>Sunday:</span>10:00 AM - 6:00 PM
                  </li>
                </ul>

                {/* Footer Newsletter Form Start */}
                <div className="footer-newsletter-form">
                  <h3>Newsletter</h3>
                  {subscribed ? (
                    <p style={{ color: "var(--accent-color)", marginTop: "10px" }}>
                      Thank you for subscribing!
                    </p>
                  ) : (
                    <form id="newslettersForm" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          name="mail"
                          className="form-control"
                          id="mail"
                          placeholder="Enter Email Address*"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <button
                          type="submit"
                          className="newsletter-btn"
                          aria-label="Subscribe"
                        >
                          <Image
                            src="/images/arrow-white.svg"
                            alt="Subscribe"
                            width={18}
                            height={18}
                          />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
                {/* Footer Newsletter Form End */}
              </div>
              {/* Footer Links End */}
            </div>
            {/* Footer Links Box End */}
          </div>
        </div>
      </div>

      {/* Footer Copyright Start */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Footer Copyright Text Start */}
              <div className="footer-copyright-text">
                <p>Copyright © 2026 All Rights Reserved.</p>
              </div>
              {/* Footer Copyright Text End */}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Copyright End */}
    </footer>
  );
}
