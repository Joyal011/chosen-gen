import { Users, Calendar, Heart, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Active Youth",
      color: "from-primary to-secondary"
    },
    {
      icon: Calendar,
      value: "50+",
      label: "Events/Year",
      color: "from-secondary to-accent"
    },
    {
      icon: Heart,
      value: "10+",
      label: "Years",
      color: "from-accent to-primary"
    },
    {
      icon: Award,
      value: "6",
      label: "Core Team",
      color: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-10 md:mb-12 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Impact</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a community that transforms lives through faith
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-3 sm:p-4 md:p-6 text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
