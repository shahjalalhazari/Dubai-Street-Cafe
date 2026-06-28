const PrimaryBtn = ({link, text}) => {
  const styles = {
    primaryBtn: "px-6 py-3 bg-(--primary) text-white font-medium rounded-md hover:bg-(--secondary) transition-all duration-500 ease-in-out"
  };
  return (
    <button className={styles.primaryBtn}>
      {text}
    </button>
  );
};

export default PrimaryBtn;