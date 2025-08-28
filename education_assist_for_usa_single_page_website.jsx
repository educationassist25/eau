import React from "react";

// NOTE: This is a single-file React component that renders a polished, responsive landing page
// for "Education Assist for USA" based on your flyer. It uses Tailwind CSS utility classes.
// Replace LOGO_URL with your logo path if desired. All links and text are editable in-place.

const LOGO_URL = "https://images.unsplash.com/photo-1580584128409-7a3009a5cfdb?q=80&w=600&auto=format&fit=crop"; // placeholder; swap with your logo image path

export default function EducationAssistUSA() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Education Assist for USA" className="h-10 w-10 rounded-full ring-2 ring-emerald-500 object-cover"/>
            <div className="font-extrabold text-lg sm:text-xl tracking-tight">Education Assist for <span className="text-emerald-600">USA</span></div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#why" className="hover:text-emerald-700">Why Us</a>
            <a href="#pricing" className="hover:text-emerald-700">Packages</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#contact" className="ml-4 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-emerald-700 transition">
            Book a Session
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <svg className="absolute -top-24 -right-24 h-72 w-72 text-emerald-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M39.3,-65.5C52.5,-58.8,65.2,-52.1,71.7,-41.3C78.1,-30.6,78.2,-15.8,76.9,-1.1C75.6,13.6,73,27.2,65.8,37.6C58.6,48.1,46.8,55.4,34.7,62.3C22.7,69.2,11.3,75.6,-1.4,78.1C-14,80.5,-28.1,79.1,-39.4,72.2C-50.7,65.3,-59.1,52.9,-67,40.5C-74.8,28.1,-82.1,14.1,-83.2,-0.5C-84.3,-15.1,-79.1,-30.2,-69.9,-41.1C-60.7,-52.1,-47.4,-59.1,-34.1,-65.8C-20.7,-72.6,-10.4,-79.1,0.3,-79.5C11,-79.9,22,-74.2,39.3,-65.5Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                Your Trusted Partner for <span className="text-emerald-600">U.S. Education</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                We guide international students through every step—university selection, SOP/essay reviews, visa documentation, and mock interviews—so you can confidently pursue Master’s and Ph.D. opportunities in Biological Sciences across the United States.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 text-sm">Expert US Faculty Counselors</span>
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 text-sm">Step‑by‑Step Support</span>
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 text-sm">Proven Success</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#pricing" className="rounded-xl bg-slate-900 text-white px-5 py-3 font-semibold shadow hover:bg-slate-800">View Packages</a>
                <a href="#contact" className="rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:border-slate-400">Free 30‑min Consult</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src="/mnt/data/5cec0b4f-35bc-444f-bc26-6dd3a32b2e1a.jpg"
                  alt="Education Assist for USA flyer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold">About Us</h2>
              <p className="mt-3 text-slate-700">Education Assist for USA is a dedicated consultancy helping students worldwide navigate their journey to study in the United States.</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              <Card title="University Selection & Applications" desc="Find the best fit programs and craft strong applications." />
              <Card title="SOP, Resume & Essay Reviews" desc="Tailored edits and strategic feedback to tell your story." />
              <Card title="Visa Docs & Interview Prep" desc="Step-by-step documentation support and realistic mock interviews." />
              <Card title="One‑on‑One Counseling" desc="Personalized guidance to make the process smooth and stress‑free." />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center">Why Choose Us</h2>
          <ul className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Expert counselors on Master’s & Ph.D. Biological Sciences",
              "Step‑by‑step support from shortlist to visa",
              "U.S. education system insights",
              "Proven track record of success",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="mt-1 h-5 w-5 rounded-full bg-emerald-600 inline-flex items-center justify-center text-white text-xs">✓</span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-slate-600">Our mission is to empower aspiring students with the right tools, knowledge, and support to pursue higher education in the United States.</p>
        </div>
      </section>

      {/* Services / Packages */}
      <section id="pricing" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center">Service Packages</h2>
          <p className="mt-3 text-center text-slate-600">Transparent offerings—choose what fits your journey. (Fees shown in BDT; multi‑service bundles available.)</p>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <PriceCard
              name="Starter"
              badge="Most Popular"
              price="5,000"
              unit="BDT / university"
              features={[
                "Tailored SOP writing",
                "Profile review (30 mins)",
                "2 rounds of revisions",
              ]}
              cta="Get SOP Help"
            />
            <PriceCard
              name="Professional"
              price="8,000"
              unit="BDT / university"
              features={[
                "Full application package",
                "Includes SOP editing & resume review",
                "Cover letter included",
              ]}
              cta="Start Application"
            />
            <PriceCard
              name="Premium Bundle"
              price="40,000"
              unit="BDT (up to 5 universities)"
              features={[
                "All services bundled",
                "SOP + Resume/CV + Cover letter",
                "Visa mock interview (1 hr)",
              ]}
              cta="Go Premium"
            />
          </div>

          {/* Detailed Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Fee (BDT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <Row s="Initial Counseling Session (30 mins)" d="One‑on‑one consultation to assess student profile and strategy" f="Free"/>
                <Row s="SOP Writing" d="Tailored SOP per university" f="5,000"/>
                <Row s="SOP Editing" d="2 rounds of revisions per university" f="3,000"/>
                <Row s="Resume/CV Review & Formatting" d="Professional formatting and improvement for academic applications" f="2,000"/>
                <Row s="Cover Letter Writing & Review" d="Feedback and editing" f="1,500"/>
                <Row s="Visa Interview Preparation (Mock)" d="1‑hour session with Q&A practice and feedback" f="3,000"/>
                <Row s="Full Application Package" d="Includes SOP editing, resume review, cover letter" f="8,000"/>
                <Row s="Publication Assistance" d="Editing and help to achieve the reviewer’s expectations" f="5,000"/>
                <Row s="Premium Package (Up to 5 Universities)" d="All services above bundled" f="40,000"/>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold">Get in Touch</h2>
              <p className="mt-3 text-slate-700">Have questions or ready to start? Book a free 30‑minute session and we’ll map your path to a U.S. university.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li><span className="font-semibold">Location:</span> Missouri City, TX 77459</li>
                <li><span className="font-semibold">Phone:</span> <a href="tel:+16823089873" className="underline decoration-emerald-500 decoration-2 underline-offset-4">+1‑682‑308‑9873</a></li>
                <li><span className="font-semibold">Email:</span> <a href="mailto:education.assist25@gmail.com" className="underline decoration-emerald-500 decoration-2 underline-offset-4">education.assist25@gmail.com</a></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <form action="mailto:education.assist25@gmail.com" method="post" encType="text/plain" className="grid sm:grid-cols-2 gap-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <input required placeholder="Full name" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                <input required type="email" placeholder="Email address" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                <input placeholder="Phone (optional)" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                <input placeholder="Target program (e.g., MS Biology)" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                <textarea placeholder="Tell us about your goals" rows={5} className="sm:col-span-2 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                <button className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700">Send Message</button>
              </form>
              <p className="mt-3 text-xs text-slate-500">By contacting us you agree to be reached at the email/phone provided for counseling purposes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Education Assist for USA. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#pricing" className="hover:text-emerald-700">Packages</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2 text-slate-700">{desc}</p>
    </div>
  );
}

function PriceCard({ name, price, unit, features, badge, cta }) {
  return (
    <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col">
      {badge && (
        <span className="absolute -top-3 right-4 rounded-full bg-emerald-600 text-white text-xs px-3 py-1 shadow">{badge}</span>
      )}
      <h3 className="text-xl font-extrabold">{name}</h3>
      <div className="mt-3">
        <span className="text-4xl font-black">{price}</span> <span className="text-slate-500">{unit}</span>
      </div>
      <ul className="mt-4 space-y-2 text-slate-700">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2"><span className="mt-1 h-5 w-5 rounded-full bg-emerald-600 text-white text-xs inline-flex items-center justify-center">✓</span>{f}</li>
        ))}
      </ul>
      <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-white font-semibold hover:bg-slate-800">{cta}</a>
    </div>
  );
}

function Row({ s, d, f }) {
  return (
    <tr className="align-top">
      <td className="px-4 py-3 font-medium">{s}</td>
      <td className="px-4 py-3 text-slate-700">{d}</td>
      <td className="px-4 py-3">{f}</td>
    </tr>
  );
}
