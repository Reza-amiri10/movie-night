import "./App.css";

import Navbar from "./components/layout/Navbar";
import Movies from "./components/Movies";
import MovieWatch from "./components/MovieWatch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="movie-watch">
        <Movies />
        <MovieWatch />
      </div>
    </div>
  );
}

export default App;
