import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, MessageCircle, Target, Zap, Workflow, Star, ChevronDown, Check, Users, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { AnimatedBlobs } from "@/components/AnimatedBlobs";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { SERVICES, FEATURES, PROJECTS, PRICING } from "@/data/site";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "NovaWeb | Top Web Design & Software Studio in Sri Lanka" },
      { name: "description", content: "Expert web development, e-commerce, and software automation in Sri Lanka. We build high-performance digital solutions that drive revenue and growth." },
      { property: "og:title", content: "NovaWeb | Top Web Design & Software Studio in Sri Lanka" },
      { property: "og:description", content: "Expert web development, e-commerce, and software automation in Sri Lanka. We build high-performance digital solutions that drive revenue and growth." },
    ],
  }),
  component: HomePage,
} as any));

const TESTIMONIALS = [
  {
    quote: "NovaWeb transformed KadeMart from a local store into an online powerhouse. Our digital sales jumped 140% in 3 months.",
    name: "Ravindu S.",
    role: "Founder, KadeMart Superstore",
    initials: "RS",
    color: "bg-green-500/20 text-green-400",
    stars: 5,
  },
  {
    quote: "We got 3x more bookings for our villas after NovaWeb redesigned our site. The automated engineering behind it is simply world-class.",
    name: "Kasun Perera",
    role: "Director, Ceylon Heritage Villas",
    initials: "KP",
    color: "bg-blue-500/20 text-blue-400",
    stars: 5,
  },
  {
    quote: "The team delivered our logistics dashboard ahead of schedule — clean, fast, and exactly what we needed. Highly recommended.",
    name: "Amali Fernando",
    role: "Operations Head, Lanka Logistics",
    initials: "AF",
    color: "bg-violet-500/20 text-violet-400",
    stars: 5,
  },
];

const CLIENT_NAMES = [
  "KadeMart", "Ceylon Journeys", "Westnahira", "Lanka Logistics",
  "Heritage Villas", "Amaya Exports", "Starline", "EduWave",
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3×", label: "Avg. Revenue Growth" },
];

const FAQS = [
  {
    q: "How long does a typical website project take?",
    a: "Most websites are delivered within 2–4 weeks depending on complexity. E-commerce and SaaS projects typically take 4–8 weeks. We always give you a clear timeline upfront.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes! Every package includes a support period. After that, we offer monthly maintenance retainers to keep your site updated, secure, and performing at its peak.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We specialize in taking outdated websites and transforming them into high-performance, modern platforms. We'll analyze your current site and propose a migration plan.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern frameworks like React, Next.js, and TanStack Start — paired with Tailwind CSS, Vercel, and Supabase. We pick the best stack for your specific needs.",
  },
  {
    q: "Do you work with clients outside Sri Lanka?",
    a: "Yes! We work with clients globally. Our primary market is Sri Lanka but we have successfully delivered projects for clients in the UK, UAE, and Australia.",
  },
];

