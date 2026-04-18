import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CtaBand() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl glass p-10 sm:p-14 text-center shadow-card">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <h3 className="relative text-3xl sm:text-4xl font-bold">
            Ready to <span className="text-gradient">grow your business</span>?
          </h3>
          <p className="relative mt-3 text-muted-foreground max-w-xl mx-auto">
            Let's build something your customers will love. Talk to us today.
          </p>
          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/94718850885"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> Contact Us on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:text-accent"
            >
              Send a Message <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
