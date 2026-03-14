import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  return (
    <section className="py-32 px-6 md:px-16 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-display italic text-foreground mb-8 leading-tight">
            Because your story deserves
            <br />
            to be told the way you'd tell it.
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            You've spent a lifetime collecting moments. Memento makes sure none of them get lost — and that the people you love receive them exactly as you intended.
          </p>
          <Button variant="hero" size="lg" className="text-base px-12 py-6">
            Begin Your Memento
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
