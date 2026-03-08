import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  index: number;
}

const ProductCard = ({ image, name, description, index }: ProductCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group min-w-[280px] md:min-w-[320px] snap-start"
  >
    <div className="overflow-hidden rounded-lg bg-card shadow-lg transition-shadow hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default ProductCard;
