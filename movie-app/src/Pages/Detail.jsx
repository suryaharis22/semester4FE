import axios from "axios";
import DetailMovie from "../components/DetailMovie";
import Movies from "../components/Movies/Movies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ENDPOINTS } from "../utils/endpoints";

const Detail = () => {
    const API_KEY = import.meta.env.VITE_APP_KEY;
    const params = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovie(page);
    }, [page, params.id]);

    const getMovie = async (page) => {
        const response = await axios.get(ENDPOINTS.RECOMENDED(params.id, page));
        if (response.status === 200) {
            setMovies(prevMovies => [...prevMovies, ...response.data.results]); // Append new movies to the existing list
        } else {
            setError(response.status_message);
        }
    }

    const loadMoreMovies = () => {
        setPage(prevPage => prevPage + 1); // Increment the page number
    }
    return (
        <>
            <DetailMovie params={params} />
            <Movies movies={movies} setMovie={setMovies} Header={'Recommendations'} />
            <button onClick={loadMoreMovies} style={{ display: 'block', margin: '50px auto', padding: '10px 20px' }}>Load More</button>
        </>

    );
}

export default Detail;