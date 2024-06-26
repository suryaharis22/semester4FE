// src/Pages/Populer.jsx

import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from '../components/Movies/Movies';
import Hero from '../components/Hero/Hero';
import { ENDPOINTS } from '../utils/endpoints'; // Ensure ENDPOINTS is imported

const Populer = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); // Track the current page
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovie(page); // Fetch movies for the current page
    }, [page]); // Fetch movies again when page changes

    const getMovie = async (page) => {
        try {
            const response = await axios.get(ENDPOINTS.POPULAR(page)); // Pass the page parameter
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
                    <Movies movies={movies} setMovie={setMovies} Header={'Populer'} />
                    <button onClick={loadMoreMovies} style={{ display: 'block', margin: '50px auto', padding: '10px 20px' }}>Load More</button>
                </>
            }
        </>
    );
}

export default Populer;
