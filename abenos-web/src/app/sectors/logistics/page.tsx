import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offshore Logistics & DNV Food Containers | ABENOS",
  description:
    "ABENOS delivers full-scope offshore port agency logistics, port gate passes, and DNV 2.7-1 certified refrigerated reefer containers across Middle Eastern ports.",
};

const logisticsCapabilities = [
  {
    title: "Port Authority Gate Passes & Permits",
    icon: "fa-solid fa-id-card-clip",
    description:
      "Expedited processing of permanent and temporary port access security passes, customs gate clearances, and dockside vehicle entry authorization across Saudi, UAE, and Qatar ports.",
  },
  {
    title: "DNV 2.7-1 Certified Reefer Containers",
    icon: "fa-solid fa-snowflake",
    description:
      "Heavy-duty offshore certified refrigerated (chiller/freezer) and dry containers with integrated slings, certified pad eyes, and dual-redundant cooling units engineered for extreme marine environments.",
  },
  {
    title: "Sub-Agency & Marine Husbandry Services",
    icon: "fa-solid fa-ship",
    description:
      "24/7 port sub-agency support handling immigration, crew sign-on / sign-off formalities, offshore medical repatriations, launch boat hire, and customs clearance.",
  },
  {
    title: "Cold-Chain Temperature Telematics",
    icon: "fa-solid fa-temperature-arrow-down",
    description:
      "Digital temperature logging and GPS tracking from coastal cold-storage warehouses through vessel transit to final offshore rig delivery, preventing thermal shock.",
  },
  {
    title: "Offshore Marine Lifting & Rigging Gear",
    icon: "fa-solid fa-link",
    description:
      "Proof-load tested lifting slings, certified shackles, and specialized cargo baskets inspected in accordance with BS EN 12079 and IMO circular guidelines.",
  },
  {
    title: "Dangerous Goods & Customs Compliance",
    icon: "fa-solid fa-boxes-packing",
    description:
      "Certified handling and documentation for bonded provisions, chemicals, and specialized offshore logistics compliant with GCC customs and IMDG maritime regulations.",
  },
];

export default function OffshoreLogisticsPage() {
  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="Offshore Logistics & DNV Food Containers"
        subtitle="Port gate pass clearances, sub-agency coordination, and DNV 2.7-1 certified cold-chain container support."
        breadcrumb="Sectors We Serve / Offshore Logistics"
      />

      <section className="logistics-sector py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          {/* Overview Row */}
          <div className="row align-items-center mb-5 pb-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Logistics Support</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Unbroken Cold-Chain &amp; Rapid Port Clearances
                </h2>
              </div>
              <div className="mt-4">
                <p className="lead text-muted">
                  Offshore energy operations cannot afford port delays or food spoilage caused by harsh tropical marine weather.
                </p>
                <p>
                  <strong>ABENOS Logistics &amp; Asset Support</strong> provides turnkey marine logistics and certified container equipment. We manage port authority clearances, port gate passes, launch boat dispatch, and DNV 2.7-1 refrigerated reefer boxes, ensuring continuous supplies to rigs and offshore spreads.
                </p>
                <div className="p-3 bg-light rounded-3 border mt-4">
                  <h4 className="h6 text-primary fw-bold mb-1">
                    <i className="fa-solid fa-circle-check text-success me-2"></i> DNV 2.7-1 / EN 12079 Offshore Certification
                  </h4>
                  <p className="small text-muted mb-0">
                    Fully certified by DNV-GL, Lloyd’s Register, and Bureau Veritas for heavy offshore crane lifts and open-sea operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/sectors/segment-dnv-logistics.jpg"
                alt="DNV Reefer Containers & Logistics"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: "cover", maxHeight: "450px" }}
              />
            </div>
          </div>

          {/* Core Capabilities Grid */}
          <div className="row text-center mt-5 mb-4">
            <div className="col-lg-8 mx-auto">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Logistics Capabilities</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Integrated Port &amp; Asset Solutions
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {logisticsCapabilities.map((cap, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="p-4 bg-white rounded-4 shadow-sm border h-100 transition-hover">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 text-white mb-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)",
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
                  <h3 className="h2 fw-bold text-white mb-2">Need DNV Reefer Units or Port Clearance?</h3>
                  <p className="text-white-50 mb-0">
                    Our logistics operations desk is operational 24/7 to mobilize containers and port permits.
                  </p>
                </div>
                <div className="mt-4 mt-lg-0">
                  <Link href="/contact" className="btn btn-primary btn-lg rounded-pill px-4 py-3 fw-bold">
                    Inquire Logistics <i className="fa-solid fa-arrow-right ms-2"></i>
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

