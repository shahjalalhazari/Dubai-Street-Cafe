import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';
import InputField from '../shared/inputFields/InputField';

const ReservationSection = () => {
  const styles = {
    reservationSection: "section-container h-auto w-auto overflow-hidden section-with-top-shape section-with-bottom-shape",

    bookingForm: "bg-(--dark) h-full w-full text-(--background) px-6 py-20 md:px-12 md:py-24 lg:px-20 lg:py-28 space-y-6 md:space-y-8 lg:space-y-10",
    formHeading: "font-bold text-2xl md:text-4xl uppercase heading text-center",
    formSubmitBtn: "w-full bg-(--primary) py-2 text-center uppercase font-medium transition-all ease-in-out duration-700 hover:bg-(--secondary) text-sm md:text-base lg:text-lg",
  }
  return (
    <section className={styles.reservationSection}>
        <div
          className={"bg-cover bg-center grid grid-cols-1 lg:grid-cols-2"}
          style={{ backgroundImage: "url('/images/coffee-beans-full.jpg')" }}
        >

          {/* BENEFITS */}
          <div className="bg-(--dark)/90 text-(--background) text-center">
              <h1>30% OFF</h1>
              <h3>For Online Reservation</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem repellat atque, cumque dolor perspiciatis corporis fugit impedit illum nulla consequuntur et unde est ex, omnis ea, esse aperiam nostrum?</p>

              <p className={styles.checkListItem}>
                <FaCheck /> Lorem ipsum dolor sit amet
              </p>
              <p className={styles.checkListItem}>
                <FaCheck /> Lorem ipsum dolor sit amet
              </p>
              <p className={styles.checkListItem}>
                <FaCheck /> Lorem ipsum dolor sit amet
              </p>
          </div>


          {/* BOOKING FORM */}
          <div className={styles.bookingForm}>
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

                <input type="submit" value="Book Now" className={styles.formSubmitBtn} />
            </form>
          </div>

        </div>
    </section>
  );
};

export default ReservationSection;