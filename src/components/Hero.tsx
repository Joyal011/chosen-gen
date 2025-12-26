import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/chosen-generation-hero.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/70 to-accent/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
      </div>

      {/* Decorative Light Rays - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-primary/40 via-primary/10 to-transparent blur-xl" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/5 to-transparent blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 text-center">
        <div className="opacity-0 animate-[fadeIn_1.2s_ease-out_forwards] space-y-4 sm:space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-medium">Youth Ministry & Fellowship</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight">
            Chosen to Shine,<br className="sm:hidden" /> Called to Lead
          </h1>
          
          <p className="text-base sm:text-xl md:text-3xl lg:text-4xl text-white max-w-4xl mx-auto font-light drop-shadow-lg leading-snug">
            Empowering Christian Youth to Live with Purpose
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md leading-relaxed animate-appear opacity-0 delay-100 line-clamp-3 sm:line-clamp-none">
            Join our vibrant community of young believers growing in faith and making a difference together.
          </p>
          
          {/* Buttons - Stacked on mobile, side by side on desktop */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto animate-appear opacity-0 delay-300 pt-2 sm:pt-4">
            <Button
              size="lg"
              className="text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 font-bold shadow-glow bg-primary text-primary-foreground hover:shadow-[0_0_60px_hsl(45_95%_55%/0.6)] w-full sm:w-auto"
              onClick={() => navigate("/contact")}
            >
              Join Our Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 font-bold bg-white/15 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/25 hover:border-white/60 shadow-divine w-full sm:w-auto"
              onClick={() => navigate("/about")}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile for space */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <div className="w-1 h-2.5 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Decorative Elements - Smaller on mobile */}
      <div className="absolute top-20 left-4 sm:left-12 w-16 sm:w-32 h-16 sm:h-32 border-2 sm:border-4 border-primary/15 rounded-full animate-pulse blur-sm hidden sm:block" />
      <div className="absolute bottom-32 right-8 sm:right-24 w-12 sm:w-20 h-12 sm:h-20 border-2 sm:border-4 border-primary/15 rounded-full animate-pulse blur-sm hidden sm:block" />
    </section>
  );
};

export default Hero;
