import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowLeft, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Bell, 
  LayoutDashboard, 
  ShoppingCart, 
  CheckCircle2,
  Globe,
  Database
} from "lucide-react";
import React from "react";

export const Route = createFileRoute("/portfolio/kademart")({
  head: () => ({
    meta: [
      { title: "KadeMart Case Study — Novaweb" },
      { name: "description", content: "How Novaweb engineered a high-performance grocery delivery ecosystem with Flutter and Firebase." },
    ],
  }),
  component: KademartCaseStudy,
});

function KademartCaseStudy() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2">
             <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Case Study: KadeMart</span>
          </div>
          <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-accent hover:underline">
            Start a Project
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-brand opacity-10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
            <ShoppingCart className="h-3 w-3" /> Hyper-local E-commerce
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Dominating the <span className="text-gradient">Local Grocery</span> Market.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            How we transformed a traditional retail concept into a high-performance digital powerhouse using Flutter and a serverless architecture.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-4 border-white/5">
              <p className="text-[10px] uppercase text-white/40 font-bold mb-1">Framework</p>
              <p className="text-sm font-bold text-white">Flutter 3.x</p>
            </div>
            <div className="glass rounded-2xl p-4 border-white/5">
              <p className="text-[10px] uppercase text-white/40 font-bold mb-1">Backend</p>
              <p className="text-sm font-bold text-white">Firebase</p>
            </div>
            <div className="glass rounded-2xl p-4 border-white/5">
              <p className="text-[10px] uppercase text-white/40 font-bold mb-1">Runtime</p>
              <p className="text-sm font-bold text-white">Serverless</p>
            </div>
            <div className="glass rounded-2xl p-4 border-white/5">
              <p className="text-[10px] uppercase text-white/40 font-bold mb-1">Performance</p>
              <p className="text-sm font-bold text-white">99.9% Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight mb-6">The Challenge</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Local grocery retail in Sri Lanka often struggles with manual order processing, non-existent inventory tracking, and slow response times. The goal for KadeMart was to build a solution that was:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <span>Capable of handling thousands of products with zero lag.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <span>Real-time delivery tracking for absolute customer transparency.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <span>Fully serverless to eliminate infrastructure maintenance costs.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full" />
            <div className="relative glass rounded-[2.5rem] p-4 border-white/10 overflow-hidden">
               <img src="/portfolio/kademart/app-home.png" alt="KadeMart App Home" className="rounded-[2rem] w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Brief / Key Features */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">Comprehensive <span className="text-gradient">Feature Set</span></h2>
            <p className="mt-4 text-muted-foreground">A complete engineered solution from front to back.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl border-white/5 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">1. User Experience & Shopping</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="h-3 w-3 text-accent" /></span>
                  <span className="text-sm text-muted-foreground"><strong className="text-white/90">Dynamic Home Screen:</strong> Structured categories, product carousels, and search.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="h-3 w-3 text-accent" /></span>
                  <span className="text-sm text-muted-foreground"><strong className="text-white/90">Smart Search:</strong> Quick product discovery across dozens of categories.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="h-3 w-3 text-accent" /></span>
                  <span className="text-sm text-muted-foreground"><strong className="text-white/90">Shopping Cart & Wishlist:</strong> Real-time cart management and 'Save for Later' wishlist.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="h-3 w-3 text-accent" /></span>
                  <span className="text-sm text-muted-foreground"><strong className="text-white/90">Profile Management:</strong> Secure user profiles with address and contact info sync.</span>
                </li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border-white/5 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">2. Secure Authentication</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="h-3 w-3 text-accent" /></span>
                  <span className="text-sm text-muted-foreground"><strong className="text-white/90">Multi-method Support:</strong> Email/Password and Google Sign-in integration.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="h-3 w-3 text-accent" /></span>
                  <span className="text-sm text-muted-foreground"><strong className="text-white/90">Token Management:</strong> Secure serverless token management for device authentication.</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4 pt-4 border-t border-white/5">3. Advanced Delivery System</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="h-3 w-3 text-accent" /></span>
                  <span className="text-sm text-muted-foreground"><strong className="text-white/90">Live Tracking:</strong> Maps integration for real-time delivery visualization.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="h-3 w-3 text-accent" /></span>
                  <span className="text-sm text-muted-foreground"><strong className="text-white/90">Status Updates:</strong> Preparing, Out for Delivery, Delivered, and Cancelled states.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="h-3 w-3 text-accent" /></span>
                  <span className="text-sm text-muted-foreground"><strong className="text-white/90">Instant Alerts:</strong> Background & Foreground push notifications.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Innovation */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">Technical <span className="text-gradient">Advantage</span></h2>
            <p className="mt-4 text-muted-foreground">Engineering a better way to shop.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 shadow-glow">
                <Bell className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">FCM v1 Integration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">"Native secure Google IAM OAuth 2.0 flow"</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Implemented the latest secure messaging protocol, removing the need for external backend servers for push notifications.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 shadow-glow">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Live Fleet Tracking</h3>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">"Real-time Google Maps SDK"</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Integrated Geolocator for precise distance tracking and live delivery visualization on the map.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 shadow-glow">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero-Lag Scaling</h3>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">"Firebase & Riverpod State"</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Optimized Firestore queries and cached images ensure a smooth 60fps experience even with high product counts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Experience */}
      <section className="py-24 px-4 bg-[oklch(0.18_0.04_265)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative h-[500px] w-full flex items-center justify-center transform-3d perspective-2000">
                {/* Back App Frame */}
                <div className="absolute left-[5%] top-[15%] w-[55%] glass rounded-[2rem] border-4 sm:border-8 border-[oklch(0.25_0.04_265)] shadow-2xl overflow-hidden transform -rotate-6 opacity-60 hover:opacity-100 hover:-rotate-3 hover:-translate-y-4 transition-all duration-700 z-0">
                   <div className="absolute top-0 inset-x-0 h-4 sm:h-6 bg-[oklch(0.25_0.04_265)] z-20 flex justify-center"><div className="w-16 sm:w-24 h-full bg-black/40 rounded-b-xl"></div></div>
                   <img src="/portfolio/kademart/admin-products.png" alt="Admin Products" className="w-full h-full object-cover" />
                </div>
                {/* Front App Frame */}
                <div className="absolute right-[5%] top-[5%] w-[60%] glass rounded-[2rem] border-4 sm:border-8 border-[oklch(0.12_0.04_265)] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden transform rotate-6 hover:rotate-2 hover:-translate-y-6 transition-all duration-700 z-10">
                   <div className="absolute top-0 inset-x-0 h-4 sm:h-6 bg-[oklch(0.12_0.04_265)] z-20 flex justify-center"><div className="w-16 sm:w-24 h-full bg-black/40 rounded-b-xl"></div></div>
                   <img src="/portfolio/kademart/admin-orders.png" alt="Admin Orders" className="w-full h-full object-cover" />
                </div>
             </div>
             <div className="order-1 md:order-2">
                <div className="inline-flex h-12 w-12 items-center justify-center bg-accent/10 rounded-2xl border border-accent/20 mb-6">
                   <LayoutDashboard className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight mb-6">Enterprise Controls</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The system includes a robust Admin Dashboard that allows business owners to manage inventory, fulfill orders, and track stock levels in real-time.
                </p>
                <div className="space-y-4">
                   <div className="flex gap-4 items-center">
                      <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center"><CheckCircle2 className="h-4 w-4 text-green-500" /></div>
                      <p className="text-sm text-white/80 font-medium">Add/Edit/Delete products with direct image upload</p>
                   </div>
                   <div className="flex gap-4 items-center">
                      <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center"><CheckCircle2 className="h-4 w-4 text-green-500" /></div>
                      <p className="text-sm text-white/80 font-medium">Instant order status updates (Preparing, Out for Delivery)</p>
                   </div>
                   <div className="flex gap-4 items-center">
                      <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center"><CheckCircle2 className="h-4 w-4 text-green-500" /></div>
                      <p className="text-sm text-white/80 font-medium">FCM test panel for instant manual alerts</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Results / Business Impact */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white tracking-tighter mb-12">The <span className="text-gradient">Business Impact</span></h2>
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
             <div>
                <p className="text-5xl font-black text-white mb-2 tracking-tighter">99.9%</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold font-display">Uptime Guarantee</p>
             </div>
             <div>
                <p className="text-5xl font-black text-white mb-2 tracking-tighter">Zero</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold font-display">Server Maintenance</p>
             </div>
             <div>
                <p className="text-5xl font-black text-white mb-2 tracking-tighter">RealTime</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold font-display">Order Processing</p>
             </div>
          </div>
          <div className="glass p-10 rounded-[3rem] border-accent/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe className="h-20 w-20 text-accent" />
             </div>
             <p className="text-lg text-white/90 leading-relaxed italic relative z-10">
               "KadeMart is a production-ready solution that transforms traditional retail into a digital powerhouse. It reduces manual order processing time, increases customer retention through instant engagement, and provides data-driven insights through centralized inventory management."
             </p>
          </div>
        </div>
      </section>

      {/* Cta */}
      <section className="py-20 px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Need a similar solution for your business?</h3>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-10 py-5 text-sm font-black uppercase tracking-widest text-white shadow-glow hover:scale-105 active:scale-95 transition-all"
          >
            Start Your Engineering Project
          </Link>
      </section>
    </div>
  );
}
