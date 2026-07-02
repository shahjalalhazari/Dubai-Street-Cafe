import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import MenuSection from './MenuSection';
import NewsletterSection from './NewsletterSection';
import ReservationSection from './ReservationSection';
import ServicesSection from './ServicesSection';
import TestimonialSection from './TestimonialSection';

const HomePage = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ReservationSection />
      <ServicesSection />
      <NewsletterSection />
      <TestimonialSection />
    </main>
  );
};

export default HomePage;