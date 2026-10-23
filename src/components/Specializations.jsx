import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Image as ImageIcon } from "lucide-react";
import ImgPlaceholder from "./ImgPlaceholder.jsx";
import SectionHead from "./SectionHead.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { publicAsset } from "../utils/publicAsset.js";

function ServiceCard({ title, tagline, moreText, imgLabel, imageSrc, imagePos = "50% 50%", imageFilter, hoverScale = 1.07, featured = false, featuredText, bookText }) {
  const [tapped, setTapped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const show = tapped || hovered;

  return (
      <motion.article
        initial={false}
        animate={{ y: show ? -5 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
        tabIndex={0}
        onClick={() => setTapped((t) => !t)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setTapped((t) => !t);
          }
        }}
        aria-expanded={show}
        className="group relative h-[390px] rounded-[28px] overflow-hidden cursor-pointer outline-none focus-visible:shadow-[0_0_0_3px_var(--color-teal-400)] bg-white"
      >
        <div className="absolute inset-0 overflow-hidden bg-[#d4e0f3]">
        {/* IMAGE PLACEHOLDER: service photo — fills the whole card */}
        <motion.div
          animate={{ scale: show ? hoverScale : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="absolute inset-0"
        >
          {imageSrc ? (
            <img
              src={publicAsset(imageSrc)}
              alt={imgLabel}
              className="block h-full w-full object-cover"
              style={{ objectPosition: imagePos, filter: imageFilter }}
            />
          ) : (
            <ImgPlaceholder label={imgLabel} className="h-full w-full border-0" />
          )}
        </motion.div>

        {!imageSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ rotate: 8, scale: 1.06 }}
            className="img-placeholder absolute top-4 right-4 z-[5] w-[58px] h-[58px] rounded-full border-[3px] border-white shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
            role="img"
            aria-label={`${title} detail image`}
          >
            <ImageIcon className="w-6 h-6 opacity-75" strokeWidth={1.6} />
          </motion.div>
        )}
        </div>

        {featured && (
          <span className="absolute top-4 left-4 z-[5] text-[10px] font-bold tracking-[0.08em] uppercase text-white bg-navy-800 px-3 py-1.5 rounded-full shadow-[0_8px_18px_rgba(15,23,42,0.28)] whitespace-nowrap">
            {featuredText}
          </span>
        )}

        {/* white content panel anchored to the bottom; expands upward on hover */}
        <motion.div
          animate={{ height: show ? "58%" : "30%" }}
          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 z-[6] flex flex-col overflow-hidden rounded-tl-[32px] rounded-tr-[64px] bg-white px-5 pt-4.5 pb-2.5"
        >
          <div>
            <h3 className="font-display font-bold text-[17px] text-navy-800 leading-snug">
              {title}
            </h3>
          </div>
          <p className="mt-1 text-[12.5px] font-semibold text-muted">{tagline}</p>

          <AnimatePresence initial={false}>
            {show && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="mt-2.5 text-[12.5px] text-muted leading-relaxed">{moreText}</p>
                <a
                  href="#contact"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.75 mt-3 text-sm font-bold text-teal-700"
                >
                  {bookText}
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.article>
  );
}

const SERVICES = [
  {
    title: "Brain Surgery",
    tagline: "Tumors, trauma & structural brain disorders",
    moreText:
      "Surgical management of brain tumors, traumatic brain injuries and structural brain disorders — with careful pre-operative planning and modern operative technique.",
    imgLabel: "Surgeon reviewing CT scans in the operating theatre",
    imageSrc: "/brain2-image.jpg",
    imagePos: "50% 60%",
    imageFilter: "contrast(1.08) saturate(1.04) brightness(1.015)",
    hoverScale: 1.02,
  },
  {
    title: "Neuronavigation Technology",
    tagline: "Image-guided precision surgery",
    moreText:
      "Neuronavigation works like a GPS for surgery: detailed imaging maps guide the surgeon to the target with high precision, supporting safer and less-invasive operations on the brain and spine.",
    imgLabel: "Neuronavigation image",
    imageSrc: "/Screenshot 2026-10-22 222551.png",
    featured: true,
  },
  {
    title: "Spine Surgery",
    tagline: "Complex reconstruction, discs & nerve compression",
    moreText:
      "From herniated discs to complex spinal reconstruction and nerve compression — spinal treatment is planned around each patient's anatomy, symptoms and imaging.",
    imgLabel: "Spine surgery image",
    imageSrc: "/spine-image.jpg",
  },
  {
    title: "Peripheral Nerve Surgery",
    tagline: "Diagnosis & surgical treatment of nerve conditions",
    moreText:
      "Accurate diagnosis and surgical treatment of peripheral nerve conditions — addressing pain, weakness and loss of function caused by nerve injury or compression.",
    imgLabel: "Peripheral nerve image",
    imageSrc: "/nerve-surgery.png",
  },
];

export default function Specializations() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const localizedServices = SERVICES.map((service, i) => ({ ...service, title: t.specializations.services[i][0], tagline: t.specializations.services[i][1], moreText: t.specializations.services[i][2], imgLabel: t.specializations.services[i][3], featuredText: t.specializations.featured, bookText: t.specializations.book }));
  const slide = (direction) => setActive((current) => Math.min(localizedServices.length - 1, Math.max(0, current + direction)));

  return (
    <section
      id="specializations"
      className="py-21 scroll-mt-[108px] section-tinted overflow-hidden"
    >
      <div className="relative w-[min(1160px,100%-40px)] mx-auto">
        <SectionHead
          eyebrow={t.specializations.eyebrow}
          title={t.specializations.title}
          sub={t.specializations.sub}
        />

        <div className="relative mx-auto max-w-[1020px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ba7e0]/10 blur-[90px]" aria-hidden="true" />
          <div className="relative h-[435px] overflow-hidden" role="region" aria-label={t.specializations.carousel}>
            {localizedServices.map((s, index) => {
              const distance = index - active;
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 sm:w-[58%] lg:w-[45%]"
                  animate={{ x: `${distance * 92}%`, y: "-50%", scale: distance === 0 ? 1 : 0.82, opacity: Math.abs(distance) > 1 ? 0 : distance === 0 ? 1 : 0.62, filter: distance === 0 ? "blur(0px)" : "blur(1px)" }}
                  transition={{ type: "spring", stiffness: 240, damping: 28 }}
                  style={{ zIndex: distance === 0 ? 2 : 1, pointerEvents: Math.abs(distance) > 1 ? "none" : "auto" }}
                  aria-hidden={Math.abs(distance) > 1}
                  inert={Math.abs(distance) > 1}
                >
                  <ServiceCard {...s} />
                </motion.div>
              );
            })}
          </div>
          <div className="relative z-10 flex items-center justify-center gap-4 pt-2">
            <button type="button" onClick={() => slide(-1)} disabled={active === 0} aria-label={t.specializations.prev} className="btn-icon-glass h-11 w-11 rounded-full text-navy-800 disabled:opacity-40">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2" aria-label={`${t.specializations.slide} ${active + 1} ${t.specializations.of} ${localizedServices.length}`}>
              {localizedServices.map((service, index) => (
                <button key={index} type="button" onClick={() => setActive(index)} aria-label={`${t.specializations.go} ${service.title}`} aria-current={active === index ? "true" : undefined} className={`h-2 rounded-full transition-all ${active === index ? "w-6 bg-navy-800" : "w-2 bg-navy-800/25"}`} />
              ))}
            </div>
            <button type="button" onClick={() => slide(1)} disabled={active === localizedServices.length - 1} aria-label={t.specializations.next} className="btn-icon-glass h-11 w-11 rounded-full text-navy-800 disabled:opacity-40">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
