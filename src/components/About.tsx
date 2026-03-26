import { Hammer, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Hammer, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "100%", label: "Client Focused" },
  { icon: Clock, value: "Mon–Fri", label: "8 AM – 4 PM" },
  { icon: Shield, value: "Licensed", label: "& Insured" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3">
              WHO WE ARE
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              WOLFE<br />
              <span className="text-gradient">CONTRACTING</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Based in Muscatine, Iowa, Wolfe Contracting is a full-service general
              contractor serving residential, commercial, and industrial clients
              across the region.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From decorative concrete and precision drywall to steel fabrication
              and complete new builds — we bring decades of hands-on expertise to
              every project. No shortcuts. No compromises. Just honest work that
              stands the test of time.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-accent text-primary-foreground font-heading text-sm tracking-widest px-8 py-4 hover:opacity-90 transition-opacity shadow-glow"
            >
              REQUEST A QUOTE
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border p-6 text-center shadow-card hover:border-primary/50 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-heading text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
