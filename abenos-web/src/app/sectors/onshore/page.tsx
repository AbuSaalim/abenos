import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onshore Camp Management & Industrial Catering | ABENOS",
  description: "ABENOS delivers full-scope onshore camp management, remote site life support, and industrial catering across Saudi Arabia, UAE, and Qatar.",
};

const onshoreCapabilities = [
  {
    title: "Remote Desert Camp Management",
    icon: "fa-solid fa-campground",
    description:
      "Turnkey operation of remote exploration, pipeline, and construction workforce camps. We oversee everything from accommodation assignment and facility upkeep to kitchen infrastructure, ensuring maximum crew comfort in demanding desert terrains.",
  },
  {
    title: "Large-Scale Industrial Catering",
    icon: "fa-solid fa-utensils",
    description:
      "Nutritious, high-volume multi-ethnic dining operations prepared daily by trained culinary teams. We accommodate diverse workforce nationalities with hygienic, balanced, and appetizing menus designed for peak performance.",
  },
  {
    title: "Industrial Laundry & Housekeeping",
    icon: "fa-solid fa-shirt",
    description:
      "Daily janitorial, room cleaning, and scheduled laundry services built to support large workforce populations. We maintain pristine living conditions with hospital-grade sanitization standards.",
  },
  {
    title: "Camp Maintenance & Life Support",
    icon: "fa-solid fa-screwdriver-wrench",
    description:
      "Preventative and responsive facility maintenance covering HVAC systems, plumbing, generators, electrical networks, and water management for continuous camp operations without downtime.",
  },
  {
    title: "Waste Management & Pest Control",
    icon: "fa-solid fa-recycle",
    description:
      "Eco-compliant solid and organic waste disposal, grease trap cleaning, and scheduled vector control ensuring hygienic, pest-free environments adhering to strict municipal and client health regulations.",
  },
  {
    title: "Cold-Chain Supply & Warehousing",
    icon: "fa-solid fa-warehouse",
    description:
      "Reliable regional procurement and refrigerated transport fleets delivering farm-fresh produce, poultry, and dry provisions to remote inland project locations without breaking temperature integrity.",
  },
];

export default function OnshoreSectorPage() {
  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="Onshore Operations"
        subtitle="Complete remote camp management, industrial catering, and life-support facilities across the Middle East."
        breadcrumb="Sectors We Serve / Onshore"
      />

      <section className="onshore-sector py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          {/* Overview Row */}
          <div className="row align-items-center mb-5 pb-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Sector Overview</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Turnkey Life-Support For Demanding Remote Sites
                </h2>
              </div>
              <div className="mt-4">
                <p className="lead text-muted">
                  Operating in remote onshore environments requires rigorous logistical planning, extreme climate resilience, and unyielding hygiene standards.
                </p>
                <p>
                  <strong>ABENOS</strong> manages end-to-end onshore camp ecosystems for EPC contractors, drilling operators, and industrial facilities. From initial mobilization and kitchen setup to daily meals, housekeeping, and utility maintenance, our teams ensure workforce wellbeing so clients can focus on project execution.
                </p>
                <div className="p-3 bg-light rounded-3 border mt-4">
                  <h4 className="h6 text-primary fw-bold mb-1">
                    <i className="fa-solid fa-circle-check text-success me-2"></i> ARAMCO &amp; Regional Standard Compliance
                  </h4>
                  <p className="small text-muted mb-0">
                    Fully audited and certified under Saudi Aramco hygiene standards, GCC labour welfare requirements, and ISO 22000 food safety protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/services-img-1.jpg"
                alt="Onshore Camp Management"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: "cover", maxHeight: "450px" }}
              />
            </div>
          </div>

          {/* Core Capabilities Grid */}
          <div className="row text-center mt-5 mb-4">
            <div className="col-lg-8 mx-auto">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Capabilities</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Comprehensive Onshore Service Suite
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {onshoreCapabilities.map((cap, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="p-4 bg-white rounded-4 shadow-sm border h-100 transition-hover">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 text-white mb-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "linear-gradient(135deg, #1B75BC 0%, #154c79 100%)",
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
                  <h3 className="h2 fw-bold text-white mb-2">Mobilizing a New Camp or Remote Site?</h3>
                  <p className="text-white-50 mb-0">Our operations team can assess your POB requirements and submit an operational proposal.</p>
                </div>
                <div className="mt-4 mt-lg-0">
                  <Link href="/contact" className="btn btn-primary btn-lg rounded-pill px-4 py-3 fw-bold">
                    Request Onshore Scope <i className="fa-solid fa-arrow-right ms-2"></i>
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

