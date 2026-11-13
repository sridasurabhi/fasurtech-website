'use client';

import { motion } from 'framer-motion';
import { Building2, TrendingUp } from 'lucide-react';

interface CaseStudyCardProps {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  impact: string;
}

export default function CaseStudyCard({
  client,
  industry,
  challenge,
  solution,
  result,
  impact,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-muted border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {client}
            </h3>
          </div>
          <p className="text-sm text-foreground/60">{industry}</p>
        </div>
        <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
          <span className="text-xs font-semibold text-primary">Case Study</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-semibold text-primary mb-1">Challenge</h4>
          <p className="text-sm text-foreground/70">{challenge}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary mb-1">Solution</h4>
          <p className="text-sm text-foreground/70">{solution}</p>
        </div>

        {/* Impact */}
        <div className="pt-3 border-t border-border/50">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-5 h-5 text-secondary mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-secondary mb-1">Impact</h4>
              <p className="text-lg font-bold text-foreground">{result}</p>
              <p className="text-xs text-foreground/60">{impact}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
