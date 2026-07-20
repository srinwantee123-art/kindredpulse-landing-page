import { Link } from "@tanstack/react-router";
import { Activity, ShieldCheck, BadgeCheck, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground border-t border-primary-soft/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-accent)] text-accent-foreground">
                <Activity className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">KindredPulse</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              A registered 501(c)(3) non-profit organization. EIN 84-2917430. 92% of every
              contribution goes directly to verified field operations with radical transparency.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Quick Navigation
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/pillars"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Our Pillars
                </Link>
              </li>
              <li>
                <Link
                  to="/transparency"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Transparency
                </Link>
              </li>
              <li>
                <Link
                  to="/impact-tracker"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Impact Tracker
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Legal & Governance
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/transparency"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Annual Report 2025
                </Link>
              </li>
              <li>
                <Link
                  to="/transparency"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  IRS Form 990 Filing
                </Link>
              </li>
              <li>
                <Link
                  to="/transparency"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  501(c)(3) Letter
                </Link>
              </li>
              <li>
                <Link
                  to="/transparency"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Whistleblower Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Join the Pulse
            </div>
            <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
              Subscribe to monthly unedited field logs and verified financial reports.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur focus-within:border-accent"
            >
              <input
                type="email"
                placeholder="donor@kindredpulse.org"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--gradient-accent)] px-4 py-2 text-xs font-bold text-accent-foreground transition-transform hover:scale-105"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} KindredPulse Foundation. All rights reserved.
            Tax-Deductible 501(c)(3).
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent" /> Charity Navigator 100%
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-accent" /> GuideStar Platinum
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
