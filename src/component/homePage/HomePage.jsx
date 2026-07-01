import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import ReservationSection from './ReservationSection';
import ServicesSection from './ServicesSection';
import TestimonialSection from './TestimonialSection';

const HomePage = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReservationSection />
      <TestimonialSection />
    </main>
  );
};

export default HomePage;