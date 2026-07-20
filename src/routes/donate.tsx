import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ShieldCheck,
  BadgeCheck,
  CreditCard,
  Apple,
  Wallet,
  Bitcoin,
  Check,
  ArrowRight,
  Heart,
  Quote,
  Calculator,
  Lock,
  Sparkles,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/donate")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      cause: (search.cause as string) || "general",
    };
  },
  component: DonatePage,
});

const TESTIMONIALS: Record<string, { quote: string; author: string; role: string; location: string; image: string }> = {
  education: {
    quote: "Receiving the STEM scholarship and solar tablet changed everything. I am now training to become my village's first software engineer.",
    author: "Aminata Diallo",
    role: "Scholarship Recipient",
    location: "Rural Kenya",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
  },
  food: {
    quote: "The solar irrigation pump doubled our crop harvest during the dry season. We can now feed our children and supply local markets.",
    author: "Mateo Silva",
    role: "Farming Co-op Leader",
    location: "Chiquimula, Guatemala",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80",
  },
  medical: {
    quote: "My 4-year-old son received emergency surgery within 48 hours of the mobile surgical unit arriving. I will forever be grateful.",
    author: "Priya Sharma",
    role: "Mother & Community Member",
    location: "Sylhet, Bangladesh",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80",
  },
  disaster: {
    quote: "Clean water was available at our shelter within hours after the cyclone destroyed local wells. It saved hundreds from waterborne disease.",
    author: "Carlos Reyes",
    role: "Emergency Volunteer",
    location: "Cebu, Philippines",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80",
  },
  women: {
    quote: "With the zero-interest microgrant, I expanded my artisan weaving workshop and hired four women from my neighborhood.",
    author: "Luz Maria Quispe",
    role: "Entrepreneur",
    location: "Arequipa, Peru",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  animal: {
    quote: "Our mobile rescue ambulance has sheltered over 800 street animals this year with full medical care and vaccinations.",
    author: "Dr. Olena Koval",
    role: "Veterinary Officer",
    location: "Kyiv, Ukraine",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80",
  },
  general: {
    quote: "KindredPulse routes 92 cents of every dollar directly to high-priority field operations. Your contribution creates immediate impact.",
    author: "Dr. Elena Vance",
    role: "Chairwoman & Field Logistics Chief",
    location: "Global Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
};

function DonatePage() {
  const searchParams = useSearch({ from: "/donate" });
  const initialCause = searchParams.cause || "general";

  const [cadence, setCadence] = useState<"monthly" | "onetime">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [cause, setCause] = useState<string>(initialCause);
  const [step, setStep] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple" | "google" | "crypto">("card");

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const amounts = ["25", "50", "100", "250"];

  const effectiveAmount = Number(customAmount || selectedAmount || 0);

  const currentTestimonial = TESTIMONIALS[cause] || TESTIMONIALS.general;

  // Estimated tax savings at 24% bracket
  const taxSavings = (effectiveAmount * 0.24).toFixed(2);
  const estimatedMeals = Math.max(1, Math.round(effectiveAmount * 3.2));
  const estimatedMedicalVisits = Math.max(1, Math.round(effectiveAmount * 0.6));

  const handleCompleteDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email for your 501(c)(3) tax receipt.");
      return;
    }
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <Header />

      <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">

            {/* LEFT COLUMN: EMOTIONAL ANCHOR & TESTIMONIAL */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent-strong">
                  <Heart className="h-3.5 w-3.5 fill-current" /> Direct High-Impact Giving
                </span>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Fuel Change with Every Dollar
                </h1>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  92% of your gift goes directly to ground operations. Fully tax-deductible under IRS 501(c)(3) regulations.
                </p>
              </div>

              {/* Beneficiary Testimonial Card */}
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
                <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
                <div className="flex items-center gap-4">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    className="h-16 w-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="font-bold text-foreground text-base">{currentTestimonial.author}</h3>
                    <p className="text-xs text-primary font-medium">{currentTestimonial.role}</p>
                    <p className="text-[11px] text-muted-foreground">{currentTestimonial.location}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm italic leading-relaxed text-foreground/90">
                  "{currentTestimonial.quote}"
                </p>

                <div className="mt-4 rounded-xl bg-primary-soft/60 p-3 text-xs text-primary-deep font-medium flex items-center justify-between">
                  <span>Selected Cause Preview:</span>
                  <span className="font-bold uppercase text-primary">{cause}</span>
                </div>
              </div>

              {/* Dynamic Impact Calculator Preview */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-4">
                  <Calculator className="h-4 w-4 text-primary" /> Estimated Direct Field Output
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-2xl border border-border bg-background p-4 text-center">
                    <div className="text-2xl font-bold text-primary-deep">{estimatedMeals}</div>
                    <div className="mt-1 text-muted-foreground">School Meals Provided</div>
                  </div>
                  <div className="rounded-2xl border border-border bg-background p-4 text-center">
                    <div className="text-2xl font-bold text-primary-deep">{estimatedMedicalVisits}</div>
                    <div className="mt-1 text-muted-foreground">Clinic Visits Funded</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                  <span>Est. Tax Savings (24% Bracket):</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">${taxSavings}</span>
                </div>
              </div>

              {/* Security & Trust Badges */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Charity Navigator 100%</span>
                <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" /> GuideStar Platinum</span>
                <span className="inline-flex items-center gap-1.5"><Lock className="h-4 w-4 text-primary" /> 256-Bit SSL Encrypted</span>
              </div>
            </div>

            {/* RIGHT COLUMN: CHECKOUT FUNNEL CARD */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-[var(--shadow-elegant)]">

                {/* Step indicator */}
                <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
                  {[
                    { s: 1, title: "1. Amount" },
                    { s: 2, title: "2. Allocation" },
                    { s: 3, title: "3. Payment" },
                  ].map((item) => (
                    <button
                      key={item.s}
                      onClick={() => setStep(item.s)}
                      className={`flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors ${
                        step === item.s
                          ? "text-primary border-b-2 border-primary pb-1"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className={`grid h-6 w-6 place-items-center rounded-full text-xs ${
                        step === item.s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                        {item.s}
                      </span>
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>

                <form onSubmit={handleCompleteDonation}>
                  {/* STEP 1: SELECTION (Monthly vs One-time + Amount) */}
                  {step === 1 && (
                    <div className="space-y-6">
                      {/* Cadence Toggle */}
                      <div className="grid grid-cols-2 rounded-full bg-muted p-1">
                        {(["monthly", "onetime"] as const).map((c) => (
                          <button
                            type="button"
                            key={c}
                            onClick={() => setCadence(c)}
                            className={`rounded-full py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                              cadence === c
                                ? "bg-card text-foreground shadow-[var(--shadow-card)]"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {c === "monthly" ? "Give Monthly" : "One-Time Gift"}
                          </button>
                        ))}
                      </div>

                      {/* Quick Select Chips */}
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-3">
                          Select Giving Amount (USD)
                        </label>
                        <div className="grid grid-cols-4 gap-2.5">
                          {amounts.map((a) => (
                            <button
                              type="button"
                              key={a}
                              onClick={() => { setSelectedAmount(a); setCustomAmount(""); }}
                              className={`rounded-xl border py-3.5 text-sm sm:text-base font-bold transition-all ${
                                selectedAmount === a && !customAmount
                                  ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
                                  : "border-border bg-background text-foreground hover:border-primary/50"
                              }`}
                            >
                              ${a}
                            </button>
                          ))}
                        </div>
                        <div className="mt-3">
                          <input
                            inputMode="numeric"
                            placeholder="Custom Amount ($)"
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value.replace(/[^\d]/g, ""));
                              setSelectedAmount("");
                            }}
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-center text-sm font-semibold placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--gradient-accent)] py-4 text-sm font-bold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:scale-[1.01]"
                      >
                        <span>Next: Choose Allocation (${effectiveAmount})</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  {/* STEP 2: ALLOCATION (Pillar Selection) */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2">
                          Select Program Allocation
                        </label>
                        <select
                          value={cause}
                          onChange={(e) => setCause(e.target.value)}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground focus:border-primary focus:outline-none"
                        >
                          <option value="general">General Fund (Where Most Needed — Recommended)</option>
                          <option value="education">Education for Children</option>
                          <option value="food">Food Security & Agriculture</option>
                          <option value="medical">Medical Assistance & Surgeries</option>
                          <option value="disaster">Disaster Relief Rapid Response</option>
                          <option value="women">Women Empowerment Micro-Grants</option>
                          <option value="animal">Animal Welfare & Shelter</option>
                        </select>
                      </div>

                      <div className="rounded-xl border border-border bg-muted/30 p-4 text-xs space-y-2">
                        <div className="flex justify-between text-muted-foreground">
                          <span>Giving Amount:</span>
                          <span className="font-bold text-foreground font-mono">${effectiveAmount} ({cadence})</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Direct Field Deployment (92%):</span>
                          <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">${(effectiveAmount * 0.92).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Field Logistics (5%):</span>
                          <span className="font-mono">${(effectiveAmount * 0.05).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Audit & Compliance (3%):</span>
                          <span className="font-mono">${(effectiveAmount * 0.03).toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="rounded-xl border border-border px-4 py-3 text-xs font-semibold text-foreground hover:bg-muted"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-accent)] py-3 text-sm font-bold text-accent-foreground shadow-[var(--shadow-accent)]"
                        >
                          <span>Proceed to Payment</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: PAYMENT INTERFACE */}
                  {step === 3 && (
                    <div className="space-y-6">
                      {/* Payment Method Switcher */}
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { id: "card", label: "Card", Icon: CreditCard },
                          { id: "apple", label: "Apple", Icon: Apple },
                          { id: "google", label: "Google", Icon: Wallet },
                          { id: "crypto", label: "Crypto", Icon: Bitcoin },
                        ].map(({ id, label, Icon }) => (
                          <button
                            type="button"
                            key={id}
                            onClick={() => setPaymentMethod(id as any)}
                            className={`flex flex-col items-center justify-center rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                              paymentMethod === id
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-background text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-4 w-4 mb-1" />
                            {label}
                          </button>
                        ))}
                      </div>

                      {/* Donor Information */}
                      <div className="space-y-3">
                        <div>
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Jane Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                            Email Address (for 501(c)(3) Tax Receipt)
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="jane@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Card Form */}
                      {paymentMethod === "card" && (
                        <div className="space-y-3 border-t border-border pt-4">
                          <div>
                            <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                              Card Number
                            </label>
                            <input
                              type="text"
                              placeholder="4532 •••• •••• 8892"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm font-mono text-foreground focus:border-primary focus:outline-none"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                                Expiry (MM/YY)
                              </label>
                              <input
                                type="text"
                                placeholder="08/28"
                                value={expiry}
                                onChange={(e) => setExpiry(e.target.value)}
                                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm font-mono text-foreground focus:border-primary focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                                CVC / CVV
                              </label>
                              <input
                                type="text"
                                placeholder="312"
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value)}
                                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm font-mono text-foreground focus:border-primary focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {paymentMethod === "crypto" && (
                        <div className="rounded-xl border border-border bg-muted/40 p-4 text-xs text-center space-y-2">
                          <Bitcoin className="h-8 w-8 text-amber-500 mx-auto" />
                          <p className="font-semibold text-foreground">USDC & BTC Direct Giving</p>
                          <code className="block bg-background p-2 rounded text-[10px] font-mono break-all border border-border">
                            0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                          </code>
                        </div>
                      )}

                      {(paymentMethod === "apple" || paymentMethod === "google") && (
                        <div className="rounded-xl border border-border bg-muted/40 p-4 text-xs text-center text-muted-foreground">
                          Express payment will prompt upon clicking Complete.
                        </div>
                      )}

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="rounded-xl border border-border px-4 py-3 text-xs font-semibold text-foreground hover:bg-muted"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-accent)] py-3.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform hover:scale-[1.01]"
                        >
                          <Lock className="h-4 w-4" />
                          <span>Complete ${effectiveAmount} Donation</span>
                        </button>
                      </div>
                    </div>
                  )}
                </form>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* SUCCESS CONFIRMATION MODAL */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 text-center shadow-2xl">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-500">
              <Check className="h-8 w-8" strokeWidth={3} />
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
              Thank You for Your Generosity!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Your gift of <strong className="text-foreground">${effectiveAmount}</strong> to <strong className="text-foreground uppercase">{cause}</strong> has been processed securely.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-background p-4 text-xs text-left space-y-2">
              <div className="flex justify-between text-muted-foreground">
                <span>Receipt Number:</span>
                <span className="font-mono text-foreground font-semibold">KP-2026-88194</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax-Deductible Status:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">IRS 501(c)(3) Eligible</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Confirmation Sent To:</span>
                <span className="font-medium text-foreground">{email || "donor@kindredpulse.org"}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={() => {
                  alert("Simulated PDF 501(c)(3) tax receipt downloaded.");
                }}
                className="w-full rounded-xl bg-primary py-3 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Download Tax Receipt (PDF)
              </button>
              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full rounded-xl border border-border py-2.5 text-xs font-semibold text-foreground hover:bg-muted"
              >
                Return to Platform
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
