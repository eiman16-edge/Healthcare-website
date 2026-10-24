import { useEffect, useRef } from "react";

export default function BrainLoop({ src, className = "" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      if (document.visibilityState === "visible") video.play().catch(() => {});
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") play();
      else video.pause();
    };

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.addEventListener("canplay", play);
    document.addEventListener("visibilitychange", onVisibilityChange);
    play();

    return () => {
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [src]);

  return (
    <div aria-hidden="true" className={`pointer-events-none relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-contain"
      />
    </div>
  );
}
