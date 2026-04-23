import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  images: string[];
  link?: string;
  index: number;
}

const ProjectCard = ({ title, subtitle, date, description, images, link, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  
  // Different rotation patterns for visual interest
  const rotations = [
    [3, -2, 1, -3],
    [-2, 3, -1, 2],
    [2, -3, 2, -1],
    [-1, 2, -2, 3],
  ];
  const currentRotations = rotations[index % rotations.length];
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="py-12 md:py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          {/* Text Content */}
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight">
                {title}
              </h2>
              <p className="text-lg text-foreground/60 font-medium">
                {subtitle}
              </p>
              <p className="text-sm text-foreground/40 mt-1 font-medium">
                {date}
              </p>
            </div>
            
            <p className="text-foreground/70 leading-relaxed text-lg max-w-lg">
              {description}
            </p>
            
            {link && (
              <Link 
                to={link}
                className="inline-flex items-center gap-2 text-foreground font-semibold hover:opacity-70 transition-opacity group text-lg"
              >
                View Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            )}
          </motion.div>
          
          {/* Images Grid - Scattered artistic layout */}
          <div className="relative h-[400px] md:h-[500px]">
            {images.slice(0, 2).map((image, imgIndex) => (
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0, scale: 0.8, rotate: currentRotations[imgIndex] * 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: currentRotations[imgIndex] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + imgIndex * 0.15 }}
                whileHover={{ rotate: 0, scale: 1.03, zIndex: 20 }}
                className={`absolute overflow-hidden rounded-sm shadow-2xl cursor-pointer transition-all duration-300 ${
                  imgIndex === 0 
                    ? 'w-[70%] h-[70%] top-0 left-0 z-10' 
                    : 'w-[60%] h-[55%] bottom-0 right-0 z-[5]'
                }`}
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
              >
                <img 
                  src={image} 
                  alt={`${title} project image ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectCard;
