'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Database,
  Cpu,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  BarChart3,
  Code2,
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const timelineEvents = [
  {
    year: '2003',
    era: 'Foundation',
    title: 'Enterprise IT Born',
    description:
      'Founded as an enterprise IT consultancy specializing in Oracle E-Business Suite deployments for regulated industries.',
    color: 'from-slate-500 to-slate-400',
    dot: 'bg-slate-400',
  },
  {
    year: '2008',
    era: 'Expansion',
    title: 'PeopleSoft & QA Practice',
    description:
      'Expanded into PeopleSoft HCM engagements and launched a dedicated QA Testing practice. SQL Server managed services go enterprise-scale.',
    color: 'from-blue-500 to-blue-400',
    dot: 'bg-blue-400',
  },
  {
    year: '2015',
    era: 'Scale',
    title: 'Performance Testing at Scale',
    description:
      'Performance testing and Fusion Middleware expertise deployed for Penn Medicine, University of Pennsylvania, Barnes & Noble, and TSA.',
    color: 'from-violet-500 to-violet-400',
    dot: 'bg-violet-400',
  },
  {
    year: '2022',
    era: 'Inflection',
    title: 'The AI Pivot Begins',
    description:
      'Leadership recognizes the AI inflection point. Internal R&D begins—first LLM integrations built on the back of deep enterprise data knowledge.',
    color: 'from-amber-500 to-amber-400',
    dot: 'bg-amber-400',
  },
  {
    year: '2023',
    era: 'Launch',
    title: 'First Production AI Systems',
    description:
      'First 3 production AI systems deployed: automated compliance audit engine, contract lifecycle RAG, and enterprise knowledge base.',
    color: 'from-primary to-secondary',
    dot: 'bg-primary',
  },
  {
    year: '2024–Now',
    era: 'AI-First',
    title: '6+ AI Systems in Production',
    description:
      'Full AI practice launched. Six production systems across compliance, FinOps, legal, HR, knowledge management, and code intelligence.',
    color: 'from-primary to-secondary',
    dot: 'bg-secondary',
  },
];

const advantages = [
  {
    icon: Database,
    title: 'We Know the Data',
    description:
      "We've spent 20 years inside Oracle schemas, PeopleSoft tables, and ERP data models. Our AI integrates with these structures natively—not as an afterthought that has to reverse-engineer your data landscape.",
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-First by Default',
    description:
      "Years serving healthcare and government clients means AI compliance isn't a checkbox we add at the end—it's the foundation we build on. Auditable, explainable, and secure from day one.",
  },
  {
    icon: Building2,
    title: 'Legacy Integration, Not Replacement',
    description:
      "We don't pitch rip-and-replace. Our AI layers on top of your existing Oracle, PeopleSoft, and Workday investments—protecting capital while delivering modern intelligence.",
  },
  {
    icon: TrendingUp,
    title: 'ROI Instrumented from the Start',
    description:
      "Every AI system we build ships with cost tracking and ROI measurement. You'll know exactly what the AI is delivering—and what it costs—from the first week in production.",
  },
  {
    icon: Users,
    title: 'Trusted Relationships, Not Cold Starts',
    description:
      "Our clients trusted us with mission-critical systems for decades. That trust carries into AI—they're not evaluating an unknown vendor; they're expanding a partnership.",
  },
  {
    icon: Cpu,
    title: 'Real Enterprise Complexity',
    description:
      "Pure AI startups demo on clean, synthetic data. We've built on top of real payroll records, patient data, and financial transactions—messy, production-grade enterprise reality.",
  },
];

const beforeAfter = [
  {
    before: 'Weeks-long manual audit prep',
    after: 'Near-real-time automated compliance',
    icon: ShieldCheck,
  },
  {
    before: 'Opaque AI spending across tools',
    after: 'Full FinOps dashboard + token budgets',
    icon: BarChart3,
  },
  {
    before: 'Legal reviews stacking up',
    after: 'AI contract risk detection in hours',
    icon: Clock,
  },
  {
    before: 'Fragmented documentation hunts',
    after: 'Single-source AI knowledge base',
    icon: Database,
  },
  {
    before: 'HR team buried in admin queries',
    after: '24/7 conversational HR agent',
    icon: Users,
  },
  {
    before: 'Inconsistent code quality & security',
    after: 'AI-powered review & security scanning',
    icon: Code2,
  },
];

