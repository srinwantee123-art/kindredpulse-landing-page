import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useQuery, queryOptions } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getImpactMetrics } from "@/lib/impact.functions";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(impactQueryOptions(getImpactMetrics)),
  component: Landing,
});

type ImpactData = Awaited<ReturnType<typeof getImpactMetrics>>;

function impactQueryOptions(fn: () => Promise<ImpactData>) {
  return queryOptions({
    queryKey: ["impact-metrics"],
    queryFn: () => fn(),
    refetchInterval: 5000,
    refetchIntervalInBackground: false,
    staleTime: 4000,
  });
}

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
  const [value, setValue] = useState(active ? target : 0);
  const fromRef = useRef(0);
  useEffect(() => {
    if (!active) return;
    const from = fromRef.current;
    const delta = target - from;
    if (delta === 0) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.round(from + delta * eased);
      setValue(next);
      fromRef.current = next;
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function ImpactCounter({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setActive(true), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, active);
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
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

function useRelativeTime(iso: string | undefined) {
  const [, tick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => tick((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);
  if (!iso) return "just now";
  const s = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  if (s < 5) return "just now";
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  return `${m}m ago`;
}

function Landing() {
  const [amount, setAmount] = useState<string>("50");
  const [custom, setCustom] = useState("");
  const [cadence, setCadence] = useState<"monthly" | "onetime">("monthly");

  const amounts = ["25", "50", "100"];

  const impactFn = useServerFn(getImpactMetrics);
  const { data: impact } = useQuery(impactQueryOptions(impactFn));
  const lives = impact?.lives ?? 0;
  const meals = impact?.meals ?? 0;
  const animals = impact?.animals ?? 0;
  const raised = impact?.monthly.raisedCents ?? 0;
  const goal = impact?.monthly.goalCents ?? 1;
  const pct = impact?.monthly.pct ?? 0;
  const refreshed = useRelativeTime(impact?.updatedAt);
  const usd = (cents: number) => `$${Math.round(cents / 100).toLocaleString()}`;

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Header />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_10%_0%,color-mix(in_oklab,var(--primary-soft)_60%,transparent),transparent),radial-gradient(40%_40%_at_100%_20%,color-mix(in_oklab,var(--accent)_20%,transparent),transparent)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full glass-card px-3.5 py-1.5 text-xs font-semibold text-muted-foreground shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Verified 501(c)(3) · Audited
              Quarterly
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Transform intent
              <br />
              into{" "}
              <span className="[background-image:var(--gradient-hero)] bg-clip-text text-transparent">
                measurable impact.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              KindredPulse routes 92¢ of every dollar directly to the field. Choose a cause, watch
              the impact land, and track every step with radical transparency.
            </p>

            {/* Quick donate chips */}
            <div className="mt-8 glass-card rounded-2xl p-4 shadow-[var(--shadow-glass)] sm:p-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Give in seconds
              </div>
              <div className="grid grid-cols-4 gap-2">
                {amounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => {
                      setAmount(a);
                      setCustom("");
                    }}
                    className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-all ${
                      amount === a && !custom
                        ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
                        : "border-border bg-background/80 text-foreground hover:border-primary/50"
                    }`}
                  >
                    ${a}
                  </button>
                ))}
                <input
                  inputMode="numeric"
                  placeholder="Custom"
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value.replace(/[^\d]/g, ""));
                    setAmount("");
                  }}
                  className="w-full rounded-xl border border-border bg-background/80 px-3 py-3 text-center text-sm font-semibold placeholder:text-muted-foreground focus:border-primary focus:outline-none"
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
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground font-medium">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> Charity Navigator 100%
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-primary" /> 98% Funds Transferred
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" /> GuideStar Platinum
              </span>
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
                <div className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-xl">
                  <div className="text-xs font-medium uppercase tracking-widest text-white/80">
                    Live · Right now
                  </div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    A donor in Berlin funded 42 school meals in Nairobi.
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card absolute -right-3 -top-3 hidden rotate-3 rounded-2xl px-4 py-3 shadow-[var(--shadow-glass)] md:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Impact this month
              </div>
              <div className="text-2xl font-bold text-primary-deep">+128,402 lives</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Six Pillars
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Six causes. One relentless standard.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Every pillar is run by an accountable field team with published outcomes — not
              promises.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <a
                key={title}
                href="#donate"
                className="glass-card group relative overflow-hidden rounded-2xl p-7 shadow-[var(--shadow-glass)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
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
      <section
        id="impact"
        className="relative overflow-hidden bg-[var(--gradient-hero)] text-primary-foreground"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Live Impact Tracker
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Real numbers.
                <br />
                Updated in real time.
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/80">
                Every metric below streams directly from our field partners' verified logs — no
                marketing, no rounding.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
                    Monthly distribution goal
                  </div>
                  <div className="mt-1 text-2xl font-bold tabular-nums">
                    {usd(raised)} <span className="text-primary-foreground/60">/ {usd(goal)}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-accent tabular-nums">{pct}%</div>
              </div>
              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-[var(--gradient-accent)] shadow-[var(--shadow-accent)] transition-[width] duration-1000 ease-out"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-primary-foreground/70">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Live · refreshed {refreshed}
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ImpactCounter value={lives} label="Lives Impacted" />
            <ImpactCounter value={meals} label="Meals Delivered" />
            <ImpactCounter value={animals} label="Animals Rescued" />
          </div>
        </div>
      </section>

      {/* WHERE DOES YOUR MONEY GO */}
      <section id="transparency" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Radical Transparency
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Where does your money go?
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              We publish a live audit of every dollar. No inflated overhead. No hidden channels.
              Just the honest split.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  pct: 92,
                  label: "Direct Field Programs",
                  desc: "To the people, projects and places that need it.",
                  color: "bg-primary",
                },
                {
                  pct: 5,
                  label: "Logistics & Delivery",
                  desc: "Getting aid to the last mile — securely.",
                  color: "bg-accent",
                },
                {
                  pct: 3,
                  label: "Administration",
                  desc: "Audit, compliance, and secure infrastructure.",
                  color: "bg-muted-foreground/40",
                },
              ].map((row) => (
                <li
                  key={row.label}
                  className="glass-card rounded-2xl p-5 shadow-[var(--shadow-glass)]"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="text-base font-semibold text-foreground">{row.label}</div>
                    <div className="text-2xl font-bold text-primary-deep">{row.pct}%</div>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{row.desc}</div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${row.color}`}
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Donut */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <svg viewBox="0 0 200 200" className="h-72 w-72 -rotate-90 sm:h-96 sm:w-96">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="oklch(0.92 0.01 230)"
                  strokeWidth="28"
                />
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
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke={s.color}
                        strokeWidth="28"
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
                <div className="text-5xl font-bold tracking-tight text-primary-deep sm:text-6xl">
                  92%
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  To the field
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION WIDGET */}
      <section id="donate" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Give in 20 seconds
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Your contribution, frictionless.
            </h2>
          </div>

          <div className="mt-10 glass-card overflow-hidden rounded-3xl shadow-[var(--shadow-glass)]">
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
                      onClick={() => {
                        setAmount(a);
                        setCustom("");
                      }}
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
                    onChange={(e) => {
                      setCustom(e.target.value.replace(/[^\d]/g, ""));
                      setAmount("");
                    }}
                    className="w-full rounded-xl border border-border bg-background px-3 py-4 text-center text-base font-semibold placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  ${custom || amount || "0"} {cadence === "monthly" ? "/month" : "one-time"} funds
                  roughly{" "}
                  <span className="font-semibold text-foreground">
                    {Math.max(1, Math.round(Number(custom || amount || 0) * 3.2))} school meals
                  </span>{" "}
                  or{" "}
                  <span className="font-semibold text-foreground">
                    {Math.max(1, Math.round(Number(custom || amount || 0) * 0.6))} clinic visits
                  </span>
                  .
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
                <ShieldCheck className="h-3.5 w-3.5" /> 256-bit encryption · Tax-deductible · No
                processing fees
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
