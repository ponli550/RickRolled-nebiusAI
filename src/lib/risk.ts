import type { RiskLevel } from "../types";

const RISK_STYLES: Record<RiskLevel, { label: string; className: string; dot: string }> = {
  high: { label: "High Risk", className: "bg-red-100 text-red-600", dot: "bg-red-500" },
  moderate: { label: "Moderate", className: "bg-amber-100 text-amber-600", dot: "bg-amber-500" },
  low: { label: "Low Risk", className: "bg-emerald-100 text-emerald-600", dot: "bg-emerald-500" },
};

export function riskLevel(score: number): RiskLevel {
  if (score >= 75) return "high";
  if (score >= 50) return "moderate";
  return "low";
}

export function riskStyle(score: number) {
  return RISK_STYLES[riskLevel(score)];
}
