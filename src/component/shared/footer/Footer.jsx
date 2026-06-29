import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  // STYLE CLASSES
  const styles = {
    footer: "section-with-top-shape bg-(--dark) text-(--background) body-text mt-16 md:mt-20 lg:mt-24",

    topPart: "grid md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-10 lg:px-14 pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10 lg:pb-12",
    footerColumn: "space-y-6",
    footerContent: "space-y-4",

    heading: "font-bold leading-tight heading text-xl uppercase",
    contactInfo: "flex gap-2 items-center",

    socialMedia: "flex gap-4 text-xl",
    smIcon: "p-3 border border-(--background) transition-all duration-700 ease-in-out hover:bg-(--background) hover:text-(--dark)",

    newsletterForm: "w-full flex",
    formEmail: "bg-(--background) text-(--dark) px-4 py-3 font-medium w-full outline-none",
    submitBtn: "bg-(--primary) text-(--dark) font-semibold hover:font-bold px-4 py-3",

    bottomPart: "border-t border-(--background)/20 px-6 py-8 text-sm text-center space-y-3",
  };
  return (
    <footer className={styles.footer}>

      {/* TOP PART */}
      <div className={styles.topPart}>

        {/* COLUMN - 1; CONTACT INFO */}
        <div className={styles.footerColumn}>
          {/* HEADING */}
          <h3 className={styles.heading}>Get In Touch</h3>

          {/* CONTENT */}
          <div className={styles.footerContent}>
            {/* ADDRESS */}
            <div className={styles.contactInfo}>
              <FaLocationDot className="text-lg" /> 
              <p>233/26, Ewrat Holding Inc. Al Qouz 3 <br /> Al Quoz, Dubai - UAE.</p>
            </div>

            {/* PHONE NUMBER */}
            <div className={styles.contactInfo}> 
              <FaPhoneAlt className="text-lg" />
              <p className='flex flex-col gap-1'>
                +971 50 000 0000<br/> +971 50 000 0000
              </p>
            </div>

            {/* EMAIL */}
            <div className={styles.contactInfo}> 
              <FaEnvelope className="text-lg" />
              <p>dubaistreetcafe@gmail.com <br />contact@dubaistreetcafe.com</p>
            </div>
          </div>
        </div>


        {/* COLUMN - 2; SOCIAL MEDIA */}
        <div className={styles.footerColumn}>
          {/* HEADING */}
          <h3 className={styles.heading}>Follow Us</h3>

          {/* CONTENT */}
          <div className={styles.footerContent}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            {/* SOCIAL MEDIA ICONS */}
            <div className={styles.socialMedia}>
              <Link href={"/"} target='_blank' className={styles.smIcon}>
                <FaXTwitter />
              </Link>
              <Link href={"/"} target='_blank' className={styles.smIcon}>
                <FaFacebookF />
              </Link>
              <Link href={"/"} target='_blank' className={styles.smIcon}>
                <FaInstagram />
              </Link>
              <Link href={"/"} target='_blank' className={styles.smIcon}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>


        {/* COLUMN - 3; SHOP TIMIMG */}
        <div className={styles.footerColumn}>
          {/* HEADING */}
          <h3 className={styles.heading}>Open Hours</h3>

          {/* CONTENT */}
          <div className={styles.footerContent}>
            <div className="uppercase space-y-1">
              <p>Monday - Friday</p>
              <p>8.00 AM - 8.00 PM</p>
            </div>
            <div className="uppercase space-y-1">
              <p>Monday - Friday</p>
              <p>8.00 AM - 8.00 PM</p>
            </div>
          </div>
        </div>


        {/* COLUMN - 4; NEWSLETTER */}
        <div className={styles.footerColumn}>
          {/* HEADING */}
          <h3 className={styles.heading}>Newsletter</h3>

          {/* CONTENT */}
          <div className={styles.footerContent}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
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
        </div>
      </div>

      {/* BOTTOM PART */}
      <div className={styles.bottomPart}>
        <p>Copyright © <span className='text-(--primary) font-semibold'>DUBAI STREET CAFE</span>. All Rights Reserved.</p>
        <p>Design and Developed by <Link href={"https://github.com/shahjalalhazari"} className='text-(--primary) font-semibold hover:underline'>SHAHJALAL HAZARI</Link>.</p>
      </div>
    </footer>
  );
};

export default Footer;