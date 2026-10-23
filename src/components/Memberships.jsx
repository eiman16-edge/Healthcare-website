import { motion } from "framer-motion";
import { Microscope } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const MEMBERSHIPS = [
  {
    chip: "CPSP",
    name: "College of Physicians and Surgeons Pakistan",
    sub: "Postgraduate medical institution · Pakistan",
  },
  {
    chip: "PSN",
    name: "Pakistan Society of Neurosurgeons",
    sub: "National neurosurgical society · Pakistan",
  },
  {
    chip: "WFNS",
    name: "World Federation of Neurosurgical Societies",
    sub: "International federation of neurosurgical societies",
  },
  {
    chip: "AANS",
    name: "American Association of Neurological Surgeons",
    sub: "International association of neurological surgeons",
  },
];

export default function Memberships() {
  const { t } = useLanguage();
  return (
    <section id="memberships" className="py-21 scroll-mt-[108px]">
      <div className="w-[min(1160px,100%-40px)] mx-auto">
        <div className="grid items-center gap-[clamp(36px,5vw,70px)] lg:grid-cols-2">
          <Reveal>
            <p className="inline-block text-[13px] font-bold tracking-[0.14em] uppercase text-teal-700 mb-3">
              {t.memberships.eyebrow}
            </p>
            <h2 className="text-[clamp(26px,3.2vw,36px)] font-bold mb-4">
              {t.memberships.title}
            </h2>
            <p className="text-muted">{t.memberships.intro}</p>

            <div className="mt-6.5 flex items-start gap-4 bg-white border border-line rounded-[18px] p-5.5 shadow-[0_10px_26px_rgba(15,23,42,0.05)]">
              <span className="shrink-0 w-[46px] h-[46px] grid place-items-center rounded-[13px] liquid-glass text-navy-800">
                <Microscope className="w-[22px] h-[22px]" strokeWidth={1.8} />
              </span>
              <div>
                <h4 className="text-[15.5px] mb-1.5 text-navy-800">{t.memberships.research}</h4>
                <p className="text-sm text-muted">{t.memberships.researchText}</p>
              </div>
            </div>
          </Reveal>

          <ul className="grid gap-3.75">
            {MEMBERSHIPS.map((m, i) => (
              <motion.li
                key={m.chip}
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.09 * i, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex items-center gap-4.5 bg-white border border-line rounded-[17px] px-5 py-4.5 transition-all duration-300 hover:translate-x-2 hover:border-navy-800 hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)]"
              >
                <span className="shrink-0 w-[58px] h-[58px] grid place-items-center rounded-[15px] font-display text-sm font-bold tracking-[0.03em] text-navy-800 liquid-glass">
                  {m.chip}
                </span>
                <div>
                  <h3 className="text-base font-bold">{t.memberships.items[i][0]}</h3>
                  <p className="text-[13.5px] text-muted">{t.memberships.items[i][1]}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
