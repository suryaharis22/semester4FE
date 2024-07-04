import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Movies from '../components/Movies/Movies';
import Hero from '../components/Hero/Hero';
import { ENDPOINTS } from '../utils/endpoints';
import MovieContext from '../components/Context/MoviesContext';

const Home = () => {
    const API_KEY = import.meta.env.VITE_APP_KEY;
    const { movies, setMovies } = useContext(MovieContext);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovie(page);
    }, [page]);

    const getMovie = async (page) => {
        try {
            const response = await axios.get(ENDPOINTS.UPCOMING(page), {
                params: { api_key: API_KEY }
            });
            if (response.status === 200) {
                setMovies(prevMovies => [...prevMovies, ...response.data.results]);
            } else {
                setError(response.status_message || 'Error fetching movies');
            }
        } catch (error) {
            setError(error.response?.data?.status_message || 'Failed to fetch movies.');
        }
    };

    const loadMoreMovies = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <>
            {error ? (
                <h1 style={{ textAlign: 'center' }}>{error}</h1>
            ) : (
                <>
                    <Hero />
                    <Movies movies={movies} setMovie={setMovies} Header={'Forthcoming'} />
                    <button
                        onClick={loadMoreMovies}
                        style={{
                            display: 'block',
                            margin: '50px auto',
                            padding: '10px 20px',
                            backgroundColor: '#06D6A0',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Load More
                    </button>
                </>
            )}
        </>
    );
};

export default Home;
