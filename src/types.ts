import type { LucideIcon } from "lucide-react";
import type { TagTone, Tone } from "./lib/tones";

export type RiskLevel = "high" | "moderate" | "low";

export interface StatCardData {
  id: string;
  label: string;
  value: string;
  delta: number;
  caption: string;
  icon: LucideIcon;
  tone: Tone;
}

export interface Investigation {
  id: string;
  query: string;
  type: string;
  score: number;
  updatedAt: string;
  icon: LucideIcon;
}

export interface CategorySlice {
  name: string;
  value: number;
  color: string;
}

export interface FeedSegment {
  text: string;
  strong?: boolean;
}

export interface ThreatEvent {
  id: string;
  time: string;
  icon: LucideIcon;
  tone: Tone;
  message: FeedSegment[];
}

export interface TrendPoint {
  date: string;
  scamCalls: number;
  phishing: number;
  investment: number;
  job: number;
}

export interface TrendSeries {
  key: keyof Omit<TrendPoint, "date">;
  label: string;
  color: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface TagData {
  label: string;
  tone: TagTone;
}

export type Phase = "new" | "progress" | "result";

export type InputMode = "text" | "url" | "screenshot";

export interface InputTab {
  id: InputMode;
  label: string;
  icon: LucideIcon;
}

export interface Indicator {
  id: string;
  label: string;
  value: string;
  tag: TagData;
  icon: LucideIcon;
  detected: boolean;
}

export interface GuideStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseMetaItem {
  id: string;
  label: string;
  value: string;
  icon?: LucideIcon;
  external?: boolean;
}

export interface ActivityStep {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export type ActivityStatus = "completed" | "in-progress" | "pending";

export interface LiveEntity {
  id: string;
  label: string;
  value: string;
  tag: TagData;
  icon: LucideIcon;
}

export interface Finding {
  id: string;
  title: string;
  description: string;
  tag: TagData;
  icon: LucideIcon;
  tone: Tone;
}

export interface ResultStat {
  id: string;
  label: string;
  value: string;
  delta?: number;
  tag?: TagData;
  caption: string;
  icon: LucideIcon;
  tone: Tone;
}

export interface ClaimRow {
  id: string;
  claim: string;
  result: TagData;
  details: string;
  icon: LucideIcon;
}

export interface ActionTile {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: Tone;
}

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: Tone;
}

export interface ConnectedEntity {
  id: string;
  name: string;
  tag: TagData;
  icon: LucideIcon;
}
