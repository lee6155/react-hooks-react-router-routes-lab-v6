import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard"
import Directors from "./Directors"

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(response => response.json())
    .then(data => setMovies(data))
  }, [])

  const displayTitles = movies.map(function(movie){
    return <MovieCard key={movie.id} id={movie.id} title={movie.title}/>
  })

  return (
    <>
      <header>
        <NavBar/>
        {/* What component should go here? */}
      </header>
      <main>
        <h1>Home Page</h1>
        {displayTitles}
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;
