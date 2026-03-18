import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20">
      <section className="bg-primary section-padding">
        <div className="container mx-auto">
          <SectionHeading title="Contact Us" subtitle="Get in touch for enquiries, quotes, and orders." light />
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-accent py-3 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "9/67-1, chinnandankovil road, Periyar arch east, Aravind nagar, Karur, Tamil Nadu 639002" },
                { icon: Phone, label: "Phone", value: "+91 9842448098", href: "tel:+919842448098" },
                { icon: Mail, label: "Email", value: "info@karursteels.com", href: "mailto:info@karursteels.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <item.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919842448098"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-green-600 px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105 w-fit"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="Karur Steels Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.222158628743!2d78.05978100624272!3d10.951943187660948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f007331cbef%3A0x6df76496c2aa55b3!2sKARUR%20STEEL%20COMPANY!5e0!3m2!1sen!2sin!4v1773809349702!5m2!1sen!2sin"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
