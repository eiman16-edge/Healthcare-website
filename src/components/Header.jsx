import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LANGUAGES } from "../i18n/translations.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const NAV_HREFS = ["#home", "#about", "#qualifications", "#specializations", "#qa", "#contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navLinks = NAV_HREFS.map((href, i) => ({ href, label: t.nav[i] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[100] pt-3.5">
      <div className="w-[min(1160px,100%-40px)] mx-auto">
        <div
          className={`relative flex items-center gap-3 glass rounded-[18px] px-4.5 py-3 transition-shadow duration-300 ${
            scrolled ? "shadow-[0_16px_40px_rgba(15,23,42,0.12)]" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-3 min-w-0" aria-label="Dr. Khalid Khan Zadran — home">
            <span className="shrink-0 w-11 h-11 grid place-items-center rounded-[13px] bg-white border border-line shadow-[0_6px_14px_rgba(15,23,42,0.08)]">
              <img src="/brain-logo.png" alt="" className="h-8 w-auto object-contain" />
            </span>
            <span className="flex flex-col leading-tight">
              <strong className="font-display text-[16.5px] font-bold text-navy-800 whitespace-nowrap">
                Dr. Khalid Khan Zadran
              </strong>
              <small className="text-xs text-muted">{t.consultant}</small>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden xl:block ml-auto" aria-label="Main navigation">
            <ul className="flex items-center gap-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-2.5 py-2 text-[13.5px] font-medium text-ink rounded-[10px] transition-colors hover:bg-gray-100 hover:text-navy-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="btn-primary hidden xl:inline-flex shrink-0">
            {t.book}
          </a>

          <label className="sr-only" htmlFor="language-select">{t.language}</label>
          <select id="language-select" value={language} onChange={(event) => setLanguage(event.target.value)} className="h-10 max-w-[105px] rounded-full border border-line bg-white/75 px-3 text-[13px] font-semibold text-navy-800 outline-none focus-visible:ring-2 focus-visible:ring-teal-500" aria-label={t.language}>
            {LANGUAGES.map((item) => <option key={item.code} value={item.code}>{item.native}</option>)}
          </select>

          {/* Mobile toggle */}
          <button
            className="xl:hidden ml-auto w-11 h-11 grid place-items-center rounded-xl liquid-glass text-navy-800 cursor-pointer"
            aria-label={t.mobileMenu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <X className="w-5 h-5" strokeWidth={2.2} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={2.2} />
            )}
          </button>

          {/* Mobile nav panel */}
          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="xl:hidden glass absolute top-[calc(100%+10px)] left-0 right-0 rounded-[18px] shadow-[0_24px_60px_rgba(15,23,42,0.14)] p-3"
                aria-label={t.mobileNav}
              >
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 text-[15.5px] font-medium text-ink rounded-xl transition-colors hover:bg-gray-100"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full mt-2"
                >
                  {t.book}
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
