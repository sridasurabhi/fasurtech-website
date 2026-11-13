'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Brain, Network, Database, TestTube, ArrowRight, CheckCircle2, Server, Gauge, ShieldCheck, Layers, Users, Building2,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import AgenticWorkflow from '@/components/AgenticWorkflow';

const clients = ['Penn Medicine', 'Barnes & Noble', 'University of Pennsylvania', 'TSA', 'Allegis Group', 'WellMed', 'DFW Airport'];

const strengths = [
  { icon: Layers, title: 'Enterprise depth', text: 'Twenty-plus years running Oracle E-Business Suite, PeopleSoft and mission-critical systems.' },
  { icon: Brain, title: 'AI-first delivery', text: 'Multi-agent frameworks and autonomous platforms built on top of systems you already run.' },
  { icon: Building2, title: 'Regulated industries', text: 'Healthcare, financial services and the public sector, where uptime and compliance are not optional.' },
  { icon: ShieldCheck, title: 'Quality built in', text: 'AI-powered QA that grew out of our testing practice, so releases are verified before users see them.' },
  { icon: Server, title: 'Modernize without disruption', text: 'Move legacy platforms toward AI-ready architecture in stages, keeping operations live.' },
  { icon: Users, title: 'Pilot to enterprise scale', text: 'Start with one use case, prove the value, then extend it across the organization.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-muted pt-[68px]">
        <div className="wrap grid items-stretch gap-12 py-16 lg:grid-cols-[1.25fr_1fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="hero-in text-4xl font-semibold text-foreground sm:text-5xl lg:text-[3.5rem]">
              Enterprise IT experience, applied to autonomous AI
            </h1>
            <p className="hero-in hero-in-2 mt-6 max-w-xl text-lg text-slate-600">
              FaSur Technologies helps healthcare, financial services and public sector organizations move from legacy
              systems to AI that plans, decides and acts, without putting daily operations at risk.
            </p>
            <div className="hero-in hero-in-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-secondary"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ai-portfolio"
                className="inline-flex items-center justify-center rounded-md border border-foreground/25 bg-white px-7 py-3.5 text-[15px] font-semibold text-foreground transition-colors hover:border-foreground"
              >
                See our AI portfolio
              </Link>
            </div>
          </div>

          {/* At-a-glance panel */}
          <aside className="hero-in hero-in-3 flex flex-col bg-footer text-white" aria-label="FaSur at a glance">
            <div className="h-1 bg-primary" />
            <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10">
              <div className="p-7">
                <p className="font-[family-name:var(--font-oswald)] text-5xl font-semibold leading-none">20+</p>
                <p className="mt-2 text-sm text-white/65">years in enterprise IT</p>
              </div>
              <div className="p-7">
                <p className="font-[family-name:var(--font-oswald)] text-5xl font-semibold leading-none">50+</p>
                <p className="mt-2 text-sm text-white/65">enterprise clients served</p>
              </div>
            </div>
            <div className="flex-1 border-b border-white/10 p-7">
              <p className="mb-4 text-sm font-semibold text-white/90">Where we work</p>
              <ul className="space-y-2.5 text-[15px] text-white/75">
                {['Healthcare', 'Financial Services', 'Public Sector', 'Higher Education', 'Retail'].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4 bg-white/[0.04] p-7">
              <Image
                src="/brand/oracle-silver-partner.png"
                alt="Oracle Silver Partner"
                width={771}
                height={123}
                className="h-9 w-auto rounded-sm bg-white px-2 py-1"
              />
              <p className="text-sm text-white/65">Oracle E-Business Suite, PeopleSoft and Endeca services</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Client strip */}
      <section className="border-b border-border bg-white">
        <div className="wrap flex flex-col items-center gap-x-10 gap-y-3 py-6 lg:flex-row">
          <p className="flex-shrink-0 text-sm font-semibold text-slate-500">Trusted by</p>
          <ul className="flex flex-wrap justify-center gap-x-9 gap-y-2 lg:justify-between lg:flex-1">
            {clients.map((c) => (
              <li key={c} className="text-[15px] font-semibold text-foreground/70">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core services */}
      <section id="services" className="py-20 lg:py-28">
        <div className="wrap">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Four AI capabilities, one delivery team</h2>
            <p className="mt-4 text-lg text-slate-600">
              Each capability stands alone or combines with the others, so you can start where the return is clearest.
            </p>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            <ServiceCard
              title="AI Strategy & Readiness"
              description="Executive roadmapping for AI adoption. We assess your data, processes and risks, then sequence the work so each phase pays for the next."
              icon={Brain}
              href="/services/ai-strategy"
            />
            <ServiceCard
              title="Multi-Agent Frameworks"
              description="Design and deploy teams of autonomous agents that coordinate, hand off tasks and improve the workflows they run."
              icon={Network}
              href="/services/multi-agent"
            />
            <ServiceCard
              title="Agentic Data Platforms"
              description="Data engineering and analytics that monitor themselves, raising data quality and surfacing insight without manual rework."
              icon={Database}
              href="/services/data-platforms"
            />
            <ServiceCard
              title="AI-Powered QA"
              description="Testing that learns from every release. Automated quality assurance that adapts to your application as it changes."
              icon={TestTube}
              href="/services/ai-qa"
            />
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">How autonomous agents work together</h2>
            <p className="mt-4 text-lg text-slate-600">
              A coordinator agent breaks a goal into tasks and routes them to specialists for data, analysis and
              communication. Hover over an agent to see its role.
            </p>
            <Link
              href="/services/multi-agent"
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:text-secondary"
            >
              About multi-agent frameworks
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <AgenticWorkflow />
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 lg:py-28">
        <div className="wrap">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Results our clients measure</h2>
            <p className="mt-4 text-lg text-slate-600">Outcomes from AI transformation work across our core industries.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CaseStudyCard
              client="Major Healthcare System"
              industry="Healthcare"
              challenge="Patient data split across 15+ legacy systems was delaying care delivery."
              solution="An agentic data platform with AI-powered integration and real-time analytics."
              result="40% faster diagnosis"
              impact="Shorter patient wait times and better care coordination."
            />
            <CaseStudyCard
              client="Regional Financial Institution"
              industry="Financial Services"
              challenge="Manual fraud review could not keep pace with increasingly sophisticated threats."
              solution="A multi-agent system for real-time fraud detection and prevention."
              result="95% threat detection"
              impact="$12M in fraud losses prevented each year."
            />
            <CaseStudyCard
              client="Government Agency"
              industry="Public Sector"
              challenge="Manual processing meant citizen requests waited an average of 14 days."
              solution="AI workflow automation with intelligent routing and response drafting."
              result="2-day response time"
              impact="85% less processing time and higher citizen satisfaction."
            />
          </div>
        </div>
      </section>

      {/* IT services */}
      <section className="border-y border-border bg-muted py-20 lg:py-28">
        <div className="wrap">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">The IT foundation behind the AI</h2>
            <p className="mt-4 text-lg text-slate-600">
              AI only works on stable systems. Our managed and testing services keep the platforms underneath it running.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Server,
                title: 'Managed Services',
                href: '/services/managed-services',
                text: 'Database and application management with round-the-clock monitoring across Oracle E-Business Suite, SQL Server, PeopleSoft, Fusion Middleware and Endeca.',
                items: ['Oracle EBS R12 upgrades and support', 'SQL Server DBA and high availability', 'PeopleSoft HCM and Financials', '24/7/365 proactive monitoring'],
              },
              {
                icon: Gauge,
                title: 'Testing Services',
                href: '/services/testing-services',
                text: 'Performance testing, QA and Testing as a Service, built on a decade of enterprise software quality work.',
                items: ['Load, stress and endurance testing', 'Functional and regression QA', 'Testing as a Service (TaaS)', 'Business analyst and tester teams'],
              },
            ].map((s) => (
              <div key={s.title} className="flex flex-col border border-border border-t-2 border-t-foreground bg-white p-8">
                <div className="mb-4 flex items-center gap-3">
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                  <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                </div>
                <p className="mb-5 text-[15px] leading-relaxed text-slate-600">{s.text}</p>
                <ul className="mb-7 flex-1 space-y-2.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:text-secondary">
                  Explore {s.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FaSur */}
      <section className="py-20 lg:py-28">
        <div className="wrap">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">From legacy IT to AI leadership</h2>
            <p className="mt-4 text-lg text-slate-600">What you get when your AI partner has also run your infrastructure.</p>
          </div>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t border-border pt-6">
                <Icon className="mb-4 h-6 w-6 text-primary" strokeWidth={1.75} />
                <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary">
        <div className="wrap flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Tell us what you want to automate</h2>
            <p className="mt-3 text-lg text-white/85">
              Book a consultation and we will map a first AI use case against the systems you run today.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-[15px] font-semibold text-primary transition-colors hover:bg-muted"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/clients"
              className="inline-flex items-center justify-center rounded-md border border-white/60 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              View our clients
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
