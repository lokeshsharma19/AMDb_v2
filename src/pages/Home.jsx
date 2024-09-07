import SearchForm from "../components/SearchForm";
import Trending from "../components/Trending";
import PageNum from "../components/PageNum";
import Row from "../components/HomeComponents/RowContainer";
import { requests } from "../constants";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFilter } from "../context/FilterProvider";

function Home() {
  const { setResultPage, setMediaType, mediaType } = useFilter();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    if (pathname === "/") {
      setResultPage(1);
      setMediaType("person");
    }
  }, [pathname]);

  return (
    <div>
      <SearchForm />
      <div className="container homeContent">
        <Row
          title="Latest Titles"
          isLargeRow
          isTv
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending" fetchUrl={requests.fetchTrending} isAll />
        <Row title="Top Rated" isMovie fetchUrl={requests.fetchTopRated} />
        <Row
          title="Action Movies"
          isMovie
          fetchUrl={requests.fetchActionMovies}
        />
        <Row
          title="Comedy Movies"
          isMovie
          fetchUrl={requests.fetchComedyMovies}
        />
        <Row
          title="Horror Movies"
          isMovie
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Row
          title="Romance Movies"
          isMovie
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Row
          title="Documentaries"
          isMovie
          fetchUrl={requests.fetchDocumentaries}
        />
        {/* <Trending /> */}
        {/* <PageNum /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
