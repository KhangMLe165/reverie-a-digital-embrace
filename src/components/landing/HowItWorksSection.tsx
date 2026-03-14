import { motion } from "framer-motion";
import { CloudUpload, Heart, Lock } from "lucide-react";

const steps = [
  {
    icon: CloudUpload,
    title: "Gather Your Story",
    description:
      "Connect your photos, videos, journals, and messages. Upload voice recordings and letters for the people you love.",
  },
  {
    icon: Heart,
    title: "Shape Your Legacy",
    description:
      "Tell us how you want to be remembered. AI weaves your memories into a beautiful, meaningful narrative.",
  },
  {
    icon: Lock,
    title: "Deliver With Care",
    description:
      "When the time comes, your loved ones receive a private, curated memorial — a space to remember, reflect, and heal.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 px-6 md:px-16 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-display italic text-foreground">
            Three gentle steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
