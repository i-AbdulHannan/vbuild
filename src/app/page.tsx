import Hero3D from '@/components/sections/home/Hero3D';
import MarqueeStrip from '@/components/sections/home/MarqueeStrip';
import ServicesOverview from '@/components/sections/home/ServicesOverview';
import StatsStrip from '@/components/sections/home/StatsStrip';
import FeaturedWork from '@/components/sections/home/FeaturedWork';
import ProcessSection from '@/components/sections/home/ProcessSection';
import FinalCTA from '@/components/sections/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero3D />
      <MarqueeStrip />
      <ServicesOverview />
      <StatsStrip />
      <FeaturedWork />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
