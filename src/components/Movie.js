import "./Movie.css";
export default function Movie({ img, name, year, movieId, setMovieId }) {
  const handleGetIdClick = () => {
    setMovieId(movieId);
  };
  return (
    <div className="movie-box" onClick={handleGetIdClick}>
      <img alt={name} src={img}></img>
      <div>
        <h3>{name}</h3>
        <p>🗓 {year}</p>
      </div>
    </div>
  );
}
