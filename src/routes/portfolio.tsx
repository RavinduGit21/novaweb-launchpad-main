import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { PROJECTS } from "@/data/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Novaweb" },
      { name: "description", content: "Selected web, e-commerce and automation projects by Novaweb." },
      { property: "og:title", content: "Portfolio — Novaweb" },
      { property: "og:description", content: "Selected web, e-commerce and automation projects by Novaweb." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <section className="px-4 sm:px-6 pt-6 pb-12">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Selected <span className="text-gradient">work</span></>}
          subtitle="A curated selection of projects we've shipped for ambitious teams."
        />
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <PortfolioCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function PortfolioCard({ project }: { project: typeof PROJECTS[number] }) {
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
      className="group relative overflow-hidden rounded-[2rem] glass shadow-card flex flex-col h-[520px] sm:h-[600px] transition-transform hover:-translate-y-2"
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
            View Case Study <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="p-6 sm:p-8 bg-[oklch(0.16_0.04_265)]/90 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">{project.category}</p>
        <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
