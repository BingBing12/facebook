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
          <span className={styles.sIcon}>
            <FontAwesomeIcon icon={solid("magnifying-glass")} />
          </span>
          <div className={styles.search}>
            <Search placeholder="Search Facebook" />
          </div>
        </Flex_start>
      </div>
      <div className={styles.navbar_mid}>
        <Flex_mid>
          <div>
            <FontAwesomeIcon size="lg" icon={solid("house")} />
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={solid("tv")} />
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={solid("store")} />
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={solid("headset")} />
          </div>
        </Flex_mid>
      </div>
      <div className={styles.navbar_right}>
        <Flex_end>
          <div>
            <FontAwesomeIcon size="lg" icon={solid("user")} />
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={solid("compass")} />
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={brands("facebook-messenger")} />
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={solid("bell")} />
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={solid("caret-down")} />
          </div>
        </Flex_end>
      </div>
    </Flex_start>
  );
};
export default Navbar;
