import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology – Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "Aug 2023 – Jul 2027",
    grade: "CGPA: 7.3",
    current: true,
  },
  {
    degree: "Intermediate (12th)",
    institution: "Krishnamurthy World School",
    location: "Cuttack, Odisha",
    period: "Apr 2021 – Mar 2023",
    grade: "Percentage: 80%",
    current: false,
  },
  {
    degree: "Matriculation (10th)",
    institution: "Cambridge School",
    location: "Cuttack, Odisha",
    period: "Apr 2020 – Mar 2021",
    grade: "Percentage: 82%",
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-6" />

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/30 to-transparent hidden md:block" />

            <div className="space-y-3">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ x: 5 }}
                  className="md:pl-16 relative group"
                >
                  <div className="hidden md:flex absolute left-3.5 top-3 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.4)] transition-all">
                    <GraduationCap size={10} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  <div className="glass rounded-xl p-5 hover:border-primary/30 transition-all card-shine">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      {edu.current && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/20">
                          Current
                        </span>
                      )}
                      <span className="text-xs font-mono text-primary flex items-center gap-1">
                        <Calendar size={10} /> {edu.period}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground text-sm">{edu.degree}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} /> {edu.location}
                      </span>
                      <span className="font-mono text-primary font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
