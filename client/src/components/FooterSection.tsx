import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function FooterSection() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup');
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Summit Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CF</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">CLIMAFIX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              India's Largest Climate Startup Innovation Summit
            </p>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="outline" 
                className="w-9 h-9"
                onClick={() => console.log('LinkedIn clicked')}
                data-testid="social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="w-9 h-9"
                onClick={() => console.log('Twitter clicked')}
                data-testid="social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="w-9 h-9"
                onClick={() => console.log('Facebook clicked')}
                data-testid="social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Summit 2025", "Agenda", "Speakers", "Past Summits", "Partners"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Clicked ${link}`);
                    }}
                    data-testid={`footer-link-${link.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>80157 25600</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>ask@climafix.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>IIT Madras Research Park, Chennai</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="w-full"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                data-testid="button-newsletter-submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 CLIMAFIX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a 
              href="#" 
              className="hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                console.log('Privacy clicked');
              }}
              data-testid="footer-privacy"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                console.log('Terms clicked');
              }}
              data-testid="footer-terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
