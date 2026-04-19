import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  MessageSquare, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Cpu, 
  BarChart3, 
  Users,
  Timer
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/services/whatsapp")({
  head: () => ({
    meta: [
      { title: "WhatsApp Automation Services — Novaweb" },
      { name: "description", content: "Scale your business with intelligent WhatsApp bots and automated customer engagement." },
    ],
  }),
  component: WhatsAppServicePage,
});

const FEATURES = [
  {
    icon: Timer,
    title: "24/7 Instant Responses",
    description: "Never keep a customer waiting. Our bots provide sub-second responses to common inquiries at any time of day."
  },
  {
    icon: Cpu,
    title: "Intelligent Routing",
    description: "Smart lead qualification and routing to the right department or human agent when things get complex."
  },
  {
    icon: BarChart3,
    title: "Order Tracking",
    description: "Full integration with your e-commerce inventory. Let customers check order status directly in chat."
  },
  {
    icon: Shield,
    title: "Official API Access",
    description: "Built on the official WhatsApp Business API. Safe, secure, and compliant with meta policies."
  }
];

const USE_CASES = [
  {
    title: "E-commerce Stores",
    items: ["Automated order confirmations", "Abandoned cart recovery", "Product availability checks", "Customer feedback loops"]
  },
  {
    title: "Service Providers",
    items: ["Booking appointments", "Automated reminders", "Service status updates", "Lead qualification"]
  }
];

function WhatsAppServicePage() {
  return (
    <div className="relative pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-brand opacity-10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-gradient-brand shadow-glow mb-8"
          >
            <MessageSquare className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold leading-tight"
          >
            WhatsApp <span className="text-gradient">Automation</span> <br />
            for Modern Business
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Stop losing leads to slow response times. We build intelligent conversational systems that handle 80% of your customer interactions automatically.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-105 transition-transform">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/94718850885" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-semibold hover:text-accent transition-colors">
               See Live Demo <MessageCircle className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] border border-white/5"
              >
                <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <f.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-24 bg-white/[0.01]">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="The Workflow"
            title={<>A simple <span className="text-gradient">3-step integration</span></>}
            subtitle="We handle the technical complexity so you can focus on your business."
          />
          
          <div className="mt-16 grid gap-12 md:grid-cols-3 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block" />
            
            {[
              { step: "01", title: "API Configuration", desc: "We set up your official WhatsApp Business API account and link it to your professional number." },
              { step: "02", title: "Flow Engineering", desc: "Our team designs custom conversational flows that guide customers from inquiry to conversion." },
              { step: "03", title: "System Sync", desc: "We connect the bot to your existing inventory, CRM, or booking software for real-time data sync." },
            ].map((item, i) => (
              <div key={item.step} className="relative z-10 space-y-4 text-center px-6">
                <div className="mx-auto h-16 w-16 rounded-full bg-[oklch(0.16_0.04_265)] border border-accent/20 flex items-center justify-center text-xl font-bold text-accent shadow-glow">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                   {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section: Manual vs Automated */}
      <section className="px-4 sm:px-6 py-12 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="glass rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* Manual Side */}
              <div className="p-10 border-b md:border-b-0 md:border-r border-white/5 bg-white/[0.01]">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 font-black">!</span>
                  Traditional Manual Engagement
                </h3>
                <ul className="space-y-6">
                  {[
                    "Missed leads during non-business hours",
                    "Response times measured in minutes or hours",
                    "Inconsistent tone and human data entry errors",
                    "Difficulty scaling during high-traffic periods",
                  ].map((text) => (
                    <li key={text} className="flex gap-4 items-start text-sm text-white/50">
                      <div className="h-5 w-5 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-0.5">×</div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Automated Side */}
              <div className="p-10 bg-gradient-to-br from-accent/5 to-transparent">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center shadow-glow"><Zap className="h-4 w-4 text-accent fill-accent" /></span>
                  Novaweb AI Automation
                </h3>
                <ul className="space-y-6">
                  {[
                    "Instant 24/7 engagement with global customers",
                    "Zero-second wait times for standard queries",
                    "Reliable, data-synced accuracy every time",
                    "Handles unlimited concurrent chats effortlessly",
                  ].map((text) => (
                    <li key={text} className="flex gap-4 items-start text-sm text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Snippet specific to WhatsApp */}
      <section className="px-4 sm:px-6 py-24">
        <div className="mx-auto max-w-3xl">
           <SectionHeading
            eyebrow="Quick Answers"
            title={<>Frequently Asked <span className="text-gradient">Questions</span></>}
            subtitle="Common inquiries regarding our WhatsApp solutions."
          />
          <div className="mt-16 space-y-4">
            {[
              { q: "Is it safe and compliant with WhatsApp policies?", a: "Yes. We strictly use the official WhatsApp Business Platform (API) provided by Meta. This ensures your number is safe from bans and compliant with global privacy standards." },
              { q: "Do I need to keep my phone online?", a: "No. Unlike browser-based plugins, our cloud-hosted API solution runs 24/7 independently of your physical device." },
              { q: "Can I still reply to customers manually?", a: "Absolutely. You can use our integrated dashboard or your CRM to jump into conversations whenever a human touch is needed." },
            ].map((faq, i) => (
              <div key={i} className="glass rounded-2xl border border-white/5 p-6 hover:border-accent/10 transition-colors">
                <h4 className="text-sm font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
