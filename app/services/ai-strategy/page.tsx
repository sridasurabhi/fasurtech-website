'use client';

import { motion } from 'framer-motion';
import { Brain, Target, TrendingUp, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AIStrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/10 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Strategic AI Consulting</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              AI Strategy & Readiness
            </h1>

            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Transform your executive vision into actionable AI initiatives. We help organizations develop comprehensive AI strategies that align with business objectives and drive measurable outcomes.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105"
            >
              Schedule a Strategy Session
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Strategic Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">AI Readiness Assessment</h3>
              <p className="text-foreground/70">
                Comprehensive evaluation of your organization's current capabilities, data maturity, and readiness for AI adoption.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Executive Roadmapping</h3>
              <p className="text-foreground/70">
                Develop clear, phased implementation roadmaps that prioritize high-impact AI initiatives and manage organizational change.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Organizational Design</h3>
              <p className="text-foreground/70">
                Build AI-ready teams with the right structure, skills, and governance to execute your AI strategy effectively.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">ROI Modeling</h3>
              <p className="text-foreground/70">
                Quantify the business impact of AI investments with data-driven models that demonstrate value and guide decision-making.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Our Strategic Approach
            </h2>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-6 p-6 bg-muted/30 border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Discovery & Assessment</h3>
                  <p className="text-foreground/70">
                    Deep dive into your current state: business objectives, technical infrastructure, data landscape, and team capabilities. We identify opportunities and constraints that shape your AI strategy.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-6 p-6 bg-muted/30 border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Vision & Use Case Identification</h3>
                  <p className="text-foreground/70">
                    Collaborate with stakeholders to define AI vision and identify high-value use cases. Prioritize initiatives based on business impact, technical feasibility, and strategic alignment.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-6 p-6 bg-muted/30 border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Roadmap Development</h3>
                  <p className="text-foreground/70">
                    Create a phased implementation roadmap with clear milestones, success metrics, and resource requirements. Balance quick wins with long-term transformation initiatives.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-6 p-6 bg-muted/30 border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Execution Support</h3>
                  <p className="text-foreground/70">
                    Guide implementation with ongoing strategic advisory, change management, and performance tracking. Ensure your AI initiatives deliver on their promise.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Why AI Strategy Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Align AI investments with business objectives',
                'Avoid costly false starts and failed pilots',
                'Build organizational buy-in and momentum',
                'Establish clear success metrics and KPIs',
                'Create sustainable competitive advantages',
                'Accelerate time-to-value for AI initiatives',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/80">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Define Your AI Strategy?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's develop a comprehensive AI roadmap tailored to your organization's unique needs and objectives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
