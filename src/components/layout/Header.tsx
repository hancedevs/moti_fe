"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type DropdownItem = {
  label: string;
  href: string;
};

type Theme = "light" | "dark";

function NavItem({
  href,
  label,
  dropdownItems,
  onNavigate,
}: {
  href: string;
  label: string;
  dropdownItems?: DropdownItem[];
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <div className="relative group shrink-0">
      <Link
        href={href}
        onClick={(event) => onNavigate(event, href)}
        className="flex items-center text-[13px] font-medium text-gray-600 hover:text-blue-600 py-4 transition-colors whitespace-nowrap"
      >
        {label}
        {dropdownItems && (
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>

      {dropdownItems && (
        <div className="absolute left-0 top-full hidden w-56 flex-col bg-white shadow-lg border border-gray-100 rounded-md group-hover:flex z-50 overflow-hidden">
          {dropdownItems.map((item, idx) => (
            <Link key={idx} href={item.href} onClick={(event) => onNavigate(event, item.href)} className="px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-50 last:border-0">{item.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const targetId = window.sessionStorage.getItem("pendingScrollTarget");

    if (!targetId) {
      return;
    }

    window.sessionStorage.removeItem("pendingScrollTarget");
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `${pathname}#${targetId}`);
    }, 120);
  }, [pathname]);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setMobileExpandedDropdown(mobileExpandedDropdown === label ? null : label);
  };

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";

    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const handleSmoothNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobileMenu = false
  ) => {
    if (closeMobileMenu) {
      setIsMobileMenuOpen(false);
    }

    const hashIndex = href.indexOf("#");

    if (hashIndex === -1) {
      return;
    }

    const hrefPath = href.slice(0, hashIndex) || pathname;
    const targetId = href.slice(hashIndex + 1);
    const targetPath = hrefPath.startsWith("/") ? hrefPath : pathname;

    if (!targetId) {
      return;
    }

    event.preventDefault();

    if (targetPath === pathname) {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", href);
      return;
    }

    window.sessionStorage.setItem("pendingScrollTarget", targetId);
    router.push(targetPath);
  };

  return (
    <header className="w-full z-50 flex flex-col">
      {/* Top Blue Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 sm:px-6 lg:px-8 text-xs font-medium">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left Side: Contact */}
          <div className="flex items-center gap-6">
            <a href="tel:+2511115545059" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +251 11 15545059
            </a>
            <a href="mailto:info@motiengineering.com" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@motiengineering.com
            </a>
          </div>

          {/* Right Side: Location */}
          <div className="hidden sm:flex items-center gap-2 text-blue-100">
            <span className="font-semibold text-white">MOTI Engineering PLC</span>
            <span className="text-white/50">|</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

          {/* Logo - Left Section */}
          <div className="flex-shrink-0 flex items-center justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/motiLogo.png"
                alt="MOTI Engineering Logo"
                width={140}
                height={42}
                className="object-contain h-auto w-auto max-h-10"
                priority
              />
            </Link>
          </div>

          {/* Center Links - Middle Section */}
          <nav className="hidden lg:flex items-center justify-center space-x-3 xl:space-x-5 flex-shrink-0">
            <NavItem href="/" label="Home" onNavigate={handleSmoothNavigation} />
            <NavItem href="/about" label="About Us" dropdownItems={[
              { label: "Who We Are", href: "/about#about" },
              { label: "Why Work With Us", href: "/about#why-work-with-us" },
              { label: "Our Mission & Value", href: "/about#mission" },
              { label: "Company Milestones", href: "/about#milestones" },
              { label: "Points of Presence", href: "/about#points-of-presence" },
              { label: "Board of Directors", href: "/about#board" },
              { label: "CEO Message", href: "/about#ceo-message" },
              { label: "Our Leadership Team", href: "/about#leadership" },
              { label: "Certifications & Awards", href: "/about#awards" },
            ]} onNavigate={handleSmoothNavigation} />
            <NavItem href="/projects" label="Projects" onNavigate={handleSmoothNavigation} />
            <NavItem href="/testimonials" label="Testimonial" dropdownItems={[
              { label: "Testimonial", href: "/testimonials#testimonials" },
              { label: "Client", href: "/clients" },
              { label: "Partner", href: "/partners" },
            ]} onNavigate={handleSmoothNavigation} />
            <NavItem href="#services" label="Our Services" dropdownItems={[{ label: "View Services", href: "#services" }]} onNavigate={handleSmoothNavigation} />
            <NavItem href="/news" label="News & Media" dropdownItems={[
              { label: "News", href: "/news" },
              { label: "Blog", href: "/blog" },
              { label: "Gallery", href: "/gallery" },
            ]} onNavigate={handleSmoothNavigation} />
            <NavItem href="/careers" label="Career" onNavigate={handleSmoothNavigation} />
            <NavItem href="/contact" label="Contact" onNavigate={handleSmoothNavigation} />
          </nav>

          {/* Right Controls - Right Section */}
          <div className="hidden lg:flex items-center justify-end space-x-4 xl:space-x-5 shrink-0">

            {/* Language Selection */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {/* Language Dropdown */}
              <div className="absolute right-0 top-full mt-2 hidden w-32 flex-col bg-white shadow-lg border border-gray-100 rounded-md group-hover:flex z-50 overflow-hidden">
                <button className="px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 hover:text-blue-600">English</button>
                <button className="px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 hover:text-blue-600">Amharic</button>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* IMS Portal Expanding Button */}
            <Link
              href="#ims-portal"
              className="group flex items-center h-8 bg-blue-600 text-white font-medium text-xs rounded-md shadow-sm hover:shadow-md hover:bg-blue-700 px-3 overflow-hidden transition-all duration-500 ease-out flex-shrink-0"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>

              {/* Expanded Text */}
              <div className="flex items-center whitespace-nowrap overflow-hidden transition-[max-width,opacity,margin] duration-500 ease-out max-w-0 opacity-0 group-hover:max-w-[250px] group-hover:opacity-100 group-hover:ml-2">
                Incident Management System Portal
              </div>

              {/* Default Text */}
              <div className="flex items-center whitespace-nowrap transition-[max-width,opacity,margin] duration-500 ease-out max-w-[70px] opacity-100 ml-2 group-hover:max-w-0 group-hover:opacity-0 group-hover:ml-0">
                IMS Portal
              </div>
            </Link>

          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-blue-600 p-2 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white shadow-lg border-b border-gray-100 ${isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 overflow-y-auto max-h-[80vh]">
          <Link href="/" className="block px-3 py-3 text-base font-medium text-gray-900 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

          <div>
            <button onClick={() => toggleMobileDropdown("About")} className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 hover:text-blue-600 rounded-md hover:bg-gray-50 focus:outline-none">
              About Us
              <svg className={`ml-1 h-4 w-4 transform transition-transform ${mobileExpandedDropdown === "About" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpandedDropdown === "About" && (
              <div className="pl-6 pb-2 space-y-1">
                <Link href="/about#about" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "/about#about", true)}>Who We Are</Link>
                <Link href="/about#why-work-with-us" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "/about#why-work-with-us", true)}>Why Work With Us</Link>
                <Link href="/about#mission" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "/about#mission", true)}>Our Mission & Value</Link>
                <Link href="/about#milestones" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "/about#milestones", true)}>Company Milestones</Link>
                <Link href="/about#points-of-presence" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "/about#points-of-presence", true)}>Points of Presence</Link>
                <Link href="/about#board" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "/about#board", true)}>Board of Directors</Link>
                <Link href="/about#ceo-message" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "/about#ceo-message", true)}>CEO Message</Link>
                <Link href="/about#leadership" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "/about#leadership", true)}>Our Leadership Team</Link>
                <Link href="/about#awards" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "/about#awards", true)}>Certifications & Awards</Link>
              </div>
            )}
          </div>

          <Link href="/projects" className="block px-3 py-3 text-base font-medium text-gray-900 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <div>
            <button onClick={() => toggleMobileDropdown("Testimonial")} className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 hover:text-blue-600 rounded-md hover:bg-gray-50 focus:outline-none">
              Testimonial
              <svg className={`ml-1 h-4 w-4 transform transition-transform ${mobileExpandedDropdown === "Testimonial" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpandedDropdown === "Testimonial" && (
              <div className="pl-6 pb-2 space-y-1">
                <Link href="/testimonials#testimonials" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "/testimonials#testimonials", true)}>Testimonial</Link>
                <Link href="/clients" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Client</Link>
                <Link href="/partners" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Partner</Link>
              </div>
            )}
          </div>
          <Link href="#services" className="block px-3 py-3 text-base font-medium text-gray-900 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={(event) => handleSmoothNavigation(event, "#services", true)}>Our Services</Link>
          <div>
            <button onClick={() => toggleMobileDropdown("News & Media")} className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 hover:text-blue-600 rounded-md hover:bg-gray-50 focus:outline-none">
              News & Media
              <svg className={`ml-1 h-4 w-4 transform transition-transform ${mobileExpandedDropdown === "News & Media" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileExpandedDropdown === "News & Media" && (
              <div className="pl-6 pb-2 space-y-1">
                <Link href="/news" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
                <Link href="/blog" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                <Link href="/gallery" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
              </div>
            )}
          </div>
          <Link href="/careers" className="block px-3 py-3 text-base font-medium text-gray-900 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Career</Link>
          <Link href="/contact" className="block px-3 py-3 text-base font-medium text-gray-900 hover:text-blue-600 rounded-md hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

          <div className="pt-4 pb-2 border-t border-gray-100 mt-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="mb-3 flex w-full items-center justify-between rounded-md border border-gray-100 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              {theme === "dark" ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <Link
              href="#ims-portal"
              className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white font-medium text-sm rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Incident Management System Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
