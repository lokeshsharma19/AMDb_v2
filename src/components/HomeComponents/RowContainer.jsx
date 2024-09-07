import React, { useEffect, useState } from "react";
import axios from "./axios";
import styles from "./RowContainer.module.css";
import RowItem from "./RowItem";

function RowContainer({
  title,
  fetchUrl,
  isLargeRow,
  isAll,
  isMovie,
  isTv,
  isPerson,
}) {
  const [media, setMedia] = useState([]);
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(fetchUrl);
        setMedia(response.data.results);
        return response;
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.rowItemsContainer}>
        {media.map((item) => {
          return (
            <RowItem
              key={item.id}
              item={item}
              isLargeRow={isLargeRow}
              isAll={isAll}
              isMovie={isMovie}
              isTv={isTv}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RowContainer;
