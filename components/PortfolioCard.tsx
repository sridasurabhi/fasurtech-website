'use client';

import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp } from 'lucide-react';

interface PortfolioCardProps {
  number: string;
  title: string;
  subtitle: string;
  industry: string;
  problemStatement: string;
  solution: string;
  businessValue: string;
  icon: LucideIcon;
  tags: string[];
}

export default function PortfolioCard({
  number,
  title,
  subtitle,
  industry,
  problemStatement,
  solution,
  businessValue,
  icon: Icon,
  tags,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col"
    >
      <div className="p-6 border-b border-border/50">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-mono text-xs font-bold text-primary/40 tracking-widest">{number}</span>
          </div>
          <span className="text-xs px-2.5 py-1 bg-background/80 border border-border rounded-full text-foreground/50 flex-shrink-0 whitespace-nowrap">
            {industry}
          </span>
        </div>
        <h3 className="text-base font-bold text-foreground mb-1 leading-snug">{title}</h3>
        <p className="text-xs text-primary/60 font-medium">{subtitle}</p>
      </div>

      <div className="p-6 space-y-4 flex-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground/30 mb-1.5">Challenge</p>
          <p className="text-sm text-foreground/60 leading-relaxed">{problemStatement}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground/30 mb-1.5">Solution</p>
          <p className="text-sm text-foreground/60 leading-relaxed">{solution}</p>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Business Value</p>
          </div>
          <p className="text-sm text-foreground/75 leading-relaxed">{businessValue}</p>
        </div>
      </div>

      <div className="px-6 pb-6 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 bg-background/60 border border-border/50 rounded-full text-foreground/35"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
