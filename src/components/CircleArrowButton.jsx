import { ArrowRight } from "lucide-react";

/**
 * Circle-arrow button with the expanding-pill hover effect:
 * a dark circle with an arrow sits beside the label; on hover the dark
 * pill grows out of the circle behind the label and the label turns white.
 * variant="light" keeps the label white before hover (for dark backgrounds).
 */
export default function CircleArrowButton({ href, variant = "dark", className = "", children }) {
  return (
    <a href={href} className={`btn-circle btn-circle--${variant} ${className}`}>
      <span className="btn-circle-icon" aria-hidden="true">
        <ArrowRight className="w-5 h-5" strokeWidth={2.2} />
      </span>
      <span className="btn-circle-label">{children}</span>
    </a>
  );
}
