import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  BadgeCheck,
  FileText,
  Download,
  Eye,
  CheckCircle2,
  DollarSign,
  PieChart as PieChartIcon,
  Search,
  Building2,
  Users,
  AlertTriangle,
  ExternalLink,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/transparency")({
  component: TransparencyPage,
});

const SPENDING_BREAKDOWN = [
  {
    category: "Direct Field Programs",
    pct: 92,
    amount: "$4,232,000",
    desc: "Grants, direct equipment, medical supplies, local farming equipment, and tuition fees delivered directly to beneficiaries.",
    color: "bg-primary",
  },
  {
    category: "Logistics & Field Delivery",
    pct: 5,
    amount: "$230,000",
    desc: "Secure cold-chain transport, satellite communication, ground freight, and local field team security.",
    color: "bg-accent",
  },
  {
    category: "Administration & Audit",
    pct: 3,
    amount: "$138,000",
    desc: "Independent CPA quarterly audits, legal compliance filings, and platform infrastructure.",
    color: "bg-muted-foreground/50",
  },
];

const PILLAR_ALLOCATIONS = [
  { name: "Education for Children", cents: 105800000, pct: 25, projects: 42 },
  { name: "Food Security", cents: 93100000, pct: 22, projects: 38 },
  { name: "Medical Assistance", cents: 84640000, pct: 20, projects: 29 },
  { name: "Disaster Relief", cents: 63480000, pct: 15, projects: 17 },
  { name: "Women Empowerment", cents: 42320000, pct: 10, projects: 24 },
  { name: "Animal Welfare", cents: 33856000, pct: 8, projects: 19 },
];

const AUDIT_REPORTS = [
  {
    title: "Q1 2026 Comprehensive Financial Audit",
    date: "April 15, 2026",
    auditor: "KPMG Independent Assurance",
    type: "Quarterly Audit",
    size: "2.4 MB",
  },
  {
    title: "2025 Annual IRS Form 990 Public Disclosure",
    date: "March 01, 2026",
    auditor: "Internal Revenue Service",
    type: "IRS Filing",
    size: "4.1 MB",
  },
  {
    title: "Q4 2025 Field Delivery Verification Log",
    date: "January 20, 2026",
    auditor: "Global Impact Watchdog",
    type: "Field Audit",
    size: "1.8 MB",
  },
  {
    title: "2025 501(c)(3) Tax Exempt Determination Letter",
    date: "January 10, 2026",
    auditor: "US Department of the Treasury",
    type: "Tax Exemption",
    size: "850 KB",
  },
  {
    title: "Q3 2025 Logistics & Supply Chain Reconciliation",
    date: "October 18, 2025",
    auditor: "Deloitte External Assurance",
    type: "Supply Chain",
    size: "3.2 MB",
  },
];

