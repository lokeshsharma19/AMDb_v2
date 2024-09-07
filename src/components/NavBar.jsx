import React, { useEffect, useState } from "react";
import { useFilter } from "../context/FilterProvider";
import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";

function Heading() {
  const { setResultPage, setMediaType, mediaType } = useFilter();
  const [isTitles, setIsTitles] = useState(false);
  const [isCelebrites, setIsCelebrites] = useState(false);

  const pathname = useLocation().pathname;
  useEffect(() => {
    if (pathname === "/trending-titles") {
      setIsTitles(true);
      setIsCelebrites(false);
    } else if (pathname === "/trending-celebrities") {
      setIsCelebrites(true);
      setIsTitles(false);
    } else {
      setIsCelebrites(false);
      setIsTitles(false);
    }
  }, [pathname]);
  return (
    <div className={styles.navContainer}>
      <Link to="/">
        <h2
          onClick={() => {
            setResultPage(1);
            setMediaType("all");
          }}>
          AMDb
        </h2>
      </Link>
      <ul className={styles.navItems}>
        <Link to="/trending-titles">
          <li style={isTitles ? { color: "var(--base-color)" } : {}}>
            Movies/TV Shows
          </li>
        </Link>
        <Link to="/trending-celebrities">
          <li style={isCelebrites ? { color: "var(--base-color)" } : {}}>
            Celebrity
          </li>
        </Link>
        <Link to="/watch-list">
          <li>Watch List</li>
        </Link>
      </ul>
    </div>
  );
}

export default Heading;
