"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from '../shared/SectionHeading';
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

const TestimonialSection = () => {
  const styles = {
    testimonialContainer: "mt-10 md:mt-14 lg:mt-20",
    testimonialCard: "space-y-4",
    customerInfo: "flex items-center gap-4",
    customerImg: "h-20 w-20 object-cover",
    customerName: "text-2xl font-bold text-(--dark) heading",
    customerProfession: "italic text-(--accent) body-text",
    customerReview: "body-text text-(--body)",
  }
  return (
    <section className='section-container'>
      {/* SECTION HEADING */}
      <SectionHeading
        title={"Our Customers Say"}
        subtitle={"Testimonials"}
      />

      {/* CONTENT */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        className={styles.testimonialContainer}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className={styles.testimonialCard}>
              <div className={styles.customerInfo}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={90}
                  height={90}
                  className={styles.customerImg}
                />

                <div>
                  <h3 className={styles.customerName}>
                    {testimonial.name}
                  </h3>

                  <p className={styles.customerProfession}>
                    {testimonial.profession}
                  </p>
                </div>
              </div>

              <p className={styles.customerReview}>
                {testimonial.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;