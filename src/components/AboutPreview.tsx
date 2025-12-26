import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Target, Eye, Heart, Sparkles } from "lucide-react";

const AboutPreview = () => {
  const navigate = useNavigate();
  
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Empowering youth to live bold, faith-filled lives rooted in God's love.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "Building a generation that transforms communities through authentic faith.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Faith, unity, authenticity, and compassion guide everything we do.",
      gradient: "from-accent to-primary"
    }
  ];
  
  return (
    <section id="about" className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative background - hidden on mobile */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float hidden md:block" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float hidden md:block" />
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header - compact on mobile */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">Who We Are</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Us</span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed line-clamp-3 sm:line-clamp-none">
              A vibrant community where young people encounter God and discover their divine purpose
            </p>
          </div>

          {/* Cards - Stack on mobile, grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group p-4 sm:p-6 md:p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-up border border-border/50 hover:border-primary/20 bg-gradient-to-br from-card to-muted/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-105 transition-transform`}>
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-up">
            <Button
              size="lg"
              onClick={() => navigate("/about")}
              className="font-semibold group text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6"
            >
              Discover Our Story
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
