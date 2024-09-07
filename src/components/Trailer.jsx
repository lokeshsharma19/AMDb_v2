import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { apiKey } from "../constants";
import styles from "./Trailer.module.css";

function Trailer({ movieId }) {
  const [videos, setVideos] = useState([]);
  const [isSwipingAllowed, setIsSwipingAllowed] = useState(true);
  const trailerEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(trailerEndpoint);
        if (response.data?.results?.length > 0) {
          let videosArray = response.data.results;

          // Find and move the trailer to the first position
          const trailerIndex = videosArray.findIndex(
            (video) => video.site === "YouTube" && video.type === "Trailer"
          );
          if (trailerIndex !== -1) {
            const [trailer] = videosArray.splice(trailerIndex, 1);
            videosArray.unshift(trailer);
          }

          // Truncate the array to the first 8 elements
          videosArray = videosArray.slice(0, 8);

          setVideos(videosArray);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [trailerEndpoint]);

  const handleVideoPlay = () => {
    setIsSwipingAllowed(false);
  };

  const handleVideoPauseOrEnd = () => {
    setIsSwipingAllowed(true);
  };

  return (
    <div className={styles.trailerContainer}>
      <Carousel
        showThumbs={false}
        infiniteLoop={false}
        useKeyboardArrows
        swipeable={isSwipingAllowed}
        autoPlay={false}
        showArrows={true}>
        {videos.map((video, index) => (
          <div key={index} className={styles.videoItem}>
            <h3>{video.name}</h3>
            <div className={styles.videoEmbed}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onPlay={handleVideoPlay}
                onPause={handleVideoPauseOrEnd}
                onEnded={handleVideoPauseOrEnd}></iframe>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Trailer;
