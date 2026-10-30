"use client";

import React, { useState, useRef, useEffect } from "react";

export default function WhyChooseUs() {
  const [activeAccordion, setActiveAccordion] = useState<number>(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Auto-play when user scrolls / appears on this section
  useEffect(() => {
    const video = videoRef.current;
    const container = videoContainerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Ensure muted and retry if browser autoplay policy demands it
                video.muted = true;
                setIsMuted(true);
                video.play().catch(() => {});
              });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? 0 : index);
  };

  const accordionItems = [
    {
      id: 1,
      title: "Professional Service Team",
      icon: "/images/icon-why-choose-accordion-1.svg",
      text: "Our experienced highly trained team is dedicated to delivering seamless coordination, attentive service & a polished dining experience ensuring every guest feels valued and every moment of your event runs effortlessly.",
      delay: "0s",
    },
    {
      id: 2,
      title: "On-Time Delivery & Setup",
      icon: "/images/icon-why-choose-accordion-2.svg",
      text: "Our experienced highly trained team is dedicated to delivering seamless coordination, attentive service & a polished dining experience ensuring every guest feels valued and every moment of your event runs effortlessly.",
      delay: "0.2s",
    },
    {
      id: 3,
      title: "Affordable Packages",
      icon: "/images/icon-why-choose-accordion-3.svg",
      text: "Our experienced highly trained team is dedicated to delivering seamless coordination, attentive service & a polished dining experience ensuring every guest feels valued and every moment of your event runs effortlessly.",
      delay: "0.4s",
    },
  ];

  return (
    <>
      {/* Why Choose Us Section Start */}
      <div className="why-choose-us" id="why-us">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {/* Why Choose Content Start */}
              <div className="why-choose-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Why Choose Us</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    The perfect choice for your catering needs
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    We go beyond just food—offering premium quality, seamless service, and unforgettable experiences for every event.
                  </p>
                </div>
                {/* Section Title End */}

                {/* why-choose Accordion Start */}
                <div className="why-choose-accordion" id="wc_accordion">
                  {accordionItems.map((item) => {
                    const isOpen = activeAccordion === item.id;
                    return (
                      <div className="accordion-item wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
                        <h2 className="accordion-header" id={`wc_heading${item.id}`}>
                          <button
                            className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                            type="button"
                            onClick={() => toggleAccordion(item.id)}
                            aria-expanded={isOpen}
                            aria-controls={`wc_collapse${item.id}`}
                          >
                            <img src={item.icon} alt={item.title} /> {item.title}
                          </button>
                        </h2>
                        <div
                          id={`wc_collapse${item.id}`}
                          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                          role="region"
                          aria-labelledby={`wc_heading${item.id}`}
                        >
                          <div className="accordion-body">
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* why-choose Accordion End */}
              </div>
              {/* Why Choose Content End */}
            </div>

            <div className="col-xl-6">
              {/* Why Choose Image Start */}
              <div className="why-choose-image">
                <figure className="image-anime reveal">
                  <img src="/images/why-choose-image.jpg" alt="Why Choose Us" />
                </figure>
              </div>
              {/* Why Choose Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}

      {/* Intro Video Section with Chef Serving Food Video */}
      <div className="intro-video-box" ref={videoContainerRef}>
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-12">
              <div
                className="intro-video"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  maxHeight: "700px",
                  background: "#0B1528",
                }}
              >
                {/* HTML5 Video with Chef_serving_food.mp4 */}
                <video
                  ref={videoRef}
                  src="/Chef_serving_food.mp4"
                  poster="/images/intro-video-image.jpg"
                  loop
                  muted={isMuted}
                  playsInline
                  autoPlay
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "700px",
                    aspectRatio: "16 / 9",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Subtle cinematic gradient overlays */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(11,21,40,0.45) 0%, transparent 25%, transparent 70%, rgba(11,21,40,0.65) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Live Operations / Chef Badge on top-left */}
                <div
                  style={{
                    position: "absolute",
                    top: "24px",
                    left: "24px",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(11, 21, 40, 0.75)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    padding: "8px 16px",
                    borderRadius: "30px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#2EA44F",
                      boxShadow: "0 0 10px #2EA44F",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    ABENOS Catering Operations
                  </span>
                </div>

                {/* Floating Sound Toggle & Play/Pause Controls at bottom-right */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "24px",
                    right: "24px",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {/* Play / Pause Button */}
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "rgba(11, 21, 40, 0.8)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <i className={isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"} />
                  </button>

                  {/* Sound Toggle (Mute / Unmute) */}
                  <button
                    type="button"
                    onClick={toggleSound}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: isMuted ? "rgba(11, 21, 40, 0.8)" : "#FBAF41",
                      backdropFilter: "blur(8px)",
                      border: isMuted ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid #FBAF41",
                      color: isMuted ? "#FFFFFF" : "#0B1528",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <i className={isMuted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Intro Video Section End */}
    </>
  );
}