import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  UtensilsCrossed,
  HeartPulse,
  LifeBuoy,
  Sparkles,
  PawPrint,
  ShieldCheck,
  BadgeCheck,
  Activity,
  CreditCard,
  Apple,
  Bitcoin,
  Wallet,
  Check,
} from "lucide-react";
import heroImage from "@/assets/hero-impact.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const PILLARS = [
  {
    icon: BookOpen,
    title: "Education for Children",
    body: "Sponsoring tuition, learning materials, and digital literacy. We put futures in the hands of children written off by circumstance.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Security",
    body: "Nutritional support and sustainable supply chains for families in need. Beyond meals — we fund the local farmers who grow them.",
  },
  {
    icon: HeartPulse,
    title: "Medical Assistance",
    body: "Emergency surgeries, mobile health clinics, and critical medicine distribution. Care reaches the last mile, not just the last resort.",
  },
  {
    icon: LifeBuoy,
    title: "Disaster Relief",
    body: "Immediate on-the-ground aid, clean water, and temporary shelter deployment. Response teams mobilize within 72 hours of any crisis.",
  },
  {
    icon: Sparkles,
    title: "Women Empowerment",
    body: "Vocational training, business grants, and leadership mentorship. Investing in women multiplies the return across entire communities.",
  },
  {
    icon: PawPrint,
    title: "Animal Welfare",
    body: "Rescue operations, street animal medical care, and sanctuary funding. Compassion extended to every heartbeat we share the planet with.",
  },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function ImpactCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(true),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, active);
  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
      <div className="text-4xl font-bold tracking-tight text-primary-deep sm:text-5xl lg:text-6xl">
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function Landing() {
  const [amount, setAmount] = useState<string>("50");
  const [custom, setCustom] = useState("");
  const [cadence, setCadence] = useState<"monthly" | "onetime">("monthly");

  const amounts = ["25", "50", "100"];

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-hero)] text-primary-foreground">
              <Activity className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-semibold tracking-tight">KindredPulse</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#pillars" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Our Pillars</a>
            <a href="#transparency" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Transparency</a>
            <a href="#impact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Impact Tracker</a>
          </div>
          <a
            href="#donate"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gradient-accent)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
          >
            Donate Now <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_10%_0%,color-mix(in_oklab,var(--primary-soft)_60%,transparent),transparent),radial-gradient(40%_40%_at_100%_20%,color-mix(in_oklab,var(--accent)_20%,transparent),transparent)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Verified 501(c)(3) · Audited Quarterly
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Transform intent<br />
              into <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">measurable impact.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              KindredPulse routes 92¢ of every dollar directly to the field. Choose a cause, watch the impact land, and track every step with radical transparency.
            </p>

            {/* Quick donate chips */}
            <div className="mt-8 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:p-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Give in seconds
              </div>
              <div className="grid grid-cols-4 gap-2">
                {amounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => { setAmount(a); setCustom(""); }}
                    className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-all ${
                      amount === a && !custom
                        ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
                        : "border-border bg-background text-foreground hover:border-primary/50"
                    }`}
                  >
                    ${a}
                  </button>
                ))}
                <input
                  inputMode="numeric"
                  placeholder="Custom"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value.replace(/[^\d]/g, "")); setAmount(""); }}
                  className="w-full rounded-xl border border-border bg-background px-3 py-3 text-center text-sm font-semibold placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <a
                href="#donate"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--gradient-accent)] px-4 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5"
              >
                Donate ${custom || amount || "0"} now <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Charity Navigator 100%</span>
              <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" /> 98% Funds Transferred</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> GuideStar Platinum</span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
              <img
                src={heroImage}
                alt="A child learning alongside a rescued dog in a lush forest — dual imagery of human and planetary resilience"
                width={1200}
                height={1400}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/30 to-transparent p-6 pt-24">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <div className="text-xs font-medium uppercase tracking-widest text-white/80">Live · Right now</div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    A donor in Berlin funded 42 school meals in Nairobi.
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 -top-3 hidden rotate-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)] md:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Impact this month</div>
              <div className="text-2xl font-bold text-primary-deep">+128,402 lives</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Six Pillars</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Six causes. One relentless standard.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Every pillar is run by an accountable field team with published outcomes — not promises.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <a
                key={title}
                href="#donate"
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--gradient-accent)] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary-deep transition-colors group-hover:bg-[var(--gradient-hero)] group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Support this cause
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT TRACKER */}
      <section id="impact" className="relative overflow-hidden bg-[var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Live Impact Tracker</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Real numbers.<br />Updated in real time.
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/80">
                Every metric below streams directly from our field partners' verified logs — no marketing, no rounding.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
                    July distribution goal
                  </div>
                  <div className="mt-1 text-2xl font-bold">$1,842,000 / $2,500,000</div>
                </div>
                <div className="text-3xl font-bold text-accent">73%</div>
              </div>
              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/15">
                <div className="h-full rounded-full bg-[var(--gradient-accent)] shadow-[var(--shadow-accent)]" style={{ width: "73%" }} />
              </div>
              <div className="mt-3 text-xs text-primary-foreground/70">Refreshed 42 seconds ago</div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ImpactCounter value={2841029} label="Lives Impacted" />
            <ImpactCounter value={14620584} label="Meals Delivered" />
            <ImpactCounter value={87412} label="Animals Rescued" />
          </div>
        </div>
      </section>

      {/* WHERE DOES YOUR MONEY GO */}
      <section id="transparency" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Radical Transparency</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Where does your money go?
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              We publish a live audit of every dollar. No inflated overhead. No hidden channels. Just the honest split.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { pct: 92, label: "Direct Field Programs", desc: "To the people, projects and places that need it.", color: "bg-primary" },
                { pct: 5, label: "Logistics & Delivery", desc: "Getting aid to the last mile — securely.", color: "bg-accent" },
                { pct: 3, label: "Administration", desc: "Audit, compliance, and secure infrastructure.", color: "bg-muted-foreground/40" },
              ].map((row) => (
                <li key={row.label} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <div className="flex items-baseline justify-between">
                    <div className="text-base font-semibold">{row.label}</div>
                    <div className="text-2xl font-bold text-primary-deep">{row.pct}%</div>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{row.desc}</div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className={`h-full rounded-full ${row.color}`} style={{ width: `${row.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Donut */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <svg viewBox="0 0 200 200" className="h-72 w-72 -rotate-90 sm:h-96 sm:w-96">
                <circle cx="100" cy="100" r="80" fill="none" stroke="oklch(0.92 0.01 230)" strokeWidth="28" />
                {(() => {
                  const C = 2 * Math.PI * 80;
                  const segs = [
                    { pct: 92, color: "var(--primary)" },
                    { pct: 5, color: "var(--accent)" },
                    { pct: 3, color: "oklch(0.55 0.02 240)" },
                  ];
                  let offset = 0;
                  return segs.map((s, i) => {
                    const len = (s.pct / 100) * C;
                    const el = (
                      <circle
                        key={i}
                        cx="100" cy="100" r="80" fill="none"
                        stroke={s.color} strokeWidth="28"
                        strokeDasharray={`${len} ${C - len}`}
                        strokeDashoffset={-offset}
                      />
                    );
                    offset += len;
                    return el;
                  });
                })()}
              </svg>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold tracking-tight text-primary-deep sm:text-6xl">92%</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">To the field</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION WIDGET */}
      <section id="donate" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Give in 20 seconds</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Your contribution, frictionless.
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <div className="p-6 sm:p-10">
              {/* Cadence toggle */}
              <div className="mx-auto grid w-full max-w-sm grid-cols-2 rounded-full bg-muted p-1">
                {(["monthly", "onetime"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCadence(c)}
                    className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                      cadence === c
                        ? "bg-card text-foreground shadow-[var(--shadow-card)]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c === "monthly" ? "Give Monthly" : "One-Time"}
                    {c === "monthly" && cadence === "monthly" && (
                      <span className="ml-2 rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">
                        Recommended
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Choose an amount
                </label>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => { setAmount(a); setCustom(""); }}
                      className={`rounded-xl border px-3 py-4 text-base font-semibold transition-all ${
                        amount === a && !custom
                          ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
                          : "border-border bg-background text-foreground hover:border-primary/50"
                      }`}
                    >
                      ${a}
                    </button>
                  ))}
                  <input
                    inputMode="numeric"
                    placeholder="Custom $"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value.replace(/[^\d]/g, "")); setAmount(""); }}
                    className="w-full rounded-xl border border-border bg-background px-3 py-4 text-center text-base font-semibold placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  ${custom || amount || "0"} {cadence === "monthly" ? "/month" : "one-time"} funds roughly{" "}
                  <span className="font-semibold text-foreground">
                    {Math.max(1, Math.round(Number(custom || amount || 0) * 3.2))} school meals
                  </span>{" "}
                  or{" "}
                  <span className="font-semibold text-foreground">
                    {Math.max(1, Math.round(Number(custom || amount || 0) * 0.6))} clinic visits
                  </span>.
                </p>
              </div>

              <button className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--gradient-accent)] px-4 py-4 text-base font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:-translate-y-0.5">
                Complete secure donation <ArrowRight className="h-4 w-4" />
              </button>

              <div className="mt-6">
                <div className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Or pay with
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { Icon: CreditCard, label: "Credit Card" },
                    { Icon: Apple, label: "Apple Pay" },
                    { Icon: Wallet, label: "Google Pay" },
                    { Icon: Bitcoin, label: "Crypto" },
                  ].map(({ Icon, label }) => (
                    <button
                      key={label}
                      className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5" /> 256-bit encryption · Tax-deductible · No processing fees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-accent)] text-accent-foreground">
                  <Activity className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-lg font-semibold">KindredPulse</span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
                A registered 501(c)(3) non-profit organization. EIN 84-2917430. Every contribution is tax-deductible to the fullest extent of the law.
              </p>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">Legal</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Privacy Policy</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Terms of Service</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Cookie Policy</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Accessibility</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">Transparency</div>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Annual Report 2025</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent">IRS Form 990</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent">501(c)(3) Letter</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-accent">Independent Audit</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">Join the Pulse</div>
              <p className="mt-4 text-sm text-primary-foreground/70">
                Monthly impact reports. Zero spam.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex overflow-hidden rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
                />
                <button className="rounded-full bg-[var(--gradient-accent)] px-4 py-2 text-sm font-semibold text-accent-foreground">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} KindredPulse Foundation. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Charity Navigator 100%</span>
              <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-3.5 w-3.5" /> GuideStar Platinum</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
