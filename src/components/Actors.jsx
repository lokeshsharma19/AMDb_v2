import React from "react";
import styles from "./Actors.module.css";
import Actor from "./Actor";

function Actors({ actors }) {
  console.log(actors);
  return (
    <>
      {actors.length > 0 ? (
        <div className={styles.actorContainer}>
          {actors.slice(0, 16).map((actor) => (
            <Actor key={actor.id} {...actor} />
          ))}
          <p className={styles.viewMore}>View More</p>
        </div>
      ) : (
        <h6>Not Available For Now</h6>
      )}
    </>
  );
}

export default Actors;
