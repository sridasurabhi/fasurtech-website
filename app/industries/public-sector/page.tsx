'use client';

import { motion } from 'framer-motion';
import { Building2, Users, FileText, Shield, Zap, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CaseStudyCard from '@/components/CaseStudyCard';

export default function PublicSectorPage() {
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
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Public Sector AI</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              AI for Government: Serving Citizens Better
            </h1>

            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Modernize government operations with autonomous AI that improves citizen services, enhances transparency, and optimizes resource utilization. Trusted by agencies like TSA.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105"
            >
              Modernize Government Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Government Challenges */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Public Sector Challenges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <FileText className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Legacy Systems</h3>
              <p className="text-foreground/70">
                Decades-old technology infrastructure that's costly to maintain and difficult to integrate with modern solutions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Citizen Expectations</h3>
              <p className="text-foreground/70">
                Growing demand for digital, responsive services similar to private sector experiences in an era of limited budgets.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Security & Compliance</h3>
              <p className="text-foreground/70">
                Stringent security requirements, privacy regulations, and compliance mandates across federal, state, and local levels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            AI-Powered Government Solutions
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-muted/30 border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Intelligent Citizen Services</h3>
                  <p className="text-foreground/70 mb-4">
                    Multi-agent AI systems that handle inquiries, process applications, and route requests 24/7 across multiple channels, reducing response times from weeks to days.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['24/7 virtual assistants', 'Multi-channel support', 'Smart case routing'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-muted/30 border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Document & Forms Automation</h3>
                  <p className="text-foreground/70 mb-4">
                    AI agents automatically process permits, licenses, benefits applications, and compliance forms with intelligent extraction, validation, and routing.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['Auto form processing', 'Data extraction', 'Compliance validation'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-muted/30 border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Data Modernization</h3>
                  <p className="text-foreground/70 mb-4">
                    Leverage our Oracle E-Business and PeopleSoft expertise to modernize legacy systems with AI-powered data integration and migration strategies.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['Legacy integration', 'Cloud migration', 'Data governance'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="bg-muted/30 border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Operational Efficiency</h3>
                  <p className="text-foreground/70 mb-4">
                    Autonomous agents optimize resource allocation, predict maintenance needs, and streamline workflows across departments and agencies.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['Resource optimization', 'Predictive maintenance', 'Workflow automation'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
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
            Public Sector Success
          </h2>

          <div className="max-w-2xl mx-auto">
            <CaseStudyCard
              client="Federal Government Agency"
              industry="Public Sector"
              challenge="Citizen service requests averaging 14-day response time due to manual processing and fragmented systems"
              solution="AI-powered workflow automation with intelligent routing, response generation, and case management across multiple departments"
              result="2-day response time"
              impact="85% reduction in processing time, improved citizen satisfaction, and freed staff to focus on complex cases"
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Government AI Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Permit & Licensing', desc: 'Automated application processing, validation, and approval workflows' },
                { title: 'Benefits Administration', desc: 'Intelligent eligibility determination and case management for social programs' },
                { title: 'Tax Processing', desc: 'AI-powered return processing, fraud detection, and audit selection' },
                { title: 'Public Safety', desc: 'Predictive analytics for resource allocation and emergency response optimization' },
                { title: 'Infrastructure Management', desc: 'Asset monitoring, predictive maintenance, and optimization of public works' },
                { title: 'Constituent Services', desc: '311 services, complaint resolution, and proactive citizen engagement' },
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-muted/30 border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 text-foreground">{useCase.title}</h3>
                  <p className="text-foreground/70">{useCase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Security & Compliance First
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'FedRAMP Authorized', desc: 'Cloud solutions that meet federal security requirements' },
                { title: 'FISMA Compliant', desc: 'Information security management aligned with federal standards' },
                { title: 'Section 508', desc: 'Accessibility compliance for all digital services' },
                { title: 'Authority to Operate', desc: 'Experience obtaining and maintaining ATO for federal systems' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
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
            Ready to Modernize Government Services?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join forward-thinking agencies using AI to serve citizens better while optimizing resources.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Schedule a Government Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
