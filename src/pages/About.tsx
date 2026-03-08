import { motion } from "framer-motion";
import { Shield, Award, Truck, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Shield, title: "Quality Assurance", desc: "Every product undergoes rigorous quality checks meeting IS standards." },
  { icon: Award, title: "Trusted Supplier", desc: "Serving 500+ satisfied clients across Tamil Nadu for nearly two decades." },
  { icon: Truck, title: "Fast Delivery", desc: "Reliable logistics ensuring on-time delivery to your project site." },
  { icon: Users, title: "Expert Team", desc: "Experienced professionals ready to guide you with the right steel solutions." },
];

const About = () => (
  <div className="pt-20">
    <section className="bg-primary section-padding">
      <div className="container mx-auto">
        <SectionHeading title="About Us" subtitle="Building trust, one steel beam at a time." light />
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            <strong className="text-foreground">Karur Steels</strong> was established in 2005 with a
            vision to provide high-quality steel products to the growing construction and
            infrastructure sectors of Tamil Nadu. Located in the heart of Karur, we have grown
            from a small trading firm into one of the region's most trusted steel suppliers.
          </p>
          <p>
            With nearly <strong className="text-foreground">20 years of experience</strong>, we
            pride ourselves on maintaining the highest standards of quality, competitive pricing,
            and unmatched customer service. Our extensive product range includes TMT bars, steel
            rods, pipes, sheets, and structural steel — all sourced from leading manufacturers.
          </p>
          <p>
            Our commitment to reliability and transparency has earned us the trust of builders,
            contractors, and engineers across Tamil Nadu. We believe that strong steel builds
            strong foundations — and strong relationships.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="bg-muted section-padding">
      <div className="container mx-auto">
        <SectionHeading title="Why Choose Us" subtitle="What sets Karur Steels apart from the rest." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg bg-card p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <v.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
