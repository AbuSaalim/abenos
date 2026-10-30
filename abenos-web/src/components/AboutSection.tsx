"use client";

import React, { useState } from "react";
import Link from "next/link";
import GrowthChart from "@/components/GrowthChart";

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {/* About Us Section Start */}
      <div className="about-us" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {/* About Us Image Box Start */}
              <div className="about-us-image-box wow fadeInUp">
                {/* About Image Start */}
                <div className="about-us-image">
                  <figure className="image-anime">
                    <img src="/images/about-us-image.jpg" alt="About Us" />
                  </figure>
                </div>
                {/* About Image End */}

                {/* About Video Image Start */}
                <div className="about-video-image">
                  <figure>
                    <img src="/images/about-video-image.jpg" alt="About Video" />
                  </figure>

                  {/* Video Play Button Start */}
                  {/* <div className="video-play-button" data-cursor-text="Play">
                    <a
                      href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                      role="button"
                      aria-label="Play Video"
                      className="popup-video"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsVideoOpen(true);
                      }}
                    >
                      <span className="bg-effect">
                        <i className="fa-solid fa-play"></i>
                      </span>
                    </a>
                  </div> */}
                  {/* Video Play Button End */}
                </div>
                {/* About Video Image End */}
              </div>
              {/* About Us Image Box End */}
            </div>

            <div className="col-xl-6">
              {/* About Us Content Start */}
              <div className="about-us-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">About Us</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Where culinary excellence meets elegant events
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Established in 2018 in the Kingdom of Saudi Arabia, ABENOS is a trusted provider of Catering and
Allied Services, supporting complex and critical operations across the onshore and offshore Oil &
Gas sectors, marine environments, and remote camps.
                  </p>
                </div>
                {/* Section Title End */}

                {/* About Item List Start */}
                <div className="about-us-items-list wow fadeInUp" data-wow-delay="0.4s">
                  {/* About Item 1 Start */}
                  <div className="about-us-item">
                    <div className="about-us-item-header">
                      <div className="icon-box">
                        <img src="/images/icon-about-item-1.svg" alt="Fresh Ingredients" />
                      </div>
                      <div className="about-us-item-title">
                        <h3>Our Growth Story</h3>
                      </div>
                    </div>
                    <div className="about-us-item-content">
                      <p>From 36 employees and 24,547 meals served...</p>
                    </div>
                  </div>
                  {/* About Item 1 End */}

                  {/* About Item 2 Start */}
                  <div className="about-us-item">
                    <div className="about-us-item-header">
                      <div className="icon-box">
                        <img src="/images/icon-about-item-2.svg" alt="Fresh Ingredients" />
                      </div>
                      <div className="about-us-item-title">
                        <h3>2030 Ambition</h3>
                      </div>
                    </div>
                    <div className="about-us-item-content">
                      <p>Mission: To reach 10,000,000 meals by 2030...</p>
                    </div>
                  </div>
                  {/* About Item 2 End */}
                </div>
                {/* About Item List End */}

                {/* About Us Content List Start */}
                <div className="about-us-content-list wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li>Delicious dishes prepared fresh for every occasion</li>
                    <li>Flexible catering solutions designed around your needs</li>
                  </ul>
                </div>
                {/* About Us Content List End */}

                {/* About Us Footer Start */}
                <div className="about-us-content-footer wow fadeInUp" data-wow-delay="0.8s">
                  {/* About Us Button Start */}
                  <div className="about-us-btn">
                    <Link href="#sectors-showcase" className="btn-default">
                      More about us
                    </Link>
                  </div>
                  {/* About Us Button End */}

                  {/* About Client Box Start */}
                  <div className="about-client-box">
                    {/* Satisfy Client Images Start */}
                    <div className="satisfy-client-images">
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="/images/author-1.jpg" alt="Client 1" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="/images/author-2.jpg" alt="Client 2" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="/images/author-3.jpg" alt="Client 3" />
                        </figure>
                      </div>
                    </div>
                    {/* Satisfy Client Images End */}

                    {/* About Client Content Start */}
                    <div className="about-client-content">
                      <h2>
                        <i className="fa-solid fa-star"></i>
                        <span className="counter">4.9</span>
                      </h2>
                      <p>Average Rating</p>
                    </div>
                    {/* About Client Content End */}
                  </div>
                  {/* About Client Box End */}
                </div>
                {/* About Us Footer End */}
              </div>
              {/* About Us Content End */}
            </div>
          </div>

          {/* Full-Width Growth Chart & 2030 Ambition (PDF Page 7) */}
          <div className="row">
            <div className="col-12">
              <GrowthChart />
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div
          className="mfp-bg mfp-ready"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1042,
            backgroundColor: "rgba(11, 11, 11, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
            tabIndex={-1}
            style={{ width: "90%", maxWidth: "800px", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              title="Close (Esc)"
              type="button"
              className="mfp-close"
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                color: "#fff",
                fontSize: "32px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setIsVideoOpen(false)}
            >
              ×
            </button>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "12px", border: "none" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
