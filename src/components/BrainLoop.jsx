import { useEffect, useRef } from "react";

export default function BrainLoop({ src, className = "" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startPlayback = () => {
      if (document.visibilityState !== "visible") return;
      video.play().catch(() => {
        // Mobile browsers may defer autoplay until the video is ready or the
        // page returns to the foreground. The media events retry playback.
      });
    };
    const handleVisibility = () => {
      if (document.visibilityState === "visible") startPlayback();
      else video.pause();
    };

    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);
    document.addEventListener("visibilitychange", handleVisibility);
    startPlayback();

    return () => {
      video.removeEventListener("loadeddata", startPlayback);
      video.removeEventListener("canplay", startPlayback);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [src]);

  return (
    <div aria-hidden="true" className={`pointer-events-none relative aspect-square ${className}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-contain"
      />
    </div>
  );
}
