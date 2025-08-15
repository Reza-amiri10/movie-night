import "./Movies.css";

import moviesList from "./moviesList";
import Movie from "./Movie";
export default function Movies() {
  return (
    <div className="movies-continer">
      {moviesList.map((item, i) => (
        <Movie key={i} img={item.img} name={item.name} year={item.year} />
      ))}
    </div>
  );
}
