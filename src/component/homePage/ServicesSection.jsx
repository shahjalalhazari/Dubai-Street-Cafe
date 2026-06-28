import { FaBreadSlice, FaCoffee, FaWifi } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading';
import { PiOfficeChairFill } from 'react-icons/pi';
import Image from 'next/image';

const serviceItems = [
  {
    id: 1,
    image: "/images/services/services-1.jpg",
    icon: <FaCoffee />,
    title: "Specialty Coffee Brewing",
    description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
  },
  {
    id: 2,
    image: "/images/services/services-2.jpg",
    icon: <PiOfficeChairFill />,
    title: "Cozy Workspace Seating",
    description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
  },
  {
    id: 3,
    image: "/images/services/services-3.jpg",
    icon: <FaWifi />,
    title: "Free High-Speed WiFi",
    description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
  },
  {
    id: 4,
    image: "/images/services/services-4.jpg",
    icon: <FaBreadSlice />,
    title: "Fresh Bakery Items",
    description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
  },
]

const ServicesSection = () => {
  const styles = {
    servicesContent: "grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2 items-center justify-center mt-10 md:mt-14 lg:mt-20",
    serviceCard: "space-y-4 md:flex gap-4 items-center",
    cardImg: "w-100 h-100 lg:w-70 lg:h-70",
    cardContent: "flex flex-col gap-2 md:gap-4",
    cardHeading: "flex gap-2 md:gap-3 items-center  text-xl md:text-2xl",
    cardIcon:"bg-(--accent) p-2.5 md:p-3 rounded-full text-(--dark)",
    cardTitle: "font-semibold text-(--dark) heading",
    cardBody: "text-(--body) body-text",
  }

  return (
    <section className='section-container'>
      <SectionHeading 
        title={"Fresh & Organic Beans"}
        subtitle={"Why People Love Us"}
      />

      {/* CONTENT */}
      <div className={styles.servicesContent}>
        {serviceItems.map((item) => (
          <div className={styles.serviceCard} key={item.id}>
            {/* IMAGE */}
            <Image src={item.image} alt={item.title} width={100} height={100} className={`w-full h-full object-cover object-center ${styles.cardImg}`} />

            <div className={styles.cardContent}>
              {/* ICON & TITLE */}
              <div className={styles.cardHeading}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <h1 className={styles.cardTitle}>{item.title}</h1>
              </div>

              {/* DESCRIPTION */}
              <p className={styles.cardBody}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;