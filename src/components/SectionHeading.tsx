import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12 text-center"
  >
    <h2
      className={`font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      {title}
    </h2>
    <div className="mx-auto mt-3 h-1 w-16 rounded bg-accent" />
    {subtitle && (
      <p
        className={`mt-4 max-w-xl mx-auto text-sm md:text-base ${
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
