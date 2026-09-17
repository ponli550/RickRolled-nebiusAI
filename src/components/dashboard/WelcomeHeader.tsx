interface WelcomeHeaderProps {
  name: string;
  date: string;
}

export function WelcomeHeader({ name, date }: WelcomeHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Welcome back, {name} <span aria-hidden>👋</span>
        </h1>
        <p className="mt-1 text-slate-500">Investigate smarter. Spot scams faster.</p>
      </div>
      <p className="hidden shrink-0 text-sm font-medium text-slate-500 sm:block">{date}</p>
    </div>
  );
}
