import { MapPin, Phone } from "lucide-react";
import { FacebookIcon, WhatsAppIcon } from "./icons.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { publicAsset } from "../utils/publicAsset.js";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Specializations", href: "#specializations" },
  { label: "Q&A", href: "#qa" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Brain Surgery",
  "Spine Surgery",
  "Peripheral Nerve Surgery",
  "Neuronavigation Technology",
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-line bg-gradient-to-b from-white to-[#f1f5f7]">
      <div className="relative z-[2] w-[min(1160px,100%-40px)] mx-auto">
        <div className="grid gap-9 lg:gap-11 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.25fr] md:grid-cols-2">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="shrink-0 w-11 h-11 grid place-items-center rounded-[13px] bg-white border border-line shadow-[0_6px_14px_rgba(15,23,42,0.08)]">
                <img src={publicAsset("brain-logo.png")} alt="" className="h-8 w-auto object-contain" />
              </span>
              <span className="flex flex-col leading-tight">
                <strong className="font-display text-[16.5px] font-bold text-navy-800 whitespace-nowrap">
                  Dr. Khalid Khan Zadran
                </strong>
              <small className="text-xs text-muted">{t.consultant}</small>
              </span>
            </a>
            <p className="text-sm text-muted my-4.5 max-w-[34ch]">{t.footer.description}</p>
            <div className="flex gap-2.75">
              <a
                href="https://facebook.com/share/1AAm1LiM8v?mibextid=wwXIfr"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="w-10 h-10 grid place-items-center rounded-xl liquid-glass text-navy-800 transition-all hover:-translate-y-[3px]"
              >
                <FacebookIcon className="w-[19px] h-[19px]" />
              </a>
              <a
                href="https://wa.me/93787654751"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="w-10 h-10 grid place-items-center rounded-xl liquid-glass text-navy-800 transition-all hover:-translate-y-[3px]"
              >
                <WhatsAppIcon className="w-[19px] h-[19px]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-navy-800 text-sm tracking-[0.1em] uppercase mb-4.5">{t.footer.quickLinks}</h4>
            <ul className="grid gap-2.75">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[14.5px] text-muted transition-colors hover:text-navy-800">
                    {t.nav[i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-navy-800 text-sm tracking-[0.1em] uppercase mb-4.5">{t.footer.services}</h4>
            <ul className="grid gap-2.75">
              {SERVICES.map((s, i) => (
                <li key={s}>
                  <a href="#specializations" className="text-[14.5px] text-muted transition-colors hover:text-navy-800">
                    {t.specializations.services[i][0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-navy-800 text-sm tracking-[0.1em] uppercase mb-4.5">{t.footer.contact}</h4>
            <ul className="grid gap-2.75">
              <li className="flex items-start gap-2.75 text-[14.5px] text-muted">
                <Phone className="w-[18px] h-[18px] shrink-0 mt-0.75 text-teal-700" strokeWidth={1.8} />
                <a href="tel:+93787654751" className="hover:text-navy-800 transition-colors">+93 78 765 4751</a>
              </li>
              <li className="flex items-start gap-2.75 text-[14.5px] text-muted">
                <MapPin className="w-[18px] h-[18px] shrink-0 mt-0.75 text-teal-700" strokeWidth={1.8} />
                <span>{t.footer.location}</span>
              </li>
              <li className="flex items-start gap-2.75 text-[14.5px] text-muted">
                <FacebookIcon className="w-[18px] h-[18px] shrink-0 mt-0.75 text-teal-700" />
                <a
                  href="https://facebook.com/share/1AAm1LiM8v?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-navy-800 transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 border-t border-line py-5 pb-24 text-[13px] text-muted">
          <p>© {year} Dr. Khalid Khan Zadran. {t.footer.rights}</p>
          <p>Rifah Medical Complex — Kabul, Afghanistan</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 -bottom-[34px] font-display font-extrabold whitespace-nowrap pointer-events-none select-none leading-none text-[clamp(72px,15vw,190px)] text-navy-800 opacity-[0.045]"
      >
        Dr. Zadran
      </div>
    </footer>
  );
}
