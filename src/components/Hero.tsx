import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8">
            Product Design
            <br />
            <span className="text-foreground/80">&</span> Creative Direction
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl font-medium leading-relaxed">
            Crafting products with clarity and purpose for over a decade. 
            Building digital experiences that millions use every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
