import { Image as ImageIcon } from "lucide-react";

/**
 * IMAGE PLACEHOLDER — replace this component's usage with your own <img>
 * wherever you see it (hero portrait, about photo, service images, clinic photo).
 */
export default function ImgPlaceholder({ label, hint, className = "", rounded = "" }) {
  return (
    <div
      className={`img-placeholder ${className} ${rounded}`}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="w-10 h-10 opacity-75" strokeWidth={1.4} />
      <span className="text-[14.5px] font-semibold text-[#4f7484]">{label}</span>
      {hint && <span className="text-xs text-[#7d9daa]">{hint}</span>}
    </div>
  );
}
