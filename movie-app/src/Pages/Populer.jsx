import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from '../components/Movies/Movies';
import Hero from '../components/Hero/Hero';

const Populer = () => {
    const API_KEY = import.meta.env.VITE_APP_KEY; // Ensure the prefix is VITE_
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = async () => {
        const response = await axios.get(`${import.meta.env.VITE_URL_API}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        if (response.status === 200) {
            setMovies(response.data.results);
        } else {
            setError(response.status_message);
        }
    }

    return (
        <>

            {error ? <h1 style={{ textAlign: 'center' }}>{error}</h1> :
                <>
                    <Hero />
                    < Movies movies={movies} setMovie={setMovies} />
                </>
            }


        </>
    );
}

export default Populer;
