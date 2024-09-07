import { useEffect } from "react";
import Trending from "../components/Trending";
import SearchForm from "../components/SearchForm";
import MovieTvTab from "../components/MovieTvTab";
import { useLocation } from "react-router-dom";
import { useFilter } from "../context/FilterProvider";

function TrendingMovie() {
  const { setResultPage, setMediaType } = useFilter();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    if (pathname === "/trending-titles") {
      setResultPage(1);
      setMediaType("movie");
    }
  }, [pathname]);
  return (
    <>
      <SearchForm />
      <div className="container">
        <MovieTvTab />
        <Trending />
      </div>
    </>
  );
}

export default TrendingMovie;
