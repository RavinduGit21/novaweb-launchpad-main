import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center" aria-label="Novaweb home">
              <Logo className="h-14 w-auto drop-shadow-[0_0_16px_oklch(0.84_0.17_215/0.35)]" />
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              We build modern websites and automation solutions that help businesses
              grow online — fast, secure, and conversion-ready.
            </p>
            <a
              href="mailto:contact@novaweb.lk"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> contact@novaweb.lk
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Follow</h4>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass transition-transform hover:scale-110 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Novaweb. All rights reserved.</p>
          <p>Built with passion in Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
