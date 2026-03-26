import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3">
              GET IN TOUCH
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              LET'S BUILD<br />
              <span className="text-gradient">SOMETHING</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ready to start your next project? Contact us for a free estimate.
              We'd love to hear about what you're building.
            </p>

            <div className="space-y-6">
              <a href="tel:+15632998570" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">(563) 299-8570</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="text-foreground font-medium">2200 Grandview Ave, Muscatine, IA 52761</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                  <p className="text-foreground font-medium">Mon – Fri: 8:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-card border border-border p-8 shadow-card space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll be in touch soon.");
            }}
          >
            <div>
              <label className="block font-heading text-xs tracking-widest text-muted-foreground mb-2">
                NAME
              </label>
              <input
                type="text"
                required
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block font-heading text-xs tracking-widest text-muted-foreground mb-2">
                PHONE
              </label>
              <input
                type="tel"
                required
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label className="block font-heading text-xs tracking-widest text-muted-foreground mb-2">
                PROJECT DETAILS
              </label>
              <textarea
                rows={4}
                required
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-accent text-primary-foreground font-heading text-sm tracking-widest py-4 hover:opacity-90 transition-opacity shadow-glow"
            >
              SEND REQUEST
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
