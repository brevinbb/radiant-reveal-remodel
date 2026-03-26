import concreteImg from "@/assets/concrete-work.jpg";
import drywallImg from "@/assets/drywall-work.jpg";
import steelImg from "@/assets/steel-work.jpg";
import remodelImg from "@/assets/remodel-work.jpg";

const services = [
  {
    title: "Concrete Services",
    description: "Decorative concrete, flat & seal work, foundations, and precision pours for residential and commercial projects.",
    image: concreteImg,
  },
  {
    title: "Drywall & Finishing",
    description: "Expert drywall installation, repair, wall texturing, and flawless finish work that transforms interiors.",
    image: drywallImg,
  },
  {
    title: "Steel Fabrication",
    description: "Custom steel fabrication and structural framing for industrial and commercial builds that demand strength.",
    image: steelImg,
  },
  {
    title: "Remodels & New Builds",
    description: "Full-scale remodeling, additions, and new construction — from concept to completion, built to last.",
    image: remodelImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3">
          WHAT WE DO
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-16">
          BUILT FOR<br />
          <span className="text-gradient">EVERY CHALLENGE</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative overflow-hidden bg-card shadow-card"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
