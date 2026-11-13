'use client';

import { motion } from 'framer-motion';
import { Network, GitBranch, Zap, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MultiAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <Network className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Autonomous AI Teams</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Multi-Agent Frameworks
            </h1>

            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Design and deploy coordinated teams of AI agents that collaborate, learn, and optimize complex workflows. Transform your operations with autonomous intelligence that scales.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-primary text-background font-semibold rounded-full transition-all hover:scale-105"
            >
              Explore Multi-Agent Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Multi-Agent Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-secondary/50 transition-all"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Agent Orchestration</h3>
              <p className="text-foreground/70">
                Design sophisticated coordination patterns where multiple AI agents work together seamlessly to solve complex problems.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-secondary/50 transition-all"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Workflow Automation</h3>
              <p className="text-foreground/70">
                Automate end-to-end business processes with intelligent agents that handle routing, decision-making, and execution.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-secondary/50 transition-all"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Adaptive Learning</h3>
              <p className="text-foreground/70">
                Agents that continuously learn from interactions, feedback, and outcomes to improve performance over time.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-secondary/50 transition-all"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Governance & Safety</h3>
              <p className="text-foreground/70">
                Built-in guardrails, audit trails, and safety mechanisms ensure agents operate within defined boundaries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Multi-Agent Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-border rounded-xl p-8 hover:border-secondary/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">Customer Service Automation</h3>
                <p className="text-foreground/70 mb-4">
                  Deploy specialized agents for inquiry routing, knowledge retrieval, response generation, and escalation management that work together to deliver exceptional customer experiences.
                </p>
                <ul className="space-y-2">
                  {['24/7 intelligent support', 'Context-aware responses', 'Seamless human handoff', 'Multi-channel consistency'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-border rounded-xl p-8 hover:border-secondary/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">Document Processing</h3>
                <p className="text-foreground/70 mb-4">
                  Coordinate agents for extraction, classification, validation, and routing of documents through complex approval workflows with intelligent exception handling.
                </p>
                <ul className="space-y-2">
                  {['Automated data extraction', 'Intelligent classification', 'Compliance validation', 'Smart routing'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-border rounded-xl p-8 hover:border-secondary/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">Supply Chain Optimization</h3>
                <p className="text-foreground/70 mb-4">
                  Orchestrate agents for demand forecasting, inventory management, logistics optimization, and supplier coordination to create resilient supply chains.
                </p>
                <ul className="space-y-2">
                  {['Predictive demand planning', 'Real-time inventory optimization', 'Dynamic routing', 'Risk mitigation'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-border rounded-xl p-8 hover:border-secondary/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">DevOps & IT Operations</h3>
                <p className="text-foreground/70 mb-4">
                  Deploy agents for monitoring, incident detection, root cause analysis, and automated remediation to maintain system reliability and performance.
                </p>
                <ul className="space-y-2">
                  {['Proactive monitoring', 'Automated incident response', 'Self-healing systems', 'Performance optimization'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Architecture */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Our Multi-Agent Architecture
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary">Modular Design</h3>
                <p className="text-foreground/70">
                  Build agents as composable, reusable components that can be easily combined and reconfigured for different use cases.
                </p>
              </div>

              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary">Event-Driven Communication</h3>
                <p className="text-foreground/70">
                  Agents communicate through standardized message protocols, enabling loose coupling and flexible orchestration patterns.
                </p>
              </div>

              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary">Centralized Monitoring</h3>
                <p className="text-foreground/70">
                  Comprehensive observability into agent behavior, decision-making, and performance with real-time dashboards and analytics.
                </p>
              </div>

              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary">Scalable Infrastructure</h3>
                <p className="text-foreground/70">
                  Cloud-native architecture that scales agent teams dynamically based on workload demand and business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 to-primary/10 border-y border-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Build Your Autonomous AI Team
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Transform your operations with coordinated AI agents that work together to drive efficiency and innovation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-primary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Start Building
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
