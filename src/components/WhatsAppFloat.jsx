import { motion } from "framer-motion";
import { WhatsAppIcon } from "./icons.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function WhatsAppFloat() {
  const { t } = useLanguage();
  return (
    <motion.a
      href="https://wa.me/93787654751"
      target="_blank"
      rel="noopener"
      aria-label={t.chat}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.12 }}
      className="fixed right-5.5 bottom-5.5 z-[90] w-14 h-14 grid place-items-center rounded-full liquid-glass text-navy-800"
    >
      <WhatsAppIcon className="w-[27px] h-[27px]" />
    </motion.a>
  );
}
