import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Bone, Brain, Crosshair } from "lucide-react";
import CircleArrowButton from "./CircleArrowButton.jsx";
import BrainLoop from "./BrainLoop.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { publicAsset } from "../utils/publicAsset.js";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
};

const QUICK_CARDS = [
  {
    title: "Brain Surgery",
    text: "Tumors, trauma & structural brain disorders.",
    icon: Brain,
  },
  {
    title: "Spine Surgery",
    text: "Reconstruction, disc & nerve-compression care.",
    icon: Bone,
  },
  {
    title: "Neuronavigation",
    text: "Image-guided precision brain & spine surgery.",
    icon: Crosshair,
  },
];

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="w-[min(1160px,100%-24px)] mx-auto pt-3.5 sm:pt-[18px]" aria-label="Introduction">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative min-w-0 overflow-hidden rounded-[28px] sm:rounded-[34px] px-[clamp(20px,5.5vw,68px)] pt-[clamp(34px,6vw,76px)] pb-[clamp(104px,15vw,165px)] border border-[rgba(15,23,42,0.06)] shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
        style={{
          background:
            "radial-gradient(620px 320px at 88% -10%, rgba(84,136,212,0.16), transparent 65%)," +
            "radial-gradient(480px 380px at -6% 108%, rgba(204,214,236,0.4), transparent 60%)," +
            "linear-gradient(135deg, #ffffff 0%, #eef3f5 100%)",
        }}
      >
        <div className="hero-dots absolute inset-0 pointer-events-none" aria-hidden="true" />

        <div className="relative grid min-w-0 items-center gap-8 lg:gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="inline-block max-w-full whitespace-normal break-words text-[clamp(10px,2.8vw,13px)] sm:text-[13px] leading-snug font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-teal-700 bg-white/80 backdrop-blur border border-line shadow-sm px-3 sm:px-4 py-2 rounded-full mb-5"
            >
              {t.heroRole}
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-[clamp(34px,4.6vw,56px)] font-extrabold mb-4.5 tracking-[-0.01em]"
            >
              Dr. Khalid Khan Zadran
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-[clamp(15.5px,1.4vw,17.5px)] text-muted max-w-[50ch] mb-7.5"
            >{t.heroIntro}</motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3.5"
            >
              <CircleArrowButton href="#contact">{t.book}</CircleArrowButton>
              <CircleArrowButton href="#about">{t.learn}</CircleArrowButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative min-w-0 max-w-[440px] mx-auto lg:mx-0 lg:max-w-none"
          >
            {/* Rotating transparent brain animation */}
            <div className="relative flex items-center justify-center py-2">
              <div
                aria-hidden="true"
                className="absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,rgba(84,136,212,0.22),rgba(204,214,236,0.12)_45%,transparent_70%)]"
              />
              <BrainLoop
                src={publicAsset("hero-brain.webm")}
                className="h-[330px] w-[330px] sm:h-[410px] sm:w-[410px] lg:h-[470px] lg:w-[470px] drop-shadow-[0_28px_44px_rgba(61,99,173,0.28)]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="absolute left-1/2 translate-x-[-50%] translate-y-[40%] bottom-0 flex items-center gap-2.25 glass text-navy-800 text-[13.5px] font-semibold px-5 py-2.75 rounded-full whitespace-nowrap"
            >
              <BadgeCheck className="w-[18px] h-[18px] text-teal-500 shrink-0" strokeWidth={2} />
              {t.firstFcps}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick cards overlapping the hero bottom */}
      <div className="relative z-10 grid min-w-0 gap-4.5 sm:gap-5.5 md:grid-cols-3 -mt-[54px] md:-mt-[88px]">
        {QUICK_CARDS.map((card, i) => (
          <motion.a
            key={card.title}
            href="#specializations"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -7 }}
            transition={{ duration: 0.5, delay: 0.12 * i, ease: [0.22, 0.61, 0.36, 1] }}
            className="glass relative block rounded-[22px] px-6 pt-6 pb-13 overflow-hidden"
          >
            <span className="w-12 h-12 grid place-items-center rounded-[14px] liquid-glass mb-4">
              <card.icon className="w-[23px] h-[23px] text-navy-800" strokeWidth={1.8} />
            </span>
            <h3 className="text-[18px] font-bold">{t.quick[i]}</h3>
            <p className="text-sm text-muted mt-1.25">{t.quickText[i]}</p>
            <span className="absolute right-4.5 bottom-4 w-[34px] h-[34px] grid place-items-center rounded-full liquid-glass text-navy-800">
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
