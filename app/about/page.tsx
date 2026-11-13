'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About Fasurtech
            </h1>

            <p className="text-xl text-foreground/70 leading-relaxed">
              From legacy IT expertise to autonomous intelligence leadership - we're transforming how enterprises leverage AI to drive innovation and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: '20+', label: 'Years in Business' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '5', label: 'Industry Verticals' },
              { value: '100%', label: 'Mission-Critical Uptime' },
            ].map((s) => (
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

      {/* Oracle Partnership */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <Image src="/brand/oracle-silver-partner.png" alt="Oracle Silver Partner" width={771} height={123} className="h-16 w-auto shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-2 text-foreground">Oracle Silver Partner</h2>
              <p className="text-foreground/80">
                FaSur is a member of Oracle PartnerNetwork at the Silver level. Our consultants support Oracle E-Business Suite, PeopleSoft, Fusion Middleware and Endeca for enterprise clients in healthcare, higher education, government and retail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Our Journey</h2>

            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                FaSur Technologies was founded as a specialized IT managed services consultancy focused on helping organizations achieve their IT objectives through quality services at competitive rates. We built deep expertise in enterprise applications — Oracle E-Business Suite, PeopleSoft, Microsoft SQL Server, Fusion Middleware — and earned a reputation for delivering reliable, proactive support across healthcare, government, higher education, retail, and technology sectors.
              </p>

              <p>
                Over 20+ years, our client roster grew to include Penn Medicine, the University of Pennsylvania, the Transportation Security Administration, Barnes & Noble, Allegis Group, WellMed, DFW International Airport, and many others — each choosing Fasurtech because of our consistent quality, domain knowledge, and long-term partnership approach.
              </p>

              <p>
                Today, we've evolved into a next-generation AI and Data Intelligence firm. We combine our proven enterprise expertise with cutting-edge autonomous agent technology — building Multi-Agent Frameworks, Agentic Data Platforms, and AI-Powered QA capabilities that bridge the gap between legacy IT investments and the AI-first future. Our heritage gives us something pure technology firms lack: deep understanding of real enterprise environments, constraints, and the true cost of failure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Organizations We've Served</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                'Penn Medicine', 'University of Pennsylvania', 'TSA', 'Barnes & Noble',
                'Allegis Group', 'WellMed', 'USP', 'DFW Airport',
                'Sun Microsystems', 'Hoovers', 'Viverae', 'Exaclyme',
              ].map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 bg-white border border-border rounded-full text-sm text-foreground/70 font-medium hover:border-primary/40 hover:text-foreground transition-all"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Client Success</h3>
              <p className="text-foreground/70">
                We measure our success by the measurable outcomes we deliver for our clients.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Innovation</h3>
              <p className="text-foreground/70">
                Continuously evolving our capabilities to stay at the forefront of AI technology.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Quality</h3>
              <p className="text-foreground/70">
                Delivering proven solutions with the rigor and reliability enterprise demands.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Partnership</h3>
              <p className="text-foreground/70">
                Building long-term relationships based on trust, transparency, and shared success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Our Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">AI & Autonomous Systems</h3>
                <ul className="space-y-3">
                  {[
                    'Multi-agent frameworks and orchestration',
                    'Agentic data platforms',
                    'AI-powered quality assurance',
                    'Strategic AI consulting and roadmapping',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Enterprise Managed Services</h3>
                <ul className="space-y-3">
                  {[
                    'Oracle E-Business Suite (R12 upgrades, 24/7 support)',
                    'PeopleSoft HCM & Financials administration',
                    'Microsoft SQL Server DBA & optimization',
                    'Fusion Middleware & Endeca management',
                    'Performance & QA testing (TaaS)',
                    'Remote IT support and advisory',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Industries We Serve
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              Deep domain expertise in the most demanding sectors
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Healthcare', desc: 'Patient care optimization, EHR data integration, and AI-driven diagnostics' },
                { name: 'Higher Education', desc: 'Oracle EBS implementations and administrative system management' },
                { name: 'Government & Public Sector', desc: 'Mission-critical systems, citizen service automation, and compliance' },
                { name: 'Financial Services', desc: 'Risk management, fraud detection, and enterprise data platforms' },
                { name: 'Retail & Commerce', desc: 'Commerce search optimization, performance testing, and database management' },
                { name: 'Technology & Staffing', desc: 'Enterprise application administration and managed IT services' },
              ].map((industry, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 text-foreground">{industry.name}</h3>
                  <p className="text-foreground/70">{industry.desc}</p>
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's explore how Fasurtech can help transform your organization with AI.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
