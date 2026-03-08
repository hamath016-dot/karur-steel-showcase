import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import heroImg from "@/assets/hero-steel.jpg";
import SectionHeading from "@/components/SectionHeading";
import ProductCarousel from "@/components/ProductCarousel";

const stats = [
  { icon: Award, label: "Years Experience", value: "20+" },
  { icon: Shield, label: "Quality Assured", value: "100%" },
  { icon: Truck, label: "On-Time Delivery", value: "98%" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Steel manufacturing" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>
      <div className="container relative mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded bg-accent/20 px-3 py-1 text-sm font-semibold text-accent mb-4">
            Trusted Since 2005
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Quality Steel{" "}
            <span className="text-gradient">Solutions</span>{" "}
            in Karur
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 max-w-lg">
            Supplying premium steel products for construction, infrastructure,
            and industrial projects across Tamil Nadu.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              View Products <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-card section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex items-center gap-4 rounded-lg border border-border p-6"
            >
              <div className="rounded-lg bg-accent/10 p-3">
                <stat.icon className="text-accent" size={28} />
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          title="Our Products"
          subtitle="We offer a wide range of high-quality steel products for every construction need."
        />
        <ProductCarousel />
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary section-padding">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Build with <span className="text-accent">Quality Steel?</span>
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-md mx-auto">
            Contact us today for competitive pricing and reliable delivery across Tamil Nadu.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded bg-accent px-8 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
