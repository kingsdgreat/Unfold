import FAQSection from "@/components/FAQ";
import KeyFeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import SyncWearablesSection from "@/components/SyncWearables";
import TransformSection from "@/components/Transform";
import WaitlistSection from "@/components/Waitlist";
import WellnessJourneySection from "@/components/WellnessJourneySection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <KeyFeaturesSection />
      <TransformSection />
      <WellnessJourneySection />
      <SyncWearablesSection />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
