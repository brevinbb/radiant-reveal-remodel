import heroImg from "@/assets/hero-construction.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Wolfe Contracting construction site at golden hour"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="font-heading text-sm tracking-[0.3em] text-primary mb-4 animate-fade-up">
          MUSCATINE, IOWA — SINCE DAY ONE
        </p>
        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-6 animate-fade-up [animation-delay:200ms] opacity-0">
          WE BUILD<br />
          <span className="text-gradient">WHAT LASTS</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10 animate-fade-up [animation-delay:400ms] opacity-0">
          Residential. Commercial. Industrial. From concrete foundations to complete
          build-outs — Wolfe Contracting delivers craftsmanship you can trust.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:600ms] opacity-0">
          <a
            href="#contact"
            className="bg-gradient-accent text-primary-foreground font-heading text-sm tracking-widest px-8 py-4 hover:opacity-90 transition-opacity shadow-glow"
          >
            GET A FREE ESTIMATE
          </a>
          <a
            href="#services"
            className="border border-border text-foreground font-heading text-sm tracking-widest px-8 py-4 hover:border-primary hover:text-primary transition-colors"
          >
            OUR SERVICES
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Hero;
