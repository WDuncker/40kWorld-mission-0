import styles from "./HeroSearch.module.css";

export default function HeroSearch() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__welcome}>
        <p className={styles.hero__welcome__text}>Welcome to 40K World</p>
        <h2 className={styles.hero__welcome__subtext}>
          Your local store for tabletop wargaming, hobby supplies and endless
          fun!
        </h2>
      </div>
      <form className={styles.hero__search}>
        <input
          className={styles.hero__search__input}
          type="text"
          placeholder="....."
        />
        <input
          className={styles.hero__search__submit}
          type="submit"
          value="Search"
        ></input>
      </form>
    </div>
  );
}
