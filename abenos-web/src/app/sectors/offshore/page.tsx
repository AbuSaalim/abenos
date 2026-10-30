import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offshore, Island & Marine (OIM) Catering & Victualing | ABENOS",
  description: "ABENOS provides specialized catering, ship chandelling, and victualing support for jack-up rigs, barges, and offshore vessels across Arabian Gulf waters.",
};

const offshoreCapabilities = [
  {
    title: "Rig & Platform Catering",
    icon: "fa-solid fa-water",
    description:
      "Integrated catering operations tailored for offshore jack-up rigs, production platforms, and living quarters (LQ). We provide 4 to 6 continuous meal services daily supporting round-the-clock shift patterns.",
  },
  {
    title: "Marine Vessel & Flotel Support",
    icon: "fa-solid fa-ship",
    description:
      "Full catering and hotel management services for accommodation vessels (flotels), pipelay barges, cable layers, dive support vessels (DSVs), and offshore construction spreads.",
  },
  {
    title: "Ship Chandelling & Victualing",
    icon: "fa-solid fa-anchor",
    description:
      "Complete marine provisioning including fresh meats, poultry, dairy, dry goods, bonded stores, deck items, and cabin stores delivered alongside berthed or anchorage vessels.",
  },
  {
    title: "Certified DNV Reefer Containers",
    icon: "fa-solid fa-box",
    description:
      "DNV 2.7-1 / EN 12079 certified offshore refrigerated and dry cargo containers ensuring safe marine lifting, extreme weather resilience, and continuous temperature logging.",
  },
  {
    title: "BOSIET & OPITO Certified Crews",
    icon: "fa-solid fa-certificate",
    description:
      "All deployed offshore culinary and camp staff hold valid BOSIET, HUET, CA-EBS, and marine medical certifications with comprehensive offshore safety inductions.",
  },
  {
    title: "Port Logistics & Agency Support",
    icon: "fa-solid fa-compass",
    description:
      "24/7 port coordination handling customs clearance, immigration formalities, berthing permits, and priority loading across major Saudi, UAE, and Qatar maritime ports.",
  },
];

export default function OffshoreSectorPage() {
  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="Offshore &amp; Marine Operations"
        subtitle="Specialized catering, certified marine provisioning, and hotel services for the Arabian Gulf energy sector."
        breadcrumb="Sectors We Serve / Offshore"
      />

      <section className="offshore-sector py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          {/* Overview Row */}
          <div className="row align-items-center mb-5 pb-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">OIM Segment</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Precision Catering For Demanding Marine Environments
                </h2>
              </div>
              <div className="mt-4">
                <p className="lead text-muted">
                  Offshore operations demand meticulous planning, operational precision, and strict compliance with maritime safety and hygiene standards.
                </p>
                <p>
                  <strong>ABENOS</strong> delivers integrated catering, victualing, and camp services to offshore drilling rigs, accommodation barges, and construction spreads across Arabian Gulf waters. Our experienced management coordinates tightly with shore bases, marine agents, and vessel masters to maintain an uninterrupted supply chain.
                </p>
                <div className="p-3 bg-light rounded-3 border mt-4">
                  <h4 className="h6 text-primary fw-bold mb-1">
                    <i className="fa-solid fa-anchor text-primary me-2"></i> Energy Major Approvals
                  </h4>
                  <p className="small text-muted mb-0">
                    Approved service provider for Saudi Aramco, ADNOC Offshore, and QatarEnergy offshore assets with full adherence to marine QHSE guidelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/services-img-2.jpg"
                alt="Offshore Rig Catering"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: "cover", maxHeight: "450px" }}
              />
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="row text-center mt-5 mb-4">
            <div className="col-lg-8 mx-auto">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Marine Services</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Offshore Life Support &amp; Victualing
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {offshoreCapabilities.map((cap, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="p-4 bg-white rounded-4 shadow-sm border h-100 transition-hover">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 text-white mb-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "linear-gradient(135deg, #0072CE 0%, #004c8c 100%)",
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
                style={{ background: "linear-gradient(135deg, #101c2e 0%, #08111e 100%)" }}
              >
                <div>
                  <h3 className="h2 fw-bold text-white mb-2">Need Rig or Vessel Victualing Support?</h3>
                  <p className="text-white-50 mb-0">Our marine logistics coordinators are on standby 24/7 across regional ports.</p>
                </div>
                <div className="mt-4 mt-lg-0">
                  <Link href="/contact" className="btn btn-primary btn-lg rounded-pill px-4 py-3 fw-bold">
                    Contact Offshore Team <i className="fa-solid fa-arrow-right ms-2"></i>
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

