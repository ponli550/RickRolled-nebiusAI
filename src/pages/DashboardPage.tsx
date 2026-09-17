import { InvestigatePanel } from "../components/dashboard/InvestigatePanel";
import { LiveThreatFeed } from "../components/dashboard/LiveThreatFeed";
import { RecentInvestigations } from "../components/dashboard/RecentInvestigations";
import { ScamTrendsChart } from "../components/dashboard/ScamTrendsChart";
import { StatCard } from "../components/dashboard/StatCard";
import { TopCategories } from "../components/dashboard/TopCategories";
import { WelcomeHeader } from "../components/dashboard/WelcomeHeader";
import { stats, todayLabel, user } from "../data/dashboard";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <WelcomeHeader name={user.name.split(" ")[0]} date={todayLabel} />

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <RecentInvestigations />
        <ScamTrendsChart />
      </section>

      <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <TopCategories />
        <LiveThreatFeed />
        <InvestigatePanel />
      </section>
    </div>
  );
}
