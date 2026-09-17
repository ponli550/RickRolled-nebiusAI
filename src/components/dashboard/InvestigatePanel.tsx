import { useState } from "react";
import { Search, Zap } from "lucide-react";
import { searchExamples } from "../../data/dashboard";
import { Card } from "../ui/Card";

export function InvestigatePanel() {
  const [query, setQuery] = useState("");

  return (
    <Card className="border-brand-100 bg-brand-50/60 p-6">
      <div className="flex items-center gap-2">
        <Zap className="h-5 w-5 text-brand-600" />
        <h2 className="text-base font-semibold text-slate-900">Investigate a potential scam</h2>
      </div>
      <p className="mt-1 text-sm text-slate-500">Start by searching any suspicious information.</p>

      <div className="relative mt-4">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="e.g. phone number, domain, username..."
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <button
        type="button"
        className="mt-3 w-full rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        Search
      </button>

      <p className="mt-4 text-xs text-slate-500">Or try an example:</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {searchExamples.map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => setQuery(example)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-brand-300 hover:text-brand-600"
          >
            {example}
          </button>
        ))}
      </div>
    </Card>
  );
}
