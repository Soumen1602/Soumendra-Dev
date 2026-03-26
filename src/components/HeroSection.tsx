import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, ArrowDown, FileDown, Mail, Phone, ChevronRight, Sparkles, Terminal } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useEffect, useState } from "react";

const roles = [
  "Data Analyst",
  "Python Developer",
  "AI Enthusiast",
  "Machine Learning Explorer",
  "Power BI Expert",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div className="absolute inset-0 opacity-10" style={{ y: bgY }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/8 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: "5s" }} />

      <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity }}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative flex-shrink-0 group"
          >
            <div className="relative">
              {/* Rotating border */}
              <motion.div
                className="absolute -inset-1.5 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                  backgroundSize: "200% 200%",
                }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden relative bg-background p-0.5">
                <img
                  src={profilePhoto}
                  alt="Soumendra Brahmapada"
                  className="w-full h-full object-cover object-top rounded-xl group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Status badge */}
            <motion.div
              className="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-mono text-primary shadow-lg backdrop-blur-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "hsl(150, 70%, 45%)" }} />
              Open to work
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.div
              className="inline-flex items-center gap-2 font-mono text-primary text-xs mb-4 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Terminal size={12} />
              {"<hello world />"}
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 leading-tight tracking-tight">
              Soumendra{" "}
              <span className="gradient-text">Brahmapada</span>
            </h1>
            <div className="h-8 mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-base md:text-lg text-primary/90">
                {displayed}
                <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-6 leading-relaxed">
              Passionate Data Analyst and Python Developer dedicated to transforming raw data into actionable insights. 
              Specializing in statistical analysis, impactful data visualization with Power BI, and building intelligent 
              machine learning solutions that drive data-driven decision making.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glow inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">View Projects <ChevronRight size={14} /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] group-hover:animate-gradient-shift" />
              </motion.a>
              <motion.a
                href="/Soumendra_CV.pdf"
                download="Soumendra_Brahmapada_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glow inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-all relative overflow-hidden group shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.5)]"
              >
                <FileDown size={14} className="animate-bounce" /> Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glow inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border text-muted-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all"
              >
                <Mail size={14} /> Contact
              </motion.a>
            </div>

            <div className="flex justify-center md:justify-start gap-2.5">
              {[
                { href: "https://github.com/Soumen1602", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/soumend12/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:soumendra1602@gmail.com", icon: Mail, label: "Email" },
                { href: "tel:+917077010792", icon: Phone, label: "Phone" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] font-mono text-muted-foreground/40 tracking-widest uppercase">Scroll</span>
        <ArrowDown className="text-muted-foreground/40" size={16} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
