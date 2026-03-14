import { motion } from "framer-motion";
import { BookOpen, MapPin, Mic, Image, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "AI Narrative Builder",
    description: "Your life story, organized into chapters — from early memories to final messages.",
  },
  {
    icon: Image,
    title: "Smart Media Curation",
    description: "AI selects your most meaningful photos and videos using face recognition and emotion detection.",
  },
  {
    icon: Mic,
    title: "Voice Moments",
    description: "Record messages, stories, and advice in your own voice for the people who matter most.",
  },
  {
    icon: MapPin,
    title: "Interactive Memory Map",
    description: "A beautiful map of the places that shaped your life and the stories tied to them.",
  },
  {
    icon: Users,
    title: "Family Contributions",
    description: "After activation, loved ones can add their own memories to your shared space.",
  },
  {
    icon: Sparkles,
    title: "Personality Preservation",
    description: "Your humor, warmth, and voice — captured authentically through your own words and recordings.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-display italic text-foreground mb-4">
            More than memories
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            A thoughtful memorial narrative that reflects who you truly are.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-12 h-12 mb-5 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
