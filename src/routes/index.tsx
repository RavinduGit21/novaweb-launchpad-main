import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, MessageCircle, Target, Zap, Workflow } from "lucide-react";
import { AnimatedBlobs } from "@/components/AnimatedBlobs";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { SERVICES, FEATURES, PROJECTS } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novaweb — Websites That Grow Your Business" },
      { name: "description", content: "Modern web development and automation solutions to help your business grow online." },
      { property: "og:title", content: "Novaweb — Websites That Grow Your Business" },
      { property: "og:description", content: "Modern web development and automation solutions to help your business grow online." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
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
            Websites That Bring You
            <br />
            <span className="text-gradient drop-shadow-[0_0_30px_oklch(0.84_0.17_215_/_0.3)]">More Customers</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We engineer high-performance digital experiences designed to turn visitors into loyal customers and scale your business with precision.
          </p>
          
          <div className="mt-10 flex flex-col items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
             <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-white shadow-glow transition-transform hover:scale-[1.03]"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-semibold hover:text-accent"
              >
                View Portfolio
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">★</span> Trusted by 20+ businesses
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">★</span> 50+ projects completed
              </div>
            </div>
          </div>

          {/* FINAL PREMIUM 3D MOCKUP */}
          <div className="relative mt-24 mx-auto max-w-5xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="absolute -inset-10 rounded-[3rem] bg-gradient-brand opacity-10 blur-[100px] animate-pulse" />
            
            <div className="relative group">
              <img 
                src="/premium_mockup.png" 
                alt="KadeMart Flagship Case Study" 
                className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Realigned ROI Badge (Moved down and slightly in) */}
              <div className="absolute top-[20%] -right-2 sm:-right-10 glass p-5 sm:p-7 rounded-2xl border border-white/10 shadow-glow animate-float z-30 pointer-events-none">
                <p className="text-[10px] uppercase tracking-widest font-bold text-accent">Digital Growth</p>
                <p className="text-4xl sm:text-5xl font-bold text-white mt-1">+148%</p>
                <div className="mt-3 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                   <div className="h-full w-4/5 bg-gradient-brand shadow-[0_0_15px_oklch(0.84_0.17_215)]" />
                </div>
              </div>

              {/* Bottom Centered Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 glass px-10 py-4 rounded-full border border-white/20 shadow-glow whitespace-nowrap z-30 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-widest font-extrabold text-accent flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Live Engineering Result: KadeMart Omni-channel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAND */}
      <div className="relative border-y border-white/5 bg-white/[0.02] py-12 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-10">
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="/logos.png" alt="Client logos" className="h-12 w-auto object-contain" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 w-full">
            <div className="glass p-6 rounded-2xl border border-white/5 italic">
              <p className="text-lg font-medium text-white/90">
                "NovaWeb transformed KadeMart from a local store into an <span className="text-accent underline decoration-accent/30 underline-offset-4">online powerhouse</span>. Our digital sales jumped 140% in 3 months."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 border border-white/10 rounded-full bg-green-500/20 flex items-center justify-center font-bold text-xs text-green-400">KM</div>
                <div>
                  <p className="text-sm font-bold text-white">Project Lead</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">KadeMart Superstore • Web & Mobile</p>
                </div>
              </div>
            </div>
             <div className="glass p-6 rounded-2xl border border-white/5 italic">
              <p className="text-lg font-medium text-white/90">
                "We got <span className="text-accent underline decoration-accent/30 underline-offset-4">3x more bookings</span> for our villas. The automated engineering behind it is simply world-class."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 border border-white/10 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-xs text-blue-400">KP</div>
                <div>
                  <p className="text-sm font-bold text-white">Kasun Perera</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Heritage Villas • Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <section className="px-4 sm:px-6 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our Methodology"
            title={<>Engineered for <span className="text-gradient">precision</span></>}
            subtitle="We follow a rigorous engineering process to ensure your digital foundation is built to scale."
          />
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { 
                step: "01", 
                title: "Blueprint & Discovery", 
                desc: "We analyze your business metrics and architect a custom technical roadmap tailored to your growth goals.",
                icon: Target
              },
              { 
                step: "02", 
                title: "High-Performance Build", 
                desc: "Our engineers craft your site using cutting-edge frameworks, ensuring pixel-perfect design and sub-second load times.",
                icon: Zap
              },
              { 
                step: "03", 
                title: "Optimization & Scale", 
                desc: "We continuously monitor performance and iterate on conversion paths to keep your business ahead of the competition.",
                icon: Workflow
              }
            ].map((p, i) => (
              <div key={p.step} className="relative group">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-brand opacity-0 blur-xl transition-opacity group-hover:opacity-20" />
                <div className="relative glass rounded-3xl p-8 h-full border border-white/5 transition-transform hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-brand shadow-glow flex items-center justify-center">
                      <p.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold opacity-10 font-display">{p.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Services"
          title={<>What we <span className="text-gradient">do best</span></>}
          subtitle="From beautiful websites to smart automation, we deliver complete digital solutions."
        />
        <div className="mt-12 mx-auto max-w-6xl grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="group relative rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-24 relative overflow-hidden">
        <div className="px-4 sm:px-6 mb-16">
          <SectionHeading
            eyebrow="Portfolio"
            title={<>Projects we're <span className="text-gradient">proud of</span></>}
            subtitle="A glimpse of recent work across web, e-commerce, and automation."
          />
        </div>

        {/* Marquee Container */}
        <div className="flex overflow-hidden select-none">
          <div className="flex animate-marquee gap-8 whitespace-nowrap min-w-full items-center py-4">
            {[...PROJECTS, ...PROJECTS].map((p, i) => (
              <div key={`${p.title}-${i}`} className="w-[300px] sm:w-[380px] shrink-0">
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

      {/* FEATURES */}
      <section className="px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Why Novaweb"
          title={<>Built for <span className="text-gradient">performance</span> & growth</>}
        />
        <div className="mt-12 mx-auto max-w-6xl grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl glass p-6 text-center transition-all hover:shadow-cyan hover:-translate-y-1">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                <f.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBand />

      {/* WHATSAPP FAB */}
      <a
        href="https://wa.me/94000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand shadow-glow transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS[number] }) {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-[2rem] glass shadow-card flex flex-col h-[520px] sm:h-[600px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative flex-1 overflow-hidden">
        {/* Base Layer (Sharp & Clear by default) */}
        <div className="absolute inset-0 leading-[0]">
          <img 
            src={project.image} 
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Hover Blur Overlay (Only active on hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 backdrop-blur-md bg-black/40 transition-opacity duration-500 pointer-events-none" />

        {/* Sharp Revealed Layer (Spotlight - Only active on hover) */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none leading-[0]"
          style={{ 
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isHovering ? 1 : 0,
            WebkitMaskImage: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, black 0%, transparent 100%)`
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.19_0.04_265)] via-transparent to-transparent opacity-60" />
        
        {/* Centered Button (Only visible on hover) */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-110">
            View Project <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="p-6 sm:p-8 bg-[oklch(0.16_0.04_265)]/90 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">{project.category}</p>
        <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 whitespace-normal leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
