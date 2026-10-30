import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QHSE & Quality Assurance | ABENOS Catering Services Co.",
  description: "Learn about ABENOS rigorous QHSE protocols, ISO 9001, ISO 22000 (HACCP), ISO 14001, ISO 45001 certifications and our zero-incident safety commitment.",
};

const qhsePillars = [
  {
    title: "Quality Management (ISO 9001)",
    code: "ISO 9001:2015",
    icon: "fa-solid fa-certificate",
    description:
      "Structured quality control procedures across procurement, food prep, storage, and customer delivery. We execute standardized SOPs with continuous auditing to ensure reliable, high-tier dining experiences every day.",
  },
  {
    title: "Food Safety & HACCP (ISO 22000)",
    code: "ISO 22000 / HACCP",
    icon: "fa-solid fa-utensils",
    description:
      "Strict critical control point monitoring from supplier receiving through cooking, holding, and serving. Regular microbiological lab testing and digital temperature logging protect every meal served.",
  },
  {
    title: "Occupational Health & Safety (ISO 45001)",
    code: "ISO 45001:2018",
    icon: "fa-solid fa-helmet-safety",
    description:
      "Proactive hazard identification, risk assessments (JSA/HIRA), and continuous safety briefings before every shift. We maintain an exemplary safety record with zero Lost Time Incidents across offshore and remote sites.",
  },
  {
    title: "Environmental Protection (ISO 14001)",
    code: "ISO 14001:2015",
    icon: "fa-solid fa-seedling",
    description:
      "Systematic waste segregation, oil recycling, bio-degradable chemical usage, and active energy/water conservation programs designed to minimize the ecological footprint of all camp and marine kitchen facilities.",
  },
];

const safetyStats = [
  { value: "0", label: "Lost Time Incidents (LTI)", icon: "fa-solid fa-shield-heart" },
  { value: "100%", label: "HACCP Adherence", icon: "fa-solid fa-clipboard-check" },
  { value: "40+", label: "Annual Safety Audits", icon: "fa-solid fa-magnifying-glass" },
  { value: "3.5M+", label: "Safe Meals Served", icon: "fa-solid fa-bowl-food" },
];

export default function QualityPage() {
  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="Quality &amp; QHSE"
        subtitle="Uncompromising food safety, international ISO accreditations, and an active zero-incident safety culture."
        breadcrumb="Quality"
      />

      <section className="quality-page py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          {/* Main Intro */}
          <div className="row align-items-center mb-5 pb-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Our Commitment</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Safeguarding People, Food &amp; Operations
                </h2>
              </div>
              <div className="mt-4">
                <p className="lead text-muted">
                  At <strong>ABENOS</strong>, Quality, Health, Safety, Environment (QHSE) and Sustainability are fundamental to our business philosophy and operational excellence.
                </p>
                <p>
                  We are committed to protecting people, ensuring food safety, safeguarding the environment, maintaining hygienic facilities, and supporting the uninterrupted operations of our clients across Oil &amp; Gas, offshore, onshore, and marine environments.
                </p>
                <p>
                  Our internal standards are deliberately engineered to exceed statutory compliance, earning us preferred vendor status with the region&apos;s most stringent national oil companies.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/about-img-2.jpg"
                alt="QHSE & Food Safety"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: "cover", maxHeight: "450px" }}
              />
            </div>
          </div>

          {/* Statistics Strip */}
          <div className="row g-4 my-5">
            {safetyStats.map((stat, idx) => (
              <div className="col-lg-3 col-sm-6" key={idx}>
                <div className="p-4 rounded-4 bg-white border text-center shadow-sm h-100">
                  <div className="fs-2 text-primary mb-2">
                    <i className={stat.icon}></i>
                  </div>
                  <h3 className="display-5 fw-bold text-dark mb-1">{stat.value}</h3>
                  <p className="small text-muted text-uppercase fw-semibold mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ISO Accreditations Grid */}
          <div className="row text-center mt-5 mb-4">
            <div className="col-lg-8 mx-auto">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Accreditations</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Internationally Certified Management Systems
                </h2>
                <p className="text-muted mt-2">
                  Our integrated operations are audited and certified to global quality, environmental, and occupational safety frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {qhsePillars.map((pillar, idx) => (
              <div className="col-lg-6" key={idx}>
                <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm border h-100">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 text-white"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #1B75BC 0%, #154c79 100%)",
                        fontSize: "20px",
                      }}
                    >
                      <i className={pillar.icon}></i>
                    </div>
                    <span className="badge bg-light text-primary border px-3 py-2 fw-semibold">{pillar.code}</span>
                  </div>
                  <h4 className="h4 fw-bold mb-2">{pillar.title}</h4>
                  <p className="text-muted mb-0">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Assurance Process */}
          <div className="row mt-5 pt-5">
            <div className="col-lg-12">
              <div className="p-4 p-md-5 bg-light rounded-4 border">
                <h3 className="h3 fw-bold text-dark mb-4">Our 4-Stage Quality Assurance Protocol</h3>
                <div className="row g-4">
                  <div className="col-md-3">
                    <div className="border-start border-primary border-4 ps-3">
                      <span className="text-primary fw-bold small text-uppercase">Stage 1</span>
                      <h5 className="fw-bold mt-1">Supplier Auditing</h5>
                      <p className="small text-muted mb-0">Rigorous vetting of distributors, farm certifications, cold-chain checks, and batch trace audits.</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="border-start border-primary border-4 ps-3">
                      <span className="text-primary fw-bold small text-uppercase">Stage 2</span>
                      <h5 className="fw-bold mt-1">Intake Inspection</h5>
                      <p className="small text-muted mb-0">Receiving temperature validation, packaging integrity inspection, and lab microbiological sampling.</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="border-start border-primary border-4 ps-3">
                      <span className="text-primary fw-bold small text-uppercase">Stage 3</span>
                      <h5 className="fw-bold mt-1">Culinary Control</h5>
                      <p className="small text-muted mb-0">HACCP critical cooking temperature checks, sanitized prep stations, and sterile food handling.</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="border-start border-primary border-4 ps-3">
                      <span className="text-primary fw-bold small text-uppercase">Stage 4</span>
                      <h5 className="fw-bold mt-1">Service &amp; Feedback</h5>
                      <p className="small text-muted mb-0">Monthly operational reporting, client satisfaction surveys, and rapid corrective action plans.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="row mt-5 pt-3">
            <div className="col-lg-12 text-center">
              <Link href="/contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold">
                Request Our Complete QHSE Manual <i className="fa-solid fa-file-arrow-down ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

