import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  TrendingUp,
  PieChart as PieIcon,
  BarChart3,
  Calendar,
  ShieldCheck,
  Award,
  ArrowUpRight,
  Download,
  CheckCircle2,
  DollarSign,
  Users,
  Heart,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/stats")({
  component: StatsPage,
});

type MetricType = "lives" | "funds" | "grants";

interface YearData {
  year: string;
  lives: number; // in thousands
  funds: number; // in millions
  grants: number; // count
  labelLives: string;
  labelFunds: string;
  labelGrants: string;
  growth: string;
}

const YEARLY_STATS: YearData[] = [
  {
    year: "2021",
    lives: 85,
    funds: 0.9,
    grants: 140,
    labelLives: "85,000",
    labelFunds: "$0.9M",
    labelGrants: "140",
    growth: "Baseline",
  },
  {
    year: "2022",
    lives: 175,
    funds: 1.8,
    grants: 310,
    labelLives: "175,000",
    labelFunds: "$1.8M",
    labelGrants: "310",
    growth: "+106%",
  },
  {
    year: "2023",
    lives: 310,
    funds: 3.2,
    grants: 580,
    labelLives: "310,000",
    labelFunds: "$3.2M",
    labelGrants: "580",
    growth: "+77%",
  },
  {
    year: "2024",
    lives: 540,
    funds: 5.6,
    grants: 920,
    labelLives: "540,000",
    labelFunds: "$5.6M",
    labelGrants: "920",
    growth: "+74%",
  },
  {
    year: "2025",
    lives: 890,
    funds: 9.1,
    grants: 1450,
    labelLives: "890,000",
    labelFunds: "$9.1M",
    labelGrants: "1,450",
    growth: "+65%",
  },
  {
    year: "2026",
    lives: 1420,
    funds: 12.8,
    grants: 2100,
    labelLives: "1,420,000",
    labelFunds: "$12.8M",
    labelGrants: "2,100",
    growth: "+60% YTD",
  },
];

interface PieSlice {
  id: string;
  name: string;
  percent: number;
  amount: string;
  rawAmount: number;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  deploymentsCount: number;
}

const ALLOCATION_PIE: PieSlice[] = [
  {
    id: "food",
    name: "Food Security & Nutrition",
    percent: 32,
    amount: "$4,096,000",
    rawAmount: 4096000,
    color: "#0E4D40",
    bgColor: "bg-[#0E4D40]/10",
    borderColor: "border-[#0E4D40]/30",
    description: "Emergency grain rations, acute malnutrition clinics, and clean water wells.",
    deploymentsCount: 840,
  },
  {
    id: "medical",
    name: "Emergency Medical Assistance",
    percent: 24,
    amount: "$3,072,000",
    rawAmount: 3072000,
    color: "#14B8A6",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    description: "Mobile triage units, trauma surgical kits, and essential vaccine cold chains.",
    deploymentsCount: 520,
  },
  {
    id: "education",
    name: "Educational Access & Supplies",
    percent: 18,
    amount: "$2,304,000",
    rawAmount: 2304000,
    color: "#F39C12",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    description: "School building rebuilds, STEM learning kits, and teacher stipends.",
    deploymentsCount: 390,
  },
  {
    id: "disaster",
    name: "Disaster Relief & Shelter",
    percent: 14,
    amount: "$1,792,000",
    rawAmount: 1792000,
    color: "#E74C3C",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    description: "All-weather shelter kits, solar generator sets, and emergency hygiene packs.",
    deploymentsCount: 260,
  },
  {
    id: "women",
    name: "Women Empowerment Grants",
    percent: 8,
    amount: "$1,024,000",
    rawAmount: 1024000,
    color: "#8E44AD",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description:
      "Micro-business seed loans, maternal healthcare stipends, and vocational training.",
    deploymentsCount: 180,
  },
  {
    id: "animal",
    name: "Animal Welfare & Rescue",
    percent: 4,
    amount: "$512,000",
    rawAmount: 512000,
    color: "#3498DB",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/30",
    description:
      "Veterinary emergency care, wildlife rehabilitation, and livestock shelter support.",
    deploymentsCount: 90,
  },
];

