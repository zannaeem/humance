import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container mx-auto container-padding py-16">
        
        {/* Footer Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">HUMANCE</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming healthcare operations with AI-powered solutions. 
              We help clinics save time, reduce costs, and improve patient care.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-xl font-semibold transition-all duration-300"
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Humance. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default FinalCTASection;
