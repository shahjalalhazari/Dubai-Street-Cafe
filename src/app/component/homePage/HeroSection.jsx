import Image from "next/image";
import PrimaryBtn from "../shared/buttons/PrimaryBtn";
import OutlineBtn from "../shared/buttons/OutlineBtn";
import Link from "next/link";

const HeroSection = () => {

  // STYLE CLASSES
  const styles = {
    section: "relative h-screen w-full overflow-hidden",

    bg: "absolute inset-0 bg-cover bg-center",

    overlayDark: "absolute inset-0 bg-black/85",
    overlayGradient: "absolute inset-0 bg-gradient-to-b from-(--dark)/40 via-(--dark)/70 to-(--dark)/90",

    container: "relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8",

    content: "text-center max-w-[90%] sm:max-w-2xl md:max-w-3xl space-y-4",

    heading: "text-(--background) font-bold leading-tight heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl",

    subText: "text-white opacity-80 body-text text-sm md:text-base leading-relaxed",

    buttonsWrapper: "mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center",
  };


  return (
    <section className={styles.section}>
      <div
        className={styles.bg}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1170&auto=format&fit=crop')",
        }}
      />

      <div className={styles.overlayDark} />
      <div className={styles.overlayGradient} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Where Dubai Streets Meet Artisan Coffee
          </h1>

          <p className={styles.subText}>
            Freshly brewed coffee, street-style vibes, and a cozy escape in the heart of <span className="text-(--primary)">Dubai</span>. Crafted for coffee lovers who crave bold flavor and urban energy.
          </p>

          <div className={styles.buttonsWrapper}>
            {/* BUTTON FOR MENU */}
            <Link href={"/menu"}>
              <PrimaryBtn text={"Explore Menu"} />
            </Link>

            {/* BUTTON FOR SHOP LOCATION */}
            <Link href={"/contact-us"}>
              <OutlineBtn text={"Visit Us"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;