import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand & Address */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image 
                src="/motiLogo.png" 
                alt="MOTI Engineering Logo" 
                width={140} 
                height={45} 
                className="object-contain h-auto w-auto max-h-12 bg-white p-1 rounded-sm"
              />
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Ethiopia's Leading ICT Solution Provider
            </p>
            <address className="not-italic text-sm text-blue-100 space-y-2">
              <p>Africa Avenue, Bole Road</p>
              <p>Addis Ababa, Ethiopia</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services/banking-equipment" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link href="/services/banking-equipment" className="hover:text-white transition-colors">Banking Equipment & E-payment</Link></li>
              <li><Link href="/services/telecom" className="hover:text-white transition-colors">Telecom Solutions</Link></li>
              <li><Link href="/services/enterprise-software" className="hover:text-white transition-colors">Enterprise Solutions</Link></li>
              <li><Link href="/services/power" className="hover:text-white transition-colors">Power Solutions</Link></li>
              <li><Link href="/services/enterprise-it/data-center" className="hover:text-white transition-colors">Data Center Infrastructures</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+251 11 111 1111</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@motiengineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} MOTI Engineering PLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <a href="https://facebook.com/MOTIEngineering" className="text-blue-200 hover:text-white"><span className="sr-only">Facebook</span><div className="w-5 h-5 rounded-full bg-current"></div></a>
            <a href="https://twitter.com/MOTIEngineering" className="text-blue-200 hover:text-white"><span className="sr-only">Twitter</span><div className="w-5 h-5 rounded-full bg-current"></div></a>
            <a href="https://linkedin.com/company/motiengineering" className="text-blue-200 hover:text-white"><span className="sr-only">LinkedIn</span><div className="w-5 h-5 rounded-full bg-current"></div></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
