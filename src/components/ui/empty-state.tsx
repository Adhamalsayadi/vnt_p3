import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description: string;
  actionHref: string;
  actionLabel: string;
}

export default function EmptyState({
  title,
  description,
  actionHref,
  actionLabel,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="max-w-[1200px] mx-auto px-6 py-14 text-center"
    >
      <div className="bg-bg-card rounded-2xl border border-border-light p-10">
        <h2 className="text-3xl font-semibold text-dark">{title}</h2>
        <p className="text-text-light mt-3 mb-8">{description}</p>
        <Link
          href={actionHref}
          className="inline-flex items-center justify-center h-12 px-6 font-semibold rounded-custom bg-primary text-black transition-all hover:-translate-y-0.5 hover:bg-[#f0ca2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/80"
        >
          {actionLabel}
        </Link>
      </div>
    </div>
  );
}
