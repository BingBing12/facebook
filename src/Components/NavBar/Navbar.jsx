import React from "react";
import Flex_start from "../Flex/Flex_start";
import Flex_mid from "../Flex/Flex_mid";
import Flex_end from "../Flex/Flex_end";
import Search from "../input/Search";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Navbar = () => {
  return (
    <Flex_start>
      <div className={styles.navbar}>
        <Flex_start>
          <div className={styles.logo}>
            <FontAwesomeIcon size="2x" icon={brands("facebook")} />
          </div>
          <div className={styles.search}>
            <Search />
          </div>
        </Flex_start>
      </div>
      <div className={styles.navbar_mid}>
        <Flex_mid>
          <div>Home</div>
          <div>Watch</div>
          <div>Marketplace</div>
          <div>Gaming</div>
        </Flex_mid>
      </div>
      <div className={styles.navbar}>
        <Flex_end>
          <div>Profile</div>
          <div>Menu</div>
          <div>Messenger</div>
          <div>Notifications</div>
          <div>Account</div>
        </Flex_end>
      </div>
    </Flex_start>
  );
};
export default Navbar;
