import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Movies from '../components/Movies/Movies';
import Hero from '../components/Hero/Hero';
import { ENDPOINTS } from '../utils/endpoints';
import MovieContext from '../components/Context/MoviesContext';

const TopRated = () => {
    const { movies, setMovies } = useContext(MovieContext);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovie(page);
    }, [page]);

    const getMovie = async (page) => {
        try {
            const response = await axios.get(ENDPOINTS.TOPRATED(page));
            if (response.status === 200) {
                setMovies(prevMovies => [...prevMovies, ...response.data.results]); // Append new movies to the existing list
            } else {
                setError(response.status_message);
            }
        } catch (error) {
            setError('Failed to fetch movies.');
        }
    }

    const loadMoreMovies = () => {
        setPage(prevPage => prevPage + 1); // Increment the page number
    }

    return (
        <>
            {error ? <h1 style={{ textAlign: 'center' }}>{error}</h1> :
                <>
                    <Hero />
                    <Movies movies={movies} setMovie={setMovies} Header={'Top Rated'} />
                    <button onClick={loadMoreMovies} style={{ display: 'block', margin: '50px auto', padding: '10px 20px' }}>Load More</button>
                </>
            }
        </>
    );
}

export default TopRated;
