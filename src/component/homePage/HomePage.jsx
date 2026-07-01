import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import NewsletterSection from './NewsletterSection';
import ReservationSection from './ReservationSection';
import ServicesSection from './ServicesSection';
import TestimonialSection from './TestimonialSection';

const HomePage = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <AboutSection />
      <ReservationSection />
      <ServicesSection />
      <NewsletterSection />
      <TestimonialSection />
    </main>
  );
};

export default HomePage;