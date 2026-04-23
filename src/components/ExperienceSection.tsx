import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  icon: string;
  color: string;
}

const experiences: Experience[] = [
  {
    company: "Verve",
    role: "Design Director",
    period: "2024–Present",
    icon: "✦",
    color: "bg-violet-500",
  },
  {
    company: "Spotify",
    role: "Staff Designer",
    period: "2020–2024",
    icon: "♪",
    color: "bg-green-500",
  },
  {
    company: "Figma",
    role: "Senior Designer",
    period: "2016–2020",
    icon: "◈",
    color: "bg-orange-500",
  },
  {
    company: "Notion",
    role: "Product Designer",
    period: "2012–2016",
    icon: "▣",
    color: "bg-foreground",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-sm mb-10"
        >
          Experience
        </motion.h3>
        
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <motion.a
              key={exp.company}
              href={`#${exp.company.toLowerCase()}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-5 py-4 px-4 rounded-lg hover:bg-foreground/5 transition-colors group cursor-pointer"
            >
              <div className={`w-10 h-10 ${exp.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                {exp.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-display font-semibold text-foreground text-lg">
                    {exp.company}
                  </span>
                  <span className="text-foreground/40">·</span>
                  <span className="text-foreground/50 text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-foreground/60 text-sm">
                  {exp.role}
                </p>
              </div>
              
              <ArrowUpRight className="w-5 h-5 text-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
