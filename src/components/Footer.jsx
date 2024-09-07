import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { useFilter } from "../context/FilterProvider";

function Footer() {
  const { setMediaType, setResultPage } = useFilter();
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footerBox}>
          <ul className={styles.navigation}>
            <li>
              <Link to={"/"}>
                <p id="last-button">Home</p>
              </Link>
            </li>
            <li>
              <Link to={"/search?search="}>
                <p id="last-button">Search movie/tv show/celebrity</p>
              </Link>
            </li>
            <li>
              <Link to={"/trending-titles"}>
                <p
                  onClick={() => {
                    setMediaType("movie");
                    setResultPage(1);
                  }}
                  id="last-button">
                  Movies/TV shows
                </p>
              </Link>
            </li>
            <li>
              <Link to={"/trending-celebrities"}>
                <p
                  onClick={() => {
                    setMediaType("person");
                    setResultPage(1);
                  }}
                  id="last-button">
                  Celebrities
                </p>
              </Link>
            </li>
            <li>{/* <p id="last-button">Contact</p> */}</li>
          </ul>
        </div>
        <div className={styles.footerBox}>
          <p style={{ fontSize: "1.3rem" }}>Connect</p>
          <div className={styles.socialMedia}>
            <Link to={"https://www.instagram.com/lokeshsharma_19/?next=%2F"}>
              <IoLogoInstagram />
            </Link>
            <Link to={"https://twitter.com/lokeshshrma19"} className="twitter">
              <IoLogoTwitter />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/lokeshas1/"}
              className={styles.social}>
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className={styles.footerBox}>
          <div className="contact-you">
            <label htmlFor="email">
              <p style={{ fontSize: "1.3rem" }}>Contact Us</p>
            </label>
            <div className={styles.joinus}>
              <p>9106883315</p>
              <p>8010883221</p>
              <p>lokeshsharmacp2023@gmail.com</p>
              <p>Pune - 411021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