const BOARD_DIRECTORS = [
  {
    name: "Dr. Elena Vance",
    title: "Chairwoman & Co-Founder",
    bio: "Former UNICEF Global Logistics Chief with 18+ years running humanitarian supply chains across East Africa.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marcus Thorne, CPA",
    title: "Treasurer & Head of Audit",
    bio: "Senior Partner at Foresight Financial, specializing in non-profit transparency and fiscal compliance.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Aisha Patel",
    title: "Director of Impact Verification",
    bio: "Pioneered satellite remote sensing for relief distribution tracking in South Asia.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
];

function TransparencyPage() {
  const [search, setSearch] = useState("");
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);
  const [previewDoc, setPreviewDoc] = useState<string | null>(null);

  const filteredReports = AUDIT_REPORTS.filter(
    (r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.type.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,color-mix(in_oklab,var(--primary-soft)_70%,transparent),transparent)]" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-xs">
            <Lock className="h-3.5 w-3.5" /> Open Financial Ledger & Public Audit
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Radical Transparency.
            <br />
            <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">
              Zero Guesswork.
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            We believe donors deserve line-item clarity. Every donation is tracked from bank
            settlement to field execution with quarterly public audits and zero hidden
            administrative overhead.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground sm:text-sm">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 92% Direct Field Deployment
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Quarterly CPA Audited
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Public IRS 501(c)(3) Filings
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 1: FINANCIAL BREAKDOWN DASHBOARD */}
      <section className="border-t border-border bg-card/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Live Financial Breakdown
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Where Every Dollar Goes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Based on audited 2025/2026 total operational deployment of $4,600,000 USD.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            {/* Direct split cards */}
            <div className="space-y-4">
              {SPENDING_BREAKDOWN.map((item) => (
                <div
                  key={item.category}
                  className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-semibold text-foreground">{item.category}</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary-deep">{item.pct}%</span>
                      <span className="text-xs text-muted-foreground font-mono">
                        ({item.amount})
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pillar Breakdown Allocation */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Field Allocation by Cause</h3>
                  <p className="text-xs text-muted-foreground">
                    Click a pillar to view project distribution
                  </p>
                </div>
                <PieChartIcon className="h-5 w-5 text-primary" />
              </div>

              <div className="mt-6 space-y-4">
                {PILLAR_ALLOCATIONS.map((p) => {
                  const isSelected = selectedPillar === p.name;
                  return (
                    <button
                      key={p.name}
                      onClick={() => setSelectedPillar(isSelected ? null : p.name)}
                      className={`w-full text-left rounded-xl border p-3.5 transition-all ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-xs"
                          : "border-border bg-background/50 hover:border-primary/40"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                        <span className="text-foreground">{p.name}</span>
                        <span className="text-primary font-mono">
                          ${(p.cents / 100).toLocaleString()} ({p.pct}%)
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-[var(--gradient-hero)] rounded-full"
                          style={{ width: `${p.pct * 3.5}%` }}
                        />
                      </div>
                      {isSelected && (
                        <div className="mt-3 text-xs text-muted-foreground border-t border-border/60 pt-2 flex justify-between items-center">
                          <span>
                            Active Ground Projects:{" "}
                            <strong className="text-foreground">{p.projects}</strong>
                          </span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                            100% Verified Logs
                          </span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PUBLIC REPORT REGISTRY */}
      <section className="border-t border-border bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Official Vault
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Public Audit & Filing Registry
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Download unedited financial statements, 990 forms, and independent audit reviews.
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search filings or audits..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-border bg-card pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="divide-y divide-border">
              {filteredReports.map((report) => (
                <div
                  key={report.title}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between hover:bg-muted/40 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary-deep">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">
                        {report.title}
                      </h4>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span>Filed: {report.date}</span>
                        <span>
                          Auditor: <strong className="text-foreground">{report.auditor}</strong>
                        </span>
                        <span className="rounded bg-muted px-2 py-0.5 font-medium">
                          {report.type}
                        </span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={() => setPreviewDoc(report.title)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Eye className="h-3.5 w-3.5" /> Preview
                    </button>
                    <button
                      onClick={() => alert(`Simulated download for ${report.title}`)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      <Download className="h-3.5 w-3.5" /> PDF
                    </button>
                  </div>
                </div>
              ))}

              {filteredReports.length === 0 && (
                <div className="p-8 text-center text-sm text-muted-foreground">
                  No filings match your search. Try clearing your query.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUST ELEMENTS & GOVERNANCE */}
      <section className="border-t border-border bg-card/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Governance & Legal
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Verified Legal Standing & Leadership
            </h2>
          </div>

          {/* Legal Badges */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { badge: "Charity Navigator", status: "100/100 Four-Star", icon: ShieldCheck },
              { badge: "GuideStar", status: "Platinum Transparency", icon: BadgeCheck },
              { badge: "IRS 501(c)(3)", status: "Verified Public Charity", icon: Building2 },
              { badge: "BBB Accredited", status: "Standards Met (A+)", icon: CheckCircle2 },
            ].map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.badge}
                  className="rounded-2xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)]"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary-deep">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-3 text-sm font-bold text-foreground">{b.badge}</div>
                  <div className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {b.status}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Board of Directors */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> Board of Directors & Oversight
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {BOARD_DIRECTORS.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-20 w-20 rounded-full object-cover border-2 border-primary/20"
                  />
                  <h4 className="mt-4 text-lg font-bold text-foreground">{member.name}</h4>
                  <div className="text-xs font-semibold text-primary">{member.title}</div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Whistleblower & Ethics Banner */}
          <div className="mt-12 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">
                  Independent Whistleblower & Ethics Hotline
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-2xl">
                  We operate a zero-tolerance policy against financial misuse. Reports are handled
                  anonymously by an external legal ombudsman.
                </p>
              </div>
            </div>

            <button
              onClick={() => alert("Redirecting to secure anonymous ethics reporting portal...")}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-card px-4 py-2.5 text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 shadow-xs hover:bg-amber-500/10 transition-colors shrink-0"
            >
              <span>Submit Confidential Report</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* MODAL FOR PREVIEWING DOCUMENTS */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-xl rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="font-bold text-foreground text-base sm:text-lg">{previewDoc}</h3>
              <button
                onClick={() => setPreviewDoc(null)}
                className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="mt-6 space-y-4 text-xs sm:text-sm text-muted-foreground">
              <div className="rounded-xl border border-border bg-background p-4 text-center">
                <FileText className="mx-auto h-12 w-12 text-primary opacity-80" />
                <p className="mt-2 font-medium text-foreground">Verified Document Digital Hash</p>
                <code className="mt-1 block text-[11px] font-mono bg-muted p-2 rounded text-muted-foreground break-all">
                  SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                </code>
              </div>
              <p>
                This document is certified by our external independent accounting partner. All
                financial figures are reconciled directly with bank settlement accounts.
              </p>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setPreviewDoc(null)}
                className="rounded-xl border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  alert(`Downloading ${previewDoc}`);
                  setPreviewDoc(null);
                }}
                className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
