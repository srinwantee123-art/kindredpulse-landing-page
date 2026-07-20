import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  BookOpen,
  UtensilsCrossed,
  HeartPulse,
  LifeBuoy,
  Sparkles,
  PawPrint,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/pillars")({
  component: PillarsPage,
});

const PILLARS_DETAIL = [
  {
    id: "education",
    name: "Education for Children",
    icon: BookOpen,
    kpiBadge: "Active Projects: 42 Schools & Labs",
    problem:
      "Over 250 million children worldwide lack access to basic primary education, digital literacy, and adequate learning materials, perpetuating intergenerational poverty cycles in rural and conflict-affected zones.",
    solution:
      "We build community-owned digital learning hubs, fund local teachers' salaries, and provide full multi-year academic scholarships with nutritional and transportation support included.",
    targetRegion: "Sub-Saharan Africa & South Asia",
    beneficiaries: "64,200+ Children",
    fundLabel: "Fund Education",
    causeKey: "education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    tags: ["STEM Labs", "Scholarships", "Teacher Training"],
  },
  {
    id: "food",
    name: "Food Security",
    icon: UtensilsCrossed,
    kpiBadge: "Meals Delivered: 1,840,000+",
    problem:
      "Acute malnutrition affects vulnerable farming communities where climate shocks disrupt local crop yields and inflate food prices beyond survival limits.",
    solution:
      "Rather than imported food packs, we invest directly in indigenous agricultural technology, solar irrigation systems, and local farmer cooperatives to secure long-term food sovereignty.",
    targetRegion: "Horn of Africa & Central America",
    beneficiaries: "98,000+ Families",
    fundLabel: "Fund Food Security",
    causeKey: "food",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Solar Irrigation", "Local Sourcing", "Nutrition Support"],
  },
  {
    id: "medical",
    name: "Medical Assistance",
    icon: HeartPulse,
    kpiBadge: "Surgeries & Treatments: 14,350+",
    problem:
      "Preventable illnesses and emergency surgical needs go untreated in remote districts due to missing cold-chain transport, medicine shortages, and a lack of qualified care providers.",
    solution:
      "We deploy mobile surgical units equipped with satellite connectivity, supply life-saving pharmaceuticals directly to rural clinics, and sponsor pediatric emergency surgeries.",
    targetRegion: "Southeast Asia & Sub-Saharan Africa",
    beneficiaries: "112,000+ Patients",
    fundLabel: "Fund Medical Care",
    causeKey: "medical",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile Clinics", "Pediatric Surgery", "Cold-Chain Supply"],
  },
  {
    id: "disaster",
    name: "Disaster Relief",
    icon: LifeBuoy,
    kpiBadge: "Response Time: < 72 Hours",
    problem:
      "Sudden natural catastrophes and climate disasters leave displaced populations immediately stripped of clean drinking water, temporary shelter, and emergency sanitation.",
    solution:
      "We maintain pre-positioned emergency stocks and rapid-response logistics teams who deploy within 72 hours, setting up clean water filtration stations and medical triage camps.",
    targetRegion: "Pacific Islands & Global Disaster Zones",
    beneficiaries: "185,000+ Displaced Persons",
    fundLabel: "Fund Emergency Relief",
    causeKey: "disaster",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    tags: ["72h Rapid Response", "Water Purification", "Emergency Shelter"],
  },
  {
    id: "women",
    name: "Women Empowerment",
    icon: Sparkles,
    kpiBadge: "Micro-Grants Issued: 3,120+",
    problem:
      "Structural economic barriers leave women in developing economies without access to capital, formal financial services, or independent vocational training opportunities.",
    solution:
      "We provide zero-interest micro-equity grants, digital financial literacy training, and community leadership mentorship that multiplies income across entire households.",
    targetRegion: "South Asia & Latin America",
    beneficiaries: "24,500+ Entrepreneurs",
    fundLabel: "Fund Women Grants",
    causeKey: "women",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    tags: ["Zero-Interest Microgrants", "Business Mentorship", "Literacy Labs"],
  },
  {
    id: "animal",
    name: "Animal Welfare",
    icon: PawPrint,
    kpiBadge: "Rescues & Sheltered: 8,900+",
    problem:
      "Rapid urbanization and habitat encroachment leave millions of street animals injured, unvaccinated, and suffering without sanctuary or veterinary interventions.",
    solution:
      "We fund mobile veterinary ambulances, street animal vaccination drives, and partner sanctuaries dedicated to animal rehabilitation and wildlife protection.",
    targetRegion: "Eastern Europe & South America",
    beneficiaries: "8,900+ Rescued Animals",
    fundLabel: "Fund Animal Welfare",
    causeKey: "animal",
    image:
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile Rescue Units", "Sanctuary Grants", "Vaccination Drives"],
  },
];

function PillarsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Ambient Side Radial Glow Orbs */}
        <div className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,color-mix(in_oklab,var(--primary-soft)_70%,transparent),transparent)]" />

        {/* Left Side Ambient Graphic SVG & Badge */}
        <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <svg className="h-64 w-64 opacity-25" viewBox="0 0 200 200" fill="none">
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="6 6"
              className="text-primary"
            />
            <circle
              cx="100"
              cy="100"
              r="50"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
            <circle cx="100" cy="100" r="20" fill="currentColor" className="text-primary/10" />
            <path
              d="M20 100 L180 100 M100 20 L100 180"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="4 4"
              className="text-primary"
            />
          </svg>
        </div>

        <div className="absolute left-6 xl:left-12 top-1/2 hidden -translate-y-1/2 lg:flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-3.5 shadow-xl backdrop-blur-md animate-pulse">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">Verified 100% Audit</div>
            <div className="text-[10px] font-semibold text-primary">501(c)(3) Certified NGO</div>
          </div>
        </div>

        {/* Right Side Ambient Graphic SVG & Badge */}
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <svg className="h-64 w-64 opacity-25" viewBox="0 0 200 200" fill="none">
            <rect
              x="30"
              y="30"
              width="140"
              height="140"
              rx="20"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="6 6"
              className="text-accent"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent"
            />
            <path
              d="M40 40 L160 160 M160 40 L40 160"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="4 4"
              className="text-accent"
            />
          </svg>
        </div>

        <div className="absolute right-6 xl:left-auto xl:right-12 top-1/2 hidden -translate-y-1/2 lg:flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-3.5 shadow-xl backdrop-blur-md animate-pulse">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
            <TrendingUp className="h-5 w-5 text-accent" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">92.4% Direct Allocation</div>
            <div className="text-[10px] font-semibold text-emerald-700">
              Zero Administrative Overhead
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-xs">
            <ShieldCheck className="h-3.5 w-3.5" /> High-Impact Structural Philanthropy
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Our Pillars of Change
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            We don't deploy arbitrary aid. Every dollar in our six core pillars is governed by
            field-verified outcomes, localized leadership, and 92% direct allocation to ground
            teams.
          </p>

          {/* Quick Pillar Jump Chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {PILLARS_DETAIL.map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card hover:text-primary"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{p.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* VERTICAL STACK OF 6 PILLARS */}
      <section className="border-t border-border bg-card/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-32">
            {PILLARS_DETAIL.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  className="scroll-mt-32 rounded-3xl border border-border/80 bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 sm:p-8 lg:p-12"
                >
                  <div
                    className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 ${isEven ? "" : "lg:grid-flow-dense"}`}
                  >
                    {/* Visual Media Column */}
                    <div className={isEven ? "lg:col-start-1" : "lg:col-start-2"}>
                      <div className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)] group">
                        <img
                          src={pillar.image}
                          alt={pillar.name}
                          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
                        />
                        <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                          {pillar.kpiBadge}
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-16">
                          <div className="flex flex-wrap items-center gap-2">
                            {pillar.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md bg-white/15 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={isEven ? "lg:col-start-2" : "lg:col-start-1"}>
                      <div className="flex items-center gap-3">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary-deep shadow-xs">
                          <Icon className="h-6 w-6" strokeWidth={2} />
                        </span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            Pillar 0{idx + 1}
                          </span>
                          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                            {pillar.name}
                          </h2>
                        </div>
                      </div>

                      {/* Problem & Solution */}
                      <div className="mt-6 space-y-4">
                        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs sm:text-sm leading-relaxed">
                          <span className="font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">
                            Regional Problem Addressed:
                          </span>
                          <p className="text-muted-foreground">{pillar.problem}</p>
                        </div>

                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs sm:text-sm leading-relaxed">
                          <span className="font-semibold text-primary uppercase tracking-wider block mb-1">
                            Long-Term Solution Strategy:
                          </span>
                          <p className="text-muted-foreground">{pillar.solution}</p>
                        </div>
                      </div>

                      {/* Meta metrics */}
                      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4 text-xs sm:text-sm">
                        <div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <Globe className="h-3.5 w-3.5 text-primary" /> Target Region
                          </div>
                          <div className="font-semibold text-foreground mt-0.5">
                            {pillar.targetRegion}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <TrendingUp className="h-3.5 w-3.5 text-primary" /> Verified
                            Beneficiaries
                          </div>
                          <div className="font-semibold text-foreground mt-0.5">
                            {pillar.beneficiaries}
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-8 flex items-center gap-4">
                        <Link
                          to="/donate"
                          search={{ cause: pillar.causeKey }}
                          className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-all hover:scale-105 hover:shadow-lg"
                        >
                          <span>{pillar.fundLabel}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> 92% Direct Field
                          Deployment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
