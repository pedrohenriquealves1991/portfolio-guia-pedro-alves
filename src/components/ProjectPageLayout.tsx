import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface ProjectPageLayoutProps {
  title: string;
  subtitle: string;
  role: string;
  date: string;
  description: string[];
  externalLink?: { label: string; url: string };
  images: string[];
  skills: string[];
  highlights: { label: string; value: string }[];
}

const ProjectPageLayout = ({
  title,
  subtitle,
  role,
  date,
  description,
  externalLink,
  images,
  skills,
  highlights,
}: ProjectPageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navigation currentPage={title} />
      
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>
          
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <p className="text-sm text-foreground/50 font-medium mb-2">{role} · {date}</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            
            {externalLink && (
              <a 
                href={externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-accent font-semibold hover:opacity-70 transition-opacity"
              >
                {externalLink.label}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </motion.header>
          
          {/* Hero Image */}
          {images[0] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-20 rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src={images[0]} 
                alt={`${title} hero`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}
          
          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-8 border-y border-foreground/10"
          >
            {highlights.map((highlight, index) => (
              <div key={index}>
                <p className="text-sm text-foreground/50 font-medium mb-1">{highlight.label}</p>
                <p className="text-lg font-semibold text-foreground">{highlight.value}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Overview</h2>
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p key={index} className="text-lg text-foreground/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
          
          {/* Additional Images */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-20 space-y-6"
            >
              {images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-sm overflow-hidden shadow-xl"
                >
                  <img 
                    src={image} 
                    alt={`${title} image ${index + 2}`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Skills & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-foreground/5 text-foreground/70 rounded-sm text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Next Project CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32 pt-12 border-t border-foreground/10 text-center"
          >
            <p className="text-foreground/50 mb-4">Thanks for viewing</p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-foreground font-semibold text-lg hover:opacity-70 transition-opacity"
            >
              View More Projects
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectPageLayout;
