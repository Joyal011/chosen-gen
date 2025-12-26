import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import communityImage from "@/assets/footer-bg.jpg";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${communityImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/50 to-accent/70" />
      </div>

      {/* Decorative light rays - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-xl" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-white/15 via-white/3 to-transparent blur-xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-up drop-shadow-lg rounded-xl sm:rounded-2xl bg-secondary/30 backdrop-blur-md p-4 sm:p-6 md:p-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium">Join the Movement</span>
          </div>
          
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            Become Part of Our Community
          </h2>
          <p className="text-sm sm:text-lg md:text-2xl mb-3 sm:mb-4 md:mb-6 text-white/95 max-w-2xl mx-auto leading-relaxed">
            You're invited to be part of something extraordinary
          </p>
          <p className="text-xs sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 text-white/90 max-w-2xl mx-auto italic font-serif">
            "For where two or three gather in my name, there am I with them." — Matthew 18:20
          </p>
          
          {/* Buttons - stacked on mobile */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-6 font-bold shadow-elevated w-full sm:w-auto"
              onClick={() => navigate("/events")}
            >
              View Events
            </Button>
            <Button
              size="lg"
              className="text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-6 font-bold bg-white text-secondary hover:bg-white/90 shadow-elevated w-full sm:w-auto"
              onClick={() => navigate("/contact")}
            >
              Connect With Us
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements - hidden on mobile */}
      <div className="absolute top-10 left-10 w-24 h-24 border-4 border-white/15 rounded-full animate-pulse hidden sm:block" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/15 rounded-full animate-pulse hidden sm:block" />
    </section>
  );
};

export default CallToAction;
