import { React, useState } from "react";
import styles from "./RowItem.module.css";
import InfoModal from "../UI/InfoModal";
import SmallMovieInfo from "../SmallMovieInfo";
import { useFilter } from "../../context/FilterProvider";
import toast from "react-hot-toast";

function RowItem({ item, isLargeRow, isAll, isMovie, isTv }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mediaType, setMediaType } = useFilter();
  const notify = () => toast.success("Successfully Added to watch list!");
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
  const imgPath = isLargeRow
    ? `${imgBaseUrl}${item.poster_path}`
    : `${imgBaseUrl}${item.backdrop_path}`;
  const poster = `${imgBaseUrl}${item.poster_path}`;

  return (
    <>
      <img
        onClick={() => {
          setIsModalOpen(true);
          if (isAll) setMediaType(item?.media_type);
          else if (isMovie) setMediaType("movie");
          else if (isTv) setMediaType("tv");
        }}
        key={item.id}
        className={`${styles.row_image} ${isLargeRow && styles.largeImage}`}
        src={`${imgBaseUrl}${imgPath}`}
        alt={item.name}
      />
      {isModalOpen && (
        <InfoModal handleCloseModal={handleCloseModal}>
          <SmallMovieInfo
            notify={notify}
            {...item}
            poster={poster}
            mediaType={mediaType}
          />
        </InfoModal>
      )}
    </>
  );
}

export default RowItem;
