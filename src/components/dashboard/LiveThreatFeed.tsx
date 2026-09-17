import { threatFeed } from "../../data/dashboard";
import { Card } from "../ui/Card";
import { IconBubble } from "../ui/IconBubble";
import { SectionHeader } from "../ui/SectionHeader";

export function LiveThreatFeed() {
  return (
    <Card className="p-6">
      <SectionHeader title="Live Threat Feed" actionLabel="View all" />

      <ul className="mt-4 divide-y divide-slate-100">
        {threatFeed.map((event) => (
          <li key={event.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
            <span className="w-16 shrink-0 pt-2 text-xs text-slate-400">{event.time}</span>
            <IconBubble icon={event.icon} tone={event.tone} className="h-9 w-9" />
            <p className="pt-1.5 text-sm leading-snug text-slate-600">
              {event.message.map((segment, index) =>
                segment.strong ? (
                  <strong key={index} className="font-semibold text-slate-900">
                    {segment.text}
                  </strong>
                ) : (
                  <span key={index}>{segment.text}</span>
                )
              )}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
