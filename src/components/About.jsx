import { motion } from "framer-motion";
import { BadgeCheck, Check, GraduationCap } from "lucide-react";
import CircleArrowButton from "./CircleArrowButton.jsx";
import Reveal from "./Reveal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const CHECKLIST = [
  "First FCPS neurosurgeon in Afghanistan",
  "Educated at Ayub Medical College, Abbottabad",
  "Certified by the College of Physicians and Surgeons Pakistan",
  "Researcher of Afghan brain disorders",
];

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-21 scroll-mt-[108px]">
      <div className="w-[min(1160px,100%-40px)] mx-auto">
        <div className="grid items-center gap-[clamp(36px,5vw,68px)] lg:grid-cols-[.92fr_1.08fr]">
          <Reveal className="relative">
            <img
              src="/about-me.jpg"
              alt="Dr. Khalid Khan Zadran in his clinic"
              className="h-[340px] lg:h-[460px] w-full rounded-[30px] object-cover object-center"
            />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="absolute top-6 right-2.5 lg:-right-4.5 glass flex items-center gap-2.25 text-navy-800 text-[13px] font-semibold px-4.25 py-2.75 rounded-[14px]"
            >
              <BadgeCheck className="w-[18px] h-[18px] text-teal-500 shrink-0" strokeWidth={2} />{t.certBadge}</motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bottom-7.5 left-2.5 lg:-left-4.5 glass flex items-center gap-2.25 text-navy-800 text-[13px] font-semibold px-4.25 py-2.75 rounded-[14px]"
            >
              <GraduationCap className="w-[18px] h-[18px] text-teal-500 shrink-0" strokeWidth={1.9} />{t.college}</motion.div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="inline-block text-[13px] font-bold tracking-[0.14em] uppercase text-teal-700 mb-3">
              {t.aboutEyebrow}
            </p>
            <h2 className="text-[clamp(26px,3.2vw,36px)] font-bold mb-4.5">
              {t.aboutTitle}
            </h2>
            <p className="text-[17px] text-ink mb-3.5">{t.aboutP1}</p>
            <p className="text-muted">{t.aboutP2}</p>

            <ul className="my-5.5 grid gap-3">
              {t.checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.75 text-[15px] font-medium">
                  <span className="shrink-0 w-[22px] h-[22px] grid place-items-center rounded-full bg-lavender/50 text-navy-800">
                    <Check className="w-3.25 h-3.25" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3.5">
              <CircleArrowButton href="#qualifications">{t.viewQualifications}</CircleArrowButton>
              <CircleArrowButton href="#specializations">{t.ourSpecializations}</CircleArrowButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
