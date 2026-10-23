import { motion } from "framer-motion";
import { Award, GraduationCap, ShieldCheck } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const CREDS = [
  {
    abbr: "MBBS",
    title: "Bachelor of Medicine, Bachelor of Surgery",
    text: "Foundational medical degree covering medicine and surgery.",
  },
  {
    abbr: "MD",
    title: "Doctor of Medicine",
    text: "Advanced degree representing specialist training in medicine.",
  },
  {
    abbr: "RMP",
    title: "Registered Medical Practitioner",
    text: "Licensed and registered to practise medicine.",
  },
  {
    abbr: "MCPS",
    title: "Member of the College of Physicians and Surgeons",
    text: "Postgraduate membership of the College of Physicians and Surgeons.",
  },
  {
    abbr: "FCPS",
    title: "Fellow of the College of Physicians and Surgeons",
    text: "Advanced specialist fellowship — the qualification that makes Dr. Zadran the first FCPS neurosurgeon in Afghanistan.",
    featured: true,
  },
];

export default function Qualifications() {
  const { t } = useLanguage();
  return (
    <section
      id="qualifications"
      className="py-21 scroll-mt-[108px] section-tinted"
    >
      <div className="w-[min(1160px,100%-40px)] mx-auto">
        <SectionHead
          eyebrow={t.qualifications.eyebrow}
          title={t.qualifications.title}
          sub={t.qualifications.sub}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CREDS.map((cred, i) => (
            <motion.div
              key={cred.abbr}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 0.61, 0.36, 1] }}
              className={`relative rounded-[20px] p-[26px_22px_24px] transition-shadow hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)] ${
                cred.featured
                  ? "border-2 border-navy-800 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.12)]"
                  : "bg-white border border-line"
              } ${cred.featured ? "sm:col-span-2 xl:col-span-1" : ""}`}
            >
              {cred.featured && (
                <span className="absolute -top-[13px] left-5 text-[11.5px] font-bold tracking-[0.06em] uppercase text-white bg-navy-800 px-3.25 py-1.25 rounded-full shadow-[0_6px_14px_rgba(15,23,42,0.28)]">
                  {t.qualifications.flagship}
                </span>
              )}
              <span className="absolute top-5 right-4.5 w-[34px] h-[34px] grid place-items-center rounded-[10px] liquid-glass text-navy-800">
                <Award className="w-[18px] h-[18px]" strokeWidth={1.8} />
              </span>
              <span className="inline-block font-display text-2xl font-extrabold text-navy-800 tracking-[0.02em] mb-2.5">
                {cred.abbr}
              </span>
              <h3 className="text-[15.5px] font-bold leading-snug mb-2">{t.qualifications.creds[i][0]}</h3>
              <p className="text-[13.5px] text-muted leading-normal">{t.qualifications.creds[i][1]}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-8.5 glass rounded-[18px] px-7 py-5 flex items-center justify-center flex-wrap gap-x-5.5 gap-y-3 text-center"
        >
          <p className="inline-flex items-center gap-2.5 text-[15px] text-muted">
            <GraduationCap className="w-[21px] h-[21px] text-teal-700 shrink-0" strokeWidth={1.8} />
            <span><strong className="text-navy-800">{t.qualifications.education}</strong> Ayub Medical College, Abbottabad</span>
          </p>
          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-teal-400" aria-hidden="true" />
          <p className="inline-flex items-center gap-2.5 text-[15px] text-muted">
            <ShieldCheck className="w-[21px] h-[21px] text-teal-700 shrink-0" strokeWidth={1.8} />
            <span><strong className="text-navy-800">{t.qualifications.certification}</strong> College of Physicians and Surgeons Pakistan (CPSP)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
