import { motion } from "framer-motion";
import { Mail, Linkedin, Dribbble, MapPin, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const sfTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(sfTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-sm mb-10"
        >
          Contact
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a 
              href="mailto:hello@mayachen.design"
              className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">hello@mayachen.design</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/mayachen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors group"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-lg">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a 
              href="https://dribbble.com/mayachen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors group"
            >
              <Dribbble className="w-5 h-5" />
              <span className="text-lg">Dribbble</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
          
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-3 text-foreground/80">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">San Francisco, USA 🇺🇸</span>
            </div>
            {time && (
              <p className="text-foreground/50 text-lg ml-8">
                {time} local time
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
