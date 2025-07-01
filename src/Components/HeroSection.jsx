import {
  ArrowDown,
  Github,
  Handshake,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-2 text-primary">
              Jason
            </span>
            <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-3">
              Strife
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-2-2xl">
            5th Year Computer Engineering Student at the University of
            Cincinnati
          </p>

          {/* Mail, Phone, Location */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:space-x-8 sm:space-y-0 space-y-2">
            {/* Email Block*/}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>

              <div>
                <a
                  href="mailto:strifeja@mail.uc.edu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  strifeja@mail.uc.edu
                </a>
              </div>
            </div>

            {/* Phone Block */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>

              <div>
                <a
                  href="tel:+16142549811"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (614) 254-9811
                </a>
              </div>
            </div>

            {/* Location Block */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>

              <div>
                <a className="text-muted-foreground transition-colors">
                  Cincinnati, Ohio
                </a>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-8 sm:flex-nowrap">
            <div className="flex items-center space-x-4">
              <a
                className="p-3 rounded-xl bg-primary/20 hover:bg-foreground/10 transition-colors group"
                href="https://www.linkedin.com/in/jason-strife-1b6843208"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-primary group-hover:text-foreground transition-colors" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                className="p-3 rounded-xl bg-primary/20 hover:bg-foreground/10 transition-colors group"
                href="https://app.joinhandshake.com/profiles/ymmzt2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Handshake className="h-6 w-6 text-primary group-hover:text-foreground transition-colors" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                className="p-3 rounded-xl bg-primary/20 hover:bg-foreground/10 transition-colors group"
                href="https://github.com/strifeja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-primary group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
