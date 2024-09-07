import React from "react";
import { getWatchList } from "../utils/addToLocal";
import styles from "./WatchList.module.css";
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const userWatchList = getWatchList();
  console.log(userWatchList);
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Your Watch List</h1>
      {userWatchList.map((item) => (
        <div key={item.id} className={styles.watchListItem}>
          {item.poster && (
            <img
              src={`https://image.tmdb.org/t/p/w185${item.poster}`}
              alt={item.title || item.name}
              className={styles.poster}
            />
          )}
          <div className={styles.details}>
            <p className={styles.title}>{item.title || item.name}</p>
            {item.id && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>ID:</span>
                <span className={styles.infoValue}>{item.id}</span>
              </p>
            )}
            {item.release_date && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>Release Date:</span>
                <span className={styles.infoValue}>{item.release_date}</span>
              </p>
            )}
            {item.original_language && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>Language:</span>
                <span className={styles.infoValue}>
                  {item.original_language}
                </span>
              </p>
            )}
            {item.overview && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>Overview:</span>
                <span className={styles.infoValue}>{item.overview}</span>
              </p>
            )}
            {item.known_for && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>Known For:</span>
                <span className={styles.infoValue}>{item.known_for}</span>
              </p>
            )}
            {item.profile_path && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>Profile Path:</span>
                <span className={styles.infoValue}>{item.profile_path}</span>
              </p>
            )}
            {item.first_air_date && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>First Air Date:</span>
                <span className={styles.infoValue}>{item.first_air_date}</span>
              </p>
            )}
            {item.adult !== undefined && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>Adult:</span>
                <span className={styles.infoValue}>
                  {item.adult ? "Yes" : "No"}
                </span>
              </p>
            )}
            {item.mediaType && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>Media Type:</span>
                <span className={styles.infoValue}>{item.mediaType}</span>
              </p>
            )}
            {item.known_for_department && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>Known For Department:</span>
                <span className={styles.infoValue}>
                  {item.known_for_department}
                </span>
              </p>
            )}
            {item.gender && (
              <p className={styles.info}>
                <span className={styles.infoLabel}>Gender:</span>
                <span className={styles.infoValue}>{item.gender}</span>
              </p>
            )}
          </div>
          <div
            onClick={() => navigate(`/detail/${item.id}/${item.mediaType}`)}
            className={styles.viewBtn}>
            <div>View More</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
