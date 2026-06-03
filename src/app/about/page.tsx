import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/home/AboutSection";
import WhyWorkWithUs from "@/components/about/WhyWorkWithUs";
import MissionValuesSection from "@/components/home/MissionValuesSection";
import Milestones from "@/components/about/Milestones";
import PointsOfPresence from "@/components/about/PointsOfPresence";
import BoardOfDirectors from "@/components/about/BoardOfDirectors";
import CeoMessage from "@/components/about/CeoMessage";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import CertificationsAwards from "@/components/about/CertificationsAwards";
import CtaSection from "@/components/home/CtaSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutSection />
      <WhyWorkWithUs />
      <div id="mission">
        <MissionValuesSection />
      </div>
      <Milestones />
      <PointsOfPresence />
      <BoardOfDirectors />
      <CeoMessage />
      <LeadershipTeam />
      <CertificationsAwards />
      <CtaSection />
    </>
  );
}
