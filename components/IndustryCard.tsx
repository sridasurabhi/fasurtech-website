'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  stats?: { label: string; value: string }[];
}

export default function IndustryCard({
  title,
  description,
  icon: Icon,
  href,
  stats,
}: IndustryCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="group relative bg-gradient-to-br from-muted to-muted/50 border border-border rounded-xl p-6 overflow-hidden cursor-pointer transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/20"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-40 h-40">
            <Icon className="w-full h-full text-primary" />
          </div>
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-foreground/70 mb-4">
            {description}
          </p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="flex gap-4 pt-4 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
