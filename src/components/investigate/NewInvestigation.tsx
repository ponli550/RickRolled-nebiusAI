import { useState } from "react";
import { ArrowRight, ChevronRight, Image as ImageIcon, Link2, Lock, Pencil, Search, Sparkles } from "lucide-react";
import { indicators, inputTabs, messageMaxLength, sampleMessage } from "../../data/investigate";
import { cn } from "../../lib/cn";
import type { InputMode } from "../../types";
import { RecentInvestigations } from "../dashboard/RecentInvestigations";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";
import { HowItWorks } from "./HowItWorks";

const INPUT_CLASS =
  "w-full rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100";

function TextInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <>
      <label className="text-sm font-medium text-slate-600">Paste a message, email, or text content</label>
      <div className="relative mt-2">
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value.slice(0, messageMaxLength))}
          rows={8}
          className={cn(INPUT_CLASS, "resize-none p-4 leading-relaxed")}
        />
        <span className="absolute bottom-3 right-4 text-xs text-slate-400">
          {value.length}/{messageMaxLength}
        </span>
      </div>
    </>
  );
}

function UrlInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <>
      <label className="text-sm font-medium text-slate-600">Submit a URL to investigate</label>
      <div className="relative mt-2">
        <Link2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="https://suspicious-site.com/login"
          className={cn(INPUT_CLASS, "py-3 pl-11 pr-4")}
        />
      </div>
    </>
  );
}

function ScreenshotInput() {
  return (
    <>
      <label className="text-sm font-medium text-slate-600">Upload a screenshot</label>
      <div className="mt-2 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/60 px-6 py-10 text-center">
        <ImageIcon className="h-6 w-6 text-slate-400" />
        <p className="text-sm text-slate-500">
          Drag &amp; drop a screenshot here, or <span className="font-medium text-brand-600">browse</span>
        </p>
        <p className="text-xs text-slate-400">PNG, JPG up to 10MB</p>
      </div>
    </>
  );
}

interface NewInvestigationProps {
  onInvestigate: () => void;
}

export function NewInvestigation({ onInvestigate }: NewInvestigationProps) {
  const [mode, setMode] = useState<InputMode>("text");
  const [message, setMessage] = useState(sampleMessage);
  const [url, setUrl] = useState("");

  return (
    <div className="space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">New Investigation</h1>
          <p className="mt-1 text-slate-500">
            Paste a message, submit a URL, or upload a screenshot. We&apos;ll extract key indicators and investigate for you.
          </p>
        </div>
        <nav className="hidden shrink-0 items-center gap-2 text-sm text-slate-400 sm:flex">
          <span>Investigate</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-slate-700">New Investigation</span>
        </nav>
      </header>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {inputTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setMode(tab.id)}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition",
                      mode === tab.id
                        ? "border-brand-300 bg-brand-50 text-brand-700"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-5">
              {mode === "text" && <TextInput value={message} onChange={setMessage} />}
              {mode === "url" && <UrlInput value={url} onChange={setUrl} />}
              {mode === "screenshot" && <ScreenshotInput />}
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-500" />
                  <h2 className="text-base font-semibold text-slate-900">Extracted Information</h2>
                  <Tag tone="violet">AI detected 5 key indicators</Tag>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition hover:text-brand-700"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  Edit selection
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {indicators.map((indicator) => {
                  const Icon = indicator.icon;
                  return (
                    <div key={indicator.id} className="flex items-start gap-3 rounded-xl border border-slate-200 p-3">
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                          indicator.detected ? "bg-brand-50 text-brand-500" : "bg-slate-100 text-slate-400"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-500">{indicator.label}</p>
                        <p
                          className={cn(
                            "mt-0.5 truncate text-sm font-semibold",
                            indicator.detected ? "text-slate-900" : "text-slate-400"
                          )}
                        >
                          {indicator.value}
                        </p>
                        <Tag tone={indicator.tag.tone} className="mt-1.5">
                          {indicator.tag.label}
                        </Tag>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Button variant="primary" size="lg" onClick={onInvestigate} className="mt-6 w-full">
              <Search className="h-4 w-4" />
              Investigate
              <ArrowRight className="h-4 w-4" />
            </Button>

            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
              <Lock className="h-3.5 w-3.5" />
              Your data is processed securely and never shared publicly.
            </p>
          </Card>
        </div>

        <HowItWorks />
      </div>

      <RecentInvestigations />
    </div>
  );
}
