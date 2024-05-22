import { useState } from "react";
import FormAddMovie from "../components/FormAddMovie/FormAddMovie";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main";
import Movies from "../components/Movies/Movies";
import dataMovies from "../utils/dataMovies";

const Home = () => {
    const [movie, setMovie] = useState(dataMovies);
    console.log('home data movies', movie);
    return <>
        <Main >
            <Hero />
            < Movies movies={movie} setMovie={setMovie} />
            <FormAddMovie movies={movie} setMovie={setMovie} />
        </Main>
    </>;
}

export default Home;