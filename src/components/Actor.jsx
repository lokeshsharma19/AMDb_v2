import React from "react";
import styles from "./Actor.module.css";

function Actor({ profile_path: photo, character, name }) {
  const baseUrl = "https://image.tmdb.org/t/p/w185";
  const defaultPhoto = `https://via.placeholder.com/185x278?text=${name}`; // Replace with your default image URL

  return (
    <div className={styles.actor}>
      <img
        className={styles.photo}
        src={photo ? `${baseUrl}${photo}` : defaultPhoto}
        alt={name}
      />
      <p className={styles.charName}>{character}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default Actor;
