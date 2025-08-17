import "./MovieDis.css";
export default function MovieDis({ movieDetail }) {
  return (
    <div className="moviedis-box">
      <img alt={movieDetail.Title} src={movieDetail.Poster}></img>
      <div className="movie-discription">
        <h3>{movieDetail.Title}</h3>
        <p>
          {movieDetail.Released} . {movieDetail.Runtime}
        </p>
        <p>{movieDetail.Genre}</p>
        <p>⭐️ {movieDetail.imdbRating} IMDb rating</p>
      </div>
    </div>
  );
}
