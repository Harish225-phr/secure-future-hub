import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart, Activity, Car, Plane, Briefcase, FileText,
  CheckCircle2, Users, Clock, Award, ShieldCheck, Phone, MessageCircle, Mail, MapPin,
  Star, ChevronDown, Sparkles, TrendingUp, HandCoins, Smile,
} from "lucide-react";
import heroImg from "@/assets/hero-family.jpg";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SecureShield — Trusted Insurance Advisors | Life, Health, Car, Travel & Business" },
      { name: "description", content: "Get the best insurance plans with expert advice. Compare Life, Health, Car, Travel & Business insurance. Free quote in 2 minutes. 1000+ happy clients." },
    ],
  }),
});

const services = [
  { icon: Heart, title: "Life Insurance", desc: "Protect your family's financial future with comprehensive life cover plans." },
  { icon: Activity, title: "Health Insurance", desc: "Cashless hospitalization and complete medical coverage for you and your family." },
  { icon: Car, title: "Car Insurance", desc: "Comprehensive auto protection with quick claim assistance and best premium rates." },
  { icon: Plane, title: "Travel Insurance", desc: "Worldwide travel cover for trips, medical emergencies, lost luggage and more." },
  { icon: Briefcase, title: "Business Insurance", desc: "Safeguard your business assets, employees and operations against any risk." },
  { icon: FileText, title: "Term Plans", desc: "High coverage at low premium — pure protection plans tailored to your goals." },
];

const reasons = [
  { icon: Users, title: "Expert Guidance", desc: "Certified advisors with 10+ years of industry experience." },
  { icon: TrendingUp, title: "Best Policy Comparison", desc: "Compare top insurers side-by-side and pick the smartest plan." },
  { icon: HandCoins, title: "Affordable Plans", desc: "We negotiate the best premium rates so you save more." },
  { icon: Clock, title: "Quick Claim Support", desc: "Dedicated claim team — fast settlement when you need it most." },
  { icon: ShieldCheck, title: "Trusted Advisors", desc: "IRDAI-licensed brokers trusted by 1000+ happy clients." },
  { icon: Award, title: "24/7 Assistance", desc: "Round-the-clock support over phone, WhatsApp & email." },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Free 1:1 call to understand your needs and goals." },
  { step: "02", title: "Compare Plans", desc: "We shortlist the top plans matched to your profile." },
  { step: "03", title: "Choose Policy", desc: "Pick the plan that fits your budget and coverage." },
  { step: "04", title: "Get Coverage", desc: "Instant policy issuance with lifetime claim support." },
];

const benefits = [
  { icon: ShieldCheck, title: "Financial Security", desc: "A safety net for life's uncertainties." },
  { icon: Heart, title: "Family Protection", desc: "Keep your loved ones safe and stable." },
  { icon: HandCoins, title: "Tax Benefits", desc: "Save up to ₹46,800 under Sec 80C & 80D." },
  { icon: Smile, title: "Peace of Mind", desc: "Sleep better knowing you're fully covered." },
];

const testimonials = [
  { name: "Rahul Sharma", role: "Business Owner", text: "Got my health insurance in one day. Their advisor explained everything clearly and helped me save 25% on premium.", rating: 5 },
  { name: "Priya Mehta", role: "Software Engineer", text: "Excellent claim support during my hospitalization. The team handled everything smoothly. Highly recommended!", rating: 5 },
  { name: "Amit Verma", role: "Doctor", text: "Best insurance broker I've worked with. Transparent, professional, and always available when needed.", rating: 5 },
];

