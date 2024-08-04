import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import DirectorCard from "../components/DirectorCard"

function Directors() {
  const [directorInfo, setDirectorInfo] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(response => response.json())
    .then(data => setDirectorInfo(data))
  }, [])

  const displayDirectorInfo = directorInfo.map(function(director) {
    return <DirectorCard key={director.id} id={director.id} name={director.name} movies={director.movies}/>
  })

  return (
    <>
      <header>
        <NavBar/>
        {/* What component should go here? */}
      </header>
      <main>
        <h1>Directors Page</h1>
        {displayDirectorInfo}
        {/* Director info here! */}
      </main>
    </>
  );
};

export default Directors;
