import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { VotingLocationSection } from '../components/VotingLocationSection';
import { AboutCamara } from '../components/AboutCamara';
import { ListaCerrada } from '../components/ListaCerrada';
import { Candidates } from '../components/Candidates';
import { Reasons } from '../components/Reasons';
import { VolunteerSection } from '../components/VolunteerSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { BlogSection } from '../components/BlogSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead />
      <Navigation />
      <Hero />
      <VotingLocationSection />
      <AboutCamara />
      <ListaCerrada />
      <Candidates />
      <Reasons />
      <VolunteerSection />
      <ResourcesSection />
      <BlogSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}