export function StatsPage() {
  const [activeMetric, setActiveMetric] = useState<MetricType>("lives");
  const [hoveredYear, setHoveredYear] = useState<YearData | null>(null);
  const [activePieSlice, setActivePieSlice] = useState<PieSlice>(ALLOCATION_PIE[0]);

  // Max value calculation for bar heights
  const maxVal = Math.max(...YEARLY_STATS.map((d) => d[activeMetric]));

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        {/* Hero Header */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 text-center max-w-7xl mx-auto">
          {/* Side Ambient Glowing Orbs */}
          <div className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-400/20 blur-3xl" />

          {/* Left Side Ambient Vector Grid */}
          <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 lg:block">
            <svg className="h-64 w-64 opacity-25" viewBox="0 0 200 200" fill="none">
              <polygon
                points="100,20 180,100 100,180 20,100"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="6 6"
                className="text-primary"
              />
              <circle
                cx="100"
                cy="100"
                r="45"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
            </svg>
          </div>

          {/* Right Side Ambient Vector Grid */}
          <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
            <svg className="h-64 w-64 opacity-25" viewBox="0 0 200 200" fill="none">
              <circle
                cx="100"
                cy="100"
                r="75"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="text-accent"
              />
              <circle
                cx="100"
                cy="100"
                r="35"
                stroke="currentColor"
                strokeWidth="1"
                className="text-accent"
              />
            </svg>
          </div>

          <div className="relative max-w-4xl mx-auto z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-xs">
              <TrendingUp className="h-3.5 w-3.5" /> Verified 5-Year Financial & Impact Record
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Graphical Impact & Financial Statistics
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl max-w-3xl mx-auto">
              Explore multi-year growth trajectories, total ground deployment funds, and live 92.4%
              direct programmatic allocation charts verified by quarterly audits.
            </p>
          </div>

          {/* Key KPI Cards */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs text-left">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                Total Deployed
                <DollarSign className="h-4 w-4 text-primary" />
              </div>
              <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground">$12.8M</div>
              <div className="mt-1 text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> +142% 5-Yr CAGR
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs text-left">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                Lives Impacted
                <Users className="h-4 w-4 text-accent" />
              </div>
              <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground">1.42M</div>
              <div className="mt-1 text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> 6 Field Operations
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs text-left">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                Pass-Through Rate
                <ShieldCheck className="h-4 w-4 text-primary" />
              </div>
              <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground">92.4%</div>
              <div className="mt-1 text-[11px] font-medium text-muted-foreground">
                Direct to Field
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs text-left">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                Audit Rating
                <Award className="h-4 w-4 text-amber-500" />
              </div>
              <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-foreground">100%</div>
              <div className="mt-1 text-[11px] font-medium text-muted-foreground">
                Form 990 Compliant
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: Graphical Statistics Over The Years */}
        <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
          <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/60">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <BarChart3 className="h-4 w-4" /> Multi-Year Growth Trajectory (2021 – 2026)
                </div>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                  Annual Operational Scaling
                </h2>
              </div>

              {/* Metric Selector Toggle Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-border/80 bg-muted/50 p-1">
                <button
                  onClick={() => setActiveMetric("lives")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    activeMetric === "lives"
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Lives Impacted
                </button>
                <button
                  onClick={() => setActiveMetric("funds")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    activeMetric === "funds"
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Deployed Funds ($M)
                </button>
                <button
                  onClick={() => setActiveMetric("grants")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    activeMetric === "grants"
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Verified Grants
                </button>
              </div>
            </div>

            {/* SVG Interactive Bar Chart */}
            <div className="mt-8 relative h-72 w-full">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-xs text-muted-foreground/40">
                <div className="border-b border-border/40 pb-1">100%</div>
                <div className="border-b border-border/40 pb-1">75%</div>
                <div className="border-b border-border/40 pb-1">50%</div>
                <div className="border-b border-border/40 pb-1">25%</div>
                <div className="border-b border-border/40">0</div>
              </div>

              {/* Bars Row */}
              <div className="relative h-full flex items-end justify-between px-4 sm:px-12 z-10 pt-6 pb-2">
                {YEARLY_STATS.map((d) => {
                  const heightPercent = Math.round((d[activeMetric] / maxVal) * 100);
                  const isHovered = hoveredYear?.year === d.year;

                  let displayLabel = d.labelLives;
                  if (activeMetric === "funds") displayLabel = d.labelFunds;
                  if (activeMetric === "grants") displayLabel = d.labelGrants;

                  return (
                    <div
                      key={d.year}
                      onMouseEnter={() => setHoveredYear(d)}
                      onMouseLeave={() => setHoveredYear(null)}
                      className="group relative flex flex-col items-center flex-1 h-full justify-end cursor-pointer px-1 sm:px-3"
                    >
                      {/* Floating Tooltip */}
                      {isHovered && (
                        <div className="absolute -top-12 z-30 rounded-lg bg-slate-900 px-3 py-1.5 text-xs text-white shadow-xl animate-in fade-in zoom-in-95 font-mono whitespace-nowrap">
                          <span className="font-bold text-amber-300">{d.year}:</span> {displayLabel}{" "}
                          <span className="text-emerald-400">({d.growth})</span>
                        </div>
                      )}

                      {/* Bar Value Label */}
                      <span className="mb-2 text-[11px] font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                        {displayLabel}
                      </span>

                      {/* Bar Visual Element */}
                      <div className="w-full max-w-[48px] rounded-t-xl bg-muted/40 overflow-hidden flex flex-col justify-end h-full">
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full rounded-t-xl transition-all duration-500 ${
                            isHovered
                              ? "bg-gradient-to-t from-primary to-accent shadow-md scale-y-105"
                              : "bg-gradient-hero opacity-90 group-hover:opacity-100"
                          }`}
                        />
                      </div>

                      {/* Year Label */}
                      <span className="mt-3 text-xs sm:text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                        {d.year}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Yearly Growth Detail Cards */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6 border-t border-border/60">
              {YEARLY_STATS.map((d) => (
                <div
                  key={d.year}
                  className="rounded-xl border border-border/60 bg-muted/20 p-3 text-center hover:bg-muted/40 transition-colors"
                >
                  <div className="text-xs font-bold text-muted-foreground">{d.year}</div>
                  <div className="mt-1 text-sm font-bold text-foreground">{d.labelFunds}</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">{d.growth}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Interactive Programmatic Allocation Pie Chart */}
        <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
          <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
            <div className="pb-6 border-b border-border/60">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <PieIcon className="h-4 w-4" /> 92.4% Direct Field Allocation Breakdown
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                Resource Allocation Pie Chart
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Hover or tap any sector to inspect total funding allocation, field operational
                impact, and deployment counts.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Pie Chart SVG Render */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* SVG Donut Slices */}
                    {(() => {
                      let cumulativePercent = 0;
                      return ALLOCATION_PIE.map((slice) => {
                        const startAngle = (cumulativePercent / 100) * 360;
                        cumulativePercent += slice.percent;
                        const endAngle = (cumulativePercent / 100) * 360;

                        // Calculate SVG Arc Path Coordinates for Donut (r=40, inner r=24)
                        const startRad = (startAngle * Math.PI) / 180;
                        const endRad = (endAngle * Math.PI) / 180;

                        const x1 = 50 + 40 * Math.cos(startRad);
                        const y1 = 50 + 40 * Math.sin(startRad);
                        const x2 = 50 + 40 * Math.cos(endRad);
                        const y2 = 50 + 40 * Math.sin(endRad);

                        const x3 = 50 + 24 * Math.cos(endRad);
                        const y3 = 50 + 24 * Math.sin(endRad);
                        const x4 = 50 + 24 * Math.cos(startRad);
                        const y4 = 50 + 24 * Math.sin(startRad);

                        const largeArc = slice.percent > 50 ? 1 : 0;
                        const pathData = `M ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A 24 24 0 ${largeArc} 0 ${x4} ${y4} Z`;

                        const isActive = activePieSlice.id === slice.id;

                        return (
                          <path
                            key={slice.id}
                            d={pathData}
                            fill={slice.color}
                            onClick={() => setActivePieSlice(slice)}
                            onMouseEnter={() => setActivePieSlice(slice)}
                            className={`cursor-pointer transition-all duration-300 ${
                              isActive
                                ? "opacity-100 scale-105 stroke-white stroke-2"
                                : "opacity-85 hover:opacity-100"
                            }`}
                          />
                        );
                      });
                    })()}
                  </svg>

                  {/* Center Donut Label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <span className="text-2xl sm:text-3xl font-extrabold text-foreground">
                      {activePieSlice.percent}%
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground max-w-[100px]">
                      {activePieSlice.name.split(" ")[0]} Share
                    </span>
                  </div>
                </div>
              </div>

              {/* Pie Slice Details Side Panel */}
              <div className="lg:col-span-6 space-y-3">
                <div
                  className={`rounded-2xl border ${activePieSlice.borderColor} ${activePieSlice.bgColor} p-6 shadow-sm transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      style={{ backgroundColor: activePieSlice.color }}
                      className="rounded-full px-3 py-1 text-xs font-bold text-white uppercase tracking-wider"
                    >
                      {activePieSlice.percent}% of Total Funds
                    </span>
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      {activePieSlice.deploymentsCount} Field Operations
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-foreground">{activePieSlice.name}</h3>
                  <div className="mt-1 text-2xl font-extrabold text-primary font-mono">
                    {activePieSlice.amount}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {activePieSlice.description}
                  </p>
                </div>

                {/* Interactive Legend Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {ALLOCATION_PIE.map((slice) => {
                    const isActive = activePieSlice.id === slice.id;
                    return (
                      <button
                        key={slice.id}
                        onClick={() => setActivePieSlice(slice)}
                        onMouseEnter={() => setActivePieSlice(slice)}
                        className={`flex items-center justify-between rounded-xl border p-2.5 text-left text-xs transition-all ${
                          isActive
                            ? "border-primary bg-card font-semibold shadow-xs"
                            : "border-border/60 bg-muted/20 hover:bg-muted/40 text-muted-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            style={{ backgroundColor: slice.color }}
                            className="h-3 w-3 rounded-full shrink-0"
                          />
                          <span className="truncate max-w-[130px] font-medium text-foreground">
                            {slice.name}
                          </span>
                        </div>
                        <span className="font-mono font-bold text-primary">{slice.percent}%</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Verified Financial Records & Reports Download */}
        <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
          <div className="rounded-3xl border border-border/80 bg-gradient-hero p-8 text-primary-foreground shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-300" /> Public IRS Form 990 Archive
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Download Certified Multi-Year Financial Audits
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-primary-foreground/80 max-w-2xl">
                Access full unedited PDF audit packets, CPA verification statements, and quarterly
                bank settlement records for 2021 – 2026.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/transparency"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-lg transition-transform hover:scale-105"
              >
                Inspect Ledger <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() =>
                  alert("Downloading KindredPulse 2021-2026 Multi-Year Audit Summary (PDF)...")
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                <Download className="h-4 w-4" /> Download PDF Pack
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
