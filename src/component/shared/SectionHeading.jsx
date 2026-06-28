const SectionHeading = ({ subtitle, title, align = "center"}) => {
  const alignment = {
    center: "items-center text-center",
    left: "items-start text-left",
    right: "items-end text-right",
  };

  // 
  const styles = {
    headingContainer: `flex flex-col gap-3 lg:gap-4 ${alignment[align]}`,
    verticalLine: "h-16 md:h-20 lg:h-24 w-0.5 bg-(--secondary) rounded-full",
    subTitle: "font-medium body-text uppercase tracking-[4px] lg:tracking-[8px] text-(--accent) text-xl md:text-2xl",
    title: "text-4xl md:text-5xl lg:text-6xl font-bold text-(--dark) heading"
  }

  return (
    <div className={styles.headingContainer}>
      {/* VERTICAL LINE */}
      <span className={styles.verticalLine} />

      {/* SUBTITLE */}
      <p className={styles.subTitle}>{subtitle}</p>

      {/* TITLE */}
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default SectionHeading;