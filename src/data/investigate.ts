import {
  AlertTriangle,
  Ban,
  Bitcoin,
  Bookmark,
  Building2,
  Calendar,
  CheckCircle2,
  Eye,
  FileText,
  Flag,
  Gift,
  Globe,
  Hash,
  Image,
  Landmark,
  Link2,
  MessageCircle,
  MessageSquare,
  Network,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";
import type {
  ActionTile,
  ActivityStep,
  CaseMetaItem,
  ClaimRow,
  ConnectedEntity,
  EvidenceItem,
  Finding,
  GuideStep,
  Indicator,
  InputTab,
  LiveEntity,
  ResultStat,
} from "../types";

export const inputTabs: InputTab[] = [
  { id: "text", label: "Paste Text / Message", icon: MessageSquare },
  { id: "url", label: "Submit URL", icon: Link2 },
  { id: "screenshot", label: "Upload Screenshot", icon: Image },
];

export const sampleMessage = `Maybank: Your account will be suspended due to unusual activity.
Please verify your identity at https://maybank-secure.com to avoid
account closure.

If you did not perform this action, call +60 12-345 6789 immediately.

Thank you,
Maybank Security Team`;

export const messageMaxLength = 5000;

export const indicators: Indicator[] = [
  {
    id: "domain",
    label: "Domain",
    value: "maybank-secure.com",
    tag: { label: "Suspicious", tone: "red" },
    icon: Globe,
    detected: true,
  },
  {
    id: "phone",
    label: "Phone Number",
    value: "+60 12-345 6789",
    tag: { label: "High Risk", tone: "red" },
    icon: Phone,
    detected: true,
  },
  {
    id: "bank",
    label: "Bank / Keyword",
    value: "Maybank",
    tag: { label: "Known Scam", tone: "amber" },
    icon: Landmark,
    detected: true,
  },
  {
    id: "wallet",
    label: "Crypto Wallet",
    value: "Not detected",
    tag: { label: "None", tone: "gray" },
    icon: Wallet,
    detected: false,
  },
  {
    id: "telegram",
    label: "Telegram Handle",
    value: "Not detected",
    tag: { label: "None", tone: "gray" },
    icon: Send,
    detected: false,
  },
];

export const guideSteps: GuideStep[] = [
  {
    step: 1,
    title: "Extract",
    description:
      "We automatically find key indicators like domains, phone numbers, bank names, wallet addresses and more.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Investigate",
    description:
      "We search across our graph database, scam reports, and community intelligence to find matches and patterns.",
    icon: Network,
  },
  {
    step: 3,
    title: "Verify",
    description:
      "We analyze risk signals, related entities, and cross-reference with known scams to assess the threat level.",
    icon: ShieldCheck,
  },
  {
    step: 4,
    title: "Decide",
    description:
      "You get a clear risk assessment with evidence, so you can take the right action with confidence.",
    icon: CheckCircle2,
  },
];

export const caseMeta: CaseMetaItem[] = [
  { id: "domain", label: "Suspicious Domain", value: "maybank-secure.com", icon: Globe, external: true },
  { id: "phone", label: "Phone Number", value: "+60 12-345 6789", icon: Phone, external: true },
  { id: "case", label: "Case ID", value: "SG-2025-0424-0017" },
  { id: "reported", label: "Reported", value: "24 Apr 2025, 10:24 AM" },
  { id: "source", label: "Source", value: "User Report" },
];

export const stepperLabels = [
  { label: "Extract", description: "Content processed and information extracted" },
  { label: "Investigate", description: "Searching multiple sources and cross-referencing" },
  { label: "Verify", description: "Validating findings with official and trusted sources" },
  { label: "Score", description: "Calculating risk score and generating report" },
];

export const activitySteps: ActivityStep[] = [
  {
    id: "a1",
    time: "10:24 AM",
    title: "Screenshot analyzed",
    description: "User-submitted screenshot processed using AI vision analysis.",
    icon: Image,
  },
  {
    id: "a2",
    time: "10:24 AM",
    title: "Entities extracted",
    description: "Found 8 key entities (domain, phone number, brand name, claims, etc).",
    icon: Network,
  },
  {
    id: "a3",
    time: "10:25 AM",
    title: "Claims identified",
    description: "Detected potential scam claims and high-pressure language.",
    icon: FileText,
  },
  {
    id: "a4",
    time: "10:26 AM",
    title: "Searching regulator sources",
    description: "Checking with Bank Negara Malaysia, SC, MCMC and other agencies.",
    icon: Search,
  },
  {
    id: "a5",
    time: "10:27 AM",
    title: "Checking official domain",
    description: "Verifying domain against official Maybank domains.",
    icon: Globe,
  },
  {
    id: "a6",
    time: "10:28 AM",
    title: "Comparing contact details",
    description: "Cross-referencing phone number with known scam databases.",
    icon: Phone,
  },
  {
    id: "a7",
    time: "10:29 AM",
    title: "Searching public warnings",
    description: "Checking scam reports from community and media sources.",
    icon: Users,
  },
  {
    id: "a8",
    time: "10:30 AM",
    title: "Corroborating evidence",
    description: "Analyzing similar cases and linked entities in ScamGraph database.",
    icon: FileText,
  },
];

export const liveEntities: LiveEntity[] = [
  { id: "e1", label: "Domain", value: "maybank-secure.com", tag: { label: "Suspicious", tone: "red" }, icon: Globe },
  { id: "e2", label: "Phone Number", value: "+60 12-345 6789", tag: { label: "High Risk", tone: "red" }, icon: Phone },
  { id: "e3", label: "Impersonated Brand", value: "Maybank", tag: { label: "Likely Fake", tone: "amber" }, icon: Landmark },
  { id: "e4", label: "Claim / Message", value: "“Your account will be suspended…”", tag: { label: "Suspicious", tone: "red" }, icon: MessageSquare },
  { id: "e5", label: "URL (from screenshot)", value: "https://maybank-secure.com/login", tag: { label: "Suspicious", tone: "red" }, icon: Link2 },
  { id: "e6", label: "Contact Method", value: "Phone Call / WhatsApp", tag: { label: "High Risk", tone: "red" }, icon: Smartphone },
  { id: "e7", label: "Platform", value: "SMS / WhatsApp", tag: { label: "Medium", tone: "amber" }, icon: MessageCircle },
  { id: "e8", label: "Campaign Keyword", value: "Account verification", tag: { label: "Medium", tone: "amber" }, icon: Hash },
];

export const earlySignals: Finding[] = [
  {
    id: "f1",
    title: "Possible domain mismatch",
    description:
      "The domain maybank-secure.com is not an official Maybank domain (official: maybank2u.com.my).",
    tag: { label: "High Risk", tone: "red" },
    icon: Globe,
    tone: "red",
  },
  {
    id: "f2",
    title: "High-pressure language",
    description:
      "Message contains urgent language about account suspension, a common scam tactic.",
    tag: { label: "High Risk", tone: "red" },
    icon: MessageSquare,
    tone: "red",
  },
  {
    id: "f3",
    title: "Contact number not official",
    description:
      "+60 12-345 6789 is not listed on Maybank's official contact channels.",
    tag: { label: "Medium", tone: "amber" },
    icon: Phone,
    tone: "amber",
  },
];

export const resultMeta = {
  domain: "maybank-secure.com",
  type: "Domain",
  investigatedAt: "24 Apr 2025, 2:14 PM",
  caseId: "INV-20250424-0017",
};

export const resultStats: ResultStat[] = [
  {
    id: "score",
    label: "Risk Score",
    value: "87 / 100",
    tag: { label: "High Risk", tone: "red" },
    caption: "Multiple scam indicators detected",
    icon: AlertTriangle,
    tone: "red",
  },
  {
    id: "entities",
    label: "Connected Entities",
    value: "4",
    caption: "phone, bank, wallet, handle",
    icon: Network,
    tone: "indigo",
  },
  {
    id: "reports",
    label: "Community Reports",
    value: "27",
    delta: 63,
    caption: "in the last 30 days",
    icon: FileText,
    tone: "violet",
  },
  {
    id: "first-seen",
    label: "First Seen",
    value: "12 Mar 2025",
    caption: "Active for 43 days",
    icon: Calendar,
    tone: "green",
  },
];

export const resultSummary = {
  headline: "This domain is very likely a scam.",
  body: "maybank-secure.com is a high-risk domain that impersonates Maybank. Our analysis found multiple scam indicators, including lookalike branding, suspicious infrastructure, and strong connections to other known scam entities. We recommend avoiding this site and reporting it to the relevant authorities.",
};

export const claimRows: ClaimRow[] = [
  {
    id: "c1",
    claim: "This is an official Maybank website",
    result: { label: "Contradicted", tone: "red" },
    details: "Domain is not owned by Maybank and uses lookalike name.",
    icon: Landmark,
  },
  {
    id: "c2",
    claim: "The site is safe and secure",
    result: { label: "Suspicious", tone: "amber" },
    details: "Uses valid HTTPS but hosted on suspicious infrastructure.",
    icon: ShieldCheck,
  },
  {
    id: "c3",
    claim: "Offers real investment returns",
    result: { label: "Contradicted", tone: "red" },
    details: "Matches common investment scam patterns and false promises.",
    icon: Gift,
  },
  {
    id: "c4",
    claim: "Operated by Maybank Malaysia",
    result: { label: "Contradicted", tone: "red" },
    details: "No record of this domain in Maybank's official channels.",
    icon: Users,
  },
  {
    id: "c5",
    claim: "User funds are protected",
    result: { label: "Unresolved", tone: "violet" },
    details: "Cannot verify fund protection claims.",
    icon: FileText,
  },
  {
    id: "c6",
    claim: "Customer support is legitimate",
    result: { label: "Supported", tone: "green" },
    details: "Phone number +60 12-345 6789 is actively used, but linked to other scam reports.",
    icon: Phone,
  },
];

export const recommendedActions: ActionTile[] = [
  {
    id: "ra1",
    title: "Do not visit this site",
    description: "Avoid entering any personal or financial information.",
    icon: Ban,
    tone: "red",
  },
  {
    id: "ra2",
    title: "Report to authorities",
    description: "Lodge a report with MCMC or your local cybercrime unit.",
    icon: Flag,
    tone: "blue",
  },
  {
    id: "ra3",
    title: "Warn others",
    description: "Share this result to help protect your community.",
    icon: Eye,
    tone: "violet",
  },
  {
    id: "ra4",
    title: "Add to watchlist",
    description: "Monitor for new activity on this domain.",
    icon: Bookmark,
    tone: "green",
  },
];

export const keyEvidence: EvidenceItem[] = [
  {
    id: "ev1",
    title: "Domain resembles official Maybank site",
    description: "maybank-secure.com is a lookalike domain. Official domain is maybank.com.",
    icon: Link2,
    tone: "indigo",
  },
  {
    id: "ev2",
    title: "Hosted on suspicious infrastructure",
    description: "Domain is hosted on a server associated with multiple scam sites.",
    icon: Building2,
    tone: "indigo",
  },
  {
    id: "ev3",
    title: "Connected to 4 known scam entities",
    description: "Linked to +60 12-345 6789, CIMB Bank, 0x3a4...9cfe, and SweetLove2024.",
    icon: Users,
    tone: "violet",
  },
  {
    id: "ev4",
    title: "27 community reports",
    description: "Users reported this site for investment scams, phishing and fake banking since March 2025.",
    icon: FileText,
    tone: "violet",
  },
  {
    id: "ev5",
    title: "Similar content to known scams",
    description: "Website content and wording match other investment scam templates.",
    icon: AlertTriangle,
    tone: "red",
  },
];

export const connectedEntities: ConnectedEntity[] = [
  { id: "ce1", name: "+60 12-345 6789", tag: { label: "High Risk", tone: "red" }, icon: Phone },
  { id: "ce2", name: "CIMB Bank", tag: { label: "Moderate Risk", tone: "amber" }, icon: Landmark },
  { id: "ce3", name: "0x3a4...9cfe", tag: { label: "High Risk", tone: "red" }, icon: Bitcoin },
  { id: "ce4", name: "SweetLove2024", tag: { label: "Moderate Risk", tone: "amber" }, icon: Send },
];
