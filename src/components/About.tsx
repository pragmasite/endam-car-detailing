import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Sparkles, Shield, Zap, Award } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "5+", label: t.about.stat1 },
    { value: "500+", label: t.about.stat2 },
    { value: "100%", label: t.about.stat3 },
  ];

  const featureIcons = [Sparkles, Shield, Zap, Award];

  return (
    <section id="chi-siamo" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">
            {t.about.title1} <span className="text-accent">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground mb-6">{t.about.p1}</p>
            <p className="text-lg text-muted-foreground">{t.about.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-background rounded-lg border border-border shadow-soft">
                <div className="font-serif text-3xl font-bold text-primary">{stat.value}</div>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.features.map((feature, idx) => {
            const IconComponent = featureIcons[idx % featureIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 bg-background rounded-lg border border-border shadow-soft hover:shadow-medium transition-shadow"
              >
                <IconComponent className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-serif text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
