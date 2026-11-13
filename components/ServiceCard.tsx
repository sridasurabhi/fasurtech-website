'use client';

import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient?: string; // kept for API compatibility with existing pages
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col bg-white p-8 transition-colors hover:bg-muted/60"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-footer text-white transition-colors group-hover:bg-primary">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-6 flex-1 text-[15px] leading-relaxed text-slate-600">{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
