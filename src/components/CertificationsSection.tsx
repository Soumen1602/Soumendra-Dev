import { motion } from "framer-motion";
import { Award, BookOpen, Trophy, Cloud, Shield, Code2, Gamepad2, ExternalLink } from "lucide-react";

const certs = [
  { 
    icon: Award, 
    title: "Fundamentals of Prompt Engineering", 
    org: "Infosys", 
    year: "Aug 2025",
    url: "https://drive.google.com/file/d/1Jw6Qfm1lHMO_rBwLimjEcpuD8d9MyNgr/view?usp=drive_link"
  },
  { 
    icon: Cloud, 
    title: "Cloud Computing", 
    org: "NPTEL", 
    year: "Oct 2025",
    url: "https://drive.google.com/file/d/1nUi0lGfrBTfs9uLmfl5IOJApVajLjNpq/view?usp=sharing"
  },
  { 
    icon: Code2, 
    title: "Python Certification", 
    org: "Scaler", 
    year: "Feb 2025",
    url: "https://drive.google.com/file/d/1uFwQMzPhKF9Vj2lqsUMX81acUbYF9PTY/view?usp=drive_link"
  },

  { 
    icon: Award, 
    title: "Machine Learning Training", 
    org: "Lovely Professional University", 
    year: "Jun–Jul 2025",
    url: "https://drive.google.com/file/d/1CrPCA9wBXPT-f73HMucup5FaooqzAFgR/view?usp=drive_link"
  },
];

const achievements = [
  { icon: Gamepad2, title: "Diamond League – Google Arcade", desc: "Earned multiple badges and certificates through real-world cloud labs and projects.", period: "Jan 2024 – Aug 2025" },
  { icon: Trophy, title: "3-Star Python – HackerRank", desc: "Achieved 3-star rating showcasing advanced problem-solving and programming proficiency.", period: "Nov 2023 – Mar 2024" },
  { icon: Shield, title: "Oracle Cloud Application Badge", desc: "Completed Oracle Cloud Application Challenges training program.", period: "Nov 2024 – Dec 2024" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-6" />

          <h3 className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-4 flex flex-col hover:border-primary/30 transition-all group card-shine min-h-[140px]"
              >
                <div className="flex items-start gap-3 mb-4 flex-grow">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] transition-all">
                    <cert.icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm leading-tight">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.org}</p>
                    <span className="text-[11px] font-mono text-primary mt-0.5 inline-block">{cert.year}</span>
                  </div>
                </div>
                
                {cert.url && (
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-medium text-primary hover:text-primary/80 transition-colors w-fit group/btn"
                  >
                    View Certificate 
                    <ExternalLink size={10} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>

          <h3 className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-xl p-4 hover:border-accent/30 transition-all cursor-default group card-shine"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-[0_0_12px_hsl(var(--accent)/0.3)] transition-all">
                    <ach.icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm leading-tight">{ach.title}</h4>
                    <span className="text-[11px] font-mono text-accent">{ach.period}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{ach.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
