import "./Navbar.css";

export default function Navbar({ result, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <nav>
      <div className="logo">
        <img
          alt="movie icon"
          src="/images/film-reel.png"
          style={{
            width: "40px",
            height: "40px",
          }}
        ></img>
        <h3>Movie Night</h3>
      </div>
      <input
        className="search-box"
        type="search"
        placeholder="Search your movie ..."
        onChange={handleChange}
      ></input>
      <h3 className="result">{result} Results found</h3>
    </nav>
  );
}
