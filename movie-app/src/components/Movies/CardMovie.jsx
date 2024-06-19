import styles from './Movies.module.css'
import StyleMovie from './StyleMovie';
const CardMovie = (movie) => {
    return (

        <StyleMovie>
            <img
                src={movie.data.poster || `${import.meta.env.VITE_IMAGE}/${movie.data.poster_path}`}
                alt="Movie"
            />
            <h3 >{movie.data.title}</h3>
            <p >{new Date(movie.data.release_date).getFullYear()}</p>
        </StyleMovie>

    );
}

export default CardMovie;