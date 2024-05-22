import { useState } from "react";
import Footer from "../components/Footer/Footer";
import FormAddMovie from "../components/FormAddMovie/FormAddMovie";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import dataMovies from "../utils/dataMovies";

const Home = () => {
    const [movie, setMovie] = useState(dataMovies);
    console.log('home data movies', movie);
    return <>
        <Navbar />
        <Main >
            <Hero />
            < Movies movies={movie} setMovie={setMovie} />
            <FormAddMovie movies={movie} setMovie={setMovie} />
        </Main>
        <Footer />
    </>;
}

export default Home;