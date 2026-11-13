'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const aiServices = [
  { name: 'AI Strategy & Readiness', href: '/services/ai-strategy', sub: 'Executive roadmapping and adoption' },
  { name: 'Multi-Agent Frameworks', href: '/services/multi-agent', sub: 'Autonomous AI teams at scale' },
  { name: 'Agentic Data Platforms', href: '/services/data-platforms', sub: 'Self-optimizing data intelligence' },
  { name: 'AI-Powered QA', href: '/services/ai-qa', sub: 'Intelligent test automation' },
];

const itServices = [
  { name: 'Managed Services', href: '/services/managed-services', sub: 'Oracle, PeopleSoft, SQL Server' },
  { name: 'Testing Services', href: '/services/testing-services', sub: 'Performance, QA, TaaS' },
];

const industries = [
  { name: 'Healthcare', href: '/industries/healthcare', sub: 'Care coordination and clinical data' },
  { name: 'Financial Services', href: '/industries/financial', sub: 'Fraud, risk and compliance' },
  { name: 'Public Sector', href: '/industries/public-sector', sub: 'Citizen services and operations' },
];

type MenuItem = { name: string; href: string; sub: string };

function Dropdown({
  id,
  label,
  items,
  footer,
  active,
  setActive,
}: {
  id: string;
  label: string;
  items: MenuItem[];
  footer?: { name: string; href: string }[];
  active: string | null;
  setActive: (v: string | null) => void;
}) {
  const open = active === id;
  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(id)}
      onMouseLeave={() => setActive(null)}
      onFocus={() => setActive(id)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setActive(null);
      }}
    >
      <button
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium transition-colors ${
          open ? 'text-primary' : 'text-foreground hover:text-primary'
        }`}
      >
        {label}
        <ChevronDown strokeWidth={3} className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="absolute left-0 top-full z-50 min-w-[240px]"
          >
            <div className="bg-[#12305f] py-2 shadow-lg">
              {[...items.map(({ name, href }) => ({ name, href })), ...(footer ?? [])].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block whitespace-nowrap px-4 py-3 text-[14px] text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const close = () => setMobileOpen(false);

  const mobileLink = 'block py-2.5 text-[15px] text-foreground hover:text-primary';
  const mobileHead = 'pt-4 pb-1 text-sm font-semibold text-slate-500';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-[family-name:var(--font-poppins)]">
      {/* Main bar */}
      <nav aria-label="Primary" className="bg-white border-b border-border">
        <div className="wrap flex h-[68px] items-center justify-between">
          <Link href="/" aria-label="FaSur Technologies home" className="flex-shrink-0">
            <Image src="/brand/fasur-logo.png" alt="FaSur Technologies" width={603} height={258} priority className="h-9 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Dropdown
              id="ai"
              label="AI Services"
              items={aiServices}
              footer={[
                { name: 'AI Portfolio', href: '/ai-portfolio' },
                { name: 'AI Transformation', href: '/ai-transformation' },
              ]}
              active={active}
              setActive={setActive}
            />
            <Dropdown id="it" label="IT Services" items={itServices} active={active} setActive={setActive} />
            <Dropdown id="ind" label="Industries" items={industries} active={active} setActive={setActive} />
            <Link href="/clients" className="px-3 py-2 text-[14px] font-medium text-foreground hover:text-primary transition-colors">
              Clients
            </Link>
            <Link href="/about" className="px-3 py-2 text-[14px] font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-primary hover:bg-secondary text-white text-[14px] font-semibold rounded-md transition-colors"
            >
              Book a consultation
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border bg-white max-h-[calc(100vh-68px)] overflow-y-auto"
            >
              <div className="wrap pb-6">
                <p className={mobileHead}>AI Services</p>
                {aiServices.map((s) => (
                  <Link key={s.href} href={s.href} onClick={close} className={mobileLink}>{s.name}</Link>
                ))}
                <Link href="/ai-portfolio" onClick={close} className={`${mobileLink} font-semibold text-primary`}>AI Portfolio</Link>
                <Link href="/ai-transformation" onClick={close} className={`${mobileLink} font-semibold text-primary`}>AI Transformation</Link>

                <p className={mobileHead}>IT Services</p>
                {itServices.map((s) => (
                  <Link key={s.href} href={s.href} onClick={close} className={mobileLink}>{s.name}</Link>
                ))}

                <p className={mobileHead}>Industries</p>
                {industries.map((s) => (
                  <Link key={s.href} href={s.href} onClick={close} className={mobileLink}>{s.name}</Link>
                ))}

                <div className="mt-4 pt-2 border-t border-border">
                  <Link href="/clients" onClick={close} className={mobileLink}>Clients</Link>
                  <Link href="/about" onClick={close} className={mobileLink}>About</Link>
                </div>
                <Link
                  href="/contact"
                  onClick={close}
                  className="block mt-4 px-6 py-3 bg-primary hover:bg-secondary text-white text-center text-sm font-semibold rounded-md"
                >
                  Book a consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
