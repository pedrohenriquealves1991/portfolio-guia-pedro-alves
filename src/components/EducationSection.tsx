import { motion } from "framer-motion";

interface Education {
  degree: string;
  institution: string;
  period: string;
}

const education: Education[] = [
  {
    degree: "Master of Fine Arts (M.F.A.)",
    institution: "Rhode Island School of Design",
    period: "2010–2012",
  },
  {
    degree: "Interaction Design",
    institution: "Copenhagen Institute of Interaction Design",
    period: "2011–2012",
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-sm mb-10"
        >
          Education
        </motion.h3>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-1"
            >
              <div className="flex items-baseline gap-3 flex-wrap">
                <h4 className="font-display font-semibold text-foreground">
                  {edu.degree}
                </h4>
                <span className="text-foreground/50 text-sm">
                  {edu.period}
                </span>
              </div>
              <p className="text-foreground/60 text-sm">
                {edu.institution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
