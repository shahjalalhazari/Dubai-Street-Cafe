import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import ReservationSection from './ReservationSection';
import ServicesSection from './ServicesSection';

const HomePage = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReservationSection />
    </main>
  );
};

export default HomePage;