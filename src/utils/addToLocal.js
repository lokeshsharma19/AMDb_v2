export const getWatchList = () => {
  const watchList = JSON.parse(localStorage.getItem("watchList")) || [];
  return watchList;
};

export const addToLocal = (movieDetails) => {
  const existingWatchList = getWatchList();
  const isAlreadyInWatchList = existingWatchList.some(
    (item) => item.id === movieDetails.id
  );

  if (!isAlreadyInWatchList) {
    existingWatchList.push(movieDetails);
    localStorage.setItem("watchList", JSON.stringify(existingWatchList));
  }
};
