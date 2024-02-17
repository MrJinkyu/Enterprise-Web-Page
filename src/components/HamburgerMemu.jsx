import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HamburgerMemu.module.css";
import { MdClose } from "react-icons/md";

export default function HamburgerMemu({ sideMenu, active, handleClick }) {
  const navigate = useNavigate();
  return (
    <div className={`${styles.sideNavbar} ${active && styles.active}`}>
      <div className={styles.navLogo}>
        <div
          className={styles.logo}
          onClick={() => {
            navigate("/");
            handleClick(false);
          }}
        >
          <img
            src="images/logo_black.png"
            alt="logo"
            className={styles.logoImg}
          />
        </div>

        <MdClose
          className={styles.close}
          onClick={() => {
            handleClick(false);
          }}
        />
      </div>
      <ul className={styles.items}>
        {sideMenu &&
          sideMenu.map((item, index) => {
            return (
              <li
                key={index}
                className={styles.item}
                onClick={() => {
                  navigate("/products", { state: { menu: item } });
                  handleClick(false);
                }}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
