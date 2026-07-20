import { createServerFn } from "@tanstack/react-start";

// Deterministic-but-live impact metrics. Values grow with wall-clock time so
// polling clients see the numbers tick up in real time. Swap the base values
// (or the source entirely) when a real data warehouse is wired up.
const EPOCH = Date.UTC(2024, 0, 1);
const MONTH_MS = 30 * 24 * 60 * 60 * 1000;

const BASE = {
  lives: 2_800_000,
  meals: 14_500_000,
  animals: 86_000,
  monthlyGoalCents: 250_000_00,
  monthlyRaisedCents: 172_000_00,
};

// Rates per second (roughly): tuned so counters visibly increment on ~5s polls.
const RATE = {
  lives: 0.42,
  meals: 2.1,
  animals: 0.014,
  raisedCentsPerSec: 118,
};

export const getImpactMetrics = createServerFn({ method: "GET" }).handler(async () => {
  const now = Date.now();
  const secs = Math.max(0, (now - EPOCH) / 1000);

  const lives = Math.floor(BASE.lives + secs * RATE.lives);
  const meals = Math.floor(BASE.meals + secs * RATE.meals);
  const animals = Math.floor(BASE.animals + secs * RATE.animals);

  // Monthly progress resets each 30-day window.
  const monthSecs = ((now - EPOCH) % MONTH_MS) / 1000;
  const raisedCents = Math.min(
    BASE.monthlyGoalCents,
    BASE.monthlyRaisedCents + Math.floor(monthSecs * RATE.raisedCentsPerSec),
  );

  return {
    lives,
    meals,
    animals,
    monthly: {
      raisedCents,
      goalCents: BASE.monthlyGoalCents,
      pct: Math.round((raisedCents / BASE.monthlyGoalCents) * 100),
    },
    updatedAt: new Date(now).toISOString(),
  };
});