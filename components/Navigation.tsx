'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiServices = [
    { name: 'AI Strategy & Readiness', href: '/services/ai-strategy', sub: 'Executive roadmapping & adoption' },
    { name: 'Multi-Agent Frameworks', href: '/services/multi-agent', sub: 'Autonomous AI teams at scale' },
    { name: 'Agentic Data Platforms', href: '/services/data-platforms', sub: 'Self-optimizing data intelligence' },
    { name: 'AI-Powered QA', href: '/services/ai-qa', sub: 'Intelligent test automation' },
  ];

  const itServices = [
    { name: 'Managed Services', href: '/services/managed-services', sub: 'Oracle, PeopleSoft, SQL Server' },
    { name: 'Testing Services', href: '/services/testing-services', sub: 'Performance, QA, TaaS' },
  ];

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Financial Services', href: '/industries/financial' },
    { name: 'Public Sector', href: '/industries/public-sector' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-background font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Fasurtech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* AI Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('ai-services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors text-sm font-medium">
                <span>AI Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'ai-services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-muted/95 backdrop-blur-md rounded-xl border border-border shadow-xl overflow-hidden"
                  >
                    <div className="px-4 py-2.5 border-b border-border/50 bg-primary/5">
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">Next-Gen AI Capabilities</p>
                    </div>
                    {aiServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 hover:bg-primary/10 transition-colors group/item"
                      >
                        <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">{service.name}</span>
                        <p className="text-xs text-foreground/50 mt-0.5">{service.sub}</p>
                      </Link>
                    ))}
                    <div className="border-t border-border/50 px-4 py-3 flex gap-3">
                      <Link href="/ai-portfolio" className="text-xs text-primary/80 hover:text-primary font-medium transition-colors">AI Portfolio →</Link>
                      <Link href="/ai-transformation" className="text-xs text-primary/80 hover:text-primary font-medium transition-colors">AI Transformation →</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* IT Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('it-services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors text-sm">
                <span>IT Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'it-services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-muted/95 backdrop-blur-md rounded-xl border border-border shadow-xl overflow-hidden"
                  >
                    <div className="px-4 py-2.5 border-b border-border/50 bg-foreground/5">
                      <p className="text-xs font-bold text-foreground/60 uppercase tracking-widest">Managed & Testing Services</p>
                    </div>
                    {itServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 hover:bg-primary/10 transition-colors group/item"
                      >
                        <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">{item.name}</span>
                        <p className="text-xs text-foreground/50 mt-0.5">{item.sub}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors text-sm">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-muted/95 backdrop-blur-md rounded-xl border border-border shadow-xl overflow-hidden"
                  >
                    {industries.map((industry) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        className="block px-4 py-3 hover:bg-primary/10 hover:text-primary transition-colors text-sm"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/clients"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Clients
            </Link>

            <Link
              href="/about"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2 bg-primary hover:bg-secondary text-background rounded-full font-semibold text-sm transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-border overflow-hidden"
            >
              <div className="pt-4 space-y-1">
                <div className="space-y-1">
                  <p className="text-xs text-primary font-bold uppercase tracking-widest px-4 pb-1">AI Services</p>
                  {aiServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/ai-portfolio"
                    className="block px-4 py-2 text-sm font-medium text-primary/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Portfolio
                  </Link>
                  <Link
                    href="/ai-transformation"
                    className="block px-4 py-2 text-sm font-medium text-primary/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Transformation
                  </Link>
                </div>

                <div className="pt-2 border-t border-border/30 space-y-1">
                  <p className="text-xs text-foreground/50 font-bold uppercase tracking-widest px-4 pb-1">IT Services</p>
                  {itServices.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-2 border-t border-border/30 space-y-1">
                  <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest px-4 pb-1">Industries</p>
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-2 border-t border-border/30 space-y-1">
                  <Link
                    href="/clients"
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Clients
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </div>

                <Link
                  href="/contact"
                  className="block mx-4 mt-4 px-6 py-2.5 bg-primary hover:bg-secondary text-background text-center text-sm rounded-full font-semibold transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
