import { useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { Topbar } from "./components/layout/Topbar";
import { DashboardPage } from "./pages/DashboardPage";
import { InvestigatePage } from "./pages/InvestigatePage";

type View = "dashboard" | "investigate";

export default function App() {
  const [view, setView] = useState<View>("dashboard");

  const handleNavigate = (id: string) => {
    if (id === "dashboard" || id === "investigate") setView(id);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeId={view} onNavigate={handleNavigate} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto bg-slate-50 px-8 py-6">
          <div className="mx-auto max-w-[1400px]">
            {view === "dashboard" ? <DashboardPage /> : <InvestigatePage />}
          </div>
        </main>
      </div>
    </div>
  );
}
