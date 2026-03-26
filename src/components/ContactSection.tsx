import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Phone, MapPin, CheckCircle2, MessageSquare, Zap } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:soumendra1602@gmail.com?subject=${subject}&body=${body}`, "_self");
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
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
              <MessageSquare className="text-primary" size={20} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get In <span className="gradient-text">Touch</span>
            </h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-6" />

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                I'm always open to new opportunities, collaborations, and conversations.
                Feel free to reach out if you'd like to work together or just say hello!
              </p>

              {/* Availability badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-4"
                animate={{ boxShadow: ["0 0 0px hsl(var(--primary) / 0)", "0 0 12px hsl(var(--primary) / 0.2)", "0 0 0px hsl(var(--primary) / 0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap size={10} /> Available for opportunities
              </motion.div>

              <div className="space-y-3">
                {[
                  { href: "mailto:soumendra1602@gmail.com", icon: Mail, label: "soumendra1602@gmail.com" },
                  { href: "tel:+917077010792", icon: Phone, label: "+91-7077010792" },
                  { href: "https://github.com/Soumen1602", icon: Github, label: "github.com/Soumen1602", external: true },
                  { href: "https://www.linkedin.com/in/soumend12/", icon: Linkedin, label: "linkedin.com/in/soumend12", external: true },
                ].map(({ href, icon: Icon, label, external }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all group"
                  >
                    <span className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all">
                      <Icon size={14} />
                    </span>
                    {label}
                  </motion.a>
                ))}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={14} />
                  </span>
                  Cuttack, Odisha, India
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass rounded-xl p-5 space-y-3 relative overflow-hidden">
              {/* Form accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <motion.input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                whileFocus={{ scale: 1.01 }}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all"
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                whileFocus={{ scale: 1.01 }}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all"
              />
              <motion.textarea
                placeholder="Your Message"
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                whileFocus={{ scale: 1.01 }}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all resize-none"
              />
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-primary"
                >
                  <CheckCircle2 size={14} /> Email client opened! Message sent.
                </motion.div>
              )}
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-glow w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all disabled:opacity-50"
              >
                <Send size={14} /> {sending ? "Opening..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
