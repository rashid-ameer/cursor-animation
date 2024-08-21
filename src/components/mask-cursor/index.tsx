import styles from "./style.module.scss";
import Cursor from "./cursor";

function MaskCursor() {
  return (
    <div className={styles.cursor}>
      <Cursor />

      <div className={styles.target}>
        <p>
          Rashid Ameer is a <span>frontend developer</span> skilled in React and
          Next.js, building dynamic, modern apps with clean, efficient code.
        </p>
      </div>
    </div>
  );
}
export default MaskCursor;
