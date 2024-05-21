import styles from './Movies.module.css'
const CardMovie = (movie) => {
    return (

        <div className={styles.movie}>
            <img
                className={styles.movie__image}
                src={movie.data.poster}
                alt="Movie"
            />
            <h3 className={styles.movie__title}>{movie.data.title}</h3>
            <p className={styles.movie__date}>{movie.data.date}</p>
        </div>

    );
}

export default CardMovie;