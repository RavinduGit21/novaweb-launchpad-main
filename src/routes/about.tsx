import { createFileRoute } from "@tanstack/react-router";
import { Rocket, Target, Heart } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Novaweb" },
      { name: "description", content: "Novaweb helps businesses grow online with modern websites and automation." },
      { property: "og:title", content: "About — Novaweb" },
      { property: "og:description", content: "Novaweb helps businesses grow online with modern websites and automation." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Rocket, title: "Move fast", text: "We ship polished work quickly without cutting corners." },
  { icon: Target, title: "Outcome-driven", text: "Every decision is tied to measurable business growth." },
  { icon: Heart, title: "Partner mindset", text: "We treat your business like our own — long-term." },
];

function AboutPage() {
  return (
    <>
      <section className="px-4 sm:px-6 pt-6 pb-16">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase">
              About Novaweb
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1]">
              Helping businesses <span className="text-gradient">thrive online</span>
            </h1>
            <p className="mt-5 text-muted-foreground">
              Novaweb is a small, senior team of designers, developers, and automation experts.
              We craft digital experiences that look stunning, perform flawlessly, and convert
              visitors into customers.
            </p>
            <p className="mt-4 text-muted-foreground">
              From local startups to growing brands, we help our clients move faster — combining
              modern web technology with smart automation that saves time and grows revenue.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "50+", v: "Projects shipped" },
                { k: "30+", v: "Happy clients" },
                { k: "5★", v: "Average rating" },
              ].map((stat) => (
                <div key={stat.v} className="rounded-2xl glass p-4 text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-brand opacity-30 blur-2xl" />
            <div className="relative aspect-square rounded-3xl glass p-3 shadow-card">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.84_0.17_215)] p-8 flex flex-col justify-end">
                <div className="rounded-2xl bg-[oklch(0.16_0.04_265)]/80 backdrop-blur-md p-6">
                  <div className="text-sm text-accent">"</div>
                  <p className="mt-2 text-base font-medium">
                    Novaweb completely transformed our online presence — sales doubled in three months.
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">— Sarah M., Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16">
        <SectionHeading
          eyebrow="Our values"
          title={<>What we <span className="text-gradient">stand for</span></>}
        />
        <div className="mt-12 mx-auto max-w-5xl grid gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-cyan">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <v.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
