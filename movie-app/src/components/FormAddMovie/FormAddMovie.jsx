// FormAddMovie.jsx
import { useState } from 'react';
import styles from './FormAddMovie.module.css';

const FormAddMovie = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data, e.g., submit to backend
        console.log("Title:", title);
        console.log("Year:", year);
        // Clear form fields
        setTitle('');
        setYear('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.poster}>
                <img src="https://picsum.photos/535/354" alt="Poster" />
            </div>
            <div className={styles.form}>
                <h2>Add Movie</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Year:</label>
                        <input
                            type="text"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FormAddMovie;
