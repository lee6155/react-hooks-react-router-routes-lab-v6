import { useState } from "react";

function DirectorCard({ name, movies }) {
    return (
        <article>
            <h2>{name}</h2>
            <ul>{movies}</ul>
        </article>
    )
}

export default DirectorCard