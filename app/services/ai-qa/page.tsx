'use client';

import { motion } from 'framer-motion';
import { TestTube, Zap, Bug, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AIQAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <TestTube className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Next-Gen Quality Assurance</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              AI-Powered QA
            </h1>

            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Evolution of traditional testing into intelligent, automated quality assurance. Leverage 20+ years of QA expertise enhanced with AI agents that learn, adapt, and continuously optimize software quality.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105"
            >
              Modernize Your QA
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* QA Evolution */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              From Manual Testing to Autonomous Quality
            </h2>
            <p className="text-xl text-foreground/70">
              Building on our proven testing foundation, we've evolved QA into an AI-driven discipline that delivers faster, more comprehensive quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Intelligent Test Generation</h3>
              <p className="text-foreground/70">
                AI agents automatically create comprehensive test suites by analyzing code, requirements, and user behavior patterns.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Bug className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Predictive Defect Detection</h3>
              <p className="text-foreground/70">
                Machine learning models identify high-risk areas and predict potential defects before they manifest in production.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TestTube className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Autonomous Test Execution</h3>
              <p className="text-foreground/70">
                Self-healing test automation that adapts to UI changes, handles flaky tests, and optimizes execution strategies.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Performance Optimization</h3>
              <p className="text-foreground/70">
                AI-driven performance testing that continuously monitors, analyzes, and optimizes application performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Comprehensive AI QA Services
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">Intelligent Functional Testing</h3>
              <p className="text-foreground/70 mb-4">
                AI agents generate, execute, and maintain functional tests across web, mobile, and API layers. Automatic test creation from requirements and user stories.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['End-to-End Testing', 'Visual Regression', 'Cross-Browser Validation'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">AI Performance Testing</h3>
              <p className="text-foreground/70 mb-4">
                Evolution of our performance testing roots with AI-powered load generation, bottleneck detection, and optimization recommendations.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['Load & Stress Testing', 'Real-Time Monitoring', 'Auto-Scaling Validation'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">Security & Compliance Testing</h3>
              <p className="text-foreground/70 mb-4">
                Autonomous security agents continuously scan for vulnerabilities, validate compliance requirements, and ensure data protection standards.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['Vulnerability Scanning', 'Compliance Validation', 'Penetration Testing'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">Testing as a Service (TaaS)</h3>
              <p className="text-foreground/70 mb-4">
                Building on our proven TaaS foundation, deliver cloud-based, AI-enhanced testing that scales with your needs and accelerates release cycles.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['On-Demand Testing', 'Managed Test Environments', 'Continuous Testing'].map((feature, i) => (
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

      {/* Enterprise Expertise */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Enterprise QA Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Oracle E-Business Testing</h3>
                <p className="text-foreground/70 mb-4">
                  Deep expertise in Oracle E-Business Suite testing, now enhanced with AI for regression testing, upgrade validation, and integration testing.
                </p>
                <ul className="space-y-2">
                  {['Automated EBS workflows', 'Integration testing', 'Upgrade validation'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">PeopleSoft QA</h3>
                <p className="text-foreground/70 mb-4">
                  Comprehensive PeopleSoft testing services powered by AI agents that understand complex business processes and configurations.
                </p>
                <ul className="space-y-2">
                  {['Functional validation', 'Performance testing', 'Upgrade assurance'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Modern Application Testing</h3>
                <p className="text-foreground/70 mb-4">
                  Cloud-native application testing with AI-powered test generation for microservices, containers, and serverless architectures.
                </p>
                <ul className="space-y-2">
                  {['API testing', 'Microservices validation', 'Cloud-native QA'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Mobile & Web Testing</h3>
                <p className="text-foreground/70 mb-4">
                  Intelligent testing across devices and browsers with AI-powered visual validation and user experience monitoring.
                </p>
                <ul className="space-y-2">
                  {['Cross-platform testing', 'UX validation', 'Accessibility testing'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              AI QA Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: '90% Faster Test Creation', desc: 'AI generates comprehensive test suites in minutes, not weeks' },
                { title: '60% Reduction in Defects', desc: 'Predictive models catch issues before they reach production' },
                { title: 'Zero Maintenance Overhead', desc: 'Self-healing tests adapt to application changes automatically' },
                { title: '24/7 Quality Monitoring', desc: 'Continuous testing and monitoring across all environments' },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-border rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.desc}</p>
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
            Transform Your QA with AI
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Leverage decades of testing expertise enhanced with autonomous AI agents for faster, smarter quality assurance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Upgrade Your QA
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
