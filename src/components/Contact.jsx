import { motion } from "framer-motion";
import { Building2, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { FacebookIcon } from "./icons.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { publicAsset } from "../utils/publicAsset.js";

const CLINIC_NUMBER = "+93787654751";
const WA_NUMBER = "93787654751";
const CLINIC_NUMBER_PRETTY = "+93 78 765 4751";
const FACEBOOK_URL = "https://facebook.com/share/1AAm1LiM8v?mibextid=wwXIfr";

function handleSubmit(e, t) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const service = String(data.get("service") || "").trim();

  const text = [
    `${t.title} — Dr. Khalid Khan Zadran`,
    "",
    `${t.name}: ${name}`,
    phone ? `${t.phone}: ${phone}` : null,
    `${t.service}: ${service}`,
  ]
    .filter(Boolean)
    .join("\n");

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
}

const INFO_CARDS = [
  {
    icon: Building2,
    title: "Clinic",
    body: (
      <>
        <p className="font-semibold text-navy-800 text-[14.5px] mb-1">Rifah Medical Complex</p>
        <p className="text-[13.5px] text-muted">Consultant neurosurgery clinic for brain, spine &amp; nerve care.</p>
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Visit Us",
    body: (
      <>
        <p className="dari font-semibold text-navy-800 text-[14.5px] mb-1" dir="rtl">
          چهارراهی اسپ ها - لب جر - سرک میدان هوایی کابل افغانستان
        </p>
        <p className="text-[13.5px] text-muted">Charahi Asipha, Lab Jar, Kabul Airport Road — Kabul, Afghanistan</p>
      </>
    ),
  },
];

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-21 scroll-mt-[108px]">
      <div className="w-[min(1160px,100%-40px)] mx-auto">
        <Reveal>
          <div
            className="glass rounded-[36px] p-[clamp(30px,5vw,58px)] shadow-[0_24px_60px_rgba(15,23,42,0.09)]"
            style={{
              background:
                "radial-gradient(420px 260px at 92% 8%, rgba(84,136,212,.18), transparent 65%)," +
                "linear-gradient(135deg, #ffffff, #eef2f4)",
            }}
          >
            <div className="grid items-center gap-[clamp(28px,4vw,52px)] lg:grid-cols-[1.05fr_.95fr]">
              <div>
                <h2 className="text-[clamp(24px,2.8vw,32px)] font-bold">{t.contact.title}</h2>
                <p className="text-muted text-[15px] my-2.5 mb-6">{t.contact.intro}</p>
                <form
                  onSubmit={(event) => handleSubmit(event, t.contact)}
                  className="bg-white border border-line rounded-[24px] p-7 shadow-[0_14px_34px_rgba(15,23,42,0.10)] grid gap-4"
                >
                  <label className="grid gap-1.75">
                    <span className="text-[13.5px] font-semibold text-navy-800">{t.contact.name}</span>
                    <input
                      type="text"
                      name="name"
                      placeholder={t.contact.namePlaceholder}
                      required
                      className="w-full font-body text-[14.5px] text-ink bg-white border-[1.5px] border-[#e2e8f0] rounded-xl px-4 py-3 outline-none transition-shadow focus:border-teal-500 focus:shadow-[0_0_0_4px_rgba(19,160,181,0.12)]"
                    />
                  </label>
                  <label className="grid gap-1.75">
                    <span className="text-[13.5px] font-semibold text-navy-800">{t.contact.phone}</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full font-body text-[14.5px] text-ink bg-white border-[1.5px] border-[#e2e8f0] rounded-xl px-4 py-3 outline-none transition-shadow focus:border-teal-500 focus:shadow-[0_0_0_4px_rgba(19,160,181,0.12)]"
                    />
                  </label>
                  <label className="grid gap-1.75">
                    <span className="text-[13.5px] font-semibold text-navy-800">{t.contact.service}</span>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full font-body text-[14.5px] text-ink bg-white border-[1.5px] border-[#e2e8f0] rounded-xl px-4 py-3 outline-none transition-shadow focus:border-teal-500 focus:shadow-[0_0_0_4px_rgba(19,160,181,0.12)]"
                    >
                      <option value="" disabled>{t.contact.servicePlaceholder}</option>
                      {t.contact.services.map((service) => <option key={service}>{service}</option>)}
                    </select>
                  </label>
                  <button type="submit" className="btn-primary btn-block">{t.contact.send}</button>
                  <p className="text-[12.5px] text-muted text-center">
                    {t.contact.whatsappNote}
                  </p>
                </form>
              </div>

              <div className="relative">
                <img
                  src={publicAsset("contact-doctor.png")}
                  alt="Dr. Khalid Khan Zadran at Rifah Medical Complex"
                  className="w-full h-[340px] lg:h-[440px] object-cover object-[50%_10%] rounded-t-[210px] rounded-b-[26px] shadow-[0_22px_48px_rgba(15,23,42,0.14)]"
                />
                <div className="absolute left-1/2 -translate-x-1/2 translate-y-[55%] bottom-0 glass flex items-center gap-2.25 text-navy-800 text-[13px] font-semibold px-5 py-2.75 rounded-full whitespace-nowrap">{t.contact.clinicKabul}</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 mt-6.5">
          {INFO_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bg-white border border-line rounded-[20px] p-6"
            >
              <span className="w-[46px] h-[46px] grid place-items-center rounded-[13px] liquid-glass text-navy-800 mb-3.75">
                <card.icon className="w-[22px] h-[22px]" strokeWidth={1.8} />
              </span>
              <h3 className="text-[15px] font-bold mb-1.5">{i === 0 ? t.contact.clinic : t.contact.visit}</h3>
              {i === 0 ? (
                <>
                  <p className="font-semibold text-navy-800 text-[14.5px] mb-1">Rifah Medical Complex</p>
                  <p className="text-[13.5px] text-muted">{t.contact.clinicDescription}</p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-navy-800 text-[14.5px] mb-1" dir="rtl">{t.contact.location}</p>
                  <p className="text-[13.5px] text-muted" dir="ltr">Charahi Asipha, Lab Jar, Kabul Airport Road — Kabul, Afghanistan</p>
                </>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="bg-white border border-line rounded-[20px] p-6"
          >
            <span className="w-[46px] h-[46px] grid place-items-center rounded-[13px] liquid-glass text-navy-800 mb-3.75">
              <Phone className="w-[22px] h-[22px]" strokeWidth={1.8} />
            </span>
            <h3 className="text-[15px] font-bold mb-1.5">{t.contact.callWhatsapp}</h3>
            <p className="font-semibold text-navy-800 text-[14.5px] mb-1" dir="ltr">+93 78 765 4751</p>
            <div className="flex flex-wrap gap-2.25 mt-3.25">
              <a className="btn-primary btn-sm" href={`tel:${CLINIC_NUMBER}`}>{t.contact.callNow}</a>
              <a className="btn-wa btn-sm" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener">{t.contact.whatsapp}</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="bg-white border border-line rounded-[20px] p-6"
          >
            <span className="w-[46px] h-[46px] grid place-items-center rounded-[13px] liquid-glass text-navy-800 mb-3.75">
              <FacebookIcon className="w-[22px] h-[22px]" />
            </span>
            <h3 className="text-[15px] font-bold mb-1.5">{t.contact.facebook}</h3>
            <p className="font-semibold text-navy-800 text-[14.5px] mb-1">{t.contact.followClinic}</p>
            <div className="flex flex-wrap gap-2.25 mt-3.25">
              <a className="btn-secondary btn-sm" href={FACEBOOK_URL} target="_blank" rel="noopener">{t.contact.followFacebook}</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
