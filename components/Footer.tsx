import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Youtube, BookOpen } from 'lucide-react';

const socials = [
  { label: 'LinkedIn', href: 'http://www.linkedin.com/company/fasur-technologies', Icon: Linkedin },
  { label: 'Facebook', href: 'http://www.facebook.com/pages/FaSur-Technologies/264036263620418', Icon: Facebook },
  { label: 'Twitter', href: 'http://www.twitter.com/fasur_tech', Icon: Twitter },
  { label: 'YouTube', href: 'http://www.youtube.com/user/FaSurTechnologies', Icon: Youtube },
  { label: 'Tumblr', href: 'http://fasurtech.tumblr.com/', Icon: BookOpen },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer text-white border-t-4 border-primary">
      <div className="wrap py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" aria-label="FaSur Technologies home">
              <Image src="/brand/fasur-logo-white.png" alt="FaSur Technologies – IT Managed Services" width={603} height={258} className="h-14 w-auto" />
            </Link>
            <p className="text-sm text-white/70">
              Architecting Autonomous Intelligence for the next generation of enterprise solutions.
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`FaSur Technologies on ${label}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="https://www.oracle.com/partnernetwork/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white rounded-md p-2"
            >
              <Image src="/brand/oracle-silver-partner.png" alt="Oracle Silver Partner" width={771} height={123} className="h-10 w-auto" />
            </a>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-[15px]">AI Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-strategy" className="text-sm text-white/70 hover:text-white transition-colors">
                  AI Strategy & Readiness
                </Link>
              </li>
              <li>
                <Link href="/services/multi-agent" className="text-sm text-white/70 hover:text-white transition-colors">
                  Multi-Agent Frameworks
                </Link>
              </li>
              <li>
                <Link href="/services/data-platforms" className="text-sm text-white/70 hover:text-white transition-colors">
                  Agentic Data Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/ai-qa" className="text-sm text-white/70 hover:text-white transition-colors">
                  AI-Powered QA
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/ai-portfolio" className="text-sm text-white hover:text-white/80 transition-colors font-medium">
                  AI Portfolio →
                </Link>
              </li>
              <li>
                <Link href="/ai-transformation" className="text-sm text-white hover:text-white/80 transition-colors font-medium">
                  AI Transformation →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-[15px]">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/healthcare" className="text-sm text-white/70 hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/financial" className="text-sm text-white/70 hover:text-white transition-colors">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/public-sector" className="text-sm text-white/70 hover:text-white transition-colors">
                  Public Sector
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-[15px]">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-[15px]">IT Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/managed-services" className="text-sm text-white/70 hover:text-white transition-colors">
                  Managed Services
                </Link>
                <p className="text-xs text-white/45 mt-0.5">Oracle, PeopleSoft, SQL Server</p>
              </li>
              <li className="pt-1">
                <Link href="/services/testing-services" className="text-sm text-white/70 hover:text-white transition-colors">
                  Testing Services
                </Link>
                <p className="text-xs text-white/45 mt-0.5">Performance, QA, TaaS</p>
              </li>
              <li className="pt-2 border-t border-white/15">
                <Link href="/clients" className="text-sm text-white/70 hover:text-white transition-colors">
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/70">
            © {currentYear} FaSur Technologies. All rights reserved.
          </p>
          <p className="text-xs text-white/45">
            Transforming 20+ years of enterprise IT expertise into AI-first intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
