import styles from "./Tiles.module.css";
import Shop from "../../src-assets/supplies.jpg";
import Comp from "../../src-assets/competition.jpg";
import Events from "../../src-assets/events.jpg";

export default function Tiles() {
  return (
    <div className={styles.tiles}>
      <div className={styles.tiles__containers}>
        <img className={styles.tiles__containers__pics} src={Shop} alt="shop" />
        <div className={styles.tiles__containers__textbox}>
          <p className={styles.tiles__containers__head}>Shop</p>
          <p className={styles.tiles__containers__text}>
            Get your miniatures and hobby supplies here
          </p>
        </div>
      </div>
      <div className={styles.tiles__containers}>
        <img className={styles.tiles__containers__pics} src={Comp} alt="comp" />
        <div className={styles.tiles__containers__textbox}>
          <p className={styles.tiles__containers__head}>
            Painting Competitions
          </p>
          <p className={styles.tiles__containers__text}>
            Enter your pride and joy and show your skills
          </p>
        </div>
      </div>
      <div className={styles.tiles__containers}>
        <img
          className={styles.tiles__containers__pics}
          src={Events}
          alt="events"
        />
        <div className={styles.tiles__containers__textbox}>
          <p className={styles.tiles__containers__head}>Events</p>
          <p className={styles.tiles__containers__text}>
            Check out and enter our upcoming events
          </p>
        </div>
      </div>
    </div>
  );
}
