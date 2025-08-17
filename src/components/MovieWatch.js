import "./MovieWatch.css";
import MovieDis from "./MovieDis";
import RatingStars from "./RatingStars";

export default function MovieWatch({ movieDetail }) {
  return (
    <div className="watch-continer">
      <MovieDis movieDetail={movieDetail} />
      <RatingStars movieDetail={movieDetail} />
      <p className="discription">{movieDetail.Plot}</p>
    </div>
  );
}
