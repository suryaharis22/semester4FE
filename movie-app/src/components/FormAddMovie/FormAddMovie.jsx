// FormAddMovie.jsx
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './FormAddMovie.module.css';
import AlertSpan from '../Alert/AlertSpan';

const FormAddMovie = (props) => {
    const { movies, setMovie } = props;
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [movieType, setMovieType] = useState('Action');
    const [titleError, setTitleError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handlePosterUrlChange = (event) => {
        setPosterUrl(event.target.value);
    };

    const handleMovieTypeChange = (event) => {
        setMovieType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title === '') {
            setTitleError(true);
        } else if (date === '') {
            setDateError(true);
        } else {
            const movie = {
                id: nanoid(),
                title: title,
                date: date,
                poster: posterUrl || "https://picsum.photos/300/400",
                type: movieType,
            };

            setMovie([...movies, movie]);
            setTitle('');
            setDate('');
            setPosterUrl('');
            setMovieType('Action');
            setTitleError(false);
            setDateError(false);
        }
    };

    useEffect(() => {
        console.log('movies', movies);
    }, [movies]);

    return (
        <div className={styles.container}>
            <div className={styles.poster}>
                <img src={posterUrl || "https://picsum.photos/535/354"} alt="Poster" />
            </div>
            <div className={styles.form}>
                <h2>Add Movie</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            required
                        />
                    </div>
                    {titleError && <AlertSpan>Title is required</AlertSpan>}

                    <div className={styles.formGroup}>
                        <label>Date:</label>
                        <input
                            type="text"
                            value={date}
                            onChange={handleDateChange}
                            required
                        />
                    </div>
                    {dateError && <AlertSpan>Date is required</AlertSpan>}

                    <div className={styles.formGroup}>
                        <label>Poster URL:</label>
                        <input
                            type="text"
                            value={posterUrl}
                            onChange={handlePosterUrlChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Movie Type:</label>
                        <select value={movieType} onChange={handleMovieTypeChange}>
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                            <option value="Comedy">Comedy</option>
                        </select>
                    </div>

                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FormAddMovie;
