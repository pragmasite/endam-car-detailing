import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#chi-siamo" },
    { label: t.nav.services, href: "#servizi" },
    { label: t.nav.gallery, href: "#galleria" },
    { label: t.nav.hours, href: "#orari" },
    { label: t.nav.contact, href: "#contatti" },
  ];

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <h3 className="font-serif text-2xl font-bold text-foreground">ENDAM</h3>
              <p className="text-sm text-accent font-semibold tracking-widest mt-1">
                {t.footer.tagline}
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif font-bold text-foreground mb-6">{t.footer.navigation}</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif font-bold text-foreground mb-6">Contatti</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <a
                  href="tel:+41798840794"
                  className="hover:text-primary transition-colors"
                >
                  +41 79 884 0794
                </a>
              </p>
              <p>
                <a
                  href="mailto:endam154@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  endam154@gmail.com
                </a>
              </p>
              <p>Via Arbigo 62<br />6616 Losone, CH</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 Endam Car Detailing. {t.footer.copyright}</p>
            <p className="text-xs">Design by Claude Code</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