function HomePage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true, skipSnaps: true }, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1.5, startDelay: 0 })
  ]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('pointerUp', () => {
      const autoScroll = emblaApi.plugins().autoScroll;
      if (autoScroll) {
        autoScroll.play(0);
      }
    });
  }, [emblaApi]);

  return (
    <>
      {/* HERO */}
      <section className="relative px-4 sm:px-6 overflow-hidden">
        <AnimatedBlobs />
        <div className="mx-auto max-w-6xl pt-10 pb-20 sm:pt-16 sm:pb-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-accent animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" /> Premium Web Engineering Studio
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We Build Digital Solutions
            <br />
            That <span className="text-gradient drop-shadow-[0_0_30px_oklch(0.84_0.17_215_/_0.3)]">Grow Your Business</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            From websites to automation systems, we help Sri Lankan businesses get more customers and grow faster online.
          </p>

          <div className="mt-10 flex flex-col items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-lg mx-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-4 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.03] w-full sm:w-auto"
              >
                Get Your Website Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/94718850885"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full glass border border-white/20 bg-white/5 px-5 py-4 text-sm font-bold transition-all hover:bg-white/10 hover:border-white/30 hover:text-accent w-full sm:w-auto backdrop-blur-xl"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm sm:text-[15px] font-semibold text-white/80 tracking-wide">
              <span className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent" /> Free Consultation</span>
              <span className="flex items-center gap-2.5"><ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-accent" /> No Commitment</span>
              <span className="flex items-center gap-2.5"><Zap className="h-4 w-4 sm:h-5 sm:w-5 text-accent fill-accent/20" /> Fast Delivery</span>
            </div>

            {/* Trust Badges — Premium Social Proof Strip */}
            <div className="mt-10 inline-flex items-center gap-8 rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-accent drop-shadow-glow" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-sm font-bold text-white leading-none">30+</span>
                  <span className="text-[9px] uppercase tracking-wider text-white/40 mt-1 font-semibold">Happy Clients</span>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <Target className="h-4 w-4 text-accent drop-shadow-glow" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-sm font-bold text-white leading-none">50+</span>
                  <span className="text-[9px] uppercase tracking-wider text-white/40 mt-1 font-semibold">Projects Done</span>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-accent drop-shadow-glow" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-sm font-bold text-white leading-none">5.0</span>
                  <span className="text-[9px] uppercase tracking-wider text-white/40 mt-1 font-semibold">Average Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* HERO MOCKUP — Live Portfolio Collage */}
          <div className="hidden sm:block relative mt-24 mx-auto max-w-5xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="absolute -inset-10 rounded-[3rem] bg-gradient-brand opacity-10 blur-[80px] sm:blur-[100px] transform-gpu will-change-transform" />
            <HeroCollage />
          </div>
        </div>
      </section>

      {/* ANIMATED STATS STRIP */}
      <div className="relative py-14 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center group">
                <p className="text-4xl sm:text-5xl font-bold text-gradient transition-transform group-hover:scale-110 duration-300">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* TESTIMONIALS */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-brand opacity-5 blur-[100px] rounded-full pointer-events-none" />
        <SectionHeading
          eyebrow="Client Stories"
          title={<>Results our <span className="text-gradient">clients love</span></>}
          subtitle="Real businesses. Real growth. Here's what they say."
        />
        <div className="mt-16 mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="relative group glass rounded-3xl p-8 border border-white/5 hover:-translate-y-2 transition-all duration-300 hover:border-accent/20 hover:shadow-glow flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-white/85 leading-relaxed flex-1 text-sm">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-white/5">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-xs ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>




      <WhatsAppSimulator />

      {/* SERVICES — Featured Split Layout */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute -right-40 top-20 w-[500px] h-[500px] bg-gradient-brand opacity-5 blur-[120px] rounded-full pointer-events-none" />
        <SectionHeading
          eyebrow="Services"
          title={<>Everything your <span className="text-gradient">business needs</span></>}
          subtitle="From the first pixel to full automation — we cover every layer of your digital presence."
        />
        <div className="mt-16 mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {/* Featured large card */}
            <div className="lg:col-span-1 group relative rounded-3xl overflow-hidden border border-accent/20 shadow-glow bg-gradient-to-br from-[oklch(0.20_0.06_258)] to-[oklch(0.16_0.04_265)] p-8 flex flex-col justify-between min-h-[360px] hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-brand opacity-5 group-hover:opacity-10 transition-opacity" />
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                  {React.createElement(SERVICES[0].icon, { className: "h-7 w-7 text-white" })}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{SERVICES[0].title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{SERVICES[0].description}</p>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Compact grid */}
            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              {SERVICES.slice(1).map((s) => (
                <div key={s.title} className="group relative rounded-2xl glass p-6 border border-white/5 hover:border-accent/20 transition-all hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                      <s.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{s.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                  {s.slug ? (
                    <Link to={`/services/${s.slug}`} className="mt-4 inline-flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </Link>
                  ) : (
                    <div className="mt-4 inline-flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity cursor-default">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-12 sm:py-24 relative overflow-hidden">
        <div className="px-4 sm:px-6 mb-16">
          <SectionHeading
            eyebrow="Portfolio"
            title={<>Projects we're <span className="text-gradient">proud of</span></>}
            subtitle="A glimpse of recent work across web, e-commerce, and automation."
          />
        </div>
        {/* DESKTOP MARQUEE */}
        <div className="hidden sm:flex overflow-hidden select-none py-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* FIRST SET */}
            <div className="flex gap-8 items-center px-4">
              {PROJECTS.map((p) => (
                <div key={p.title} className="w-[480px] shrink-0">
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
            {/* SECOND SET */}
            <div className="flex gap-8 items-center px-4">
              {PROJECTS.map((p) => (
                <div key={`${p.title}-copy`} className="w-[480px] shrink-0">
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE SLIDER */}
        <div className="sm:hidden mx-auto max-w-[1400px] overflow-hidden py-6" ref={emblaRef}>
          <div className="flex px-4 cursor-grab active:cursor-grabbing">
            {PROJECTS.map((p, i) => (
              <div key={`${p.title}-${i}`} className="flex-[0_0_85%] min-w-0 pl-6 first:pl-0">
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:text-accent">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FEATURES — Bento Grid */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 relative overflow-visible">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-gradient-brand opacity-5 blur-[120px] rounded-full pointer-events-none transform-gpu" />
        <SectionHeading
          eyebrow="Why Novaweb"
          title={<>The <span className="text-gradient">unfair advantage</span> we give you</>}
          subtitle="Every decision we make is engineered to give your business a measurable edge."
        />
        <div className="mt-16 mx-auto max-w-6xl grid gap-4 md:grid-cols-12">
          {/* Big stat card */}
          <div className="md:col-span-4 relative group glass rounded-3xl p-8 border border-white/5 hover:border-accent/20 hover:shadow-glow transition-all overflow-hidden flex flex-col justify-between min-h-[260px]">
            <div className="absolute -bottom-8 -right-8 text-[120px] font-black leading-none text-accent/5 group-hover:text-accent/10 transition-colors select-none">2s</div>
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                {React.createElement(FEATURES[0].icon, { className: "h-6 w-6 text-white" })}
              </div>
              <p className="mt-4 text-5xl font-black text-gradient">&lt;2s</p>
              <h3 className="mt-2 text-lg font-bold text-white">Load Time</h3>
            </div>
            <p className="text-sm text-muted-foreground">{FEATURES[0].description}</p>
          </div>
          {/* Wide card */}
          <div className="md:col-span-8 relative group glass rounded-3xl p-8 border border-white/5 hover:border-accent/20 hover:shadow-glow transition-all overflow-hidden flex flex-col justify-between min-h-[260px]">
            <div className="absolute -bottom-6 -right-6 text-[100px] font-black leading-none text-accent/5 select-none">3×</div>
            <div className="flex items-start gap-5">
              <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                {React.createElement(FEATURES[1].icon, { className: "h-6 w-6 text-white" })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{FEATURES[1].title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{FEATURES[1].description}</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["WhatsApp Lead Capture", "Auto-routing", "Booking Integration"].map((t) => (
                <div key={t} className="glass rounded-xl px-3 py-2 text-xs text-center text-white/70 border border-white/5">{t}</div>
              ))}
            </div>
          </div>
          {/* Two equal cards */}
          {FEATURES.slice(2).map((f) => (
            <div key={f.title} className="md:col-span-6 group glass rounded-3xl p-8 border border-white/5 hover:border-accent/20 hover:shadow-glow transition-all hover:-translate-y-1 flex gap-5 items-start">
              <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 relative overflow-visible">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-brand opacity-10 blur-[120px] rounded-full pointer-events-none transform-gpu" />
        <SectionHeading
          eyebrow="Pricing"
          title={<>Simple, <span className="text-gradient">transparent</span> pricing</>}
          subtitle="No hidden fees. Choose the package that fits your stage of growth."
        />
        <div className="mt-16 mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl glass p-8 border transition-all hover:-translate-y-2 ${tier.highlight ? "border-accent/50 shadow-glow scale-[1.03]" : "border-white/5"
                }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-bold text-white shadow-glow">
                  ✦ Most Popular
                </div>
              )}
              <p className="text-sm uppercase tracking-widest text-accent font-semibold">{tier.name}</p>
              <p className="mt-3 text-4xl font-bold text-white">{tier.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 ${tier.highlight ? "bg-gradient-brand text-white shadow-glow" : "glass border border-white/10 hover:text-accent"
                  }`}
              >
                {tier.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 py-12 sm:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient">answered</span></>}
          subtitle="Everything you need to know before working with us."
        />
        <div className="mt-16 mx-auto max-w-3xl space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass rounded-2xl border border-white/5 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-white hover:text-accent transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 text-accent ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </>
  );
}

// ── WhatsApp Simulator Section (Looping Animated Conversation) ─────────────────
type ChatMessage = {
  id: number;
  type: 'bot' | 'user';
  text: string;
  time: string;
  buttons?: string[];
};

const CHAT_SCRIPT: ChatMessage[] = [
  { id: 1, type: 'bot', text: "Hi! 👋 Welcome to NovaWeb. How can I help you scale your business today?", time: "10:42 AM" },
  { id: 2, type: 'user', text: "I need an e-commerce website with WhatsApp ordering.", time: "10:43 AM" },
  { id: 3, type: 'bot', text: "That's our specialty! Are you selling physical products or digital services?", time: "10:43 AM", buttons: ["Physical Products", "Digital Services"] },
  { id: 4, type: 'user', text: "Physical products — a grocery delivery app.", time: "10:44 AM" },
  { id: 5, type: 'bot', text: "Perfect! We'll build you a full-stack solution with real-time inventory, automated order confirmations via WhatsApp, and a delivery tracking system. 🚀", time: "10:44 AM" },
  { id: 6, type: 'user', text: "That sounds amazing! How soon can we start?", time: "10:45 AM" },
  { id: 7, type: 'bot', text: "We can kick off this week! I'll connect you with our project lead. Expect a detailed proposal within 24 hours. ✨", time: "10:45 AM", buttons: ["Book a Call", "View Portfolio"] },
];

function WhatsAppSimulator() {
  const [visibleMessages, setVisibleMessages] = React.useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = React.useState(false);
  const [typingType, setTypingType] = React.useState<'bot' | 'user'>('bot');
  const chatRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimeouts = React.useCallback(() => {
    timeoutRef.current.forEach(clearTimeout);
    timeoutRef.current = [];
  }, []);

  const addTimeout = React.useCallback((fn: () => void, delay: number) => {
    const id = setTimeout(fn, delay);
    timeoutRef.current.push(id);
    return id;
  }, []);

  const runConversation = React.useCallback(() => {
    clearAllTimeouts();
    setVisibleMessages([]);
    setIsTyping(false);

    let cumulativeDelay = 600;

    CHAT_SCRIPT.forEach((msg, index) => {
      // Show typing indicator
      addTimeout(() => {
        setTypingType(msg.type);
        setIsTyping(true);
      }, cumulativeDelay);

      // Typing duration varies
      const typingDuration = msg.type === 'bot' ? 1200 : 800;
      cumulativeDelay += typingDuration;

      // Show message, hide typing
      addTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, msg]);
      }, cumulativeDelay);

      // Pause before next message
      cumulativeDelay += 1000;
    });

    // After all messages, wait then restart
    addTimeout(() => {
      runConversation();
    }, cumulativeDelay + 3000);
  }, [addTimeout, clearAllTimeouts]);

  React.useEffect(() => {
    runConversation();
    return clearAllTimeouts;
  }, [runConversation, clearAllTimeouts]);

  // Auto-scroll chat to bottom
  React.useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [visibleMessages, isTyping]);

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-brand opacity-10 blur-[100px] rounded-full pointer-events-none transform-gpu will-change-transform" />
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">
        {/* Text content */}
        <div className="flex-1 space-y-6">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Business Automation</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1]">
            Turn WhatsApp into your <span className="text-gradient">best employee</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We build intelligent conversational bots that take orders, book appointments, and capture leads while you sleep. Your customers get instant replies in seconds without human intervention.
          </p>
          <div className="pt-6">
            <a href="https://wa.me/94714516364?text=Hi!%20I%20want%20to%20see%20a%20live%20demo%20of%20the%20automation%20bot" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-all">
              <MessageCircle className="w-5 h-5" /> Test The Live Demo
            </a>
          </div>
        </div>

        {/* Animated Chat Simulator */}
        <div className="flex-1 w-full max-w-[340px] relative shrink-0 transform-gpu">
          <div className="bg-[oklch(0.14_0.04_265)] rounded-[2.5rem] border-[6px] border-[oklch(0.20_0.06_258)] overflow-hidden shadow-[0_0_80px_oklch(0.84_0.17_215_/_0.15)] relative h-[550px] flex flex-col">
            {/* Header */}
            <div className="bg-[oklch(0.16_0.04_265)] border-b border-white/5 px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center shrink-0 shadow-glow">
                <span className="font-bold text-white text-sm tracking-tighter">NW</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-[15px] truncate leading-tight">NovaWeb AI System</h3>
                <p className="text-accent text-xs">{isTyping && typingType === 'bot' ? 'typing...' : 'online'}</p>
              </div>
              <MessageCircle className="w-5 h-5 text-white/40" />
            </div>

            {/* Chat Area */}
            <div ref={chatRef} className="flex-1 p-4 bg-[oklch(0.12_0.03_265)] space-y-3 overflow-y-auto relative scroll-smooth" style={{ scrollbarWidth: 'none' }}>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />

              {visibleMessages.map((msg) => (
                <div
                  key={`${msg.id}-${visibleMessages.length}`}
                  className="relative"
                  style={{ animation: 'chatSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both' }}
                >
                  {msg.type === 'bot' ? (
                    <div className="bg-[oklch(0.18_0.05_260)] border border-white/5 text-white p-2.5 rounded-2xl rounded-tl-sm w-fit max-w-[85%] text-sm shadow-sm leading-relaxed">
                      {msg.text}
                      {msg.buttons && (
                        <div className="mt-2.5 space-y-1.5 flex flex-col">
                          {msg.buttons.map((btn, bi) => (
                            <div key={bi} className={`${bi === 0 ? 'bg-accent/10 text-accent border-accent/20' : 'bg-white/5 text-white/70 border-white/10'} border py-2 px-3 rounded-lg text-xs text-center font-semibold pointer-events-none`}>
                              {btn}
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="text-white/40 text-[10px] text-right mt-1">{msg.time}</p>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="bg-accent/20 border border-accent/20 text-white p-2.5 rounded-2xl rounded-tr-sm w-fit max-w-[85%] text-sm shadow-sm leading-relaxed">
                        {msg.text}
                        <div className="flex justify-end items-center gap-1 mt-0.5">
                          <p className="text-accent/60 text-[10px]">{msg.time}</p>
                          <Check className="w-3.5 h-3.5 text-accent" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className={`relative ${typingType === 'user' ? 'flex justify-end' : ''}`} style={{ animation: 'chatSlideIn 0.25s ease-out both' }}>
                  <div className={`${typingType === 'bot' ? 'bg-[oklch(0.18_0.05_260)] border-white/5' : 'bg-accent/20 border-accent/20'} border p-3 rounded-2xl ${typingType === 'bot' ? 'rounded-tl-sm' : 'rounded-tr-sm'} w-fit`}>
                    <div className="flex gap-1.5 items-center h-4">
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms', animationDuration: '0.6s' }} />
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms', animationDuration: '0.6s' }} />
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms', animationDuration: '0.6s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="bg-[oklch(0.16_0.04_265)] border-t border-white/5 px-3 py-2.5 flex items-center gap-2 shrink-0">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-white/40 text-sm">
                Message...
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-brand shadow-glow flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-white fill-current" />
              </div>
            </div>
          </div>
          <div className="mt-4 md:hidden flex justify-center w-full">
            <a href="https://wa.me/94718850885?text=Hi!%20I%20want%20to%20see%20a%20live%20demo%20of%20the%20automation%20bot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-all">
              <MessageCircle className="w-5 h-5" /> Test The Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS[number] }) {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleCardClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] glass shadow-card flex flex-col h-[520px] sm:h-[600px] transition-all duration-500 ${project.liveUrl ? 'cursor-pointer hover:shadow-cyan/20' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleCardClick}
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" />

      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 leading-[0]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width="600"
            height="400"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 backdrop-blur-md bg-black/40 transition-opacity duration-500 pointer-events-none" />
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none leading-[0]"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: isHovering ? 1 : 0,
            WebkitMaskImage: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, black 0%, transparent 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.19_0.04_265)] via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-30">
          {project.slug ? (
            <Link
              to={`/portfolio/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              Project Brief <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-sm font-semibold text-white/50">
              Project Brief <ArrowRight className="h-4 w-4" />
            </span>
          )}
          {project.liveUrl && (
            <div
              className={`inline-flex items-center gap-2 rounded-full backdrop-blur-md border px-6 py-3 text-sm font-semibold transition-all cursor-pointer hover:scale-105 ${project.isBot ? 'bg-[#25D366]/20 border-[#25D366]/30 hover:bg-[#25D366]/30 text-[#25D366]' : 'bg-white/10 border-white/20 hover:bg-white/20 text-white'}`}
            >
              {project.isBot ? 'Test the Bot' : 'Live Site'} {project.isBot ? <MessageCircle className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
            </div>
          )}
        </div>
      </div>
      <div className="p-6 sm:p-8 bg-[oklch(0.16_0.04_265)]/90 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold flex items-center gap-2">
          {project.category}
          {project.liveUrl && <ExternalLink className="h-3 w-3 opacity-50" />}
        </p>
        <h3 className="mt-2 text-xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 whitespace-normal leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}

// ── Browser Frame Helper ─────────────────────────────────────────────────────
function BrowserFrame({ src, label, style }: { src: string; label: string; style?: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[oklch(0.14_0.04_265)] transform-gpu will-change-transform"
      style={style}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[oklch(0.12_0.03_265)] border-b border-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <div className="ml-2 flex-1 h-4 rounded-md bg-white/5 px-2 flex items-center">
          <span className="text-[8px] text-white/30 truncate">novaweb.io/{label.toLowerCase().replace(/\s/g, '-')}</span>
        </div>
      </div>
      {/* Screenshot */}
      <img
        src={src}
        alt={label}
        loading="eager"
        width="800"
        height="600"
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
}

// ── Hero Collage ─────────────────────────────────────────────────────────────
function HeroCollage() {
  return (
    <div className="relative w-full" style={{ height: "480px", perspective: "1200px" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-brand opacity-5 blur-[60px] sm:blur-[80px] rounded-full transform-gpu will-change-transform" />

      {/* LEFT panel — Ceylon Journeys */}
      <BrowserFrame
        src="/portfolio/ceylonjourneys.png"
        label="Ceylon Journeys"
        style={{
          width: "42%",
          height: "78%",
          top: "11%",
          left: "0%",
          transform: "rotateY(18deg) rotateX(4deg) translateZ(-60px)",
          transformOrigin: "right center",
          opacity: 0.85,
          zIndex: 10,
        }}
      />

      {/* CENTER panel — KadeMart (hero) */}
      <BrowserFrame
        src="/portfolio/kademart.png"
        label="KadeMart"
        style={{
          width: "52%",
          height: "92%",
          top: "4%",
          left: "24%",
          transform: "rotateY(0deg) rotateX(3deg) translateZ(20px)",
          zIndex: 30,
          boxShadow: "0 0 80px oklch(0.84 0.17 215 / 0.25), 0 30px 80px rgba(0,0,0,0.6)",
          border: "1px solid oklch(0.84 0.17 215 / 0.3)",
        }}
      />

      {/* RIGHT panel — Starline */}
      <BrowserFrame
        src="/portfolio/starline.png"
        label="Starline"
        style={{
          width: "42%",
          height: "78%",
          top: "11%",
          right: "0%",
          transform: "rotateY(-18deg) rotateX(4deg) translateZ(-60px)",
          transformOrigin: "left center",
          opacity: 0.85,
          zIndex: 10,
        }}
      />

      {/* Floating digital growth badge */}
      <div className="absolute top-[8%] right-[2%] bg-[oklch(0.16_0.04_265)]/95 shadow-glow p-4 sm:p-5 rounded-2xl border border-white/10 z-40 pointer-events-none transform-gpu will-change-transform">
        <p className="text-[9px] uppercase tracking-widest font-bold text-accent">Digital Growth</p>
        <p className="text-3xl sm:text-4xl font-bold text-white mt-1">+148%</p>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
          <div className="h-full w-4/5 bg-gradient-brand shadow-[0_0_15px_oklch(0.84_0.17_215)] transform-gpu" />
        </div>
      </div>

      {/* Live indicator pill */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[oklch(0.16_0.04_265)]/95 px-8 py-3 rounded-full border border-white/20 shadow-glow whitespace-nowrap z-40 transform-gpu will-change-transform">
        <p className="text-[9px] uppercase tracking-widest font-extrabold text-accent flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          Real Projects — Real Client Growth
        </p>
      </div>
    </div>
  );
}
