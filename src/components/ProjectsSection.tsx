import { motion } from "framer-motion";
import { Github, ArrowUpRight, Folder, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "CareerTwin AI",
    subtitle: "Resume Intelligence & Job Matching System",
    description: "AI-based system that analyzes resumes, calculates strength scores, and matches profiles with relevant jobs using transformer-based embeddings and cosine similarity.",
    tech: ["Python", "NLP", "Sentence Transformers", "Streamlit", "Pandas", "Plotly"],
    github: "https://github.com/Soumen1602/CareerTwin-AI---AI-Intelligence-Job-Guidance-System",
    period: "Nov 2025 – Dec 2025",
    featured: true,
    color: "primary",
  },
  {
    title: "Password Strength Classifier",
    subtitle: "ML-based Security Tool",
    description: "ML system to classify password strength using feature extraction (entropy, character patterns) with Logistic Regression and Random Forest models.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    github: "https://github.com/Soumen1602/Password-Strength-Classifier",
    period: "Sep 2024 – Oct 2024",
    featured: false,
    color: "accent",
  },
  {
    title: "College Enrollment Insight",
    subtitle: "Interactive Education Dashboard",
    description: "Converted raw government enrollment data into interactive visual insights analyzing gender & social category distributions using Power BI.",
    tech: ["Power BI", "Power Query", "KPI Cards", "Slicers"],
    github: "https://github.com/Soumen1602/College-Enrollment-Insight-Dashboard-",
    period: "Nov 2025 – Dec 2025",
    featured: false,
    color: "primary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Folder className="text-primary" size={20} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-6" />

          <div className="space-y-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group glass rounded-xl p-5 md:p-6 hover:border-primary/40 transition-all duration-300 relative overflow-hidden card-shine"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.featured ? 'from-primary via-accent to-primary' : 'from-primary/30 to-accent/30'}`} />
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Folder size={14} className="text-primary" />
                        <span className="text-xs font-mono text-primary">{project.period}</span>
                        {project.featured && (
                          <motion.span
                            className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary font-mono border border-primary/20 flex items-center gap-1"
                            animate={{ boxShadow: ["0 0 0px hsl(var(--primary) / 0)", "0 0 8px hsl(var(--primary) / 0.3)", "0 0 0px hsl(var(--primary) / 0)"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Star size={8} /> Featured
                          </motion.span>
                        )}
                      </div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_12px_hsl(var(--primary)/0.2)] transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/10 hover:border-primary/30 hover:bg-primary/15 transition-all cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/Soumen1602"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="btn-glow inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium px-4 py-2 rounded-lg border border-primary/20"
            >
              View all projects on GitHub <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
