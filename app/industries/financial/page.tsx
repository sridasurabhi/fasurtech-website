'use client';

import { motion } from 'framer-motion';
import { DollarSign, Shield, TrendingUp, Zap, Brain, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CaseStudyCard from '@/components/CaseStudyCard';

export default function FinancialServicesPage() {
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
              <DollarSign className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Financial Services AI</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              AI for Financial Services: Intelligent Banking & Finance
            </h1>

            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Transform financial operations with autonomous AI that enhances fraud detection, risk management, customer experience, and regulatory compliance.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-primary text-background font-semibold rounded-full transition-all hover:scale-105"
            >
              Modernize Financial Operations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Financial Challenges */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Financial Services Challenges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-secondary/50 transition-all"
            >
              <Shield className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Sophisticated Fraud</h3>
              <p className="text-foreground/70">
                Advanced fraud schemes and cyber threats evolving faster than traditional rule-based detection systems can adapt.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-secondary/50 transition-all"
            >
              <Lock className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Regulatory Complexity</h3>
              <p className="text-foreground/70">
                Ever-changing compliance requirements across jurisdictions demanding continuous monitoring and adaptation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-secondary/50 transition-all"
            >
              <TrendingUp className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Market Volatility</h3>
              <p className="text-foreground/70">
                Rapid market changes requiring real-time risk assessment and decision-making capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            AI-Powered Financial Solutions
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-border rounded-xl p-8 hover:border-secondary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Real-Time Fraud Detection</h3>
                  <p className="text-foreground/70 mb-4">
                    Multi-agent AI systems analyze transaction patterns, behavioral biometrics, and network relationships to detect and prevent fraud in real-time with 95%+ accuracy.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['Behavioral analysis', 'Anomaly detection', 'Network analysis'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-border rounded-xl p-8 hover:border-secondary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Intelligent Risk Management</h3>
                  <p className="text-foreground/70 mb-4">
                    AI agents continuously monitor market conditions, portfolio exposure, and credit risk to provide real-time insights and automated risk mitigation.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['Credit scoring', 'Portfolio optimization', 'Stress testing'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-border rounded-xl p-8 hover:border-secondary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Automated Compliance</h3>
                  <p className="text-foreground/70 mb-4">
                    Deploy autonomous agents that monitor transactions, flag suspicious activity, generate reports, and ensure adherence to AML, KYC, and regulatory requirements.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['AML monitoring', 'KYC automation', 'Regulatory reporting'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-border rounded-xl p-8 hover:border-secondary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Customer Experience AI</h3>
                  <p className="text-foreground/70 mb-4">
                    Intelligent virtual assistants, personalized product recommendations, and automated customer service that improve satisfaction while reducing costs.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['24/7 virtual assistants', 'Personalization', 'Smart routing'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Financial Services Success
          </h2>

          <div className="max-w-2xl mx-auto">
            <CaseStudyCard
              client="Regional Financial Institution"
              industry="Banking & Financial Services"
              challenge="Manual fraud detection processes unable to keep pace with sophisticated threats, resulting in $15M+ annual losses"
              solution="Deployed multi-agent AI system for real-time fraud detection and prevention with behavioral analytics and network analysis"
              result="95% threat detection"
              impact="$12M in prevented fraud losses annually, 70% reduction in false positives, improved customer experience"
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Financial AI Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Trading & Investment', desc: 'Algorithmic trading, portfolio management, and market analysis powered by AI' },
                { title: 'Credit Underwriting', desc: 'Automated credit decisions with AI-enhanced risk assessment and approval workflows' },
                { title: 'Claims Processing', desc: 'Intelligent claims validation, fraud detection, and automated adjudication' },
                { title: 'Wealth Management', desc: 'Personalized investment advice and automated portfolio rebalancing' },
                { title: 'Loan Origination', desc: 'Streamlined application processing with AI-powered document analysis and verification' },
                { title: 'Customer Onboarding', desc: 'Digital KYC, identity verification, and account setup automation' },
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-border rounded-xl p-6 hover:border-secondary/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 text-foreground">{useCase.title}</h3>
                  <p className="text-foreground/70">{useCase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 to-primary/10 border-y border-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Secure Your Financial Future with AI
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Transform risk management, fraud detection, and customer experience with autonomous intelligence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-primary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Start Your Financial Transformation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
