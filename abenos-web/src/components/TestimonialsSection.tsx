"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    quote:
      "“ABENOS has managed our offshore jack-up rig catering and camp living quarters across demanding Arabian Gulf operations. Their certified crews uphold strict HACCP food safety, multi-ethnic nutritious menus, and zero-LTI safety standards under tight mobilization windows.”",
    name: "Capt. Tariq Al-Mansoor",
    role: "Offshore Operations Manager",
    company: "Marine Drilling & Energy Services",
    avatar: "/images/author-1.jpg",
  },
  {
    quote:
      "“Mobilizing 24/7 life-support and 3,000+ daily meals across remote exploration desert camps requires disciplined execution. ABENOS delivers consistent culinary variety, seamless camp administration, and impeccable camp hygiene month after month.”",
    name: "Rajesh Nambiar",
    role: "Project Logistics & Facilities Director",
    company: "Upstream Energy Infrastructure",
    avatar: "/images/author-2.jpg",
  },
  {
    quote:
      "“Their ship chandelling and DNV 2.7-1 certified refrigerated container support keep our offshore vessel fleet fully provisioned with zero port delays. Reliable fresh provisions, fast gate-pass clearances, and dependable 24/7 anchorage launch delivery.”",
    name: "Mark Henderson",
    role: "Fleet Logistics Superintendent",
    company: "Offshore Supply Vessels (OSV)",
    avatar: "/images/author-3.jpg",
  },
  {
    quote:
      "“As an officially approved Saudi Aramco & ADNOC catering partner, ABENOS demonstrates audited QHSE compliance at every touchpoint. Their dedicated camp bosses and culinary teams keep our workforce healthy, motivated, and operational.”",
    name: "Fahad Al-Subaie",
    role: "Camp & Workforce Support Lead",
    company: "Industrial Energy Operations",
    avatar: "/images/author-1.jpg",
  },
];

export default function TestimonialsSection() {
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (swiperContainerRef.current) {
      swiperInstanceRef.current = new Swiper(swiperContainerRef.current, {
        modules: [Autoplay],
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
          },
          1300: {
            slidesPerView: 2,
          },
        },
      });
    }

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="our-testimonials" id="testimonials">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">
                Client Testimonials &amp; Trust
              </span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                What Energy Majors &amp; Offshore Operators Say About ABENOS
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-5">
            {/* Testimonials Image Box Start */}
            <div className="testimonials-image-box wow fadeInUp">
              {/* Testimonials Image Start */}
              <div className="testimonials-image">
                <figure className="image-anime">
                  <Image
                    src="/images/our-testimonials-image.jpg"
                    alt="Our Testimonials"
                    width={410}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>
              </div>
              {/* Testimonials Image End */}

              {/* Testimonials Client Box Start */}
              <div className="testimonials-client-box">
                <div className="testimonials-client-header">
                  {/* Satisfy Client Images Start */}
                  <div className="satisfy-client-images">
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/author-1.jpg"
                          alt="Client 1"
                          width={48}
                          height={48}
                        />
                      </figure>
                    </div>
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/author-2.jpg"
                          alt="Client 2"
                          width={48}
                          height={48}
                        />
                      </figure>
                    </div>
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/author-3.jpg"
                          alt="Client 3"
                          width={48}
                          height={48}
                        />
                      </figure>
                    </div>
                  </div>
                  {/* Satisfy Client Images End */}

                  <div className="testimonials-client-counter">
                    <h2>
                      <span className="counter">3.5</span>M+
                    </h2>
                  </div>
                </div>
                <div className="testimonials-client-content">
                  <p>Annual Meals Served With 0 LTI</p>
                </div>
              </div>
              {/* Testimonials Client Box End */}
            </div>
            {/* Testimonials Image Box End */}
          </div>

          <div className="col-xl-8 col-md-7">
            {/* Testimonials Slider Start */}
            <div className="testimonials-slider">
              <div className="swiper" ref={swiperContainerRef}>
                <div className="swiper-wrapper" data-cursor-text="Drag">
                  {testimonialsData.map((item, index) => (
                    <div className="swiper-slide" key={index}>
                      {/* Testimonials Item Start */}
                      <div className="testimonials-item">
                        <div className="testimonials-item-rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="testimonials-item-body">
                          <div className="testimonials-item-content">
                            <p>{item.quote}</p>
                          </div>
                          <div className="testimonials-item-author-box">
                            <div className="testimonials-item-author">
                              <div className="testimonials-item-author-image">
                                <figure>
                                  <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                  />
                                </figure>
                              </div>
                              <div className="testimonials-item-author-content">
                                <h2>{item.name}</h2>
                                <p style={{ fontWeight: 600, color: "#1B75BC", marginBottom: "2px" }}>
                                  {item.role}
                                </p>
                                <span style={{ fontSize: "12px", color: "#64748B", fontWeight: 500 }}>
                                  {item.company}
                                </span>
                              </div>
                            </div>
                            <div className="testimonial-item-quote">
                              <Image
                                src="/images/testimonial-quote.svg"
                                alt="Quote"
                                width={40}
                                height={40}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonials Item End */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Testimonials Slider End */}
          </div>

          <div className="col-lg-12">
            {/* Section Footer Text Start */}
            <div
              className="section-footer-text section-satisfy-img wow fadeInUp"
              data-wow-delay="0.2s"
            >
              {/* Satisfy Client Images Start */}
              <div className="satisfy-client-images">
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <Image
                      src="/images/author-1.jpg"
                      alt="Client"
                      width={48}
                      height={48}
                    />
                  </figure>
                </div>
                <div className="satisfy-client-image add-more">
                  <Image
                    src="/images/icon-phone-white.svg"
                    alt="Contact"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              {/* Satisfy Client Images End */}
              <p>
                From high-spec offshore rigs to remote desert camps —{" "}
                <Link href="#contact">
                  ABENOS delivers certified life-support solutions you can trust.
                </Link>
              </p>
              <ul className="section-footer-border-list">
                <li>
                  <b>
                    <span className="counter">100</span>%
                  </b>{" "}
                  Zero LTI Safety Culture
                </li>
                <li>
                  Approved By <b>Saudi Aramco &amp; ADNOC</b>
                </li>
              </ul>
            </div>
            {/* Section Footer Text End */}
          </div>
        </div>
      </div>
    </div>
  );
}
