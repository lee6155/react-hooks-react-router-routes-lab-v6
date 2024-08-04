import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar"

function Movie() {
  const [movieInfo, setMovieInfo] = useState({})
  const params = useParams()
  const userId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${userId}`)
    .then(response => response.json())
    .then(data => setMovieInfo(data))
  },[userId])

  return (
    <>
      <header>
        <NavBar/>
        <h1>{movieInfo.title}</h1>
        {/* What component should go here? */}
      </header>
      <main>
        <p>Time: {movieInfo.time} minutes</p>
        <span>Genres: {movieInfo.genres} </span>
        {/* Movie info here! */}
      </main>
    </>
  );
};

export default Movie;
