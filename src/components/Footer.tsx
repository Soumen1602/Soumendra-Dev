import { Github, Linkedin, Mail, Phone, Heart, Code2, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            {/* Brand */}
            <div>
              <a href="#" className="font-mono font-bold text-xl text-primary hover:text-glow transition-all inline-block mb-2">
                {"<SB />"}
              </a>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Data Analyst & Python Developer crafting intelligent solutions with code and data.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-mono text-primary mb-3 uppercase tracking-wider">Quick Links</h4>
              <div className="grid grid-cols-2 gap-1">
                {["About", "Skills", "Projects", "Education", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors py-0.5"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-mono text-primary mb-3 uppercase tracking-wider">Connect</h4>
              <div className="flex gap-2">
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
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="p-2 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_10px_hsl(var(--primary)/0.2)] transition-all"
                    aria-label={label}
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-4 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              © {new Date().getFullYear()} Soumendra Brahmapada. Built with <Heart size={10} className="text-primary animate-pulse" /> & <Code2 size={10} className="text-primary" />
            </p>
            <p className="text-[10px] text-muted-foreground/50 font-mono">
              Designed & Developed by Soumendra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
