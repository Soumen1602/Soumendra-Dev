import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "slant" | "dots";
  flip?: boolean;
}

const SectionDivider = ({ variant = "wave", flip = false }: SectionDividerProps) => {
  if (variant === "dots") {
    return (
      <div className="flex justify-center gap-1.5 py-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary/30"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring" }}
          />
        ))}
      </div>
    );
  }

  if (variant === "slant") {
    return (
      <div className={`h-16 relative overflow-hidden ${flip ? "rotate-180" : ""}`}>
        <svg viewBox="0 0 1440 60" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path
            d="M0 60L1440 0V60H0Z"
            fill="url(#slantGrad)"
            fillOpacity="0.04"
          />
          <defs>
            <linearGradient id="slantGrad" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="hsl(170, 80%, 45%)" />
              <stop offset="100%" stopColor="hsl(260, 70%, 65%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${flip ? "rotate-180" : ""}`} style={{ height: "40px" }}>
      <svg viewBox="0 0 1440 40" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
        <path
          d="M0 20C240 40 480 0 720 20C960 40 1200 0 1440 20V40H0V20Z"
          fill="url(#waveGrad)"
          fillOpacity="0.06"
        />
        <path
          d="M0 25C200 35 400 10 720 25C1040 35 1200 15 1440 25"
          stroke="url(#waveStroke)"
          strokeWidth="0.5"
          strokeOpacity="0.2"
        />
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="hsl(170, 80%, 45%)" />
            <stop offset="50%" stopColor="hsl(260, 70%, 65%)" />
            <stop offset="100%" stopColor="hsl(170, 80%, 45%)" />
          </linearGradient>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="hsl(170, 80%, 45%)" />
            <stop offset="100%" stopColor="hsl(260, 70%, 65%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SectionDivider;
