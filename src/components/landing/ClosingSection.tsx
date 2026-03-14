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
            Because the people we love
            <br />
            deserve more than silence
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            When someone passes, families face grief and the burden of collecting scattered memories.
            Memento ensures your story is preserved and delivered with the care it deserves.
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
