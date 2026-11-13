'use client';

import { motion } from 'framer-motion';
import { Database, TrendingUp, RefreshCw, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function DataPlatformsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Database className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Self-Optimizing Data</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Agentic Data Platforms
            </h1>

            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Intelligent data systems that continuously improve quality, insights, and performance. Transform your data infrastructure into a self-optimizing platform powered by autonomous agents.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105"
            >
              Transform Your Data Platform
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Platform Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Auto-Optimization</h3>
              <p className="text-foreground/70">
                Agents continuously monitor and optimize data pipelines, query performance, and resource utilization.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Intelligent Integration</h3>
              <p className="text-foreground/70">
                AI-powered data integration that adapts to schema changes and handles complex transformations automatically.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Predictive Analytics</h3>
              <p className="text-foreground/70">
                Advanced ML models that uncover insights, predict trends, and recommend actions based on your data.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Data Governance</h3>
              <p className="text-foreground/70">
                Automated compliance monitoring, data quality enforcement, and intelligent access control.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Agentic Data Solutions
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-muted/30 border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">Real-Time Data Fabric</h3>
              <p className="text-foreground/70 mb-4">
                Unify disparate data sources into a coherent, real-time platform. AI agents handle data ingestion, transformation, and quality assurance automatically.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['Streaming & Batch Processing', 'Schema Evolution', 'Data Lineage Tracking'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-muted/30 border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">Autonomous Data Engineering</h3>
              <p className="text-foreground/70 mb-4">
                Deploy AI agents that build, maintain, and optimize data pipelines. Reduce manual ETL work while improving reliability and performance.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['Auto-Pipeline Generation', 'Performance Tuning', 'Anomaly Detection'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-muted/30 border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">Intelligent Data Lakes</h3>
              <p className="text-foreground/70 mb-4">
                Transform data lakes from storage repositories into active intelligence platforms. Agents automatically catalog, enrich, and optimize data assets.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['Auto-Cataloging', 'Data Enrichment', 'Smart Partitioning'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-muted/30 border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">Legacy Modernization</h3>
              <p className="text-foreground/70 mb-4">
                Leverage our deep Oracle E-Business and PeopleSoft expertise to modernize legacy data systems with AI-powered migration and integration.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['Legacy Data Migration', 'Hybrid Integration', 'Gradual Modernization'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Modern Data Stack
            </h2>
            <p className="text-center text-foreground/70 mb-12 text-lg">
              We build on proven technologies while adding autonomous intelligence layers
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Cloud-Native Architecture</h3>
                <ul className="space-y-2">
                  {['AWS, Azure, Google Cloud', 'Kubernetes orchestration', 'Serverless computing', 'Auto-scaling infrastructure'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Data Processing</h3>
                <ul className="space-y-2">
                  {['Apache Spark, Flink', 'dbt for transformations', 'Real-time streaming', 'Event-driven pipelines'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">AI & ML</h3>
                <ul className="space-y-2">
                  {['LangChain, LlamaIndex', 'Vector databases', 'MLOps platforms', 'AutoML capabilities'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Enterprise Integration</h3>
                <ul className="space-y-2">
                  {['Oracle E-Business Suite', 'PeopleSoft connectors', 'API gateways', 'Event mesh'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready for Intelligent Data?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Transform your data infrastructure into a self-optimizing platform that continuously improves.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
