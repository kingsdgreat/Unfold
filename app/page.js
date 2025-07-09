import FAQSection from "@/components/FAQ";
import KeyFeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import SyncWearablesSection from "@/components/SyncWearables";
import TestimonialsSection from "@/components/Testimonials";
import TransformSection from "@/components/Transform";
import WaitlistSection from "@/components/Waitlist";
import WellnessJourneySection from "@/components/WellnessJourneySection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <section id="hero">
        <HeroSection />
      </section>
        <KeyFeaturesSection />
        <TransformSection />
      <section id="wellness">
        <WellnessJourneySection />
      </section>
      <section id="sync">
        <SyncWearablesSection />
      </section>
      <TestimonialsSection/>
      <section id="waitlist">
        <WaitlistSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </main>
  );
}
