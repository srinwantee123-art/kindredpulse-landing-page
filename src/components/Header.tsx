import { Link, useLocation } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Heart,
  Menu,
  X,
  Layers,
  BookOpen,
  FileText,
  Users,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { label: "Our Pillars", path: "/pillars" },
    { label: "Transparency", path: "/transparency" },
    { label: "Impact Tracker", path: "/impact-tracker" },
  ];

  const drawerSections = [
    {
      title: "All Giving Options",
      icon: Layers,
      items: [
        {
          label: "Active Campaigns Overview",
          desc: "Explore our 6 core ground causes",
          path: "/pillars",
        },
        {
          label: "Direct Micro-Donations",
          desc: "Give in seconds with full allocation",
          path: "/donate",
        },
        {
          label: "Monthly Pulse Membership",
          desc: "Sponsor continuous field supplies",
          path: "/donate",
        },
      ],
    },
    {
      title: "Success Stories",
      icon: BookOpen,
      items: [
        {
          label: "Regional Impact Ledger",
          desc: "Real-time field distribution updates",
          path: "/impact-tracker",
        },
        {
          label: "Beneficiary Testimonials",
          desc: "Direct voices from ground communities",
          path: "/donate",
        },
      ],
    },
    {
      title: "Financial Audit Logs",
      icon: FileText,
      items: [
        {
          label: "92% Direct Allocation Model",
          desc: "Full breakdown of program spending",
          path: "/transparency",
        },
        {
          label: "Quarterly Public Reports",
          desc: "Verified 501(c)(3) IRS Form 990 filings",
          path: "/transparency",
        },
      ],
    },
    {
      title: "Get Involved",
      icon: Users,
      items: [
        {
          label: "Volunteer Programs",
          desc: "Join ground logistics & digital ops",
          path: "/pillars",
        },
        {
          label: "Corporate Matching",
          desc: "Double your impact with company matching",
          path: "/donate",
        },
        {
          label: "Partnership Requests",
          desc: "Collaborate with field NGOs & institutions",
          path: "/transparency",
        },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 flex items-center gap-3 justify-center px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
        {/* Standalone All Menu Button outside Nav */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open directory menu"
          className="pointer-events-auto inline-flex h-14 items-center gap-2 rounded-full border border-border/80 bg-background/85 px-4 sm:px-5 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] backdrop-blur-xl transition-all hover:bg-card hover:border-primary/50 hover:scale-105 focus:outline-none shrink-0"
        >
          <Menu className="h-4 w-4 text-foreground" />
          <span>All</span>
        </button>

        {/* Main Nav Bar */}
        <nav className="pointer-events-auto flex h-14 w-full items-center justify-between rounded-full border border-border/80 bg-background/85 px-4 sm:px-8 shadow-[var(--shadow-card)] backdrop-blur-xl transition-all duration-300">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-hero text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
              <Activity className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-base font-semibold tracking-tight text-foreground">
              KindredPulse
            </span>
          </Link>

          {/* Desktop Nav Items */}
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

          {/* Far Right CTA */}
          <Link
            to="/donate"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-accent px-4 py-2 text-xs sm:text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-all hover:scale-105 hover:shadow-lg"
          >
            <Heart className="h-3.5 w-3.5 fill-current" />
            <span>Donate Now</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </header>

      {/* Floating Drawer Backdrop */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Floating Side Drawer Panel */}
      <aside
        className={`fixed left-0 top-0 bottom-0 z-50 w-80 sm:w-96 max-w-[85vw] glass-card border-r border-white/60 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-300 flex flex-col justify-between overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-border/70 pb-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-hero text-primary-foreground shadow-sm">
                <Activity className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                KindredPulse Directory
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Directory Sections */}
          <div className="mt-6 space-y-6">
            {drawerSections.map((sec) => (
              <div key={sec.title}>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <sec.icon className="h-4 w-4 text-primary" />
                  {sec.title}
                </div>
                <div className="mt-2.5 space-y-1">
                  {sec.items.map((it) => (
                    <Link
                      key={it.label}
                      to={it.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-start justify-between rounded-xl p-2.5 transition-colors hover:bg-card/90 hover:shadow-xs"
                    >
                      <div>
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {it.label}
                        </div>
                        <div className="text-xs text-muted-foreground">{it.desc}</div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 mt-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="mt-8 border-t border-border/70 pt-5 space-y-3">
          <Link
            to="/donate"
            onClick={() => setIsMenuOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:scale-[1.02]"
          >
            <Heart className="h-4 w-4 fill-current" />
            <span>Donate to Active Field Projects</span>
          </Link>
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" /> Verified 501(c)(3) Non-Profit
          </div>
        </div>
      </aside>
    </>
  );
}
