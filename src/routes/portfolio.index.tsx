import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { PROJECTS } from "@/data/site";

export const Route = createFileRoute("/portfolio/")({
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

        <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-30">
          {project.slug ? (
            <Link
              to={`/portfolio/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow hover:scale-110 transition-transform cursor-pointer"
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
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
