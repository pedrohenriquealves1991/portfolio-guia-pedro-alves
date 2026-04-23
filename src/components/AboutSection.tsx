import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-sm mb-10"
        >
          About
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-foreground/80 leading-relaxed">
            Over a decade of experience crafting digital products, brands and experiences 
            that are used by millions of people every day.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            Embracing growth, I continually combine extensive experience in{" "}
            <strong className="text-foreground font-semibold">Product</strong>,{" "}
            <strong className="text-foreground font-semibold">Motion</strong>,{" "}
            <strong className="text-foreground font-semibold">Sound</strong> and{" "}
            <strong className="text-foreground font-semibold">Brand</strong> Design.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            I am dedicated to shaping a better future through Design. My approach always 
            puts people first — from clients to users.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed italic">
            Curious and optimistic.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
