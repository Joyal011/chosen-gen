import { Card } from "@/components/ui/card";
import { Book, Sparkles } from "lucide-react";

const ScriptureHighlight = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Floating decorative elements - hidden on mobile */}
      <div className="absolute top-10 left-10 w-20 h-20 border-4 border-primary/10 rounded-full animate-float hidden md:block" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-accent/10 rounded-full animate-float hidden md:block" />
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-10 md:mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Foundation of Faith</span>
            </div>
          </div>

          <Card className="p-6 sm:p-10 md:p-16 shadow-glow border border-primary/20 sm:border-2 animate-fade-up bg-gradient-to-br from-card via-background to-card relative overflow-hidden hover:shadow-divine transition-all duration-500">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-xl hidden sm:block" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center animate-glow">
                  <Book className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              
              <blockquote className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 leading-relaxed text-foreground">
                "I will give them a heart to know me, that I am the Lord. They will be my people, and I will be their God."
              </blockquote>
              
              <p className="text-sm sm:text-base md:text-xl text-center text-muted-foreground font-semibold">
                — Jeremiah 24:7
              </p>
            </div>

            {/* Decorative corners - smaller on mobile */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-primary/40 rounded-tl-xl sm:rounded-tl-2xl" />
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-secondary/40 rounded-tr-xl sm:rounded-tr-2xl" />
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-accent/40 rounded-bl-xl sm:rounded-bl-2xl" />
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-primary/40 rounded-br-xl sm:rounded-br-2xl" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScriptureHighlight;
