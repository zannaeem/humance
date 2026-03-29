import AnimatedBackground from "./AnimatedBackground";

const WaitlistSection = () => {
  return (
    <section id="waitlist-form" className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">

          <div className="mb-10">
            <h2 className="text-title leading-tight mb-4">
              Get{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Early Access
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Be among the first clinics in Malaysia to automate your front desk with AI.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-large">
            <iframe
              className="airtable-embed w-full"
              src="https://airtable.com/embed/appiPJtESlHu3bUJQ/pagzFYhbqWhDGiKCc/form"
              frameBorder={0}
              height={533}
              style={{ background: "transparent" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
