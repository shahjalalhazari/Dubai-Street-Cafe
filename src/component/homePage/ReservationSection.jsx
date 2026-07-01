import { FaCheck } from 'react-icons/fa6';
import InputField from '../shared/inputFields/InputField';

const ReservationSection = () => {
  const styles = {
    reservationSection: "section-container h-auto w-auto overflow-hidden section-with-top-shape section-with-bottom-shape",
    container: "px-6 py-20 md:px-12 md:py-24 lg:px-20 lg:py-28 space-y-6 md:space-y-8",
    reservationLayout: "bg-cover bg-center grid grid-cols-1 lg:grid-cols-2",

    benefitsSection: "bg-(--dark)/90 text-(--background) body-text",
    heroHeading: "font-bold text-5xl text-(--accent) uppercase heading",
    subHeading: "font-semibold text-2xl md:text-3xl lg:text-4xl",
    bodyText: "text-base",
    checkList: "flex flex-col gap-3 text-lg",
    checkListItem: "flex items-center gap-2",

    bookingForm: "bg-(--dark) h-full w-full text-(--background)",
    formHeading: "font-bold text-2xl md:text-4xl uppercase heading text-center",
    formSubmitBtn: "w-full bg-(--primary) py-2 text-center uppercase font-medium transition-all ease-in-out duration-700 hover:bg-(--secondary) text-sm md:text-base lg:text-lg",
  }
  return (
    <section className={styles.reservationSection}>
      <div
        className={styles.reservationLayout}
        style={{ backgroundImage: "url('/images/coffee-beans-full.jpg')" }}
      >
        {/* BENEFITS */}
        <div className={styles.benefitsSection}>
          <div className={styles.container}>
            <h1 className={styles.heroHeading}>30% OFF</h1>
            <h3 className={styles.subHeading}>For Online Reservation</h3>
            <p className={styles.bodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem repellat atque, cumque dolor perspiciatis corporis fugit impedit illum nulla consequuntur et unde est ex, omnis ea, esse aperiam nostrum?</p>

            <div className={styles.checkList}>
              <p className={styles.checkListItem}>
                <FaCheck className='text-(--accent) text-xl' /> Lorem ipsum dolor sit amet
              </p>
              <p className={styles.checkListItem}>
                <FaCheck className='text-(--accent) text-xl' /> Lorem ipsum dolor sit amet
              </p>
              <p className={styles.checkListItem}>
                <FaCheck className='text-(--accent) text-xl' /> Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>

        {/* BOOKING FORM */}
        <div className={styles.bookingForm}>
          <div className={styles.container}>
            <h2 className={styles.formHeading}>BOOK YOUR TABLE</h2>
            <form className='space-y-4 md:space-y-6'>
              {/* FULL NAME */}
              <InputField label={"Name"} name={"name"} placeholder={"Enter Your Name"} />
              {/* EMAIL */}
              <InputField label={"Email"} name={"email"} placeholder={"Your Email"} type={"email"} />
              {/* DATE */}
              <InputField label={"Date"} name={"date"} placeholder={"Pick Date"} type={"date"} />
              {/* TIME */}
              <InputField label={"Time"} name={"time"} placeholder={"Pick Time"} type={"time"} />
              {/* NUMBER OF PERSON */}
              <InputField label={"Person"} name={"person"} placeholder={"Num of Person"} type={"number"} />
              {/* SUBMIT BTN */}
              <input type="submit" value="Book Now" className={styles.formSubmitBtn} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;