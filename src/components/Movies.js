import "./Movies.css";

import Movie from "./Movie";
// import moviesList from "./moviesList";
// import MovieDis from "./MovieDis";
export default function Movies({ movieData, setMovieId }) {
  return (
    <div className="movies-continer">
      {movieData.map((movie, i) => (
        <Movie
          key={i}
          img={movie.Poster}
          name={movie.Title}
          year={movie.Year}
          imgAlt={movie.Title}
          movieId={movie.imdbID}
          setMovieId={setMovieId}
        />
      ))}
    </div>
  );
}
