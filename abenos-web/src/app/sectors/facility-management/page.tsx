import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facility Management & Support Services (IFM) | ABENOS",
  description:
    "ABENOS delivers full-scope Integrated Facility Management (IFM), commercial cleaning, office support, and electromechanical maintenance across the Middle East.",
};

const fmCapabilities = [
  {
    title: "Commercial & Industrial Cleaning",
    icon: "fa-solid fa-broom",
    description:
      "Hospital-grade disinfectant protocols, daily janitorial services, floor crystallization, high-level facade cleaning, and sanitization for corporate HQs and energy installations.",
  },
  {
    title: "Office Support & Hospitality Services",
    icon: "fa-solid fa-mug-hot",
    description:
      "Front-of-house reception, meeting room staging, executive lounge upkeep, barista/tea-pantry operations, and professional administrative support staff.",
  },
  {
    title: "Technical & Electromechanical Maintenance",
    icon: "fa-solid fa-screwdriver-wrench",
    description:
      "Preventative and reactive MEP maintenance: HVAC climate control, electrical power grids, plumbing, backup generators, and building automated management systems (BMS).",
  },
  {
    title: "Waste Management & Sustainability",
    icon: "fa-solid fa-recycle",
    description:
      "Comprehensive waste segregation, recycling programs, bio-degradable eco-chemical protocols, grease trap clearance, and green facility operational stewardship.",
  },
  {
    title: "Vector & Pest Control Services",
    icon: "fa-solid fa-shield-virus",
    description:
      "Municipal-certified pest eradication and preventative chemical barriers safeguarding commercial offices, warehouses, dining halls, and living accommodations.",
  },
  {
    title: "Energy & Water Optimization",
    icon: "fa-solid fa-bolt",
    description:
      "Systematic facility audits, LED retrofit management, smart water meter tracking, and resource conservation programs lowering operational carbon footprints.",
  },
];

export default function FacilityManagementPage() {
  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="Facility Management & Support Services"
        subtitle="Integrated corporate cleaning, workplace support services, and electromechanical technical upkeep."
        breadcrumb="Sectors We Serve / Facility Management"
      />

      <section className="facility-sector py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          {/* Overview Row */}
          <div className="row align-items-center mb-5 pb-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">IFM Division</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Sustaining Productive &amp; Pristine Workplaces
                </h2>
              </div>
              <div className="mt-4">
                <p className="lead text-muted">
                  From major energy headquarters to multi-tenant commercial campuses, ABENOS delivers integrated facility solutions that protect asset value and elevate workforce productivity.
                </p>
                <p>
                  Our <strong>Integrated Facility Management (IFM)</strong> division combines well-trained janitorial teams, certified MEP engineers, and responsive hospitality professionals under unified SLA management. We streamline facility oversight through digital CAFM reporting and single-point-of-contact accountability.
                </p>
                <div className="p-3 bg-light rounded-3 border mt-4">
                  <h4 className="h6 text-primary fw-bold mb-1">
                    <i className="fa-solid fa-circle-check text-success me-2"></i> ISO 9001, 14001 &amp; 45001 Integrated Standards
                  </h4>
                  <p className="small text-muted mb-0">
                    Standardized operating procedures with rigorous QHSE auditing, environmental compliance, and zero workplace injuries.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/sectors/segment-facility-management.jpg"
                alt="Facility Management"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: "cover", maxHeight: "450px" }}
              />
            </div>
          </div>

          {/* Core Capabilities Grid */}
          <div className="row text-center mt-5 mb-4">
            <div className="col-lg-8 mx-auto">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">IFM Capabilities</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Comprehensive Workplace Service Suite
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {fmCapabilities.map((cap, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="p-4 bg-white rounded-4 shadow-sm border h-100 transition-hover">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 text-white mb-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
                      fontSize: "22px",
                    }}
                  >
                    <i className={cap.icon}></i>
                  </div>
                  <h4 className="h5 fw-bold mb-2">{cap.title}</h4>
                  <p className="text-muted small mb-0">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="row mt-5 pt-4">
            <div className="col-lg-12">
              <div
                className="p-5 rounded-4 text-white text-center text-lg-start d-flex flex-column flex-lg-row align-items-center justify-content-between"
                style={{ background: "linear-gradient(135deg, #222226 0%, #15161a 100%)" }}
              >
                <div>
                  <h3 className="h2 fw-bold text-white mb-2">Enhance Your Facility Operations Today</h3>
                  <p className="text-white-50 mb-0">
                    Contact our FM consultants to design a tailored service agreement for your commercial property.
                  </p>
                </div>
                <div className="mt-4 mt-lg-0">
                  <Link href="/contact" className="btn btn-primary btn-lg rounded-pill px-4 py-3 fw-bold">
                    Request FM Proposal <i className="fa-solid fa-arrow-right ms-2"></i>
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

