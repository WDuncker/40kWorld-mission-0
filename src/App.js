import styles from "./App.module.css";
import Header from "./components/header/Header";
import Menu from "./components/header/Menu/Menu";
import HeroSearch from "./components/hero-search/HeroSearch";
import Tiles from "./components/Tiles/Tiles";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);

  function menuOpen() {
    setMenu(true);
    console.log(menu);
  }

  function menuClose() {
    setMenu(false);
  }

  return (
    <div className={styles.main}>
      <div className={styles.main__header}>
        <Header
          handleMenuOpen={menuOpen}
          handleMenuClose={menuClose}
          menu={menu}
        ></Header>
        {menu ? <Menu></Menu> : null}
      </div>
      <div className={styles.main__herosearch}>
        <HeroSearch></HeroSearch>
      </div>
      <div className={styles.main__tiles}>
        <Tiles></Tiles>
      </div>
    </div>
  );
}

export default App;
