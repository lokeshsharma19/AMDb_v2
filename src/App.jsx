import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  ErrorPage,
  SingleMovieDetail,
  RootLayout,
  SearchPage,
} from "./pages/index";
import { loader as SingleMovieLoader } from "./pages/SingleMovieDetail";
import TrendingMovies from "./pages/TrendingMovies";
import TrendingCelebrities from "./pages/TrendingCelebrities";
import { useFilter } from "./context/FilterProvider";
import Login, { loginLoader } from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile, { profileLoader } from "./pages/Profile";
import WatchList from "./pages/WatchList";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/login" element={<Login />} loader={loginLoader} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<Profile />} loader={profileLoader} />
        <Route index element={<Home />} />
        <Route path="/trending-titles" element={<TrendingMovies />} />
        <Route path="/trending-celebrities" element={<TrendingCelebrities />} />
        <Route index element={<Home />} />
        <Route path="/search/*" element={<SearchPage />} />
        <Route
          path="/detail/:id/:mediaType"
          loader={SingleMovieLoader}
          element={<SingleMovieDetail />}
        />
        <Route path="/watch-list" element={<WatchList />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
