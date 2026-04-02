import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";

const problems = [
  {
    number: "1",
    title: "After hour messages",
    description:
      "WhatsApp enquiries come in at 11pm. Your staff are offline. Patients get no reply and book somewhere else.",
  },
  {
    number: "2",
    title: "Scheduling hassle",
    description:
      "Scheduling one appointment takes 5 messages and 10 minutes of your team's time. Multiply that by every patient, every day.",
  },
  {
    number: "3",
    title: "No-shows",
    description:
      "Patients forget their appointments. Nobody follows up. Your clinic loses time and revenue with empty slots.",
  },
];

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          const sectionMiddle = rect.top + rect.height / 2;
          const viewportMiddle = window.innerHeight / 2;
          setCurrentTextIndex(sectionMiddle < viewportMiddle ? 1 : 0);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Clinics... we heard and <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              understand you
            </span>
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.number}
              className={`flex flex-col gap-4 p-7 rounded-2xl border border-gray-200 bg-white hover:border-red-300 hover:shadow-lg transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-red-500 leading-none select-none">
                  {problem.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
                  {problem.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll transition text */}
        <div className="mt-16">
          <div ref={textRef} className="h-[55vh] flex items-center justify-center text-center px-6">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto animate-text-rotate">
              {currentTextIndex === 0 ? (
                <>
                  These are the{" "}
                  <span className="text-red-500">realities</span>
                  {" "}of today's clinics.
                </>
              ) : (
                <>
                  escape it with our{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    solution.
                  </span>
                </>
              )}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
