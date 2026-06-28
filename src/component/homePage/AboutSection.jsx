import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const AboutSection = () => {
  const styles = {
    aboutUsContent: "grid grid-cols-1 lg:grid-cols-3 items-center justify-center mt-10 md:mt-14 lg:mt-20",
    contentSection: "flex flex-col gap-y-3 lg:gap-y-4 z-10",
    conentHeading: "text-2xl md:text-3xl lg:text-4xl text-(--dark) font-bold heading",
    conentSubHeading: "text-lg md:text-xl text-(--dark) font-medium body-text",
    contentBody: "text-(--body) body-text",
    checkListItem: "flex gap-1.5 items-center text-(--primary) text-lg body-text",
    coffeeImg: "z-0 md:w-100 lg:w-200 mx-auto",
  }
  return (
    <section className='section-container'>
      <SectionHeading 
        title={"Serving Since 2010"}
        subtitle={"About Us"}
      />

      {/* CONTENT */}
      <div className={styles.aboutUsContent}>
        <div className={styles.contentSection}>
            <h1 className={styles.conentHeading}>Our Story</h1>

            <h5 className={styles.conentSubHeading}>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vdolor sea</h5>

            <p className={styles.contentBody}>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed doeos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Eratest justo sit ut. Labor diam sed ipsum et eirmod</p>

        </div>
        <div className="">
          <Image
            src="/images/coffee-mug.png"
            alt="Coffee Mug"
            width={400}
            height={400}
            className={`${styles.coffeeImg} w-full h-auto object-cover`}
          />
        </div>
        <div className={styles.contentSection}>
            <h1 className={styles.conentHeading}>Our Vision</h1>

            <p className={styles.contentBody}>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam ipsum est dolor</p>

            <h5 className={styles.checkListItem}>
              <FaCheck /> Lorem ipsum dolor sit amet
            </h5>
            <h5 className={styles.checkListItem}>
              <FaCheck /> Lorem ipsum dolor sit amet
            </h5>
            <h5 className={styles.checkListItem}>
              <FaCheck /> Lorem ipsum dolor sit amet
            </h5>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;