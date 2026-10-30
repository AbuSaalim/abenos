import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trusted By Energy Majors & Industrial Leaders | ABENOS",
  description: "ABENOS is an approved service provider to Saudi Aramco, ADNOC, QatarEnergy, KJO, and leading offshore drilling and EPC contractors across the Middle East.",
};

const keyApprovals = [
  {
    name: "Saudi Aramco",
    region: "Kingdom of Saudi Arabia",
    role: "Approved Catering & Camp Services Vendor",
    badge: "Official Vendor ID",
    desc: "Rigidly audited for compliance with Aramco environmental health and safety requirements, camp specifications, and offshore safety guidelines.",
  },
  {
    name: "ADNOC",
    region: "United Arab Emirates",
    role: "Approved Offshore & Onshore Contractor",
    badge: "ICV Certified Partner",
    desc: "Pre-qualified for critical offshore rig catering, island operations, and camp life support with high In-Country Value (ICV) scoring.",
  },
  {
    name: "QatarEnergy",
    region: "State of Qatar",
    role: "Approved Service Provider (QP & QG)",
    badge: "Tawteen Registered",
    desc: "Approved catering and facilities contractor delivering high-volume victualing and hotel services for offshore platforms and Ras Laffan operations.",
  },
  {
    name: "KJO / KOC",
    region: "Partitioned Neutral Zone & Kuwait",
    role: "Joint Operations Qualified Vendor",
    badge: "Cross-Border Support",
    desc: "Demonstrated cross-border logistics capability supporting complex offshore fields and remote border installations.",
  },
];

const clientTypes = [
  {
    title: "Offshore Drilling Contractors",
    icon: "fa-solid fa-water",
    desc: "Jack-up rigs, modular drilling platforms, and exploration units operating 24/7 in Arabian Gulf waters.",
  },
  {
    title: "Marine Vessel & Flotel Operators",
    icon: "fa-solid fa-ship",
    desc: "Accommodation flotels, pipelay barges, OSVs, anchor handling tugs, and dive support vessels.",
  },
  {
    title: "EPC & Infrastructure Giants",
    icon: "fa-solid fa-trowel-bricks",
    desc: "Large-scale pipeline projects, refinery turnarounds, and desert exploration camps with 500+ POB.",
  },
  {
    title: "Industrial & Manufacturing Hubs",
    icon: "fa-solid fa-industry",
    desc: "Industrial manufacturing plants, petrochemical complexes, and corporate institutional dining facilities.",
  },
];

export default function TrustedByPage() {
  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="Trusted By"
        subtitle="Serving national energy operators, international drilling contractors, and leading marine fleets."
        breadcrumb="Trusted by"
      />

      <section className="trusted-by-page py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          {/* Intro Section */}
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Our Credentials</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Approved By Leading Energy Operators
                </h2>
                <p className="text-muted mt-3">
                  Our client relationships are forged through dependable mobilization, consistent food excellence, strict QHSE compliance, and agile operational support in demanding environments.
                </p>
              </div>
            </div>
          </div>

          {/* Key National Energy Approvals Grid */}
          <div className="row g-4 mb-5 pb-3">
            {keyApprovals.map((appr, idx) => (
              <div className="col-lg-6" key={idx}>
                <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm border h-100 position-relative">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-primary text-white px-3 py-2 fw-semibold">{appr.region}</span>
                    <span className="badge bg-light text-dark border px-3 py-2 small">{appr.badge}</span>
                  </div>
                  <h3 className="h3 fw-bold text-dark mb-1">{appr.name}</h3>
                  <p className="text-primary fw-semibold small mb-3">{appr.role}</p>
                  <p className="text-muted mb-0">{appr.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sectors & Operator Types Served */}
          <div className="row mt-5 pt-4">
            <div className="col-lg-12 text-center mb-5">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Partner Ecosystem</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Sectors Relying on ABENOS Daily
                </h2>
              </div>
            </div>

            {clientTypes.map((type, idx) => (
              <div className="col-lg-3 col-sm-6 mb-4" key={idx}>
                <div className="p-4 bg-white rounded-4 shadow-sm border text-center h-100">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle text-primary bg-light mb-3"
                    style={{ width: "65px", height: "65px", fontSize: "24px" }}
                  >
                    <i className={type.icon}></i>
                  </div>
                  <h4 className="h5 fw-bold mb-2">{type.title}</h4>
                  <p className="small text-muted mb-0">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonials Quote Strip */}
          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div
                className="p-5 rounded-4 text-white position-relative text-center"
                style={{ background: "linear-gradient(135deg, #1B75BC 0%, #104c7c 100%)" }}
              >
                <div className="fs-1 text-warning mb-3">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <blockquote className="lead fst-italic mb-4 text-white">
                  &ldquo;ABENOS demonstrated exceptional agility in mobilizing catering and housekeeping crews for our 450-man remote camp within 72 hours. Food quality, hygiene, and crew morale have remained consistently high.&rdquo;
                </blockquote>
                <div className="fw-bold fs-5 text-white">Senior Operations Manager</div>
                <div className="small text-white-50">Leading Regional Offshore Marine Contractor</div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="row mt-5 pt-4 text-center">
            <div className="col-lg-12">
              <h3 className="h3 fw-bold mb-3">Ready to Discuss Your Project Requirements?</h3>
              <p className="text-muted max-w-600 mx-auto mb-4">
                Our commercial team can provide references, pre-qualification packages, and customized commercial proposals tailored to your scope.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold">
                Connect With Us <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

