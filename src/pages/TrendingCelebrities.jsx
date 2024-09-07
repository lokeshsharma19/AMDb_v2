import { useEffect } from "react";
import Trending from "../components/Trending";
import SearchForm from "../components/SearchForm";
import { useLocation } from "react-router-dom";
import { useFilter } from "../context/FilterProvider";

function TrendingCelebrities() {
  const { setResultPage, setMediaType } = useFilter();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    if (pathname === "/trending-celebrities") {
      setResultPage(1);
      setMediaType("person");
    }
  }, [pathname]);
  return (
    <>
      <SearchForm />
      <div className="container">
        <Trending />
      </div>
    </>
  );
}

export default TrendingCelebrities;
