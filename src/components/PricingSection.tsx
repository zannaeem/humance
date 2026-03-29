import { CheckCircle, Star, Bot, Globe } from "lucide-react";
import { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

const PricingSection = () => {
  const [selectedService, setSelectedService] = useState("website");
  return (
    <section id="pricing" className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Simple, Transparent{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Choose the perfect service for your clinic's needs
          </p>
          
          {/* Service Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-2 flex">
              <button
                onClick={() => setSelectedService("website")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedService === "website"
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe className="w-5 h-5" />
                Website Only
              </button>
              <button
                onClick={() => setSelectedService("ai")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedService === "ai"
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Bot className="w-5 h-5" />
                AI Receptionist
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto">
          {selectedService === "website" ? (
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Website Basic Plan */}
              <div className="bg-card rounded-3xl border border-border p-8 animate-fade-up hover:border-primary/30 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto flex items-center justify-center mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">STARTER</h3>
                  <div className="text-4xl font-bold text-primary mb-2">RM 1,333/month</div>
                  <div className="text-green-600 text-sm mb-2">for x 3 Months or RM4,000</div>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm font-medium mb-2">
                    then RM999/Year
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Complete Online Branding Solution
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Perfect for new clinics looking to start building an online presence. 
                    Showcase your services and help patients find you easily with our 
                    comprehensive website solution.
                  </p>
                </div>
                
                <button 
                  className="w-full py-3 px-6 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all duration-300"
                  onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  14-Day Free Trial
                </button>
              </div>

              {/* Website Premium Plan */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border-2 border-primary p-8 animate-fade-up relative hover:border-primary/60 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    POPULAR
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary rounded-xl mx-auto flex items-center justify-center mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">PROFESSIONAL</h3>
                  <div className="text-4xl font-bold text-primary mb-2">RM 1,500/month</div>
                  <div className="text-green-600 text-sm mb-2">for x 4 Months or RM6,000</div>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm font-medium mb-2">
                    then RM1,499/Year
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Advanced SEO & Digital Marketing Solution
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Tailored for expanding clinics focused on long-term profitability and visibility. 
                    Dominate Google search results when patients search "clinic near me" with our 
                    advanced SEO optimization and marketing strategies.
                  </p>
                </div>
                
                <button 
                  className="w-full py-3 px-6 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all duration-300"
                  onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  14-Day Free Trial
                </button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* AI Starter Plan */}
              <div className="bg-card rounded-3xl border border-border p-8 animate-fade-up hover:border-primary/30 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">AI Starter</h3>
                  <div className="text-4xl font-bold text-primary mb-2">RM399</div>
                  <div className="text-muted-foreground">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">WhatsApp AI receptionist</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Appointment booking via WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Patient inquiries handling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">24/7 availability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Email support</span>
                  </li>
                </ul>
                
                <button 
                  className="w-full py-3 px-6 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all duration-300"
                  onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  14-Day Free Trial
                </button>
              </div>

              {/* AI Pro Plan */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border-2 border-primary p-8 animate-fade-up relative hover:border-primary/60 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary rounded-xl mx-auto flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">AI Pro</h3>
                  <div className="text-4xl font-bold text-primary mb-2">RM699</div>
                  <div className="text-muted-foreground">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">24/7 AI receptionist</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">AI voice agent for phone calls</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Voice appointment booking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">WhatsApp integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Patient inquiries handling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Priority phone support</span>
                  </li>
                </ul>
                
                <button 
                  className="w-full py-3 px-6 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all duration-300"
                  onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  14-Day Free Trial
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            All plans include setup, training, and ongoing support
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PricingSection;