import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 884 0794",
      href: "tel:+41798840794",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "endam154@gmail.com",
      href: "mailto:endam154@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Via Arbigo 62, 6616 Losone, CH",
      href: "https://maps.google.com/?q=Via+Arbigo+62+6616+Losone",
    },
  ];

  return (
    <section id="contatti" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">
            {t.contact.title1} <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.label === t.contact.address ? "_blank" : undefined}
                  rel={item.label === t.contact.address ? "noopener noreferrer" : undefined}
                  className="flex gap-4 p-6 bg-background rounded-lg border border-border shadow-soft hover:shadow-medium transition-all group"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                    <p className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <Button asChild size="lg" className="w-full mt-8">
              <a href="tel:+41798840794">
                <Phone className="mr-2 h-5 w-5" />
                {t.contact.callNow}
              </a>
            </Button>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-medium h-96 lg:h-full min-h-96"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.0697481373397!2d8.755645!3d46.172459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4784f0b0c0c0c0c1%3A0x0!2sEndam%20Car%20Detailing!5e0!3m2!1sen!2sde!4v1234567890"
              title="Endam Car Detailing location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
