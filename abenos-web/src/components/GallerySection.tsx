"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Catering Event Dish 1" },
  { src: "/images/gallery-2.jpg", alt: "Catering Event Setup 2" },
  { src: "/images/gallery-3.jpg", alt: "Catering Event Platter 3" },
  { src: "/images/gallery-4.jpg", alt: "Catering Event Gourmet 4" },
  { src: "/images/gallery-5.jpg", alt: "Catering Event Presentation 5" },
  { src: "/images/gallery-6.jpg", alt: "Catering Event Service 6" },
];

export default function GallerySection() {
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (swiperContainerRef.current && paginationRef.current) {
      swiperInstanceRef.current = new Swiper(swiperContainerRef.current, {
        modules: [Autoplay, Pagination],
        slidesPerView: 2,
        speed: 1500,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: paginationRef.current,
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
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

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextLightboxImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryImages.length);
    }
  };

  const prevLightboxImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <div className="our-gallery dark-section" id="gallery">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">
                Photo Gallery
              </span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Captured moments from our catering events
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-xl-6">
            {/* Section Content Button Start */}
            <div className="section-content-btn">
              {/* Section Title Content Start */}
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <p>
                  We simplify catering with clear steps, expert planning,
                  quality food preparation, and professional service to make
                  your event truly stress-free.
                </p>
              </div>
              {/* Section Title Content End */}

              {/* Section Button Start */}
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                <Link
                  href="#gallery"
                  className="btn-default btn-highlighted"
                >
                  View Image Gallery
                </Link>
              </div>
              {/* Section Button End */}
            </div>
            {/* Section Content Button End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Photo Gallery Slider Start */}
            <div className="photo-gallery-slider gallery-items page-gallery-box">
              <div className="swiper" ref={swiperContainerRef}>
                <div className="swiper-wrapper">
                  {galleryImages.map((img, index) => (
                    <div className="swiper-slide" key={index}>
                      {/* Image Gallery start */}
                      <div className="photo-gallery">
                        <a
                          href={img.src}
                          data-cursor-text="View"
                          onClick={(e) => {
                            e.preventDefault();
                            openLightbox(index);
                          }}
                        >
                          <figure className="image-anime">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              width={310}
                              height={430}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
                        </a>
                      </div>
                      {/* Image Gallery end */}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="photo-gallery-pagination"
                ref={paginationRef}
              ></div>
            </div>
            {/* Photo Gallery Slider End */}
          </div>

          <div className="col-lg-12">
            {/* Photo Gallery Footer List Start */}
            <div
              className="photo-gallery-footer-list wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <ul>
                <li>
                  <Image
                    src="/images/icon-photo-gallery-1.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Premium Quality Ingredients
                </li>
                <li>
                  <Image
                    src="/images/icon-photo-gallery-2.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Fast & Reliable Catering
                </li>
                <li>
                  <Image
                    src="/images/icon-photo-gallery-3.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Trusted by 1000+ Customers
                </li>
              </ul>
            </div>
            {/* Photo Gallery Footer List End */}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "24px",
              right: "32px",
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "36px",
              cursor: "pointer",
              zIndex: 1000000,
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevLightboxImage();
            }}
            style={{
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.15)",
              border: "none",
              color: "#fff",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000000,
            }}
            aria-label="Previous"
          >
            &#10094;
          </button>

          <div
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              position: "relative",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[activeImageIndex].src}
              alt={galleryImages[activeImageIndex].alt}
              width={900}
              height={700}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextLightboxImage();
            }}
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.15)",
              border: "none",
              color: "#fff",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000000,
            }}
            aria-label="Next"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
