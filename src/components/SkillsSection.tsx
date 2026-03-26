import { motion } from "framer-motion";
import { Code2, Database, Wrench, Users, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "C++", level: 80 },
      { name: "Java", level: 70 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 75 },
      { name: "Data Visualization", level: 85 },
      { name: "Scikit-learn", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Excel", level: 90 },
      { name: "Power Query", level: 85 },
      { name: "TensorFlow", level: 55 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem-Solving", level: 90 },
      { name: "Team Collaboration", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Adaptability", level: 85 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-surface/50">
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
              <Zap className="text-primary" size={20} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="gradient-text">Skills</span>
            </h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-6" />

          <div className="grid md:grid-cols-2 gap-3">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-5 hover:border-primary/30 transition-all group card-shine relative overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="font-semibold text-foreground mb-4 font-mono text-sm flex items-center gap-2 relative z-10">
                  <cat.icon size={16} className="text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all" />
                  {cat.title}
                </h3>
                <div className="space-y-3 relative z-10">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden relative">
                        <motion.div
                          className="h-full rounded-full relative"
                          style={{
                            background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: ci * 0.08 + si * 0.06 }}
                        >
                          {/* Shine effect on bar */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
