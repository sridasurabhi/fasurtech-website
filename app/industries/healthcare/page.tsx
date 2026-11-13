'use client';

import { motion } from 'framer-motion';
import { Heart, Activity, Shield, Users, Database, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CaseStudyCard from '@/components/CaseStudyCard';

export default function HealthcarePage() {
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
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Healthcare AI Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              AI for Healthcare: Transforming Patient Care
            </h1>

            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Leverage autonomous AI to improve patient outcomes, streamline operations, and unlock insights from healthcare data. Trusted by leading healthcare systems like Penn Medicine.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105"
            >
              Transform Healthcare Operations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Challenges */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Healthcare Challenges We Solve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <Database className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Fragmented Data</h3>
              <p className="text-foreground/70">
                Patient data scattered across EHRs, lab systems, imaging, and legacy platforms creates silos that delay care and insights.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <Activity className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Operational Inefficiency</h3>
              <p className="text-foreground/70">
                Manual workflows, administrative burden, and resource constraints limit healthcare providers' ability to focus on patient care.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Compliance & Security</h3>
              <p className="text-foreground/70">
                HIPAA compliance, data privacy, and security requirements add complexity to every system and process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            AI-Powered Healthcare Solutions
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-white border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Unified Patient Data Platform</h3>
                  <p className="text-foreground/70 mb-4">
                    Agentic data platforms that integrate EHR, lab, imaging, and IoT data in real-time. AI agents continuously clean, enrich, and harmonize data for a complete patient view.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['360° patient view', 'Real-time data sync', 'HIPAA-compliant'].map((feature, i) => (
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
              className="bg-white border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Clinical Decision Support</h3>
                  <p className="text-foreground/70 mb-4">
                    AI agents analyze patient history, symptoms, and medical literature to provide evidence-based treatment recommendations and early risk detection.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['Risk stratification', 'Treatment recommendations', 'Drug interaction alerts'].map((feature, i) => (
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
              className="bg-white border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Intelligent Workflow Automation</h3>
                  <p className="text-foreground/70 mb-4">
                    Multi-agent systems automate patient scheduling, insurance verification, care coordination, and administrative tasks to reduce burden on clinical staff.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['Smart scheduling', 'Prior authorization', 'Care coordination'].map((feature, i) => (
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
              className="bg-white border border-border rounded-xl p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Population Health Management</h3>
                  <p className="text-foreground/70 mb-4">
                    AI-powered analytics identify at-risk populations, predict readmissions, and optimize care pathways to improve outcomes at scale.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {['Readmission prediction', 'Care gap identification', 'Outcome tracking'].map((feature, i) => (
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

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Healthcare Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <CaseStudyCard
              client="Penn Medicine"
              industry="Academic Medical Center"
              challenge="Fragmented patient data across 15+ legacy systems causing delays in care delivery and limiting research capabilities"
              solution="Implemented agentic data platform with AI-powered integration, real-time analytics, and automated data quality management"
              result="40% faster diagnosis"
              impact="Reduced patient wait times from data retrieval delays and improved care coordination across departments"
            />

            <CaseStudyCard
              client="Regional Health System"
              industry="Healthcare"
              challenge="High readmission rates and inability to identify at-risk patients proactively"
              solution="Deployed multi-agent AI system for population health management with predictive analytics and care coordination"
              result="30% fewer readmissions"
              impact="Improved patient outcomes and reduced costs through proactive interventions"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Healthcare AI Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Improved patient outcomes through faster, data-driven decisions',
                'Reduced administrative burden on clinical staff',
                'Enhanced care coordination across departments and facilities',
                'Predictive insights for proactive intervention',
                'HIPAA-compliant data integration and security',
                'Scalable solutions that grow with your organization',
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
            Ready to Transform Healthcare Delivery?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join leading healthcare organizations using AI to improve patient care and operational efficiency.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Schedule a Healthcare Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
