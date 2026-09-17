import {
  AlertTriangle,
  Bitcoin,
  Bookmark,
  Landmark,
  LayoutDashboard,
  LogOut,
  Network,
  Phone,
  Send,
  Settings,
  ShieldCheck,
  Search,
  FileText,
  Users,
  Waypoints,
} from "lucide-react";
import type {
  CategorySlice,
  Investigation,
  NavItem,
  StatCardData,
  ThreatEvent,
  TrendPoint,
  TrendSeries,
} from "../types";

export const user = {
  name: "Jane Doe",
  role: "Investigator",
  initials: "JD",
  notifications: 3,
};

export const todayLabel = new Date().toLocaleDateString("en-GB", {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "investigate", label: "Investigate", icon: Search },
  { id: "graph", label: "Graph Explorer", icon: Network },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "watchlist", label: "Watchlist", icon: Waypoints },
  { id: "saved", label: "Saved Cases", icon: Bookmark },
];

export const secondaryNavItems: NavItem[] = [
  { id: "settings", label: "Settings", icon: Settings },
  { id: "signout", label: "Sign Out", icon: LogOut },
];

export const stats: StatCardData[] = [
  {
    id: "indicators",
    label: "Scam Indicators Detected",
    value: "1,248",
    delta: 32,
    caption: "vs last month",
    icon: AlertTriangle,
    tone: "red",
  },
  {
    id: "entities",
    label: "Known Scam Entities",
    value: "12,480",
    delta: 18,
    caption: "in our graph database",
    icon: Network,
    tone: "indigo",
  },
  {
    id: "reports",
    label: "Reports from Community",
    value: "892",
    delta: 45,
    caption: "this month",
    icon: Users,
    tone: "indigo",
  },
  {
    id: "losses",
    label: "Potential Losses Prevented",
    value: "RM 3.4M",
    delta: 67,
    caption: "estimated value",
    icon: ShieldCheck,
    tone: "green",
  },
];

export const investigations: Investigation[] = [
  { id: "inv-1", query: "maybank-secure.com", type: "Domain", score: 87, updatedAt: "5 hours ago", icon: Network },
  { id: "inv-2", query: "+60 12-345 6789", type: "Phone Number", score: 92, updatedAt: "2 hours ago", icon: Phone },
  { id: "inv-3", query: "CIMB Bank", type: "Keyword", score: 64, updatedAt: "1 day ago", icon: Landmark },
  { id: "inv-4", query: "0x3a4...9cfe", type: "Crypto Wallet", score: 78, updatedAt: "1 day ago", icon: Bitcoin },
  { id: "inv-5", query: "SweetLove2024", type: "Telegram Handle", score: 51, updatedAt: "2 days ago", icon: Send },
];

export const trendSeries: TrendSeries[] = [
  { key: "scamCalls", label: "Scam Calls", color: "#ef4444" },
  { key: "phishing", label: "Phishing Sites", color: "#3b82f6" },
  { key: "investment", label: "Investment Scams", color: "#8b5cf6" },
  { key: "job", label: "Job Scams", color: "#22c55e" },
];

export const scamTrends: TrendPoint[] = [
  { date: "Mar 25", scamCalls: 205, phishing: 130, investment: 85, job: 28 },
  { date: "Mar 28", scamCalls: 240, phishing: 155, investment: 105, job: 38 },
  { date: "Apr 1", scamCalls: 228, phishing: 182, investment: 118, job: 44 },
  { date: "Apr 4", scamCalls: 258, phishing: 172, investment: 132, job: 52 },
  { date: "Apr 8", scamCalls: 288, phishing: 208, investment: 148, job: 60 },
  { date: "Apr 11", scamCalls: 272, phishing: 228, investment: 158, job: 68 },
  { date: "Apr 15", scamCalls: 308, phishing: 218, investment: 172, job: 78 },
  { date: "Apr 18", scamCalls: 330, phishing: 248, investment: 164, job: 74 },
  { date: "Apr 22", scamCalls: 320, phishing: 240, investment: 180, job: 90 },
];

export const topCategories: CategorySlice[] = [
  { name: "Investment Scams", value: 38, color: "#ef4444" },
  { name: "Phishing", value: 22, color: "#3b82f6" },
  { name: "Job Scams", value: 15, color: "#8b5cf6" },
  { name: "E-commerce", value: 12, color: "#22c55e" },
  { name: "Romance Scams", value: 8, color: "#f59e0b" },
  { name: "Others", value: 5, color: "#94a3b8" },
];

export const threatFeed: ThreatEvent[] = [
  {
    id: "t-1",
    time: "12 min ago",
    icon: Network,
    tone: "violet",
    message: [
      { text: "New scam domain detected: " },
      { text: "maybank-update.com", strong: true },
    ],
  },
  {
    id: "t-2",
    time: "34 min ago",
    icon: Phone,
    tone: "red",
    message: [{ text: "27 reports linked to " }, { text: "+60 12-987 6543", strong: true }],
  },
  {
    id: "t-3",
    time: "1 hour ago",
    icon: Network,
    tone: "indigo",
    message: [{ text: "New cluster identified (152 related entities)" }],
  },
  {
    id: "t-4",
    time: "2 hours ago",
    icon: Bitcoin,
    tone: "amber",
    message: [{ text: "High-risk wallet flagged: " }, { text: "0x9f2...3b7c", strong: true }],
  },
  {
    id: "t-5",
    time: "3 hours ago",
    icon: AlertTriangle,
    tone: "green",
    message: [{ text: "Spike in job scam reports (+63%)" }],
  },
];

export const searchExamples = [
  "+60 12-345 6789",
  "maybank-secure.com",
  "CIMB Bank",
  "0x3a4...9cfe",
  "SweetLove2024",
];
