import { useState } from "react";
import { Calculator, TrendingUp, DollarSign, Users, Clock } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const ROICalculatorSection = () => {
  const [receptionistSalary, setReceptionistSalary] = useState(0);
  const [aiPlan, setAiPlan] = useState<'starter' | 'pro'>('starter');
  const [workingHours, setWorkingHours] = useState(0);
  const [workingDays, setWorkingDays] = useState(0);

  // AI Plan pricing
  const aiPricing = {
    starter: 399,
    pro: 699
  };

  // Calculate costs
  const monthlyReceptionistCost = receptionistSalary;
  const monthlyAiCost = aiPricing[aiPlan];
  const monthlySavings = monthlyReceptionistCost - monthlyAiCost;
  const annualSavings = monthlySavings * 12;
  const roiPercentage = ((annualSavings / (monthlyAiCost * 12)) * 100).toFixed(0);

  return (
    <section id="roi" className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ROI <span className="bg-gradient-primary bg-clip-text text-transparent">Calculator</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how much you can save by switching to our AI receptionist solution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Simple Input Section */}
          <div className="bg-card rounded-3xl border border-border p-8 mb-8 animate-fade-up">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Current Cost Input */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Your Monthly Staff Cost</h3>
                <div className="relative mb-4">
                  <input
                    type="number"
                    value={receptionistSalary || ''}
                    onChange={(e) => setReceptionistSalary(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all pr-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="Insert here"
                    min="0"
                    step="100"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    RM
                  </div>
                </div>
                
                {/* Quick Presets */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setReceptionistSalary(1200)}
                    className="px-3 py-2 text-sm border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    RM 1,200
                  </button>
                  <button
                    onClick={() => setReceptionistSalary(1700)}
                    className="px-3 py-2 text-sm border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    RM 1,700
                  </button>
                  <button
                    onClick={() => setReceptionistSalary(2500)}
                    className="px-3 py-2 text-sm border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    RM 2,500
                  </button>
                  <button
                    onClick={() => setReceptionistSalary(3500)}
                    className="px-3 py-2 text-sm border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    RM 3,500
                  </button>
                </div>
              </div>

              {/* AI Plan Selection */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Choose AI Plan</h3>
                <div className="space-y-3">
                  <div 
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      aiPlan === 'starter' 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border hover:border-primary/30'
                    }`}
                    onClick={() => setAiPlan('starter')}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">AI Starter</h4>
                        <p className="text-sm text-muted-foreground">WhatsApp AI</p>
                      </div>
                      <div className="text-xl font-bold text-primary">RM {aiPricing.starter}</div>
                    </div>
                  </div>

                  <div 
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      aiPlan === 'pro' 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border hover:border-primary/30'
                    }`}
                    onClick={() => setAiPlan('pro')}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">AI Pro</h4>
                        <p className="text-sm text-muted-foreground">WhatsApp + Voice</p>
                      </div>
                      <div className="text-xl font-bold text-primary">RM {aiPricing.pro}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Results */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border-2 border-primary p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">Your Savings</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">RM {monthlySavings.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Monthly Savings</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">RM {annualSavings.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Annual Savings</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">{roiPercentage}%</div>
                  <div className="text-sm text-muted-foreground">ROI First Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;