const faqs = [
  { q: "Which insurance is best for me?", a: "It depends on your life stage, dependents and goals. We offer a free consultation to assess your needs and recommend the best mix of life, health and other covers." },
  { q: "How do I claim my insurance?", a: "Just call our 24/7 helpline or WhatsApp us. Our dedicated claim team will guide you end-to-end with documentation, hospital coordination, and follow-ups until settlement." },
  { q: "How much premium will I have to pay?", a: "Premiums depend on age, sum insured, and the type of plan. We compare 20+ insurers to get you the lowest premium with the best coverage." },
  { q: "Do you provide online support?", a: "Yes — you can reach us via call, WhatsApp, email or video call. Most policies are issued 100% online within 24 hours." },
];

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Process />
      <Benefits />
      <Testimonials />
      <QuoteForm />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Happy family with insurance advisor" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>
      <div className="container-px max-w-7xl mx-auto py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-primary-foreground">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur"
          >
            <Sparkles size={14} /> Free Consultation Available
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance"
          >
            Secure Your Future with <span className="text-accent">Trusted</span> Insurance Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-lg text-primary-foreground/85 max-w-xl"
          >
            Life • Health • Car • Travel • Business Insurance — all under one roof, with expert advisors who put your needs first.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#quote" className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent-hover text-accent-foreground px-7 py-3.5 text-sm font-semibold shadow-elegant transition-all hover:scale-[1.03]">
              Get Free Quote
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-background/10 hover:bg-background/20 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors">
              Talk to Expert
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-xl"
          >
            {[
              { icon: Users, label: "1000+ Happy Clients" },
              { icon: Clock, label: "Fast Claim Support" },
              { icon: Award, label: "Expert Advisors" },
            ].map((b) => (
              <div key={b.label} className="rounded-xl bg-background/10 backdrop-blur border border-primary-foreground/15 p-4 text-center">
                <b.icon className="mx-auto text-accent" size={22} />
                <div className="mt-2 text-xs font-medium text-primary-foreground/90">{b.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="relative ml-auto max-w-md rounded-2xl bg-background p-7 shadow-elegant">
            <div className="text-xs uppercase tracking-wider text-accent font-semibold">Get Quote in 2 Minutes</div>
            <h3 className="mt-2 text-2xl font-bold text-primary">Quick Quote</h3>
            <p className="mt-1 text-sm text-muted-foreground">100% Secure & Confidential</p>
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 rounded-lg bg-secondary p-3">
                <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                <span className="text-sm">No spam calls — only useful advice</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary p-3">
                <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                <span className="text-sm">Compare 20+ top insurers instantly</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary p-3">
                <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                <span className="text-sm">Lifetime claim support included</span>
              </div>
            </div>
            <a href="#quote" className="mt-5 block text-center rounded-lg bg-primary text-primary-foreground py-3 font-semibold hover:bg-primary-light transition-colors">
              Start Free Quote →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = ["IRDAI Licensed", "20+ Insurer Partners", "₹500Cr+ Cover Issued", "98% Claim Settlement", "Trusted Since 2014"];
  return (
    <div className="bg-surface border-y">
      <div className="container-px max-w-7xl mx-auto py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-muted-foreground">
        {items.map((i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle2 className="text-accent" size={16} /> {i}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      <span className="inline-block rounded-full bg-accent/10 text-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider">{tag}</span>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-balance">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeader tag="Our Services" title="Insurance Solutions for Every Need" sub="From life cover to business protection — we have you covered." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-accent/40">
                <div className="h-14 w-14 rounded-xl bg-primary/5 text-primary grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                <a href="#quote" className="mt-5 inline-flex text-sm font-semibold text-accent hover:underline">Get a Quote →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-24 bg-surface">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeader tag="Why Choose Us" title="Trusted by Thousands. Built on Integrity." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="flex gap-4 rounded-2xl bg-card p-6 border h-full hover:shadow-card transition-shadow">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-accent/10 text-accent grid place-items-center">
                  <r.icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeader tag="How It Works" title="Get Insured in 4 Simple Steps" />
        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="relative text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold text-lg shadow-elegant relative z-10">
                  {p.step}
                </div>
                <h3 className="mt-5 font-bold text-primary text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_70%,#22c55e,transparent_40%)]" />
      <div className="container-px max-w-7xl mx-auto relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-accent/20 text-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider">Benefits</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Why Insurance Matters</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="rounded-2xl bg-background/5 border border-primary-foreground/10 backdrop-blur p-6 h-full hover:bg-background/10 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-accent text-accent-foreground grid place-items-center">
                  <b.icon size={22} />
                </div>
                <h3 className="mt-4 font-bold text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeader tag="Testimonials" title="What Our Clients Say" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-card p-7 border shadow-card">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, k) => <Star key={k} size={18} fill="currentColor" />)}
                </div>
                <p className="mt-4 text-foreground/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t">
                  <div className="h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", type: "Life Insurance", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^\+?\d[\d\s-]{7,}$/.test(form.phone)) return;
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-24 bg-background">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="inline-block rounded-full bg-accent/10 text-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider">Free Quote</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-balance">Get a Personalized Quote in 2 Minutes</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Share a few details and our advisor will reach out with the best plan options. 100% Secure & Confidential.
          </p>
          <ul className="mt-6 space-y-3">
            {["Free expert consultation", "Compare 20+ insurers", "No hidden charges", "Lifetime claim support"].map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-accent" size={18} /> {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="rounded-2xl bg-card border p-7 sm:p-9 shadow-elegant">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto h-16 w-16 rounded-full bg-accent/10 text-accent grid place-items-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-primary">Thank You!</h3>
                <p className="mt-2 text-muted-foreground">Our advisor will contact you within 30 minutes.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-primary">Request Free Quote</h3>
                <div className="mt-5 space-y-4">
                  <Field label="Full Name">
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={80} className="w-full rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your name" />
                  </Field>
                  <Field label="Phone Number">
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={20} className="w-full rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="+91 99999 99999" />
                  </Field>
                  <Field label="Insurance Type">
                    <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                      {services.map((s) => <option key={s.title}>{s.title}</option>)}
                    </select>
                  </Field>
                  <Field label="Message (optional)">
                    <textarea rows={3} maxLength={500} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Tell us about your needs..." />
                  </Field>
                </div>
                <button type="submit" className="mt-6 w-full rounded-lg bg-accent hover:bg-accent-hover text-accent-foreground font-semibold py-3.5 transition-all hover:scale-[1.01] shadow-elegant">
                  Get Free Quote
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">By submitting, you agree to be contacted by our advisors.</p>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="container-px max-w-3xl mx-auto">
        <SectionHeader tag="FAQ" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="rounded-xl bg-card border overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold text-primary">{f.q}</span>
                  <ChevronDown className={`flex-shrink-0 text-accent transition-transform ${open === i ? "rotate-180" : ""}`} size={20} />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{f.a}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Phone, label: "Call Us", value: "+91 99999 99999", href: "tel:+919999999999" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/919999999999" },
    { icon: Mail, label: "Email", value: "hello@secureshield.com", href: "mailto:hello@secureshield.com" },
    { icon: MapPin, label: "Office", value: "Mumbai, India", href: "#" },
  ];
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeader tag="Contact" title="We're Here to Help, 24/7" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.05}>
              <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="block rounded-2xl border bg-card p-6 text-center hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center">
                  <c.icon size={20} />
                </div>
                <div className="mt-4 text-xs uppercase tracking-wider font-semibold text-muted-foreground">{c.label}</div>
                <div className="mt-1 font-semibold text-primary">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
