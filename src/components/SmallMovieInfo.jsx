import React from "react";
import styles from "./SmallMovieInfo.module.css";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addToLocal } from "../utils/addToLocal";

function SmallMovieInfo({
  notify,
  id,
  title,
  name,
  release_date,
  original_language,
  overview,
  known_for,
  poster,
  profile_path,
  first_air_date,
  adult,
  mediaType,
  known_for_department,
  gender,
}) {
  let genderWord;
  gender == 1 ? (genderWord = "Female Actress") : (genderWord = "Male Actor");
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.infoOnTop}>
        <div className="smallPoster">
          <img
            className={styles.smallImg}
            src={poster || imgPath}
            alt={title || name}
          />
        </div>
        <div className={styles.topInfo}>
          {adult && <p>U/A 18+</p>}
          {!adult && <p>U/A 13+</p>}
          <h2 className={styles.topInfoParts}>{title || name}</h2>
          {gender && <p className={styles.topInfoParts}>{genderWord}</p>}
          {mediaType !== "person" && (
            <p className={styles.topInfoParts}>Category : {mediaType}</p>
          )}
          {(release_date || first_air_date) && (
            <p className={styles.topInfoParts}>
              Release date : {release_date || first_air_date}
            </p>
          )}
          {known_for_department && (
            <p className={styles.topInfoParts}>
              Department : {known_for_department}
            </p>
          )}
          {original_language && (
            <p className={styles.topInfoParts}>
              Language : {original_language}
            </p>
          )}
          <div className={styles.modalBtnsContainer}>
            <button
              onClick={() => {
                navigate(`/detail/${id}/${mediaType}`);
              }}
              className={styles.modalBtn1}>
              <FaCaretRight />
              View More
            </button>
            <button
              className={styles.modalBtn2}
              onClick={() => {
                addToLocal({
                  id,
                  title,
                  name,
                  release_date,
                  original_language,
                  overview,
                  known_for,
                  poster,
                  profile_path,
                  first_air_date,
                  adult,
                  mediaType,
                  known_for_department,
                  gender,
                });
                notify();
              }}>
              <CiBookmarkPlus className={styles.watchlistBtn} />
            </button>
          </div>
        </div>
      </div>
      {overview && (
        <div className={styles.infoOnBottom}>
          {mediaType !== "person" && (
            <>
              <p>About : </p>
              <p>{overview}</p>
            </>
          )}
          {mediaType === "person" &&
            known_for.map((item) => {
              console.log("hello");
              return <p>{item.original_title},</p>;
            })}
        </div>
      )}
    </>
  );
}

export default SmallMovieInfo;
