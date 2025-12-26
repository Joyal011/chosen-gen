import { MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 border-t border-border py-8 sm:py-10 md:py-14">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8">
          {/* Church Info */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Chosen Generation</h3>
            <p className="text-xs sm:text-sm md:text-base text-foreground/80 mb-2 sm:mb-3 leading-relaxed">
              A vibrant youth ministry empowering the next generation through faith, unity, and fellowship.
            </p>
            <p className="text-xs sm:text-sm text-foreground/70 italic">
              "Let no one despise you for your youth..." - 1 Timothy 4:12
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">Contact</h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm md:text-base text-foreground/80">M867+FR4, Lalitpur 44700</span>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">Connect</h4>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100090456807762"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/chosengeneration.nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <p className="text-foreground/80 mt-3 sm:mt-4 text-xs sm:text-sm">
              Follow us for updates and community news.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-4 sm:pt-6 text-center">
          <p className="text-foreground/70 text-xs sm:text-sm mb-1">
            © {new Date().getFullYear()} Chosen Generation. All rights reserved.
          </p>
          <p className="text-foreground/60 text-xs italic">
            "The Lord bless you and keep you." – Numbers 6:24-25
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
