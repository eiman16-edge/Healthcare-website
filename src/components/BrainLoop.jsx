import { useEffect, useRef, useState } from "react";

export default function BrainLoop({ src, className = "" }) {
  const videoRef = useRef(null);
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let playbackCheck;
    video.autoplay = !reduceMotion;

    const startPlayback = () => {
      if (reduceMotion || document.visibilityState !== "visible") return;
      window.clearTimeout(playbackCheck);
      video.play().then(() => {
        setVideoUnavailable(false);
      }).catch(() => {
        setVideoUnavailable(true);
      });
      playbackCheck = window.setTimeout(() => {
        if (video.paused) setVideoUnavailable(true);
      }, 1800);
    };
    const handleVisibility = () => {
      if (document.visibilityState === "visible") startPlayback();
      else video.pause();
    };
    const handlePlaying = () => {
      window.clearTimeout(playbackCheck);
      setVideoUnavailable(false);
    };
    const handleError = () => setVideoUnavailable(true);

    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("error", handleError);
    document.addEventListener("visibilitychange", handleVisibility);
    if (reduceMotion) video.pause();
    else startPlayback();

    return () => {
      window.clearTimeout(playbackCheck);
      video.removeEventListener("loadeddata", startPlayback);
      video.removeEventListener("canplay", startPlayback);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("error", handleError);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [src]);

  return (
    <div aria-hidden="true" className={`brain-loop-stage pointer-events-none relative aspect-square ${className}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        tabIndex={-1}
        className={`brain-loop-video absolute inset-0 h-full w-full object-contain${videoUnavailable ? " brain-loop-video--fallback" : ""}`}
      />
    </div>
  );
}
