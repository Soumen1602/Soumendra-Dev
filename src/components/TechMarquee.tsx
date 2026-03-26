import { motion } from "framer-motion";

const techs = [
  "Python", "C++", "Java", "SQL", "Power BI", "Pandas", "NumPy",
  "Scikit-learn", "TensorFlow", "Git", "VS Code", "Excel",
  "Streamlit", "NLP", "Machine Learning", "Data Visualization",
];

const TechMarquee = () => {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
