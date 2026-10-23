import { useEffect, useRef } from "react";

const FADE = 0.6;

export default function BrainLoop({ src, className = "" }) {
  const refA = useRef(null);
  const refB = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const a = refA.current;
    if (a) a.play().catch(() => {});
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleTimeUpdate = (i) => {
    const cur = (i === 0 ? refA : refB).current;
    const nxt = (i === 0 ? refB : refA).current;
    if (!cur || !nxt) return;
    const dur = cur.duration;
    if (!dur) return;
    const remain = dur - cur.currentTime;
    if (remain <= 0 || remain > FADE || rafRef.current) return;
    if (nxt.paused) {
      nxt.currentTime = Math.max(0, FADE - remain);
      nxt.play().catch(() => {});
    }
    const step = () => {
      const r = dur - cur.currentTime;
      const p = Math.min(1, Math.max(0, 1 - r / FADE));
      nxt.style.opacity = String(p);
      cur.style.opacity = String(1 - p);
      if (p >= 1 || r <= 0.02) {
        rafRef.current = 0;
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const handleEnded = (i) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    const cur = (i === 0 ? refA : refB).current;
    const nxt = (i === 0 ? refB : refA).current;
    if (!cur || !nxt) return;
    cur.pause();
    cur.currentTime = 0;
    cur.style.opacity = "0";
    nxt.style.opacity = "1";
  };

  const videoProps = (i) => ({
    src,
    muted: true,
    playsInline: true,
    preload: "auto",
    tabIndex: -1,
    className: "absolute inset-0 h-full w-full object-contain",
    onTimeUpdate: () => handleTimeUpdate(i),
    onEnded: () => handleEnded(i),
  });

  return (
    <div aria-hidden="true" className={`pointer-events-none relative ${className}`}>
      <video ref={refA} autoPlay {...videoProps(0)} style={{ opacity: 1 }} />
      <video ref={refB} {...videoProps(1)} style={{ opacity: 0 }} />
    </div>
  );
}
