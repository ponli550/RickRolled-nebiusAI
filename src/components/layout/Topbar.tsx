import { Bell, ChevronDown, Search } from "lucide-react";
import { user } from "../../data/dashboard";

export function Topbar() {
  return (
    <header className="flex items-center gap-6 border-b border-slate-200 bg-white px-8 py-4">
      <div className="relative flex-1 max-w-2xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search by phone number, bank account, domain, or keyword..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-16 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] font-medium text-slate-400">
          &#8984; K
        </span>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button
          type="button"
          className="relative rounded-full p-2 text-slate-500 transition hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            {user.notifications}
          </span>
        </button>

        <button type="button" className="flex items-center gap-3 rounded-xl p-1 pr-2 transition hover:bg-slate-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
            {user.initials}
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold leading-tight text-slate-900">{user.name}</span>
            <span className="block text-xs leading-tight text-slate-500">{user.role}</span>
          </span>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </header>
  );
}
