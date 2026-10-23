import Reveal from "./Reveal.jsx";

export default function SectionHead({ eyebrow, title, sub, align = "center" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`${alignCls} max-w-[680px] mb-13`}>
      <p className="inline-block text-[13px] font-bold tracking-[0.14em] uppercase text-teal-700 mb-3">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(26px,3.4vw,38px)] font-bold">{title}</h2>
      {sub && <p className="text-muted mt-3.5 text-base">{sub}</p>}
    </Reveal>
  );
}
