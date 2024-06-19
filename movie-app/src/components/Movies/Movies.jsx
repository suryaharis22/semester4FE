import { useEffect, useState } from 'react';
import CardMovie from './CardMovie';
import styles from './Movies.module.css'


// const heandleClick = () => {
//     const addMovie = {
//         id: 10,
//         title: 'The Matrix',
//         date: '1999',
//         image: 'https://picsum.photos/300/400'
//     }
//     setListMovies([...listMovies, addMovie]);
// }

const Movies = (props) => {
    const { movies, setListMovies } = props;

    console.log('movies', movies);
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => (
                        <CardMovie key={movie.id} data={movie} />
                    ))}
                </div>
                {/* <button onClick={heandleClick}>Add Movie</button> */}


            </section>
        </div>
    );
}

export default Movies;