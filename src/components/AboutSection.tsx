import { motion } from "framer-motion";
import { GraduationCap, Target, Code2, Briefcase, Rocket, TrendingUp } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const timeline = [
  { year: "2023", title: "Started B.Tech in CSE", desc: "Joined LPU. Mastered programming fundamentals, DSA & OOP concepts.", icon: GraduationCap },
  { year: "2024", title: "Discovered Data Science", desc: "Deep dived into Python, Pandas, ML. Achieved 3-Star Python on HackerRank.", icon: Target },
  { year: "2025", title: "Building Real Projects", desc: "Created CareerTwin AI, dashboards, and earned certifications.", icon: Code2 },
  { year: "2026", title: "Seeking Opportunities", desc: "Actively pursuing internships in data science, ML & software dev.", icon: Briefcase },
  { year: "2027", title: "Graduation & Beyond", desc: "Expected B.Tech graduation. Ready to make an impact.", icon: Rocket },
];

const AnimatedStat = ({ value, suffix = "", label, icon: Icon }: { value: number; suffix?: string; label: string; icon: any }) => {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="glass rounded-xl p-4 text-center hover:border-primary/30 transition-all cursor-default card-shine group relative overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-2xl" />
      <Icon className="mx-auto mb-2 text-primary group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all" size={20} />
      <span ref={ref as any} className="text-2xl font-bold gradient-text">{count}{suffix}</span>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
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
              <Code2 className="text-primary" size={20} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-6" />

          {/* Stats with animated counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            <AnimatedStat value={7} suffix=".3" label="CGPA" icon={TrendingUp} />
            <AnimatedStat value={5} suffix="+" label="Projects" icon={Code2} />
            <AnimatedStat value={4} suffix="+" label="Certificates" icon={GraduationCap} />
            <AnimatedStat value={3} suffix="★" label="HackerRank" icon={Target} />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-4">
              <motion.p
                className="text-muted-foreground leading-relaxed text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                I'm a Computer Science student at Lovely Professional University with a deep passion for turning raw data into meaningful insights. My journey began with curiosity about how systems work and evolved into a focused pursuit of data science, machine learning, and software development.
              </motion.p>
              <motion.p
                className="text-muted-foreground leading-relaxed text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                I enjoy working with tools like Power BI, Python, and Scikit-learn to solve real-world problems. From building AI-powered resume matching systems to creating interactive dashboards — I'm always eager to learn and create impactful solutions.
              </motion.p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { icon: Code2, label: "Software Dev", color: "primary" },
                  { icon: Target, label: "Data Science", color: "primary" },
                  { icon: GraduationCap, label: "B.Tech CSE", color: "primary" },
                ].map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05, y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-lg p-3 text-center hover:border-primary/40 transition-all cursor-default group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="mx-auto mb-1.5 text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] relative z-10" size={20} />
                    <span className="text-xs font-medium text-foreground relative z-10">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/40 to-transparent" />
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="pl-10 relative group cursor-default"
                  >
                    <motion.div
                      className="absolute left-1.5 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.4)] transition-all"
                    >
                      <item.icon size={9} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </motion.div>
                    <span className="font-mono text-primary text-xs font-bold">{item.year}</span>
                    <h4 className="font-semibold text-foreground text-sm mt-0.5">{item.title}</h4>
                    <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