export default function AITransformationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/30" />
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{ left: `${(i * 5.5) % 100}%`, top: `${(i * 11.3) % 100}%` }}
              animate={{ scale: [1, 2.5, 1], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.25 }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">AI Transformation</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent"
            >
              Two Decades of Enterprise Mastery.
              <br />
              Now Reimagined with AI.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-12"
            >
              How Fasurtech turned deep Oracle, PeopleSoft, and QA expertise into cutting-edge AI solutions—
              without losing the enterprise-grade trust that got us here.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-8 pt-6 border-t border-border/30"
            >
              {[
                { value: '20+', label: 'Years Enterprise IT' },
                { value: '6+', label: 'AI Systems in Production' },
                { value: '3', label: 'Industry Verticals' },
                { value: '0', label: 'Greenfield Assumptions' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-sm text-foreground/50">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-14">
              <h2 className="text-4xl font-bold text-foreground mb-4">Where It All Began</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Before we were an AI firm, we were the team enterprises called when their Oracle systems broke at 2am.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Database,
                  label: 'Oracle E-Business Suite',
                  sub: 'Finance, Procurement, Supply Chain',
                },
                {
                  icon: Users,
                  label: 'PeopleSoft HCM',
                  sub: 'HR, Payroll, Benefits Administration',
                },
                {
                  icon: ShieldCheck,
                  label: 'QA & Performance Testing',
                  sub: 'Load testing, QA automation, TaaS',
                },
                {
                  icon: Building2,
                  label: 'Regulated Industries',
                  sub: 'Healthcare, Gov, Higher Education',
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="bg-white border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-foreground mb-1">{item.label}</p>
                  <p className="text-xs text-foreground/50">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-10 bg-white border border-border/50 rounded-2xl p-8 text-center"
            >
              <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
                Clients like{' '}
                <span className="text-foreground font-semibold">Penn Medicine</span>,{' '}
                <span className="text-foreground font-semibold">University of Pennsylvania</span>,{' '}
                <span className="text-foreground font-semibold">Barnes & Noble</span>, and{' '}
                <span className="text-foreground font-semibold">TSA</span> trusted us with their most
                mission-critical systems for years. That accountability shaped how we think about AI.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">The Transformation Timeline</h2>
              <p className="text-lg text-foreground/60">From enterprise IT to AI-first—every step was deliberate.</p>
            </motion.div>

            {/* Desktop timeline */}
            <div className="hidden lg:block relative max-w-6xl mx-auto">
              {/* Connector line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-500/30 via-violet-500/30 via-amber-500/30 to-primary/60" />

              <div className="grid grid-cols-6 gap-4">
                {timelineEvents.map((event, idx) => (
                  <motion.div
                    key={event.year}
                    variants={itemVariants}
                    className="relative pt-16"
                  >
                    {/* Dot */}
                    <div
                      className={`absolute top-6 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${event.dot} ring-4 ring-background z-10`}
                    />

                    <div className="bg-white border border-border rounded-xl p-4 hover:border-primary/30 transition-colors">
                      <div
                        className={`text-xs font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-1`}
                      >
                        {event.year}
                      </div>
                      <div className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-2">
                        {event.era}
                      </div>
                      <h3 className="text-sm font-bold text-foreground mb-2">{event.title}</h3>
                      <p className="text-xs text-foreground/55 leading-relaxed">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile timeline */}
            <div className="lg:hidden space-y-4 max-w-xl mx-auto">
              {timelineEvents.map((event) => (
                <motion.div
                  key={event.year}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${event.dot} ring-4 ring-background flex-shrink-0 mt-1`} />
                    <div className="w-0.5 bg-border flex-1 mt-2" />
                  </div>
                  <div className="bg-white border border-border rounded-xl p-4 flex-1 mb-2">
                    <div
                      className={`text-sm font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-0.5`}
                    >
                      {event.year} · {event.era}
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{event.title}</h3>
                    <p className="text-sm text-foreground/55 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Pivot Rationale */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-4xl font-bold text-foreground mb-6">Why We Made the Leap</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Rocket,
                  title: 'We Saw It Coming',
                  description:
                    'In 2022, we saw that every enterprise system we managed—ERP, HR, QA—was about to be fundamentally reshaped by AI. We had a choice: react or lead.',
                },
                {
                  icon: Brain,
                  title: 'Our Clients Needed a Guide',
                  description:
                    "Enterprise clients needed AI guidance from someone who actually understood their data, their compliance needs, and their legacy constraints—not a startup with a demo.",
                },
                {
                  icon: TrendingUp,
                  title: 'The Advantage Was Obvious',
                  description:
                    "20 years of enterprise data knowledge + cutting-edge AI = something no AI startup or traditional IT firm can replicate. The bridge no one else could build.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="bg-white border border-border rounded-xl p-6 text-left hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-14">
              <h2 className="text-4xl font-bold text-foreground mb-4">What Transformed</h2>
              <p className="text-lg text-foreground/60">The same enterprise problems—solved with AI-first solutions.</p>
            </motion.div>

            <div className="space-y-3">
              {/* Header */}
              <div className="grid grid-cols-2 gap-4 px-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-foreground/30">Before</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">After AI</div>
              </div>

              {beforeAfter.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4 bg-white border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-colors"
                >
                  <div className="px-5 py-4 flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-foreground/30 flex-shrink-0" />
                    <span className="text-sm text-foreground/40 line-through">{item.before}</span>
                  </div>
                  <div className="px-5 py-4 flex items-center gap-3 bg-primary/5 border-l border-primary/15">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/80 font-medium">{item.after}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unique Advantage */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-14">
              <h2 className="text-4xl font-bold text-foreground mb-4">The Bridge No One Else Can Build</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Why our AI is different from what a pure startup or a traditional IT vendor can deliver.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {advantages.map((adv, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <adv.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{adv.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{adv.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA to AI Portfolio */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Ready to See What We've Built?</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The Transformation Is Already Delivering Results
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Six production AI systems, enterprise-grade reliability, measurable business value. Browse our portfolio
              or start a conversation about your specific challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/30"
              >
                View AI Portfolio
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold rounded-full transition-all"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
