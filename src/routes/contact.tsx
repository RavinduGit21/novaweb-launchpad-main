import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Novaweb" },
      { name: "description", content: "Get in touch with Novaweb — let's build something great together." },
      { property: "og:title", content: "Contact — Novaweb" },
      { property: "og:description", content: "Get in touch with Novaweb — let's build something great together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="px-4 sm:px-6 pt-6 pb-12">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">build together</span></>}
          subtitle="Tell us about your project — we usually reply within a few hours."
        />
      </section>

      <section className="px-4 sm:px-6 pb-24">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <ContactInfo icon={Mail} title="Email us" value="contact@novaweb.lk" href="mailto:contact@novaweb.lk" />
            <ContactInfo icon={MessageCircle} title="WhatsApp" value="Chat with our team instantly" href="https://wa.me/94000000000" accent />
            <ContactInfo icon={MapPin} title="Based in" value="Sri Lanka — working worldwide" />
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-3xl glass p-6 sm:p-8 shadow-card">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
                >
                  {sent ? <><Check className="h-4 w-4" /> Sent!</> : <>Send Message <Send className="h-4 w-4" /></>}
                </button>
                <a
                  href="https://wa.me/94000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp instead
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        placeholder={label}
      />
    </div>
  );
}

function ContactInfo({
  icon: Icon, title, value, href, accent,
}: { icon: typeof Mail; title: string; value: string; href?: string; accent?: boolean }) {
  const content = (
    <div className={`rounded-2xl glass p-5 transition-all ${href ? "hover:-translate-y-1 hover:shadow-glow" : ""}`}>
      <div className="flex items-center gap-3">
        <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accent ? "bg-gradient-brand shadow-glow" : "bg-white/5"}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
          <p className="text-sm font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a> : content;
}
