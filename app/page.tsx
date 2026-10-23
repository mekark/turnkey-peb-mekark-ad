import Cta from "./components/Cta";
import CompletedProjects from "./components/CompletedProjects";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import ManufacturingCapabilities from "./components/ManufacturingCapabilities";
import ProjectApproach from "./components/ProjectApproach";
import OngoingProjects from "./components/OngoingProjects";
import WhyMekark from "./components/WhyMekark";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectApproach />
      <WhyMekark />
      <OngoingProjects />
      <CompletedProjects />
      <ManufacturingCapabilities />
      <Faq />
      <Cta />
    </main>
  );
}
