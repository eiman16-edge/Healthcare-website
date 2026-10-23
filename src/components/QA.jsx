import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const QA_ITEMS = [
  {
    q: "What conditions does Dr. Zadran treat?",
    a: "Dr. Zadran treats brain conditions including tumors, head trauma and structural brain disorders; spinal problems such as disc disease, nerve compression and cases requiring complex reconstruction; and peripheral nerve conditions requiring diagnosis and surgical treatment.",
  },
  {
    q: "What is neuronavigation technology?",
    a: "Neuronavigation is an image-guided surgical system — like a GPS for the operating room. Detailed scans of the patient's anatomy are mapped so the surgeon can plan a precise approach to the target area, helping protect healthy brain and spinal tissue during the operation.",
  },
  {
    q: "Where is the clinic located?",
    a: (
      <>
        The clinic is at Rifah Medical Complex, Kabul, Afghanistan —{" "}
        <span className="dari" dir="rtl">چهارراهی اسپ ها - لب جر - سرک میدان هوایی کابل افغانستان</span>{" "}
        (Charahi Asipha, Lab Jar, Kabul Airport Road).
      </>
    ),
  },
  {
    q: "How can I book a consultation?",
    a: (
      <>
        You can call or WhatsApp <strong>+93 78 765 4751</strong>, or fill in the
        booking form below — your details are sent directly to the clinic's
        WhatsApp and the team will arrange your visit.
      </>
    ),
  },
  {
    q: "Does every back or neck problem require surgery?",
    a: "No. Many spine conditions are managed without surgery. After a thorough examination and review of your imaging, Dr. Zadran recommends an operation only when it is the appropriate option for your specific condition.",
  },
];

function QAItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: 0.06 * index }}
      className={`bg-white border rounded-[17px] overflow-hidden transition-colors duration-300 ${
        open ? "border-teal-400 shadow-[0_10px_24px_rgba(15,23,42,0.06)]" : "border-line"
      }`}
    >
      <button
        className="group flex w-full items-center justify-between gap-4 bg-transparent px-5 py-4.5 text-left font-body text-[16px] font-semibold text-navy-800 transition-colors duration-300 ease-out hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-teal-500"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="qa-q-text transition-colors duration-300 ease-out group-hover:text-teal-700">{item.q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 w-8 h-8 grid place-items-center rounded-full transition-colors ${
            open ? "text-teal-700" : "text-muted group-hover:text-teal-700"
          }`}
        >
          <ChevronDown className="w-4 h-4" strokeWidth={2.2} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function QA() {
  const { t } = useLanguage();
  return (
    <section id="qa" className="py-21 scroll-mt-[108px]">
      <div className="w-[min(1160px,100%-40px)] mx-auto">
        <SectionHead
          eyebrow={t.qa.eyebrow}
          title={t.qa.title}
          sub={t.qa.sub}
        />
        <div className="max-w-[840px] mx-auto grid gap-3.5">
          {t.qa.items.map(([q, a], i) => (
            <QAItem key={q} item={{ q, a }} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
