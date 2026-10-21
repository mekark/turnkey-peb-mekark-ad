import Cta from "./components/Cta";
import CompletedProjects from "./components/CompletedProjects";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
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
      <Faq />
      <Cta />
    </main>
  );
}
