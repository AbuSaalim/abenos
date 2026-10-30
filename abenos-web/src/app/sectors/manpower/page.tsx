import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offshore Catering Manpower Supplies | ABENOS",
  description:
    "ABENOS provides BOSIET and OPITO certified offshore catering crews, executive chefs, camp bosses, and galley stewards across the Middle East and Asian maritime waters.",
};

const manpowerCapabilities = [
  {
    title: "Executive Offshore Head Chefs",
    icon: "fa-solid fa-utensils",
    description:
      "Culinary leaders experienced in high-volume, multi-ethnic menu execution, nutritional planning, inventory control, and stringent galley health standards.",
  },
  {
    title: "Offshore Camp Bosses & Supervisors",
    icon: "fa-solid fa-user-tie",
    description:
      "Vetted marine hospitality managers coordinating full onboard catering, room housekeeping, linen supply, shift rotations, and client liaison with OIMs.",
  },
  {
    title: "Certified Stewards & Galley Helpers",
    icon: "fa-solid fa-users",
    description:
      "Trained service personnel for mess room hospitality, dishwashing sanitation, food prep assistance, and routine accommodation cleaning.",
  },
  {
    title: "BOSIET, HUET & CA-EBS Certified",
    icon: "fa-solid fa-certificate",
    description:
      "All deployed personnel maintain 100% current offshore safety training certifications, marine escape breathing apparatus, and offshore medical clearances.",
  },
  {
    title: "HACCP & Food Hygiene Compliance",
    icon: "fa-solid fa-clipboard-check",
    description:
      "Strict food safety and temperature control procedures, personal hygiene monitoring, allergen management, and internal kitchen audit execution.",
  },
  {
    title: "Rapid 24/7 Crew Mobilization",
    icon: "fa-solid fa-plane-departure",
    description:
      "Strategic talent reserves ready for instant mobilization during sudden drilling rig spuds, barge mobilizations, or emergency crew replacements.",
  },
];

export default function ManpowerSectorPage() {
  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="Offshore Catering Manpower Supplies"
        subtitle="Certified maritime hospitality crews, executive chefs, and specialized offshore galley personnel."
        breadcrumb="Sectors We Serve / Manpower Supplies"
      />

      <section className="manpower-sector py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          {/* Overview Row */}
          <div className="row align-items-center mb-5 pb-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Maritime Talent</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  BOSIET &amp; OPITO Certified Offshore Crewing
                </h2>
              </div>
              <div className="mt-4">
                <p className="lead text-muted">
                  The success of offshore energy operations depends on the morale, health, and wellbeing of personnel working in high-pressure marine environments.
                </p>
                <p>
                  <strong>ABENOS</strong> supplies fully certified, highly trained catering crews and camp management specialists to drilling contractors, accommodation vessels (flotels), pipelay barges, and offshore production platforms. Our crew members undergo background vetting, safety inductions, and rigorous culinary assessments before deployment.
                </p>
                <div className="p-3 bg-light rounded-3 border mt-4">
                  <h4 className="h6 text-primary fw-bold mb-1">
                    <i className="fa-solid fa-circle-check text-success me-2"></i> 100% Compliance with Maritime &amp; Energy Audits
                  </h4>
                  <p className="small text-muted mb-0">
                    Compliant with Saudi Aramco Marine Department requirements, ADNOC Offshore safety standards, and STCW / MLC guidelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/sectors/segment-catering-manpower.jpg"
                alt="Offshore Catering Manpower"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: "cover", maxHeight: "450px" }}
              />
            </div>
          </div>

          {/* Core Capabilities Grid */}
          <div className="row text-center mt-5 mb-4">
            <div className="col-lg-8 mx-auto">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Roster &amp; Capabilities</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Specialized Offshore Maritime Staffing
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {manpowerCapabilities.map((cap, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="p-4 bg-white rounded-4 shadow-sm border h-100 transition-hover">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 text-white mb-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
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
                  <h3 className="h2 fw-bold text-white mb-2">Need Certified Offshore Crews Onboard?</h3>
                  <p className="text-white-50 mb-0">
                    Connect with our crew coordinators for immediate mobilization across GCC and Asian offshore waters.
                  </p>
                </div>
                <div className="mt-4 mt-lg-0">
                  <Link href="/contact" className="btn btn-primary btn-lg rounded-pill px-4 py-3 fw-bold">
                    Mobilize Crew <i className="fa-solid fa-arrow-right ms-2"></i>
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

