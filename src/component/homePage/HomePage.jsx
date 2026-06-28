import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';

const HomePage = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
};

export default HomePage;