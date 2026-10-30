import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Values & Success Pillars | ABENOS Catering Services Co.",
  description: "Explore the core values and success pillars guiding ABENOS: People First, Service Excellence, Safety & Quality, Sustainable Future, and Integrity.",
};

const valuesData = [
  {
    number: "01",
    title: "People First",
    subtitle: "Internal & External Customers",
    icon: "fa-solid fa-users",
    description:
      "We invest in qualified, experienced, and customer-focused professionals through structured onboarding, ethical recruitment, continuous culinary and safety training, and deep employee engagement. We believe that empowered, motivated people are the true foundation of consistent service delivery and lasting client partnerships.",
    points: [
      "Ethical recruitment & structured onboarding",
      "Continuous culinary, hygiene & safety training",
      "Empowered on-site teams with dedicated welfare",
    ],
  },
  {
    number: "02",
    title: "Service Excellence",
    subtitle: "Consistent & Dependable Execution",
    icon: "fa-solid fa-award",
    description:
      "We work closely with our clients to understand unique dietary and operational requirements, plan effectively, and mobilize with speed and precision. Through proactive audits, transparent reporting, and timely corrective action, we continuously elevate our service delivery above expectations.",
    points: [
      "Rapid deployment & mobilization capability",
      "Rigorous quality control audits & feedback loops",
      "Tailored multi-ethnic menus for diverse workforces",
    ],
  },
  {
    number: "03",
    title: "Safety & Quality",
    subtitle: "Standards Beyond Statutory Compliance",
    icon: "fa-solid fa-shield-halved",
    description:
      "Safety and hygiene form the bedrock of daily operations. We integrate comprehensive food safety protocols, Hazard Analysis Critical Control Points (HACCP), environmental risk management, and robust QHSE oversight to safeguard people and preserve uninterrupted client operations.",
    points: [
      "HACCP & ISO-certified operational practices",
      "Rigorous supplier vetting & cold-chain monitoring",
      "Proven track record of zero Lost Time Incidents (LTI)",
    ],
  },
  {
    number: "04",
    title: "Sustainable Future",
    subtitle: "Environmental Stewardship",
    icon: "fa-solid fa-leaf",
    description:
      "We are committed to minimizing our environmental footprint across all operating sites. Through responsible local sourcing, energy and water conservation, food waste reduction programs, and eco-friendly packaging, we support a cleaner, greener tomorrow.",
    points: [
      "Targeted organic food waste reduction initiatives",
      "Energy-efficient commercial kitchen equipment",
      "Locally sourced ingredients supporting community growers",
    ],
  },
  {
    number: "05",
    title: "Integrity & Partnership",
    subtitle: "Trust, Accountability & Transparency",
    icon: "fa-solid fa-handshake",
    description:
      "We uphold the highest levels of transparency, accountability, and ethical governance in every contract. By acting as true strategic partners rather than mere vendors, we foster collaborative relationships built on mutual respect and shared success.",
    points: [
      "Complete fiscal and operational transparency",
      "Collaborative long-term client engagements",
      "Strict compliance with regional anti-corruption laws",
    ],
  },
];

export default function OurValuesPage() {
  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="Our Values"
        subtitle="The five foundational success pillars driving our operational excellence and client trust across the Middle East."
        breadcrumb="Our Values"
      />

      <section className="our-values-section py-5" style={{ padding: "90px 0", background: "var(--secondary-color)" }}>
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Core Philosophy</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Guided By Principles of Excellence
                </h2>
                <p className="text-muted mt-3">
                  At ABENOS, our values define how we mobilize, cook, serve, and safeguard thousands of offshore and onshore workers daily.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {valuesData.map((val, idx) => (
              <div className="col-lg-6" key={idx}>
                <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm border h-100 position-relative overflow-hidden">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 text-white"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "linear-gradient(135deg, #1B75BC 0%, #154c79 100%)",
                        fontSize: "24px",
                      }}
                    >
                      <i className={val.icon}></i>
                    </div>
                    <span className="display-6 fw-bold text-muted opacity-25">{val.number}</span>
                  </div>

                  <h3 className="h3 fw-bold mb-1">{val.title}</h3>
                  <p className="text-primary fw-semibold small mb-3">{val.subtitle}</p>
                  <p className="text-muted mb-4">{val.description}</p>

                  <ul className="list-unstyled mb-0 border-top pt-3">
                    {val.points.map((pt, pIdx) => (
                      <li key={pIdx} className="d-flex align-items-center mb-2 small text-dark">
                        <i className="fa-solid fa-circle-check text-success me-2"></i>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Strategic Call to Action Banner */}
            <div className="col-lg-6">
              <div
                className="p-4 p-md-5 rounded-4 text-white h-100 d-flex flex-column justify-content-center position-relative"
                style={{
                  background: "linear-gradient(135deg, #222226 0%, #17181c 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span className="badge bg-primary text-white px-3 py-2 text-uppercase mb-3 w-max">
                  Commitment To Quality
                </span>
                <h3 className="h2 fw-bold text-white mb-3">Partner With an Approved Operator</h3>
                <p className="text-white-50 mb-4">
                  Discover how our values translate into reliable daily operations for your remote camps, rigs, or marine vessels.
                </p>
                <div>
                  <Link href="/contact" className="btn btn-primary btn-lg rounded-pill px-4 py-3 fw-bold">
                    Discuss Your Requirements <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

