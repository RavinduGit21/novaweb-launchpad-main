import { Globe, ShoppingCart, MessageSquare, Workflow, Zap, Smartphone, Search, Shield, LayoutDashboard, TrendingUp, Paintbrush, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  slug?: string;
};

export const SERVICES: Service[] = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, lightning-fast websites built with modern frameworks and a polished design system.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Conversion-focused online stores with secure checkout, payments, and inventory built-in.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS & Dashboards",
    description: "Complex web applications and data dashboards engineered for performance and scale.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Automate customer support, orders, and follow-ups directly through WhatsApp Business.",
    slug: "whatsapp",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Connect your tools, eliminate repetitive work, and scale operations with smart workflows.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    description: "Technical SEO, Core Web Vitals optimization, and speed tuning for maximum search visibility.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "World-class interface design with Figma prototyping before a single line of code is written.",
  },
];

export type Feature = { icon: LucideIcon; title: string; description: string };

export const FEATURES: Feature[] = [
  { icon: Zap, title: "Fast Performance", description: "Websites that load under 2 seconds for maximum retention." },
  { icon: Smartphone, title: "Built for Leads", description: "Design engineered to turn visitors into active inquiries." },
  { icon: Search, title: "Smart Automation", description: "Automated booking & lead routing included (your advantage)." },
  { icon: Shield, title: "Reliable & Secure", description: "Enterprise-grade security with 99.9% uptime guaranteed." },
];

export type Project = {
  title: string;
  category: string;
  gradient: string;
  description: string;
  image: string;
  slug?: string;
  liveUrl?: string;
  isBot?: boolean;
};

export const PROJECTS: Project[] = [
  { title: "EduWave Learning Portal", category: "EdTech & AI", description: "A next-generation educational platform featuring AI-personalized learning paths, integrated progress tracking, and professional Sinhala localization.", gradient: "from-blue-600 to-violet-600", image: "/portfolio/eduwave.png", liveUrl: "https://edu-wave-neon.vercel.app/" },
  { title: "Project Management System", category: "Enterprise Solutions", description: "A comprehensive project management system designed for real-time organizational productivity and operations tracking.", gradient: "from-blue-500 to-indigo-600", image: "/portfolio/starline.png", liveUrl: "https://www.nebulix.online/" },
  { title: "Westnahira Cellularz", category: "Tech & E-commerce", description: "Premium resale platform for certified pre-owned Apple devices with real-time inventory tracking.", gradient: "from-blue-600 to-indigo-400", image: "/portfolio/westnahira.png", liveUrl: "https://westnahira-cellularz.vercel.app/" },
  { title: "Ceylon Journeys", category: "Travel & Hospitality", description: "An immersive travel platform featuring automated tour booking and bespoke itinerary planning.", gradient: "from-orange-500 to-amber-400", image: "/portfolio/ceylonjourneys.png", liveUrl: "https://ceylon-journies.vercel.app/" },
  { title: "KadeMart Superstore", category: "Hyper-local E-commerce", description: "A high-performance grocery delivery platform with real-time inventory and integrated logistics.", gradient: "from-green-500 to-emerald-400", image: "/portfolio/kademart.png", slug: "kademart", liveUrl: "https://kade-mart-web.vercel.app/" },
  { title: "Ceylon Heritage Villas", category: "Luxury Hospitality", description: "Bespoke booking platform for a collection of boutique villas in Galle.", gradient: "from-blue-500 to-cyan-400", image: "/portfolio/villa.png", liveUrl: "https://heritagevillas.novaweb.io" },
  { title: "Maison Aurelia Luxury Gems", category: "High-End E-commerce", description: "A premium digital boutique for rare gemstones and handcrafted jewelry, featuring elegant gold aesthetics and world-class luxury UX.", gradient: "from-amber-200 to-yellow-600", image: "/portfolio/aurelia.png", liveUrl: "https://aurelia-maison.vercel.app/" },
];

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
  cta: string;
};

export const PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: "Rs. 20,000",
    description: "Perfect for small businesses and personal brands just getting started online.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1 month support",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "Rs. 85,000",
    description: "Ideal for growing businesses that need a high-performance site with automation.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "WhatsApp automation",
      "E-commerce ready",
      "Advanced SEO",
      "3 months support",
    ],
    highlight: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For ambitious brands that need a fully custom digital solution at scale.",
    features: [
      "Unlimited pages",
      "SaaS / Dashboard builds",
      "Full business automation",
      "Dedicated project manager",
      "Priority 24/7 support",
      "Ongoing retainer available",
    ],
    highlight: false,
    cta: "Let's Talk",
  },
];
