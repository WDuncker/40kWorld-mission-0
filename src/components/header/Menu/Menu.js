import styles from "./Menu.module.css";

export default function Menu({ handleMenuClose }) {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__items}>
        <h3 className={styles.menu__items__login}>Log In</h3>
        <h3 className={styles.menu__items__links}>Faction Guide</h3>
        <h3 className={styles.menu__items__links}>Store Finder</h3>
        <h3 className={styles.menu__items__links}>About Us</h3>
      </div>
    </div>
  );
}
