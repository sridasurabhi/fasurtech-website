'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  BarChart3,
  ScrollText,
  BookOpen,
  Users,
  Code2,
  Sparkles,
  ArrowRight,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';

const portfolioItems = [
  {
    number: '01',
    title: 'Enterprise Compliance & Automated Audit System',
    subtitle: 'Enterprise Log Ingestion & Continuous Access Compliance',
    industry: 'Enterprise / Security',
    problemStatement:
      'Large enterprises struggle to audit user access across fragmented systems—Oracle EBS, PeopleSoft, Workday, Coupa—leading to compliance risks, delayed reports, and costly manual bottlenecks that take weeks to complete.',
    solution:
      'Built an end-to-end automated audit engine integrating Splunk with advanced AI models. The system ingests massive log streams from disparate enterprise suites, then uses AI to correlate, analyze, and flag anomalous permissions or authorization violations in near real-time.',
    businessValue:
      'Transforms a traditionally weeks-long manual review process into an automated, near-real-time compliance verification system—dramatically reducing audit prep time and organizational risk exposure.',
    icon: ShieldCheck,
    tags: ['Splunk', 'Oracle EBS', 'PeopleSoft', 'Workday', 'Coupa', 'AI/ML', 'SOC Compliance', 'Log Analytics'],
  },
  {
    number: '02',
    title: 'AI Governance & FinOps Dashboard',
    subtitle: 'Token Budgeting, Usage Tracking & AI ROI Analytics',
    industry: 'Enterprise / FinOps',
    problemStatement:
      'As organizations rapidly adopt AI tools enterprise-wide, tracking multi-platform costs, token allocations, and calculating real ROI becomes unmanageable. Without visibility, AI spend spirals with no accountability.',
    solution:
      'Developed a comprehensive AI Usage & FinOps Dashboard aggregating data across LLM usage, agentic workflows, custom AI chatbots, and cloud infrastructure costs across AWS and Azure AI. Includes an enterprise framework for employee token budgets with real-time consumption tracking.',
    businessValue:
      'Empowers leadership with granular visibility into AI spending patterns. By mapping token consumption against business output, it provides concrete data to assess productivity gains and calculate precise AI ROI—turning AI spend from a cost center into a measured investment.',
    icon: BarChart3,
    tags: ['AWS', 'Azure AI', 'LLM APIs', 'Token Budgeting', 'Multi-Cloud', 'ROI Analytics', 'AI Governance'],
  },
  {
    number: '03',
    title: 'Intelligent Contract Lifecycle RAG System',
    subtitle: 'Automated Review, Risk Assessment & Approval Workflows',
    industry: 'Legal / Procurement',
    problemStatement:
      'Legal and procurement teams face critical bottlenecks manually reviewing, comparing, and approving high volumes of corporate contracts—often missing hidden liabilities buried in dense legal language.',
    solution:
      'Architected specialized RAG pipelines tailored for legal document analysis. The system securely parses complex legal text, extracts critical clauses, identifies non-standard language or hidden liabilities, and cross-references them against organizational compliance standards.',
    businessValue:
      'Drastically accelerates the contract review-to-approval lifecycle. Minimizes human oversight errors, automatically flags high-risk deviations, and frees legal teams to focus exclusively on edge cases rather than repetitive manual scanning.',
    icon: ScrollText,
    tags: ['RAG', 'LLM', 'Legal NLP', 'Vector Database', 'Document Processing', 'Risk Detection'],
  },
  {
    number: '04',
    title: 'Enterprise Application Knowledge Base',
    subtitle: 'Semantic Search & Troubleshooting Engine for Business Applications',
    industry: 'Enterprise IT',
    problemStatement:
      'Internal teams waste significant time hunting through fragmented documentation, wikis, and tickets to resolve complex business application issues—creating a hidden but massive productivity drain across the organization.',
    solution:
      'Engineered an advanced RAG-driven internal knowledge base serving as an intelligent troubleshooting assistant. By indexing complex technical docs, architecture diagrams, and operational manuals, it understands natural language queries and surfaces instant, context-aware answers.',
    businessValue:
      "Serves as a definitive single source of truth, significantly reducing internal IT support ticket volumes. Accelerates onboarding for technical teams and empowers employees to independently resolve complex business application issues.",
    icon: BookOpen,
    tags: ['RAG', 'Semantic Search', 'Vector Embeddings', 'Oracle EBS', 'PeopleSoft', 'Internal Knowledge', 'NLP'],
  },
  {
    number: '05',
    title: 'Conversational HR Agent & Benefits Navigator',
    subtitle: 'End-to-End New Hire Onboarding & Employee Self-Service',
    industry: 'Human Resources',
    problemStatement:
      'HR teams are perpetually bogged down by repetitive administrative tasks during new hire onboarding and high-volume routine questions about corporate benefits—pulling focus away from strategic talent initiatives.',
    solution:
      'Built a dual-purpose Conversational AI System spanning the full employee lifecycle. For new hires, it acts as a step-by-step interactive guide tracking document completion. For existing employees, it uses an intelligent QA engine trained on corporate policies, health plans, and benefit structures.',
    businessValue:
      'Modernizes the employee experience with instantaneous 24/7 answers to complex benefits queries. Drastically reduces HR administrative load—freeing teams from routine support to focus on strategic talent development and retention.',
    icon: Users,
    tags: ['Conversational AI', 'HR Systems', 'NLP', 'Onboarding Automation', 'Benefits AI', 'Policy QA'],
  },
  {
    number: '06',
    title: 'AI Code Intelligence Platform',
    subtitle: 'Automated Code Review, Security Scanning & Documentation Generation',
    industry: 'Software Development',
    problemStatement:
      'Engineering teams struggle with inconsistent code quality, security vulnerabilities lurking undetected in codebases, and documentation that perpetually lags behind the actual code—creating technical debt and compliance risk.',
    solution:
      'Developed an integrated AI system that performs automated code review (identifying bugs, anti-patterns, and refactoring opportunities), runs continuous security scans against OWASP and SAST standards, and auto-generates up-to-date technical documentation directly from the live codebase.',
    businessValue:
      'Delivers faster, consistent code quality gates while eliminating documentation drift. Security vulnerabilities are caught pre-deployment, reducing breach risk. Developers reclaim hours previously lost to manual review cycles and keeping docs current.',
    icon: Code2,
    tags: ['Code Review AI', 'Security Scanning', 'SAST/DAST', 'Documentation Gen', 'OWASP', 'LLM', 'DevSecOps'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AIPortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/25 rounded-full"
              style={{ left: `${(i * 6.25) % 100}%`, top: `${(i * 13) % 100}%` }}
              animate={{ scale: [1, 2, 1], opacity: [0.25, 0.7, 0.25] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">AI Solutions We've Built</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent"
            >
              AI Portfolio
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/70 leading-relaxed mb-10"
            >
              Six production AI systems we architected and deployed—each solving a real enterprise bottleneck with measurable business impact.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 text-sm">
              {['6 Production Systems', '3+ Industry Verticals', 'Enterprise-Grade Security', 'Measurable ROI'].map(
                (stat) => (
                  <div key={stat} className="flex items-center gap-2 text-foreground/60">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>{stat}</span>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 pb-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.number} {...item} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-white border border-border rounded-2xl px-10 py-10 max-w-xl">
              <h2 className="text-2xl font-bold text-foreground mb-3">Have a Similar Challenge?</h2>
              <p className="text-foreground/60 mb-6">
                These systems were built for real enterprises facing real bottlenecks. Let's talk about yours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-secondary text-background font-semibold rounded-full transition-all hover:scale-105"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
