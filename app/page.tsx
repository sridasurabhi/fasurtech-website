'use client';

import { motion } from 'framer-motion';
import { Brain, Network, Database, TestTube, ArrowRight, Sparkles, CheckCircle2, Server, Gauge, Users } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import AgenticWorkflow from '@/components/AgenticWorkflow';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Next-Gen AI & Data Intelligence
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Fasurtech: Architecting Autonomous Intelligence
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your enterprise with AI-powered solutions that combine proven IT expertise with cutting-edge autonomous agent technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/50"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold rounded-full transition-all"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 pt-8 border-t border-border/50"
            >
              <p className="text-sm text-foreground/50 mb-6">Trusted by 50+ Enterprise Organizations</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 items-center opacity-60">
                <span className="text-base font-semibold">Penn Medicine</span>
                <span className="text-foreground/20">•</span>
                <span className="text-base font-semibold">Barnes & Noble</span>
                <span className="text-foreground/20">•</span>
                <span className="text-base font-semibold">Univ. of Pennsylvania</span>
                <span className="text-foreground/20">•</span>
                <span className="text-base font-semibold">TSA</span>
                <span className="text-foreground/20">•</span>
                <span className="text-base font-semibold">Allegis Group</span>
                <span className="text-foreground/20">•</span>
                <span className="text-base font-semibold">WellMed</span>
                <span className="text-foreground/20">•</span>
                <span className="text-base font-semibold">DFW Airport</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Core Four Services */}
      <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            >
              The Core Four
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/70 max-w-2xl mx-auto"
            >
              Foundational AI capabilities that power autonomous intelligence across your enterprise
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants}>
              <ServiceCard
                title="AI Strategy & Readiness"
                description="Executive roadmapping for AI adoption. Transform your business with strategic AI implementation that aligns with your goals and accelerates innovation."
                icon={Brain}
                href="/services/ai-strategy"
                gradient="from-primary to-secondary"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ServiceCard
                title="Multi-Agent Frameworks"
                description="Design and deploy autonomous AI teams that collaborate, learn, and optimize workflows. Harness the power of coordinated intelligence."
                icon={Network}
                href="/services/multi-agent"
                gradient="from-secondary to-primary"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ServiceCard
                title="Agentic Data Platforms"
                description="Self-optimizing data analytics and engineering. Intelligent systems that continuously improve data quality, insights, and performance."
                icon={Database}
                href="/services/data-platforms"
                gradient="from-primary to-accent"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ServiceCard
                title="AI-Powered QA"
                description="Evolution of traditional testing into AI-driven performance optimization. Automated quality assurance that learns and adapts."
                icon={TestTube}
                href="/services/ai-qa"
                gradient="from-accent to-primary"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Agentic Workflow Visualization */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            >
              Agentic Workflow Architecture
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/70 max-w-2xl mx-auto"
            >
              See how autonomous agents work together to drive intelligent automation
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AgenticWorkflow />
          </div>
        </div>
      </section>

      {/* Proof Points - Case Studies */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            >
              Proven Impact
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/70 max-w-2xl mx-auto"
            >
              Real-world results from our AI transformation initiatives
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <CaseStudyCard
                client="Major Healthcare System"
                industry="Healthcare"
                challenge="Fragmented patient data across 15+ legacy systems causing delays in care delivery"
                solution="Implemented agentic data platform with AI-powered integration and real-time analytics"
                result="40% faster diagnosis"
                impact="Reduced patient wait times and improved care coordination"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <CaseStudyCard
                client="Regional Financial Institution"
                industry="Financial Services"
                challenge="Manual fraud detection processes unable to keep pace with sophisticated threats"
                solution="Deployed multi-agent AI system for real-time fraud detection and prevention"
                result="95% threat detection"
                impact="$12M in prevented fraud losses annually"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <CaseStudyCard
                client="Government Agency"
                industry="Public Sector"
                challenge="Citizen service requests averaging 14-day response time due to manual processing"
                solution="AI-powered workflow automation with intelligent routing and response generation"
                result="2-day response time"
                impact="85% reduction in processing time, improved citizen satisfaction"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enterprise IT Services Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 border border-border rounded-full mb-6">
              <Server className="w-4 h-4 text-foreground/60" />
              <span className="text-sm font-semibold text-foreground/60">20+ Years of Enterprise IT</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Full-Spectrum IT Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto">
              From Oracle EBS to AI-powered QA — a single partner for your entire IT lifecycle
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-muted/30 border border-border hover:border-foreground/30 rounded-2xl p-8 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-foreground/10 rounded-xl flex items-center justify-center">
                  <Server className="w-5 h-5 text-foreground/70" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Managed Services</h3>
              </div>
              <p className="text-foreground/70 mb-5 text-sm leading-relaxed">
                Enterprise database and application management with 24/7 monitoring. Oracle E-Business Suite, Microsoft SQL Server, PeopleSoft, Fusion Middleware, Endeca, and Remote Services.
              </p>
              <ul className="space-y-2 mb-6">
                {['Oracle EBS R12 upgrades & support', 'SQL Server DBA & high availability', 'PeopleSoft HCM & Financials', '24/7/365 proactive monitoring'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services/managed-services" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground font-medium transition-colors group">
                Explore Managed Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-muted/30 border border-border hover:border-foreground/30 rounded-2xl p-8 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-foreground/10 rounded-xl flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-foreground/70" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Testing Services</h3>
              </div>
              <p className="text-foreground/70 mb-5 text-sm leading-relaxed">
                Performance testing, QA, and Testing as a Service — built on a decade of enterprise software quality expertise. Catch issues before your users do.
              </p>
              <ul className="space-y-2 mb-6">
                {['Load, stress & endurance testing', 'Functional & regression QA', 'Testing as a Service (TaaS)', 'Business analyst + tester teams'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services/testing-services" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground font-medium transition-colors group">
                Explore Testing Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Showcase Strip */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">50+ Enterprise Clients</h3>
              <p className="text-foreground/60">Healthcare · Higher Ed · Government · Retail · Technology</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['Penn Medicine', 'TSA', 'Barnes & Noble', 'Univ. of Pennsylvania', 'Allegis Group', 'WellMed'].map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground/70 font-medium"
                >
                  {name}
                </span>
              ))}
            </div>
            <Link
              href="/clients"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary text-foreground/70 hover:text-primary rounded-full text-sm font-semibold transition-all"
            >
              <Users className="w-4 h-4" />
              View All Clients
            </Link>
          </div>
        </div>
      </section>

      {/* Why Fasurtech */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground"
            >
              From Legacy IT to AI Leadership
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Proven Enterprise Expertise</h3>
                    <p className="text-foreground/70">
                      20+ years delivering Oracle E-Business, PeopleSoft, and mission-critical systems
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">AI-First Innovation</h3>
                    <p className="text-foreground/70">
                      Cutting-edge multi-agent frameworks and autonomous intelligence platforms
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Industry-Specific Solutions</h3>
                    <p className="text-foreground/70">
                      Deep expertise in Healthcare, Financial Services, and Public Sector
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Enterprise Modernization</h3>
                    <p className="text-foreground/70">
                      Transform legacy systems into AI-ready platforms without disruption
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Quality-Driven Delivery</h3>
                    <p className="text-foreground/70">
                      AI-powered QA evolved from our testing excellence foundation
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Scalable Solutions</h3>
                    <p className="text-foreground/70">
                      From pilot projects to enterprise-wide AI transformation
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
