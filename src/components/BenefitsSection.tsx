import AnimatedBackground from "./AnimatedBackground";
import { CalendarCheck, Clock, MessageCircle, Bell } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Instant Patient Replies",
    description:
      "Answers FAQs, clinic hours, directions, and services the moment a patient messages. No waiting, no missed enquiries.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking via Chat",
    description:
      "Patients book, reschedule, or cancel directly through WhatsApp. No forms, no phone queues.",
  },
  {
    icon: Clock,
    title: "Always Online, 24/7",
    description:
      "Your AI receptionist never sleeps. Patients get responses at midnight just as fast as during clinic hours.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Automatic appointment reminders sent via WhatsApp, reducing no-shows without any manual follow-up.",
  },
];

const chatMessages = [
  { from: "patient", text: "Hi, I'd like to book an appointment", time: "10:42 AM" },
  {
    from: "bot",
    text: "Hi! I'm the virtual assistant for Klinik Sejahtera. When would you like to come in?",
    time: "10:42 AM",
  },
  { from: "patient", text: "Tomorrow at 2pm?", time: "10:43 AM" },
  {
    from: "bot",
    text: "You're confirmed for tomorrow at 2:00 PM. A reminder will be sent 1 hour before.",
    time: "10:43 AM",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative section-spacing bg-background overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto container-padding relative z-10">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-title font-bold text-foreground mb-4 leading-tight">
            Your clinic's AI receptionist,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              on WhatsApp
            </span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">

          {/* Left: clean feature list */}
          <div className="divide-y divide-border">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-1.5">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center">
            <div
              className="w-[260px] rounded-[36px] overflow-hidden"
              style={{
                background: "#111b21",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 0 0 6px rgba(255,255,255,0.03), 0 32px 64px rgba(0,0,0,0.6), 0 0 48px rgba(3,243,142,0.06)",
              }}
            >
              {/* Status bar */}
              <div className="px-6 pt-3.5 pb-1 flex justify-between items-center bg-[#111b21]">
                <span className="text-white text-[11px] font-semibold">9:41</span>
                <div className="flex items-center gap-1.5">
                  {/* Signal bars */}
                  <div className="flex gap-[2px] items-end h-2.5">
                    {[1, 1.5, 2, 2.5].map((h, i) => (
                      <div
                        key={i}
                        className="w-[3px] bg-white rounded-sm"
                        style={{ height: `${h * 4}px` }}
                      />
                    ))}
                  </div>
                  {/* Battery */}
                  <div className="flex items-center gap-0.5">
                    <div className="w-5 h-2.5 rounded-[3px] border border-white/50 relative p-[1.5px]">
                      <div className="h-full w-3/4 bg-white rounded-[1px]" />
                    </div>
                    <div className="w-[2px] h-[5px] bg-white/40 rounded-r-sm" />
                  </div>
                </div>
              </div>

              {/* WhatsApp header */}
              <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className="w-7 h-7 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-[10px] font-bold">K</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[12px] font-semibold leading-none">Klinik Sejahtera</p>
                  <p className="text-[#4fce5d] text-[10px] mt-0.5">online</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6" />
                </svg>
              </div>

              {/* Chat area */}
              <div className="bg-[#0b1418] px-3 py-4 space-y-2" style={{ minHeight: 280 }}>
                <div className="flex justify-center mb-3">
                  <span className="text-[10px] text-gray-500 bg-[#1f2c34]/60 px-3 py-1 rounded-full">Today</span>
                </div>
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "patient" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] px-2.5 py-1.5 rounded-xl text-[11.5px] leading-relaxed ${
                        msg.from === "patient"
                          ? "bg-[#005c4b] text-white rounded-br-sm"
                          : "bg-[#1f2c34] text-gray-100 rounded-bl-sm"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-0.5">
                        <span className="text-[9px] text-white/35">{msg.time}</span>
                        {msg.from === "patient" && (
                          <svg className="w-3 h-2 text-[#53bdeb]" fill="currentColor" viewBox="0 0 16 11">
                            <path d="M11.071.653a.75.75 0 010 1.06L5.303 7.48a.75.75 0 01-1.06 0L1.679 4.914a.75.75 0 111.06-1.06l2.034 2.032 5.238-5.233a.75.75 0 011.06 0zm2.56 0a.75.75 0 010 1.06L7.862 7.48a.75.75 0 01-1.06 0 .75.75 0 010-1.06l5.769-5.767a.75.75 0 011.06 0z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input bar */}
              <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center gap-2">
                <div className="flex-1 bg-[#2a3942] rounded-full px-3.5 py-1.5 text-gray-500 text-[11px]">
                  Message
                </div>
                <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
