import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

interface Props {
  src: string;
  poster?: string;
  label: string;
  playLabel: string;
  pauseLabel: string;
}

const ProjectVideo = ({ src, poster, label, playLabel, pauseLabel }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) {
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative flex items-center overflow-hidden border-b border-border bg-muted lg:border-b-0 lg:border-r">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="block h-auto w-full"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? pauseLabel : playLabel}
        className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-card"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>
    </div>
  );
};

export default ProjectVideo;
