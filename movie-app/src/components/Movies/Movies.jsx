import { useEffect, useState } from 'react';
import CardMovie from './CardMovie';
import styles from './Movies.module.css'

const Movies = () => {
    const [listMovies, setListMovies] = useState([]);
    const DataMovies = [
        {
            id: 1,
            title: `A Sniper's War`,
            date: '2018',
            image: 'https://picsum.photos/300/400'
        },
        {
            id: 2,
            title: 'Interceptor',
            date: '2022',
            image: 'https://picsum.photos/300/400'
        },
        {
            id: 3,
            title: 'Fast X',
            date: '2023',
            image: 'https://picsum.photos/300/400'
        },
        {
            id: 4,
            title: 'The Last Stand',
            date: '2020',
            image: 'https://picsum.photos/300/400'
        },
        {
            id: 5,
            title: 'Endgame',
            date: '2019',
            image: 'https://picsum.photos/300/400'
        },
        {
            id: 6,
            title: 'The Chronicles of Narnia',
            date: '2005',
            image: 'https://picsum.photos/300/400'
        },
        {
            id: 7,
            title: 'Avatar',
            date: '2009',
            image: 'https://picsum.photos/300/400'
        },
        {
            id: 8,
            title: 'Inception',
            date: '2010',
            image: 'https://picsum.photos/300/400'
        },
        {
            id: 9,
            title: 'Interstellar',
            date: '2014',
            image: 'https://picsum.photos/300/400'
        }
    ];

    useEffect(() => {
        setListMovies(DataMovies);
    }, []);

    const heandleClick = () => {
        const addMovie = {
            id: 10,
            title: 'The Matrix',
            date: '1999',
            image: 'https://picsum.photos/300/400'
        }
        setListMovies([...listMovies, addMovie]);
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {listMovies.map((movie) => (
                        <CardMovie key={movie.id} data={movie} />
                    ))}
                </div>
                <button onClick={heandleClick}>Add Movie</button>


            </section>
        </div>
    );
}

export default Movies;