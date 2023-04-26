import Eagle from "../../src-assets/Eagle.jpg";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header({ handleMenuOpen, handleMenuClose, menu }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__left}>
        <img className={styles.navbar__left__comlogo} src={Eagle} alt="eagle" />
        <p className={styles.navbar__left__comname}>40K World</p>
      </div>
      <div className={styles.navbar__right}>
        <h4 className={styles.navbar__right__menubuttons}>Faction Guide</h4>
        <h4 className={styles.navbar__right__menubuttons}>Store Finder</h4>
        <h4 className={styles.navbar__right__menubuttons}>About Us</h4>
        <h4 className={styles.navbar__right__login}>Log In</h4>
      </div>
      <div className={styles.navbar__right__reactive}>
        {menu ? (
          <FontAwesomeIcon
            className={styles.menu__items__exit}
            icon={faXmark}
            size="2xl"
            onClick={handleMenuClose}
          />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2xl" onClick={handleMenuOpen} />
        )}
      </div>
    </div>
  );
}
