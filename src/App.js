import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Movies from "./components/Movies";
import MovieWatch from "./components/MovieWatch";

const APIKEY = "c60cc11";

function App() {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieId, setMovieId] = useState("");
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${APIKEY}&i=${movieId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const movieDetail = await response.json();
        if (movieDetail.Response === "False") {
          throw new Error(movieDetail.Error);
        }
        setMovieDetail(movieDetail);
      } catch (err) {
        setError(err.message);
        setMovieDetail(null);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetail();
  }, [movieId]);

  const movieDetails = movieDetail ?? [];

  useEffect(() => {
    if (!search) return;
    setMovieList(search);
  }, [search]);

  useEffect(() => {
    if (!search) return;
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`,
          { signal }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        setMovieList(data);
      } catch (err) {
        setError(err.message);
        setMovieList(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [search]);
  const movieData = movieList?.Search ?? [];
  const result = movieData.length;

  return (
    <div className="App">
      <Navbar result={result} onChange={setSearch} />

      <div className="movie-watch">
        <Movies
          movieData={movieData}
          movieId={movieId}
          setMovieId={setMovieId}
        />
        <MovieWatch movieDetail={movieDetails} />
      </div>
    </div>
  );
}

export default App;
