const OutlineBtn = ({text}) => {
  const styles = {
    outlineBtn: "px-6 py-3 border border-(--background) text-(--background) font-medium rounded-md hover:bg-(--background) hover:text-(--dark) transition-all duration-500",
  };
  return (
    <button className={styles.outlineBtn}>{text}</button>
  );
};

export default OutlineBtn;