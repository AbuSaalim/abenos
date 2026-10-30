"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TextAnimation from "@/components/TextAnimation";

const regionalOffices = [
  {
    country: "Kingdom of Saudi Arabia",
    location: "Al Khobar / Dammam",
    contactPerson: "Vedraj Mendon",
    title: "Vice President",
    email: "vedraj.mendon@abenos.com",
    phones: ["+966 13 802 1006 Ext. 111", "+966 583 734 217"],
    flag: "🇸🇦",
  },
  {
    country: "United Arab Emirates",
    location: "Abu Dhabi / Dubai",
    contactPerson: "Satheesh Thilak",
    title: "Country Manager",
    email: "satheesh.thilak@abenos.com",
    phones: ["+971 50 81 28 758"],
    flag: "🇦🇪",
  },
  {
    country: "State of Qatar",
    location: "Doha / Ras Laffan",
    contactPerson: "Nelson Samson",
    title: "Operations Head",
    email: "nelson.samson@abenos.com",
    phones: ["+974 70 166 174"],
    flag: "🇶🇦",
  },
  {
    country: "India",
    location: "Mumbai / Maharashtra",
    contactPerson: "Narendra Asawale",
    title: "Regional Coordinator",
    email: "narendra.asawale@abenos.com",
    phones: ["+91 22 2800 1200"],
    flag: "🇮🇳",
  },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"client" | "vendor">("client");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <TextAnimation />
      <Header />
      <PageHeader
        title="Contact Us"
        subtitle="Connect with our regional management teams across Saudi Arabia, UAE, Qatar, and India."
        breadcrumb="Contact Us"
      />

      <section className="contact-page py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          {/* Regional Offices Grid */}
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Regional Network</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Get In Touch With Regional Heads
                </h2>
                <p className="text-muted mt-2">
                  Our dedicated operational directors are directly available to review your project scope and mobilize immediate operational response.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-5 pb-4">
            {regionalOffices.map((office, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <div className="p-4 bg-white rounded-4 shadow-sm border h-100 transition-hover">
                  <div className="fs-1 mb-2">{office.flag}</div>
                  <h4 className="h5 fw-bold text-dark mb-1">{office.country}</h4>
                  <p className="text-primary small fw-semibold mb-3">{office.location}</p>

                  <div className="border-top pt-3 small text-muted">
                    <div className="fw-bold text-dark">{office.contactPerson}</div>
                    <div className="mb-2 text-primary">{office.title}</div>
                    <div className="mb-2">
                      <a href={`mailto:${office.email}`} className="text-decoration-none text-muted">
                        <i className="fa-solid fa-envelope me-2 text-primary"></i>
                        {office.email}
                      </a>
                    </div>
                    {office.phones.map((p, pIdx) => (
                      <div key={pIdx}>
                        <a href={`tel:${p.replace(/\s+/g, "")}`} className="text-decoration-none text-muted">
                          <i className="fa-solid fa-phone me-2 text-primary"></i>
                          {p}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Inquiry Forms with Client & Vendor Tabs */}
          <div className="row mt-5 pt-3">
            <div className="col-lg-10 mx-auto">
              <div className="p-4 p-md-5 bg-white rounded-4 shadow-lg border">
                {/* Form Tabs */}
                <div className="d-flex gap-2 border-bottom pb-3 mb-4">
                  <button
                    type="button"
                    className={`btn px-4 py-2 rounded-pill fw-bold ${
                      activeTab === "client" ? "btn-primary text-white" : "btn-light text-dark"
                    }`}
                    onClick={() => {
                      setActiveTab("client");
                      setSubmitted(false);
                    }}
                  >
                    <i className="fa-solid fa-briefcase me-2"></i> Client Business RFP
                  </button>
                  <button
                    type="button"
                    className={`btn px-4 py-2 rounded-pill fw-bold ${
                      activeTab === "vendor" ? "btn-primary text-white" : "btn-light text-dark"
                    }`}
                    onClick={() => {
                      setActiveTab("vendor");
                      setSubmitted(false);
                    }}
                  >
                    <i className="fa-solid fa-truck-ramp-box me-2"></i> Supplier Registration (EOI)
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-5">
                    <div className="fs-1 text-success mb-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <h3 className="fw-bold text-dark mb-2">Thank you for your submission!</h3>
                    <p className="text-muted max-w-500 mx-auto">
                      Your reference ID is <strong>#ABN-2026-8492</strong>. Our regional operations team will review your enquiry and contact you within 24 business hours.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-primary rounded-pill px-4 py-2 mt-3"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : activeTab === "client" ? (
                  /* Client Business Form */
                  <form onSubmit={handleSubmit}>
                    <h4 className="h4 fw-bold mb-3 text-dark">Request an Operational Proposal (RFP)</h4>
                    <p className="text-muted small mb-4">
                      Tell us about your catering, camp management, offshore manpower, or ship victualing requirements.
                    </p>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Full Name *</label>
                        <input type="text" required className="form-control" placeholder="e.g. John Doe" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Company / Operator Name *</label>
                        <input type="text" required className="form-control" placeholder="e.g. Saudi Aramco / Drilling Contractor" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Corporate Email *</label>
                        <input type="email" required className="form-control" placeholder="name@company.com" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Phone / WhatsApp *</label>
                        <input type="tel" required className="form-control" placeholder="+966 50 000 0000" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Country / Operating Region *</label>
                        <select className="form-select" required defaultValue="">
                          <option value="" disabled>Select Country</option>
                          <option value="ksa">Saudi Arabia (KSA)</option>
                          <option value="uae">United Arab Emirates (UAE)</option>
                          <option value="qatar">Qatar</option>
                          <option value="kuwait">Kuwait</option>
                          <option value="india">India</option>
                          <option value="other">Other Asian Region</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Service Scope Required *</label>
                        <select className="form-select" required defaultValue="">
                          <option value="" disabled>Select Primary Service</option>
                          <option value="offshore">Offshore Rig &amp; Marine Catering</option>
                          <option value="onshore">Remote Desert Camp Management</option>
                          <option value="chandelling">Ship Chandelling &amp; Victualing</option>
                          <option value="manpower">Offshore Hospitality Manpower</option>
                          <option value="turnkey">Full Turnkey Integrated Services</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Project / Vessel / Camp Location</label>
                        <input type="text" className="form-control" placeholder="e.g. Ras Tanura / Das Island / Doha Port" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Estimated Manpower or POB (People on Board)</label>
                        <input type="number" className="form-control" placeholder="e.g. 150" />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Scope of Work &amp; Project Description *</label>
                        <textarea required className="form-control" rows={4} placeholder="Please summarize your scope, expected mobilization date, and any special dietary or logistical requirements..."></textarea>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold">
                          Submit Proposal Request <i className="fa-solid fa-paper-plane ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  /* Supplier EOI Form */
                  <form onSubmit={handleSubmit}>
                    <h4 className="h4 fw-bold mb-3 text-dark">Supplier Expression of Interest (EOI)</h4>
                    <p className="text-muted small mb-4">
                      Register as a certified vendor for food supplies, logistics, equipment, or specialized maintenance.
                    </p>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Legal Company Name *</label>
                        <input type="text" required className="form-control" placeholder="Registered Legal Name" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Commercial Registration (CR) / License *</label>
                        <input type="text" required className="form-control" placeholder="CR / Trade License Number" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Primary Contact Person *</label>
                        <input type="text" required className="form-control" placeholder="Full Name & Title" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Business Email *</label>
                        <input type="email" required className="form-control" placeholder="procurement@vendor.com" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Supply Category *</label>
                        <select className="form-select" required defaultValue="">
                          <option value="" disabled>Select Category</option>
                          <option value="food">Fresh Produce, Meat, Poultry &amp; Dairy</option>
                          <option value="dry">Dry Provisions &amp; Canned Goods</option>
                          <option value="containers">DNV Certified Reefer Containers</option>
                          <option value="logistics">Refrigerated Logistics &amp; Transport</option>
                          <option value="hvac">Kitchen Equipment &amp; HVAC Services</option>
                          <option value="chemicals">HACCP Eco Cleaning Chemicals</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Quality Accreditations (Check applicable)</label>
                        <div className="d-flex flex-wrap gap-2 pt-1">
                          <span className="badge bg-light text-dark border p-2">ISO 9001</span>
                          <span className="badge bg-light text-dark border p-2">HACCP / ISO 22000</span>
                          <span className="badge bg-light text-dark border p-2">ISO 45001</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Company Profile Summary *</label>
                        <textarea required className="form-control" rows={4} placeholder="Overview of product lines, storage facilities, delivery capabilities, and operating regions..."></textarea>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold">
                          Register as Approved Supplier <i className="fa-solid fa-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

