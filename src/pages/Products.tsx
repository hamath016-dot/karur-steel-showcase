import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/components/ProductCarousel";

const Products = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="bg-primary section-padding">
      <div className="container mx-auto">
        <SectionHeading
          title="Our Products"
          subtitle="Explore our comprehensive range of steel products built for strength, durability, and performance."
          light
        />
      </div>
    </section>

    {/* Product Grid */}
    <section className="section-padding">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
              >
                Enquire on WhatsApp →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Products;
