import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      try {
        await emailjs.send(
          "service_xmj1h5f",
          "template_5v1n4ib",
          {
            to_email: email,
            from_name: "Chosen Generation",
            message: "Thank you for subscribing to our newsletter!",
          },
          "kZVDVKLdYvKslPL5b"
        );
        
        setIsSubmitted(true);
        toast({
          title: "Thanks for subscribing! 🎉",
          description: "You'll receive updates about our events and activities.",
        });
        setTimeout(() => {
          setEmail("");
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error("Newsletter subscription error:", error);
        toast({
          title: "Subscription failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-primary to-secondary mb-3 sm:mb-4 md:mb-6 animate-glow">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connected</span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive updates about events and opportunities to grow in faith
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="animate-fade-up">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 sm:h-12 md:h-14 text-sm sm:text-base px-4 bg-background/80 backdrop-blur-sm border-2 border-primary/20 focus:border-primary"
                  required
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 font-semibold whitespace-nowrap text-sm sm:text-base"
                  disabled={isLoading}
                >
                  {isLoading ? "..." : "Subscribe"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 sm:mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="animate-fade-up flex flex-col items-center justify-center py-4 sm:py-6">
              <CheckCircle2 className="w-10 h-10 sm:w-14 sm:h-14 text-primary mb-2 sm:mb-3 animate-pulse" />
              <p className="text-lg sm:text-xl font-semibold text-foreground">Thank you for subscribing!</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Check your email for confirmation.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
