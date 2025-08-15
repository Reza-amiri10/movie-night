import "./Movie.css";
export default function Movie({ img, name, year }) {
  return (
    <div className="movie-box">
      <img alt="god father" src={img}></img>
      <div>
        <h3>{name}</h3>
        <p>🗓 {year}</p>
      </div>
    </div>
  );
}
