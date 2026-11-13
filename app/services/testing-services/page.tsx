'use client';

import { motion } from 'framer-motion';
import {
  TestTube, Gauge, Cloud, CheckCircle2, ArrowRight,
  Zap, Users, TrendingUp, Shield
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

const services = [
  {
    icon: Gauge,
    title: 'Performance Testing',
    description:
      'Identify bottlenecks and validate application performance before they reach production. Our performance testing practice leverages industry-leading tools and proprietary infrastructure to simulate real-world load scenarios at scale.',
    bullets: [
      'Load, stress, spike, and endurance testing',
      'Page-level and transaction-level benchmarking',
      'Root cause analysis and remediation recommendations',
      'Pre-launch validation and post-deployment verification',
    ],
    badge: 'Most Requested',
  },
  {
    icon: TestTube,
    title: 'QA Testing',
    description:
      'Rigorous quality assurance from requirements to release. Our QA teams — composed of business analysts, testers, and application specialists — integrate into your SDLC to surface defects early and maintain high release standards.',
    bullets: [
      'Functional and regression testing',
      'Test plan design and case authoring',
      'Defect tracking and lifecycle management',
      'UAT support and sign-off facilitation',
    ],
    badge: null,
  },
  {
    icon: Cloud,
    title: 'Testing as a Service (TaaS)',
    description:
      'On-demand access to FaSur\'s remote testing infrastructure. Skip the cost and complexity of building your own testing environment — our cloud-based platform lets you quickly verify changes and run load tests on your schedule.',
    bullets: [
      'Remote infrastructure with no setup overhead',
      'Open-source and enterprise tool coverage',
      'Flexible on-demand or subscription models',
      'Rapid onboarding for new applications',
    ],
    badge: 'Cloud-Enabled',
  },
];

const stats = [
  { value: '20+', label: 'Years of QA Excellence' },
  { value: '100+', label: 'Enterprise Applications Tested' },
  { value: '99%', label: 'Defect Detection Rate' },
  { value: '< 48h', label: 'Average Onboarding Time' },
];

const methodology = [
  { step: '01', title: 'Assess', desc: 'Understand your application architecture, usage patterns, and performance requirements.' },
  { step: '02', title: 'Plan', desc: 'Design test scenarios, define KPIs, and configure the testing environment.' },
  { step: '03', title: 'Execute', desc: 'Run tests using FaSur infrastructure and best-in-class open-source and enterprise tools.' },
  { step: '04', title: 'Analyze', desc: 'Diagnose root causes, benchmark against baselines, and produce actionable reports.' },
  { step: '05', title: 'Remediate', desc: 'Work with your engineering team to resolve issues and validate fixes.' },
  { step: '06', title: 'Monitor', desc: 'Ongoing regression testing and performance monitoring post-deployment.' },
];

export default function TestingServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <TestTube className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Enterprise Testing Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Testing Services
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Performance testing, QA testing, and Testing as a Service — built on 20+ years of enterprise software expertise. We catch issues before your users do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/30"
              >
                Start a Testing Engagement
              </Link>
              <Link
                href="/services/ai-qa"
                className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold rounded-full transition-all"
              >
                Explore AI-Powered QA →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{s.value}</div>
                <div className="text-sm text-foreground/60">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-foreground">
              Our Testing Capabilities
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive testing solutions for every stage of your software lifecycle
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="relative bg-muted/30 border border-border hover:border-primary/50 rounded-2xl p-8 transition-all"
              >
                {svc.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-background text-xs font-bold rounded-full">
                    {svc.badge}
                  </div>
                )}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <svc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{svc.title}</h3>
                <p className="text-foreground/70 text-sm mb-5 leading-relaxed">{svc.description}</p>
                <ul className="space-y-2">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-center text-foreground">
              Our Testing Methodology
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto text-center mb-16">
              A proven six-step process that catches issues before they reach production
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodology.map((m) => (
                <motion.div
                  key={m.step}
                  variants={itemVariants}
                  className="bg-background/50 border border-border rounded-xl p-6 hover:border-primary/40 transition-all"
                >
                  <div className="text-4xl font-bold text-primary/20 mb-3">{m.step}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-foreground/70">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Expert Testing Teams</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Our testing engagements are staffed with certified professionals who understand both the technical and business dimensions of quality. We embed into your workflow — not around it.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Users, text: 'Business analysts who understand your domain' },
                  { icon: Gauge, text: 'Certified performance testing engineers' },
                  { icon: Shield, text: 'Application administrators for environment support' },
                  { icon: TrendingUp, text: 'Reporting analysts who surface actionable insight' },
                  { icon: Zap, text: 'Rapid spin-up within 48 hours of engagement start' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-muted/30 border border-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Tools & Platforms</h3>
                <p className="text-sm text-foreground/70 mb-6">
                  We leverage both open-source and enterprise-grade tools — and our clients can access our infrastructure directly via TaaS, eliminating setup time and cost.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Apache JMeter', 'Gatling', 'LoadRunner', 'k6',
                    'Selenium', 'Playwright', 'Postman', 'SoapUI',
                  ].map((tool) => (
                    <div
                      key={tool}
                      className="px-3 py-2 bg-background/50 border border-border rounded-lg text-sm text-foreground/80 text-center"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Bridge */}
      <section className="py-16 bg-muted/30 border-y border-primary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Evolving with AI</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready for AI-Powered QA?
            </h2>
            <p className="text-foreground/70 mb-8">
              Our traditional testing practice is the foundation for our next-generation AI-Powered QA service — intelligent, self-healing test suites that learn from every release cycle.
            </p>
            <Link
              href="/services/ai-qa"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105"
            >
              Explore AI-Powered QA <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ship Faster. Break Less.</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact our testing team to design a QA strategy that fits your release cadence and risk profile.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
