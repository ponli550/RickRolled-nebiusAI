import { ArrowRight, Share2 } from "lucide-react";
import { navItems, secondaryNavItems } from "../../data/dashboard";
import { cn } from "../../lib/cn";
import type { NavItem } from "../../types";

function Brand() {
  return (
    <div className="flex items-center gap-3 px-6 py-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-900/40">
        <Share2 className="h-6 w-6 text-white" />
      </span>
      <div className="leading-tight">
        <p className="text-lg font-bold text-white">ScamGraph</p>
        <p className="text-xs text-slate-400">See the bigger picture.</p>
      </div>
    </div>
  );
}

interface NavButtonProps {
  item: NavItem;
  active: boolean;
  onSelect: (id: string) => void;
}

function NavButton({ item, active, onSelect }: NavButtonProps) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition",
        active
          ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-900/30"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      )}
    >
      <Icon className="h-5 w-5" />
      {item.label}
    </button>
  );
}

function ReportCard() {
  return (
    <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold text-white">Help make the internet safer.</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-400">
        Report scams. Share insights. Fight together.
      </p>
      <button
        type="button"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500"
      >
        Report a Scam
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

interface SidebarProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

export function Sidebar({ activeId, onNavigate }: SidebarProps) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-navy-900 lg:flex">
      <Brand />

      <nav className="flex-1 space-y-1 px-4">
        {navItems.map((item) => (
          <NavButton key={item.id} item={item} active={activeId === item.id} onSelect={onNavigate} />
        ))}
      </nav>

      <ReportCard />

      <div className="space-y-1 border-t border-white/10 px-4 py-4">
        {secondaryNavItems.map((item) => (
          <NavButton key={item.id} item={item} active={activeId === item.id} onSelect={onNavigate} />
        ))}
      </div>
    </aside>
  );
}
