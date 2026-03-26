const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg tracking-wider text-foreground">
          WOLFE<span className="text-primary">.</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Wolfe Contracting Inc. All rights reserved.
        </p>
        <a
          href="tel:+15632998570"
          className="text-sm text-primary hover:opacity-80 transition-opacity"
        >
          (563) 299-8570
        </a>
      </div>
    </footer>
  );
};

export default Footer;
