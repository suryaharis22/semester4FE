import { useContext } from 'react';
import CardMovie from './CardMovie';
import styles from './Movies.module.css';
import MovieContext from '../Context/MoviesContext';

const Movies = (props) => {
    const { movies } = useContext(MovieContext);
    const { setListMovies, Header } = props;

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{Header}</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie, index) => (
                        <CardMovie key={`${movie.id}-${index}`} data={movie} />
                    ))}
                </div>
                {/* <button onClick={heandleClick}>Add Movie</button> */}
            </section>
        </div>
    );
}

export default Movies;
