import Features from "@/src/components/Features/Features";
import Feedback from "@/src/components/Feedback/Feedback";
import ServicesSection from "@/src/components/ServisesSection/ServisesSection";
import ServicesHero from "@/src/components/ServisesSection/ServisesHero";

export default function ServicePage() {
  return (
    <div>
      <ServicesHero></ServicesHero>
      <ServicesSection></ServicesSection>
      <Features></Features>
      <Feedback></Feedback>
    </div>
  );
}
