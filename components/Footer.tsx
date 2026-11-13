import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold text-foreground">Fasurtech</span>
            </div>
            <p className="text-sm text-foreground/70">
              Architecting Autonomous Intelligence for the next generation of enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">AI Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-strategy" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  AI Strategy & Readiness
                </Link>
              </li>
              <li>
                <Link href="/services/multi-agent" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Multi-Agent Frameworks
                </Link>
              </li>
              <li>
                <Link href="/services/data-platforms" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Agentic Data Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/ai-qa" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  AI-Powered QA
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/ai-portfolio" className="text-sm text-primary/80 hover:text-primary transition-colors font-medium">
                  AI Portfolio →
                </Link>
              </li>
              <li>
                <Link href="/ai-transformation" className="text-sm text-primary/80 hover:text-primary transition-colors font-medium">
                  AI Transformation →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/healthcare" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/financial" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/public-sector" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Public Sector
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">IT Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/managed-services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Managed Services
                </Link>
                <p className="text-xs text-foreground/40 mt-0.5">Oracle, PeopleSoft, SQL Server</p>
              </li>
              <li className="pt-1">
                <Link href="/services/testing-services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Testing Services
                </Link>
                <p className="text-xs text-foreground/40 mt-0.5">Performance, QA, TaaS</p>
              </li>
              <li className="pt-2 border-t border-border/30">
                <Link href="/clients" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-foreground/70">
            © {currentYear} Fasurtech. All rights reserved.
          </p>
          <p className="text-xs text-foreground/40">
            Transforming 20+ years of enterprise IT expertise into AI-first intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
