// src/components/FormAddMovie
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './FormAddMovie.module.css';
import AlertSpan from '../Alert/AlertSpan';

const FormAddMovie = (props) => {
    const { movies, setMovie } = props;
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        posterUrl: '',
        movieType: 'Action',
    });
    const [formErrors, setFormErrors] = useState({
        title: false,
        date: false,
        posterUrl: false,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: false });
    };

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        if (formData.title === '') {
            errors.title = true;
            isValid = false;
        }
        if (formData.date === '') {
            errors.date = true;
            isValid = false;
        }
        if (formData.posterUrl === '') {
            errors.posterUrl = true;
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const AddMovie = () => {
        const movie = {
            id: nanoid(),
            title: formData.title,
            date: formData.date,
            poster: formData.posterUrl || "https://picsum.photos/300/400",
            type: formData.movieType,
        };

        setMovie([...movies, movie]);
        setFormData({
            title: '',
            date: '',
            posterUrl: '',
            movieType: 'Action',
        });
        setFormErrors({
            title: false,
            date: false,
            posterUrl: false,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            AddMovie();
        }
    };

    useEffect(() => {
    }, [movies]);

    return (
        <div className={styles.container}>
            <div className={styles.poster}>
                <img src={formData.posterUrl || "https://picsum.photos/535/354"} alt="Poster" />
            </div>
            <div className={styles.form}>
                <h2>Add Movie</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Title:</label>
                        <input
                            id='title'
                            type="text"
                            value={formData.title}
                            onChange={handleChange}
                            name='title'
                        />
                    </div>
                    {formErrors.title && <AlertSpan>Title is required</AlertSpan>}

                    <div className={styles.formGroup}>
                        <label>Date:</label>
                        <input
                            id='date'
                            type="text"
                            value={formData.date}
                            onChange={handleChange}
                            name='date'
                        />
                    </div>
                    {formErrors.date && <AlertSpan>Date is required</AlertSpan>}

                    <div className={styles.formGroup}>
                        <label>Poster URL:</label>
                        <input
                            id='posterUrl'
                            type="text"
                            value={formData.posterUrl}
                            onChange={handleChange}
                            name='posterUrl'
                        />
                    </div>
                    {formErrors.posterUrl && <AlertSpan>Poster URL is required</AlertSpan>}

                    <div className={styles.formGroup}>
                        <label>Movie Type:</label>
                        <select value={formData.movieType} onChange={handleChange} name='movieType' id='movieType'>
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
