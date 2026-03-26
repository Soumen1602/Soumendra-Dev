import { motion } from "framer-motion";
import { Github, GitBranch, Star, Code } from "lucide-react";

const repos = [
  { name: "CareerTwin-AI", desc: "AI-based resume intelligence & job matching system", lang: "Python", stars: 4 },
  { name: "Password-Strength-Classifier", desc: "ML-based password strength evaluation tool", lang: "Python", stars: 3 },
  { name: "College-Enrollment-Insight", desc: "Power BI dashboard for education data analysis", lang: "Power BI", stars: 5 },
  { name: "ML-Training-Projects", desc: "Machine learning models from LPU training program", lang: "Python", stars: 2 },
];

const GitHubSection = () => {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">GitHub</span> Activity
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded mb-6" />

          <div className="grid sm:grid-cols-2 gap-3">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={`https://github.com/Soumen1602/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-xl p-4 hover:border-primary/40 transition-all group card-shine"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch size={14} className="text-primary" />
                  <span className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{repo.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Code size={11} /> {repo.lang}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={11} /> {repo.stars}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-6">
            <motion.a
              href="https://github.com/Soumen1602"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glow inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-all"
            >
              <Github size={14} /> View Full Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
