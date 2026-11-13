'use client';

import { motion } from 'framer-motion';
import { Building2, Heart, GraduationCap, Landmark, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const clientsByIndustry = [
  {
    icon: Heart,
    sector: 'Healthcare',
    color: 'text-rose-600',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    clients: [
      { name: 'Penn Medicine', desc: 'AI-driven data integration and EHR optimization across a 40,000+ employee health system.' },
      { name: 'WellMed', desc: 'Enterprise database management and performance optimization for patient data platforms.' },
      { name: 'Viverae', desc: 'Health analytics infrastructure and managed services support.' },
    ],
  },
  {
    icon: GraduationCap,
    sector: 'Higher Education',
    color: 'text-blue-600',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    clients: [
      { name: 'University of Pennsylvania', desc: 'Oracle E-Business Suite implementation and ongoing managed services for administrative systems.' },
      { name: 'USP (United States Pharmacopeia)', desc: 'Enterprise application management and database administration.' },
    ],
  },
  {
    icon: Landmark,
    sector: 'Government & Public Sector',
    color: 'text-amber-600',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    clients: [
      { name: 'TSA (Transportation Security Administration)', desc: 'Mission-critical enterprise systems management and AI-powered workflow automation for federal operations.' },
      { name: 'DFW International Airport', desc: 'IT managed services and enterprise application support for one of the world\'s busiest airports.' },
    ],
  },
  {
    icon: Globe,
    sector: 'Retail & Commerce',
    color: 'text-emerald-600',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    clients: [
      { name: 'Barnes & Noble', desc: 'Oracle Endeca-powered commerce search, performance testing, and enterprise database optimization.' },
    ],
  },
  {
    icon: Building2,
    sector: 'Technology & Staffing',
    color: 'text-purple-600',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    clients: [
      { name: 'Allegis Group', desc: 'PeopleSoft HCM and enterprise application management for one of the largest staffing firms in the US.' },
      { name: 'Sun Microsystems', desc: 'Enterprise systems integration and database management services.' },
      { name: 'Hoovers', desc: 'Data platform management and performance testing for business intelligence systems.' },
      { name: 'Exaclyme', desc: 'Database administration and managed services support.' },
    ],
  },
];

const stats = [
  { value: '50+', label: 'Enterprise Clients Served' },
  { value: '20+', label: 'Years of Partnership' },
  { value: '5', label: 'Industry Verticals' },
  { value: '100%', label: 'Client Retention Rate (Active)' },
];

const caseHighlights = [
  {
    client: 'Penn Medicine',
    result: '40% faster diagnosis',
    desc: 'AI-powered data integration across 15+ legacy systems reduced care delivery delays and improved coordination across the health network.',
    industry: 'Healthcare',
  },
  {
    client: 'TSA',
    result: '85% reduction in processing time',
    desc: 'AI-powered workflow automation cut citizen service request response time from 14 days to under 2 days.',
    industry: 'Public Sector',
  },
  {
    client: 'Barnes & Noble',
    result: '3x faster search response',
    desc: 'Oracle Endeca optimization and performance testing delivered dramatically improved commerce search at scale.',
    industry: 'Retail',
  },
];

export default function ClientsPage() {
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
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Client Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Trusted by Industry Leaders
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              From federal agencies to Fortune 500 enterprises, Fasurtech has spent 20+ years earning the trust of organizations that cannot afford to compromise on quality or reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-border">
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

      {/* Clients by Industry */}
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
              Our Client Portfolio
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Deep relationships across healthcare, government, higher education, retail, and technology
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12 max-w-5xl mx-auto"
          >
            {clientsByIndustry.map((group) => (
              <motion.div key={group.sector} variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${group.bg} border ${group.border} rounded-xl flex items-center justify-center`}>
                    <group.icon className={`w-5 h-5 ${group.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{group.sector}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 pl-13">
                  {group.clients.map((client) => (
                    <motion.div
                      key={client.name}
                      whileHover={{ x: 4 }}
                      className={`bg-white border ${group.border} hover:border-primary/40 rounded-xl p-6 transition-all`}
                    >
                      <h4 className="text-lg font-bold text-foreground mb-2">{client.name}</h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">{client.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Highlights */}
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
              Proven Results
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto text-center mb-16">
              A sample of the measurable outcomes we've delivered
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {caseHighlights.map((c) => (
                <motion.div
                  key={c.client}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-border hover:border-primary/50 rounded-2xl p-8 transition-all"
                >
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">{c.industry}</div>
                  <div className="text-4xl font-bold text-primary mb-3">{c.result}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{c.client}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Join Our Client Roster</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you're modernizing legacy infrastructure or deploying AI for the first time, we bring the same commitment to every engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
