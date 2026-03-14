import { motion } from "framer-motion";
import { CloudUpload, Heart, Lock } from "lucide-react";

const steps = [
  {
    icon: CloudUpload,
    title: "Connect Your World With Us",
    description:
      "Link access to your photos, videos, messages, voice recordings… that trip to Lisbon, that story you wish your grandkids would know about you. Memento indexes everything — you stay in full control of what gets included.",
  },
  {
    icon: Heart,
    title: "Tell Us Who You Are",
    description:
      "Write notes in your own words, record short voice messages, connect to your digital journal — entirely and optionally up to you. This is how we learn who you are, by your own accord, or just authentically sharing your daily thoughts.",
  },
  {
    icon: Lock,
    title: "We Help You Build Your Legacy Story",
    description:
      "Our AI Curator uses the context from your words and materials to build a story of your life. We work with you iteratively for the best version. You designate the trusted people you wish to leave it behind for — those who care about you.",
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
