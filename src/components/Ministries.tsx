import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, BookOpen, Users, HeartHandshake, Sparkles, Mountain } from "lucide-react";

const Ministries = () => {
  const ministries = [
    {
      icon: Music,
      title: "Worship & Music",
      description: "Experience powerful worship through contemporary music and traditional hymns.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      description: "Dive deep into Scripture through interactive studies that equip youth.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Build authentic friendships where youth can share, pray, and grow.",
      gradient: "from-accent to-primary"
    },
    {
      icon: HeartHandshake,
      title: "Outreach",
      description: "Serve the community through compassion projects demonstrating Christ's love.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Sparkles,
      title: "Youth Events",
      description: "Join exciting events, camps, and conferences to strengthen faith.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Mountain,
      title: "Leadership",
      description: "Discover and develop your God-given gifts through training and mentorship.",
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Floating background - hidden on mobile */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float hidden md:block" />
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float hidden md:block" />
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium">Our Ministries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">We Do</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how we nurture faith, build community, and empower youth
          </p>
        </div>

        {/* Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {ministries.map((ministry, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-up overflow-hidden border border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="p-4 sm:p-5 md:p-6 pb-2 sm:pb-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r ${ministry.gradient} flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-105 transition-transform`}>
                  <ministry.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl">{ministry.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 md:p-6 pt-0">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {ministry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
