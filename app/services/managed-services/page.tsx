'use client';

import { motion } from 'framer-motion';
import {
  Database, Server, Shield, Clock, CheckCircle2, ArrowRight,
  Activity, Zap, Settings, Monitor
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
    icon: Database,
    title: 'Oracle E-Business Suite',
    description:
      'Full lifecycle support for Oracle EBS — R12 upgrades, implementations, health checks, and 24/7 production monitoring. Our team conducts comprehensive assessments covering process review, customization analysis, implementation optimization, reporting, and system security.',
    bullets: [
      'R12 upgrades and new implementations',
      'Health checks and full system assessments',
      'Scalability, compliance, and reporting optimization',
      '24/7/365 production support and monitoring',
    ],
    gradient: 'from-primary/20 to-secondary/10',
  },
  {
    icon: Server,
    title: 'Microsoft SQL Server',
    description:
      'End-to-end SQL Server database management with proactive monitoring, performance tuning, and high-availability configuration. We minimize downtime and keep your data infrastructure running at peak capacity.',
    bullets: [
      'Database performance tuning and optimization',
      'High availability and disaster recovery',
      'Automated monitoring and alerting',
      'Security hardening and compliance audits',
    ],
    gradient: 'from-secondary/20 to-primary/10',
  },
  {
    icon: Settings,
    title: 'PeopleSoft Administration',
    description:
      'Expert PeopleSoft implementation, configuration, and ongoing administration. We manage the full suite from HR to Financials, ensuring your organization gets maximum value from your PeopleSoft investment.',
    bullets: [
      'PeopleSoft HCM and Financials support',
      'PeopleTools upgrades and patching',
      'Integration with third-party systems',
      'Performance tuning and diagnostics',
    ],
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    icon: Zap,
    title: 'Fusion Middleware',
    description:
      'Oracle Fusion Middleware management for robust enterprise integration. We configure, maintain, and optimize middleware environments that underpin your critical business processes.',
    bullets: [
      'WebLogic Server administration',
      'Oracle SOA Suite and OSB management',
      'Middleware monitoring and performance',
      'Upgrade planning and execution',
    ],
    gradient: 'from-accent/20 to-secondary/10',
  },
  {
    icon: Monitor,
    title: 'Endeca Services',
    description:
      'Oracle Endeca implementation and management for powerful commerce and enterprise search. We deliver configurations that surface the right information at the right time across your digital channels.',
    bullets: [
      'Endeca Information Discovery setup',
      'Commerce integration and optimization',
      'Search relevance tuning',
      'Ongoing maintenance and monitoring',
    ],
    gradient: 'from-secondary/20 to-accent/10',
  },
  {
    icon: Activity,
    title: 'Remote Services',
    description:
      'Flexible remote support for your enterprise environment. Our distributed team of certified professionals provides rapid-response management and administration — without the overhead of on-site staffing.',
    bullets: [
      'Dedicated remote DBA and admin support',
      'On-demand escalation and incident response',
      'Monthly reporting and executive summaries',
      'Flexible engagement models (monthly/project)',
    ],
    gradient: 'from-primary/10 to-primary/20',
  },
];

const benefits = [
  { icon: Clock, label: '24/7/365 Monitoring', desc: 'Round-the-clock proactive monitoring reduces downtime before users ever notice a problem.' },
  { icon: Shield, label: 'Reduced Risk', desc: 'Certified experts manage complex environments so your team can focus on strategic priorities.' },
  { icon: Activity, label: 'Proactive Approach', desc: 'Automated alerting and trend analysis identify issues before they impact operations.' },
  { icon: Zap, label: 'Lower Total Cost', desc: 'Predictable managed service pricing eliminates the overhead of building in-house expertise.' },
];

export default function ManagedServicesPage() {
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
              <Database className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Enterprise Managed Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Managed IT Services
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              20+ years of enterprise database and application management. We keep your Oracle, SQL Server, PeopleSoft, and middleware environments running with proactive monitoring, expert support, and zero-compromise reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/30"
              >
                Talk to an Expert
              </Link>
              <Link
                href="/clients"
                className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold rounded-full transition-all"
              >
                See Our Clients
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 text-foreground">
              Our Managed Service Offerings
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive coverage for your most critical enterprise platforms
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`bg-gradient-to-br ${svc.gradient} border border-border hover:border-primary/50 rounded-2xl p-8 transition-all`}
              >
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

      {/* Oracle R12 Spotlight */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Featured Capability</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Oracle R12 Upgrade & Optimization
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Oracle E-Business Suite R12 unlocks enhanced capabilities that lay the foundation for shared services, regulatory compliance, and next-generation reporting. Our team has delivered R12 upgrades across healthcare, higher education, and government sectors.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Discuss Your Oracle Environment <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Scalability', desc: 'Enhanced database capabilities and enterprise personalization' },
                  { label: 'Efficiency', desc: 'Shared services model with flexible functionality' },
                  { label: 'Compliance', desc: 'Regulatory features including alternate accounting and revenue management' },
                  { label: 'Reporting', desc: 'Oracle R12 Flexi Reporting for user-friendly insights' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-border rounded-xl p-5 hover:border-primary/40 transition-all"
                  >
                    <h4 className="font-bold text-primary mb-2">{item.label}</h4>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center text-foreground">
              Why Managed Services
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((b) => (
                <motion.div
                  key={b.label}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="text-center bg-white border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">{b.label}</h3>
                  <p className="text-sm text-foreground/70">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Modernize Your IT Operations?</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's assess your current environment and design a managed services plan that fits your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Schedule a Free Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
