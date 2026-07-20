import { Link, useLocation } from "@tanstack/react-router";
import { Activity, ArrowRight, Heart } from "lucide-react";

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "Our Pillars", path: "/pillars" },
    { label: "Transparency", path: "/transparency" },
    { label: "Impact Tracker", path: "/impact-tracker" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-6">
      <nav className="flex h-14 w-full max-w-5xl items-center justify-between rounded-full border border-border/80 bg-background/85 px-4 sm:px-6 shadow-[var(--shadow-card)] backdrop-blur-xl transition-all duration-300">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gradient-hero)] text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            <Activity className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-base font-semibold tracking-tight text-foreground">
            KindredPulse
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          to="/donate"
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-accent)] px-4 py-2 text-xs sm:text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-all hover:scale-105 hover:shadow-lg"
        >
          <Heart className="h-3.5 w-3.5 fill-current" />
          <span>Donate Now</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </nav>
    </header>
  );
}
