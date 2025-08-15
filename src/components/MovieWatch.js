import "./MovieWatch.css";
import MovieDis from "./MovieDis";
import RatingStars from "./RatingStars";

export default function MovieWatch() {
  return (
    <div className="watch-continer">
      <MovieDis />
      <RatingStars />
      <p className="discription">
        Dangerous Gangster Marudhu singam(Lal) comes to hunt down a whole
        family. Adhiyaman (Natty )and his wife Mithra (Ananya) and their son
        Arjun (Ashwanth) fights back to save their life.Nail biting intense
        action Drama . Starring Ananya, Ashwanth Ashokkumar, Lal Directed by
        Jegan Rajshekar
      </p>
    </div>
  );
}
