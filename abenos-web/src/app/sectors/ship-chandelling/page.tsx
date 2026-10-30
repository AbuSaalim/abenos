import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ship Chandelling & Maritime Provisions | ABENOS",
  description:
    "ABENOS provides full-service ship chandelling, fresh and frozen food provisioning, technical deck stores, and engine supplies across Middle Eastern and Asian ports.",
};

const chandellingCapabilities = [
  {
    title: "Fresh, Frozen & Dry Provisions",
    icon: "fa-solid fa-apple-whole",
    description:
      "Complete marine victualing: prime meats, fresh poultry, dairy, bakery products, seafood, canned staples, and dry goods tailored to global crew nationalities.",
  },
  {
    title: "Deck Stores & Marine Equipment",
    icon: "fa-solid fa-anchor",
    description:
      "Mooring lines, high-tensile wire ropes, safety PPE, marine paints, nautical charts, rust removers, and deck cleaning gear meeting IMPA/ISSA standards.",
  },
  {
    title: "Engine Room Stores & Spares",
    icon: "fa-solid fa-gears",
    description:
      "High-grade marine lubricants, fuel additives, filtration elements, valves, mechanical seals, welding gear, and pneumatic hand tools.",
  },
  {
    title: "Cabin & Galley Essentials",
    icon: "fa-solid fa-bed",
    description:
      "Bed linens, mattresses, towels, industrial laundry chemicals, kitchen hardware, commercial cookware, and sanitary paper provisions.",
  },
  {
    title: "Bonded Stores & Confectionery",
    icon: "fa-solid fa-box",
    description:
      "Duty-free beverages, premium confectionery, tobacco stores, crew welfare personal items, and bonded commissary items delivered with official customs seals.",
  },
  {
    title: "24/7 Berth & Anchorage Delivery",
    icon: "fa-solid fa-truck-fast",
    description:
      "Direct quayside delivery trucks and offshore supply launch boats servicing berthed vessels, OPL anchorages, and offshore loading buoys without turnaround delay.",
  },
];

export default function ShipChandellingPage() {
  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="Ship Chandelling & Maritime Provisions"
        subtitle="Complete food provisioning, deck stores, and engine technical supplies alongside berthed or anchorage vessels."
        breadcrumb="Sectors We Serve / Ship Chandelling"
      />

      <section className="chandelling-sector py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          {/* Overview Row */}
          <div className="row align-items-center mb-5 pb-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Port Victualing</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Reliable Marine Supply Chain in Major Ports
                </h2>
              </div>
              <div className="mt-4">
                <p className="lead text-muted">
                  Vessel turnaround times require precision logistics, certified temperature integrity, and immediate access to technical marine hardware.
                </p>
                <p>
                  <strong>ABENOS Ship Chandelling</strong> delivers reliable provisioning across major ports in Saudi Arabia (Dammam, Jubail, Ras Tanura), UAE (Abu Dhabi, Dubai, Fujairah), and Qatar (Ras Laffan, Doha). From refrigerated food cargo to heavy deck gear, our teams operate 24/7 to ensure vessels depart fully stocked.
                </p>
                <div className="p-3 bg-light rounded-3 border mt-4">
                  <h4 className="h6 text-primary fw-bold mb-1">
                    <i className="fa-solid fa-circle-check text-success me-2"></i> IMPA &amp; ISSA Marine Catalogue Compliance
                  </h4>
                  <p className="small text-muted mb-0">
                    Standardized sourcing using official IMPA / ISSA 6-digit coding for exact part replacement and international marine quality compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/sectors/segment-ship-chandelling.jpg"
                alt="Ship Chandelling"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: "cover", maxHeight: "450px" }}
              />
            </div>
          </div>

          {/* Core Capabilities Grid */}
          <div className="row text-center mt-5 mb-4">
            <div className="col-lg-8 mx-auto">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Chandelling Scope</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Full-Scope Marine Provisioning
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {chandellingCapabilities.map((cap, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="p-4 bg-white rounded-4 shadow-sm border h-100 transition-hover">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 text-white mb-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
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
                  <h3 className="h2 fw-bold text-white mb-2">Vessel Calling at Gulf or Asian Ports?</h3>
                  <p className="text-white-50 mb-0">
                    Send your vessel requisition or RFQ for instant price quotation and priority dockside delivery.
                  </p>
                </div>
                <div className="mt-4 mt-lg-0">
                  <Link href="/contact" className="btn btn-primary btn-lg rounded-pill px-4 py-3 fw-bold">
                    Submit Vessel RFQ <i className="fa-solid fa-arrow-right ms-2"></i>
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

