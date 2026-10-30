import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | ABENOS Catering Services Co.",
  description: "Established in 2018 in Saudi Arabia, ABENOS is a premier catering and allied services partner for onshore and offshore energy operations across the Middle East and Asia.",
};

export default function AboutPage() {
  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="About Us"
        subtitle="Process-driven, quality-focused regional partner for complex onshore, offshore, and remote operations."
        breadcrumb="About Us"
      />

      {/* Main About Story Section */}
      <section className="about-us page-about-section py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Who We Are</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Regional Leader in Offshore &amp; Onshore Catering Since 2018
                </h2>
              </div>
              <div className="about-content-body mt-4">
                <p className="lead text-muted">
                  Established in 2018 in the Kingdom of Saudi Arabia, <strong>ABENOS</strong> is a trusted provider of integrated catering, camp management, ship chandelling, and allied life-support services across the energy, marine, drilling, and industrial sectors.
                </p>
                <p>
                  ABENOS has expanded its operational footprint beyond Saudi Arabia into Qatar, the United Arab Emirates, and India, with supporting networks extending across Asian maritime hubs including Malaysia, Singapore, Indonesia, and Taiwan.
                </p>
                <p>
                  We are proud to be an <strong>ARAMCO-approved</strong> service provider in Saudi Arabia, an approved partner to <strong>QatarEnergy</strong> (QP &amp; QG) in Qatar, and an <strong>ADNOC-approved</strong> contractor in the UAE.
                </p>

                <div className="d-flex flex-wrap gap-4 mt-4 pt-2">
                  <div className="p-3 bg-light rounded-3 border flex-fill">
                    <h3 className="h5 text-primary mb-1">Approved Partner</h3>
                    <p className="small text-muted mb-0">Saudi Aramco, ADNOC &amp; QatarEnergy</p>
                  </div>
                  <div className="p-3 bg-light rounded-3 border flex-fill">
                    <h3 className="h5 text-primary mb-1">Global Reach</h3>
                    <p className="small text-muted mb-0">Operations in KSA, UAE, Qatar, India &amp; Asia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative ps-lg-4">
                <img
                  src="/images/about-img-1.jpg"
                  alt="ABENOS Offshore Operations"
                  className="img-fluid rounded-4 shadow-lg w-100"
                  style={{ objectFit: "cover", maxHeight: "480px" }}
                />
              </div>
            </div>
          </div>

          {/* Growth Timeline & Ambition */}
          <div className="row mt-5 pt-4">
            <div className="col-lg-12">
              <div className="p-5 rounded-4 text-white position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1B75BC 0%, #154c79 100%)" }}>
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <span className="badge bg-warning text-dark px-3 py-2 text-uppercase mb-3">Our Growth &amp; Vision</span>
                    <h3 className="display-6 fw-bold mb-3">From 36 to 470+ Professionals</h3>
                    <p className="lead mb-4 text-white-50">
                      In 2020, ABENOS operated with 36 personnel serving 24,547 meals. By 2025, our workforce expanded to 471 dedicated professionals delivering over 3,571,000 meals annually.
                    </p>
                    <div className="d-flex align-items-center gap-3">
                      <span className="h4 text-warning mb-0">2030 Mission:</span>
                      <span className="fs-5 fw-semibold">Targeting 10,000,000 High-Quality Meals Annually</span>
                    </div>
                  </div>
                  <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
                    <Link href="/contact" className="btn btn-light btn-lg px-4 py-3 fw-bold rounded-pill text-primary">
                      Partner With Us <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Management Structure */}
          <div className="row mt-5 pt-5">
            <div className="col-lg-12 text-center mb-5">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Our Capabilities</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Integrated Management System
                </h2>
                <p className="text-muted max-w-700 mx-auto mt-3">
                  Combining internationally recognized service standards with in-depth regional operational execution.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded-4 shadow-sm border h-100">
                <div className="fs-1 text-primary mb-3"><i className="fa-solid fa-utensils"></i></div>
                <h4 className="fw-bold mb-2">Offshore &amp; Remote Catering</h4>
                <p className="text-muted">Multi-ethnic nutritious menus crafted by certified chefs tailored for 24/7 demanding rig, marine, and camp personnel.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded-4 shadow-sm border h-100">
                <div className="fs-1 text-primary mb-3"><i className="fa-solid fa-shield-halved"></i></div>
                <h4 className="fw-bold mb-2">QHSE &amp; Compliance</h4>
                <p className="text-muted">Stringent adherence to ISO 9001, ISO 22000, ISO 14001, and ISO 45001 standards maintaining zero LTI safety culture.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded-4 shadow-sm border h-100">
                <div className="fs-1 text-primary mb-3"><i className="fa-solid fa-truck-fast"></i></div>
                <h4 className="fw-bold mb-2">Cold Chain &amp; Logistics</h4>
                <p className="text-muted">Dedicated refrigerated container fleets and seamless port agency coordination ensuring unbroken cold chain integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

