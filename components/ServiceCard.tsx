'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  gradient = 'from-primary to-secondary',
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="group relative h-full bg-muted border border-border rounded-xl p-8 overflow-hidden cursor-pointer transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10 space-y-4">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <Icon className="w-7 h-7 text-background" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-foreground/70 leading-relaxed">
            {description}
          </p>

          {/* Arrow */}
          <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
            <span className="mr-2">Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform" />
      </motion.div>
    </Link>
  );
}
