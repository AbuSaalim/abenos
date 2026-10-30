"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
  delay?: string;
}

const faqList: FaqItem[] = [
  {
    question: "Which energy operators and national authorities have approved ABENOS?",
    answer:
      "ABENOS is an officially approved service provider for Saudi Aramco (Kingdom of Saudi Arabia), ADNOC (United Arab Emirates), QatarEnergy (QP & QG in Qatar), and KJO / KOC (Joint Operations). We maintain audited compliance with international accreditations including ISO 9001 (Quality Management), ISO 22000 (HACCP Food Safety), ISO 14001 (Environmental Management), and ISO 45001 (Occupational Health & Safety).",
  },
  {
    question: "How does ABENOS ensure cold-chain integrity and food safety in remote/offshore environments?",
    answer:
      "We deploy dedicated DNV 2.7-1 certified refrigerated reefer containers engineered for extreme marine and desert conditions. Our end-to-end cold chain incorporates digital temperature loggers, automated threshold alarms, and strict HACCP cross-contamination controls from central provisioning hubs directly onto jack-up rigs, flotels, and remote exploration camps.",
    delay: "0.2s",
  },
  {
    question: "What certifications do your offshore catering and camp personnel hold?",
    answer:
      "All ABENOS offshore personnel—including Executive Chefs, Camp Bosses, Chief Stewards, and catering crews—are fully qualified with mandatory BOSIET, OPITO, and STCW maritime safety accreditations. In addition, our teams undergo continuous food hygiene and QHSE protocol training through our approved Highfield International training center in Saudi Arabia.",
    delay: "0.4s",
  },
  {
    question: "Can ABENOS manage turnkey life-support operations for large remote onshore camps?",
    answer:
      "Yes. Under our RESCOM division, we provide comprehensive camp life-support including commercial kitchen management, dietary menu engineering, camp administration, controlled access site security, accommodation housekeeping, and industrial high-turnaround laundry services capable of sustaining workforces from 100 to over 3,000+ personnel in remote upstream locations.",
    delay: "0.6s",
  },
  {
    question: "What port ship chandelling and victualing services do you provide for maritime fleets?",
    answer:
      "Our Victualing & Marine Support Services (VMSS) division provides full-range vessel replenishment alongside berthed vessels or at anchorage. We supply fresh, frozen, and dry provisions, certified marine stores (deck, cabin, engine consumables), port gate-pass clearances, and sub-agency coordination across major regional ports.",
    delay: "0.8s",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="our-faqs dark-section" id="faqs">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            {/* FAQS Content Start */}
            <div className="faqs-content">
              {/* Section Title Start */}
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">
                  Frequently Asked Questions
                </span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Operational Excellence, Compliance &amp; Life-Support FAQs
                </h2>
              </div>
              {/* Section Title End */}

              {/* FAQS Image Box Start */}
              <div className="faqs-image-box wow fadeInUp" data-wow-delay="0.2s">
                {/* FAQS Image Start */}
                <div className="faqs-image">
                  <figure className="image-anime">
                    <Image
                      src="/images/our-faqs-image.jpg"
                      alt="Catering FAQs"
                      width={510}
                      height={360}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </figure>
                </div>
                {/* FAQS Image End */}

                {/* FAQS CTA Box Start */}
                <div className="faqs-cta-box">
                  {/* FAQS CTA Title Start */}
                  <div className="faqs-cta-title">
                    <h3>Headquarters Support</h3>
                  </div>
                  {/* FAQS CTA Title End */}

                  {/* FAQS CTA Item List Start */}
                  <div className="faqs-cta-item-list">
                    {/* FAQS CTA Item Start */}
                    <div className="faqs-cta-item">
                      <div className="icon-box">
                        <Image
                          src="/images/icon-phone-white.svg"
                          alt="Phone"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="faqs-cta-item-content">
                        <p>KSA Operational Line</p>
                        <h3>
                          <Link href="tel:+966583734217">+966 583 734 217</Link>
                        </h3>
                      </div>
                    </div>
                    {/* FAQS CTA Item End */}
                  </div>
                  {/* FAQS CTA Item List End */}
                </div>
                {/* FAQS CTA Box End */}
              </div>
              {/* FAQS Image Box End */}
            </div>
            {/* FAQS Content End */}
          </div>

          <div className="col-xl-7">
            {/* FAQ Accordion Start */}
            <div className="faq-accordion" id="accordion">
              {faqList.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay={item.delay}
                    key={index}
                  >
                    <h2 className="accordion-header" id={`heading${index + 1}`}>
                      <button
                        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={isOpen}
                        aria-controls={`collapse${index + 1}`}
                        style={{ outline: "none", boxShadow: "none" }}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index + 1}`}
                      className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                      aria-labelledby={`heading${index + 1}`}
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* FAQ Accordion End */}
          </div>
        </div>
      </div>
    </div>
  );
}
