import React from 'react';

const NewsletterSection = () => {
  const styles = {
    newsletterSection: "h-full w-full overflow-hidden section-with-top-shape object-cover section-with-bottom-shape mt-16 md:mt-20 lg:mt-24",
    container: "py-32 md:py-36 lg:py-40 px-6 md:px-12 flex flex-col items-center justify-center text-(--background) bg-(--dark)/85 body-text text-center",
    heroHeading: "font-bold text-5xl md:text-6xl text-(--accent) uppercase heading mb-4 md:mb-6",
    heroSubHeading: "font-semibold text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4",
    heroDescription: "text-lg font-medium mb-6 md:mb-8",

    newsletterForm: "w-full md:w-2/3 lg:w-1/3 flex",
    formEmail: "bg-(--background) text-(--dark) px-4 py-3 font-medium w-full outline-none",
    submitBtn: "bg-(--primary) text-(--dark) font-semibold hover:font-bold hover:bg-(--secondary) px-4 py-3",
  }
  return (
    <section
      className={styles.newsletterSection}
      style={{ backgroundImage: "url('/images/coffee-beans-full.jpg')" }}
    >
      <div className={styles.container}>
        <h1 className={styles.heroHeading}>50% OFF</h1>
        <h3 className={styles.heroSubHeading}>Sunday Special Offer</h3>
        <h5 className={styles.heroDescription}>Only for Sunday from 1st Aug to 31st Aug 2026</h5>

        <form className={styles.newsletterForm}>
          <input 
            type="email" 
            name="newsletter-email" 
            id="newsletter-email" 
            className={styles.formEmail}
            placeholder='Your Email'
          />
          <input type="submit" value="Submit" className={styles.submitBtn} />
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;