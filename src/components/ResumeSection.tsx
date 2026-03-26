import { motion } from "framer-motion";
import { FileDown, ExternalLink, FileText, CheckCircle2, Download } from "lucide-react";

const highlights = [
  "B.Tech CSE – Lovely Professional University (2023–2027)",
  "Projects: CareerTwin AI, Password Classifier, Enrollment Dashboard",
  "Skills: Python, C++, Power BI, ML, Data Analysis",
  "Certifications from Infosys, NPTEL, Scaler, Coursera",
];

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-6 mx-auto" />

          <p className="text-muted-foreground mb-6 text-sm max-w-lg mx-auto">
            Interested in my full background? Download my resume to learn more about my experience and skills.
          </p>

          {/* Resume card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass rounded-xl p-6 mb-6 text-left card-shine"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-3 rounded-lg bg-primary/10"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <FileText className="text-primary" size={24} />
              </motion.div>
              <div>
                <h3 className="font-bold text-foreground">Soumendra_Brahmapada_Resume.pdf</h3>
                <p className="text-xs text-muted-foreground">Updated Resume • PDF Document</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  {h}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href="/Soumendra_CV.pdf"
              download="Soumendra_Brahmapada_Resume.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all"
            >
              <Download size={16} /> Download Resume
            </motion.a>
            <motion.a
              href="/Soumendra_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-all"
            >
              <ExternalLink size={16} /> Open in New Tab
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
