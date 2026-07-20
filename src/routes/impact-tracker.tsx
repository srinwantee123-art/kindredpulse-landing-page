import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Activity,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle2,
  Filter,
  Search,
  Sparkles,
  Layers,
  FileCheck,
  Globe,
  Share2,
} from "lucide-react";

export const Route = createFileRoute("/impact-tracker")({
  component: ImpactTrackerPage,
});

interface FieldUpdate {
  id: string;
  pillar: string;
  region: string;
  country: string;
  coordinates: { x: number; y: number };
  timestamp: string;
  title: string;
  updateText: string;
  kpiHighlight: string;
  receiptHash: string;
  image: string;
  verifier: string;
}

const FIELD_UPDATES: FieldUpdate[] = [
  {
    id: "up-1",
    pillar: "Food Security",
    region: "Turkana County",
    country: "Kenya",
    coordinates: { x: 58, y: 55 },
    timestamp: "12 mins ago",
    title: "Solar Irrigation Pumps Installed Across 8 Farming Co-ops",
    updateText:
      "300 solar-powered water filtration & irrigation units deployed across 12 drought-affected villages, providing sustainable crop water for 4,200 local farmers.",
    kpiHighlight: "4,200 Farmers Supported",
    receiptHash: "0x94f8a12e8b94103c84f1a239b819",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    verifier: "Global Farm Watchdog · Field Cert #894",
  },
  {
    id: "up-2",
    pillar: "Education",
    region: "Sylhet District",
    country: "Bangladesh",
    coordinates: { x: 74, y: 44 },
    timestamp: "45 mins ago",
    title: "120 Solar Tablets & E-Library Delivered to Primary School",
    updateText:
      "Delivered 120 satellite-enabled digital tablets equipped with offline STEM curricula, granting 450 remote students access to interactive learning tools.",
    kpiHighlight: "450 Students Enrolled",
    receiptHash: "0x73c1d92a0149e8310ba749f1092e",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    verifier: "EduAsia Verified · Receipt #441",
  },
  {
    id: "up-3",
    pillar: "Medical Assistance",
    region: "Chiquimula",
    country: "Guatemala",
    coordinates: { x: 26, y: 48 },
    timestamp: "2 hours ago",
    title: "Mobile Emergency Clinic Completed 42 Pediatric Surgeries",
    updateText:
      "Mobile medical unit deployed to rural highland communities. 42 cleft lip and orthopedic surgeries completed under 100% sponsored care.",
    kpiHighlight: "42 Surgeries Completed",
    receiptHash: "0x19f4b55e892c10a374b9201f3e1a",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    verifier: "Surgical Aid Alliance · Audit #102",
  },
  {
    id: "up-4",
    pillar: "Disaster Relief",
    region: "Cebu Island",
    country: "Philippines",
    coordinates: { x: 84, y: 52 },
    timestamp: "3 hours ago",
    title: "Emergency Water Filtration Stations Operational Post-Storm",
    updateText:
      "5 high-capacity emergency water purification units deployed following typhoon damage, outputting 15,000 liters of clean drinking water daily.",
    kpiHighlight: "15,000L Water / Day",
    receiptHash: "0x44a10f92b7194c0291e389104b2a",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    verifier: "Pacific Rapid Response · Log #663",
  },
  {
    id: "up-5",
    pillar: "Women Empowerment",
    region: "Arequipa Province",
    country: "Peru",
    coordinates: { x: 32, y: 68 },
    timestamp: "5 hours ago",
    title: "35 Women Micro-Entrepreneurs Receive Zero-Interest Grants",
    updateText:
      "Issued seed funding and digital bookkeeping tools to 35 women artisan weavers to scale local textile exports to regional markets.",
    kpiHighlight: "35 Grants Distributed",
    receiptHash: "0x82b99f1402e1c983a7102b4892c1",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    verifier: "Andean Equity Fund · Batch #91",
  },
  {
    id: "up-6",
    pillar: "Animal Welfare",
    region: "Kyiv Region",
    country: "Ukraine",
    coordinates: { x: 56, y: 28 },
    timestamp: "7 hours ago",
    title: "Rescue Ambulance Deployed for Street Animals & Sanctuary Care",
    updateText:
      "Vaccinated and sheltered 85 animals rescued from displaced rural zones. Distributed 2.5 tons of specialized pet nutrition.",
    kpiHighlight: "85 Rescues Secured",
    receiptHash: "0x51c390291f84b1029e8401a938b2",
    image:
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    verifier: "EuroRescue Direct · Cert #204",
  },
];

function ImpactTrackerPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activePin, setActivePin] = useState<FieldUpdate | null>(null);
  const [selectedReceipt, setSelectedReceipt] = useState<FieldUpdate | null>(null);
  const [liveLivesCount, setLiveLivesCount] = useState(128402);

  // Live counter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveLivesCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    "All",
    "Education",
    "Food Security",
    "Medical Assistance",
    "Disaster Relief",
    "Women Empowerment",
    "Animal Welfare",
  ];

  const filteredUpdates = FIELD_UPDATES.filter(
    (u) => activeFilter === "All" || u.pillar.toLowerCase() === activeFilter.toLowerCase(),
  );

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,color-mix(in_oklab,var(--primary-soft)_70%,transparent),transparent)]" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-strong shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Real-Time Operational Stream
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Live Impact Ledger
          </h1>

          {/* Big live counter banner */}
          <div className="mt-8 inline-flex flex-col items-center rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <div className="text-4xl font-bold tracking-tight text-primary-deep sm:text-6xl lg:text-7xl tabular-nums">
              +{liveLivesCount.toLocaleString()}
            </div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Lives Impacted This Month · Live Counter
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: INTERACTIVE MAP CONTAINER */}
      <section className="border-t border-border bg-card/40 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" /> Active Distribution Hotspots
              </h2>
              <p className="text-xs text-muted-foreground">
                Click pins to inspect verified field operational logs
              </p>
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeFilter === cat
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Simulated Geographic Map Component */}
          <div className="relative h-[440px] w-full overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-[#0E4D40] via-[#0E3B33] to-[#0A2B25] p-6 shadow-[var(--shadow-elegant)]">
            {/* Top Right Live Telemetry Badge */}
            <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />6 Field Networks
              Live
            </div>

            {/* SVG World Map Grid & Landmasses Representation */}
            <svg className="h-full w-full opacity-90" viewBox="0 0 1000 500" fill="none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="1"
                  />
                </pattern>
                <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.16)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.06)" />
                </linearGradient>
              </defs>

              {/* Grid Background */}
              <rect width="1000" height="500" fill="url(#grid)" />

              {/* Latitude Grid Lines & Labels */}
              <line
                x1="0"
                y1="125"
                x2="1000"
                y2="125"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <text
                x="12"
                y="120"
                fill="rgba(255, 255, 255, 0.4)"
                fontSize="10"
                fontFamily="sans-serif"
              >
                45°N
              </text>

              <line
                x1="0"
                y1="250"
                x2="1000"
                y2="250"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1.25"
                strokeDasharray="6 6"
              />
              <text
                x="12"
                y="245"
                fill="rgba(243, 156, 18, 0.7)"
                fontSize="10"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                0° EQUATOR
              </text>

              <line
                x1="0"
                y1="375"
                x2="1000"
                y2="375"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <text
                x="12"
                y="370"
                fill="rgba(255, 255, 255, 0.4)"
                fontSize="10"
                fontFamily="sans-serif"
              >
                45°S
              </text>

              {/* Longitude Grid Lines */}
              <line
                x1="250"
                y1="0"
                x2="250"
                y2="500"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <line
                x1="500"
                y1="0"
                x2="500"
                y2="500"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1.25"
                strokeDasharray="6 6"
              />
              <line
                x1="750"
                y1="0"
                x2="750"
                y2="500"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* ACCURATE GEOGRAPHIC CONTINENT VECTOR PATHS */}
              {/* North America */}
              <path
                d="M 60 70 L 140 50 L 220 55 L 290 80 L 310 130 L 270 170 L 240 160 L 210 200 L 230 230 L 190 230 L 170 190 L 130 170 L 90 140 Z M 320 30 L 380 20 L 390 70 L 340 85 Z"
                fill="url(#landGrad)"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="1.25"
                strokeLinejoin="round"
              />

              {/* South America */}
              <path
                d="M 230 240 L 310 230 L 350 270 L 330 350 L 280 430 L 255 420 L 260 330 L 220 280 Z"
                fill="url(#landGrad)"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="1.25"
                strokeLinejoin="round"
              />

              {/* Europe */}
              <path
                d="M 460 100 L 510 70 L 580 80 L 600 130 L 540 150 L 490 140 L 460 120 Z M 500 50 L 550 35 L 540 85 L 500 80 Z"
                fill="url(#landGrad)"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="1.25"
                strokeLinejoin="round"
              />

              {/* Africa */}
              <path
                d="M 440 160 L 570 160 L 630 220 L 590 300 L 540 370 L 490 370 L 460 290 L 430 210 Z M 640 310 L 655 310 L 645 350 L 635 340 Z"
                fill="url(#landGrad)"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="1.25"
                strokeLinejoin="round"
              />

              {/* Asia */}
              <path
                d="M 580 80 L 750 45 L 900 65 L 920 130 L 860 180 L 780 220 L 720 250 L 690 180 L 610 130 Z M 700 180 L 760 180 L 735 240 Z M 770 230 L 880 240 L 860 280 L 790 270 Z M 895 110 L 915 110 L 905 160 Z"
                fill="url(#landGrad)"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="1.25"
                strokeLinejoin="round"
              />

              {/* Australia & Oceania */}
              <path
                d="M 780 320 L 890 310 L 910 370 L 860 410 L 770 380 Z M 920 380 L 935 380 L 925 420 Z"
                fill="url(#landGrad)"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="1.25"
                strokeLinejoin="round"
              />

              {/* Region Labels */}
              <text
                x="160"
                y="110"
                fill="rgba(255, 255, 255, 0.3)"
                fontSize="10"
                fontWeight="bold"
                letterSpacing="2"
              >
                AMERICAS
              </text>
              <text
                x="500"
                y="210"
                fill="rgba(255, 255, 255, 0.3)"
                fontSize="10"
                fontWeight="bold"
                letterSpacing="2"
              >
                AFRICA
              </text>
              <text
                x="500"
                y="110"
                fill="rgba(255, 255, 255, 0.3)"
                fontSize="10"
                fontWeight="bold"
                letterSpacing="2"
              >
                EUROPE
              </text>
              <text
                x="740"
                y="110"
                fill="rgba(255, 255, 255, 0.3)"
                fontSize="10"
                fontWeight="bold"
                letterSpacing="2"
              >
                ASIA
              </text>
              <text
                x="810"
                y="350"
                fill="rgba(255, 255, 255, 0.3)"
                fontSize="10"
                fontWeight="bold"
                letterSpacing="2"
              >
                OCEANIA
              </text>

              {/* Structured Field Arcs */}
              <path
                d="M 580 280 Q 660 180, 740 220 M 740 220 Q 790 230, 840 260 M 230 230 Q 255 285, 280 340 M 560 140 Q 570 210, 580 280"
                stroke="#F39C12"
                strokeWidth="1.75"
                strokeDasharray="6 4"
              />
            </svg>

            {/* Dynamic Map Hotspot Pins */}
            {filteredUpdates.map((u) => {
              const isActive = activePin?.id === u.id;
              return (
                <div
                  key={u.id}
                  style={{ left: `${u.coordinates.x}%`, top: `${u.coordinates.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    onClick={() => setActivePin(isActive ? null : u)}
                    className="group relative flex items-center justify-center focus:outline-none"
                  >
                    <span className="absolute h-8 w-8 animate-ping rounded-full bg-accent/40" />
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg border border-white/40 transition-transform group-hover:scale-125">
                      <MapPin className="h-3.5 w-3.5 fill-current" />
                    </span>
                  </button>
                </div>
              );
            })}

            {/* Selected Pin Popover Card */}
            {activePin && (
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 rounded-2xl border border-white/20 bg-black/85 p-4 text-white backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground uppercase tracking-wider">
                    {activePin.pillar}
                  </span>
                  <button
                    onClick={() => setActivePin(null)}
                    className="text-xs text-white/70 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                <h4 className="mt-2 text-sm font-bold text-white leading-tight">
                  {activePin.title}
                </h4>
                <div className="mt-1 text-xs text-white/70 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-accent" /> {activePin.region}, {activePin.country}
                </div>
                <p className="mt-2 text-[11px] text-white/80 line-clamp-2">
                  {activePin.updateText}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-2 text-[11px]">
                  <span className="font-semibold text-accent">{activePin.kpiHighlight}</span>
                  <button
                    onClick={() => setSelectedReceipt(activePin)}
                    className="text-white/90 underline font-mono hover:text-accent"
                  >
                    Receipt Log
                  </button>
                </div>
              </div>
            )}

            <div className="absolute top-4 right-4 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white/80 backdrop-blur-md flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> 6 Field
              Networks Live
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DYNAMIC PROJECT FEED / LEDGER */}
      <section className="border-t border-border bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Verified Stream
              </div>
              <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                Field Deployment Feed
              </h2>
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary" /> Auto-synced with regional logistics
              logs
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredUpdates.map((update) => (
              <article
                key={update.id}
                className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                {/* Header Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={update.image}
                    alt={update.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {update.pillar}
                  </div>
                  <div className="absolute top-3 right-3 rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-accent-foreground shadow-xs">
                    {update.kpiHighlight}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 font-medium text-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" /> {update.region},{" "}
                      {update.country}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="h-3 w-3" /> {update.timestamp}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground leading-snug">
                    {update.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground flex-1">
                    {update.updateText}
                  </p>

                  <div className="mt-5 border-t border-border pt-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] text-muted-foreground">{update.verifier}</span>
                      <button
                        onClick={() => setSelectedReceipt(update)}
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-primary hover:underline"
                      >
                        <span>Receipt</span>
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED RECEIPT MODAL */}
      {selectedReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <h3 className="font-bold text-foreground text-base sm:text-lg">
                  Verified Field Receipt
                </h3>
              </div>
              <button
                onClick={() => setSelectedReceipt(null)}
                className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-3 text-xs sm:text-sm">
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Receipt ID</span>
                  <span className="font-mono">{selectedReceipt.id}</span>
                </div>
                <div className="mt-2 text-base font-bold text-foreground">
                  {selectedReceipt.title}
                </div>
                <div className="mt-1 text-xs text-primary font-semibold">
                  {selectedReceipt.kpiHighlight}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg border border-border bg-muted/40 p-3">
                  <span className="text-muted-foreground block text-[10px]">Location</span>
                  <span className="font-semibold text-foreground">
                    {selectedReceipt.region}, {selectedReceipt.country}
                  </span>
                </div>
                <div className="rounded-lg border border-border bg-muted/40 p-3">
                  <span className="text-muted-foreground block text-[10px]">Auditor Sign-Off</span>
                  <span className="font-semibold text-foreground">{selectedReceipt.verifier}</span>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-3 font-mono text-[11px]">
                <span className="text-muted-foreground block text-[10px] uppercase font-sans mb-1">
                  Immutable Receipt Hash
                </span>
                <span className="text-primary break-all">{selectedReceipt.receiptHash}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setSelectedReceipt(null)}
                className="rounded-xl border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
              >
                Close
              </button>
              <button
                onClick={() =>
                  alert(`Receipt hash ${selectedReceipt.receiptHash} verified on public ledger.`)
                }
                className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Verify on Public Ledger
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
