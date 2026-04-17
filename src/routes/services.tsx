import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Novaweb" },
      { name: "description", content: "Web development, e-commerce, WhatsApp & business automation services by Novaweb." },
      { property: "og:title", content: "Services — Novaweb" },
      { property: "og:description", content: "Web development, e-commerce, WhatsApp & business automation services by Novaweb." },
    ],
  }),
  component: ServicesPage,
});

const HIGHLIGHTS: Record<string, string[]> = {
  "Website Development": ["Custom React Builds", "Sub-second Performance", "SEO Engineering", "Headless CMS"],
  "E-commerce Solutions": ["LKR Payment Priority", "Inventory Sync", "Conversion Analytics", "Secure Checkout"],
  "WhatsApp Automation": ["Custom Bot Flows", "Order Management", "CRM Integration", "Lead Generation"],
  "Business Automation": ["Workflow Architecture", "Third-party APIs", "Real-time Reporting", "99.9% Reliability"],
};

function ServicesPage() {
  return (
    <>
      <section className="px-4 sm:px-6 pt-6 pb-16">
        <SectionHeading
          eyebrow="Services"
          title={<>Solutions that <span className="text-gradient">drive results</span></>}
          subtitle="Everything you need to launch, grow, and automate your business online."
        />
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.title} className="group relative rounded-3xl glass p-8 transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {(HIGHLIGHTS[s.title] || []).map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent" /> {h}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Discuss your project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
