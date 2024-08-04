import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import ActorCard from "../components/ActorCard"

function Actors() {
  const [actorInfo, setActorInfo] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(response => response.json())
    .then(data => setActorInfo(data))
  }, [])

  const displayActorInfo = actorInfo.map(function(actor) {
    return <ActorCard key={actor.id} id={actor.id} name={actor.name} movies={actor.movies}/>
  })

  return (
    <>
      <header>
        <NavBar/>
        {/* What component should go here? */}
      </header>
      <main>
        <h1>Actors Page</h1>
        {displayActorInfo}
        {/* Actor info here! */}
      </main>
    </>
  );
};

export default Actors;
