// src/components/FormAddMovie/FormAddMovie.js
import { useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import {
    Container,
    Poster,
    Form,
    FormGroup,
    SubmitButton
} from './StyleFormAddMovie';
import AlertSpan from '../Alert/AlertSpan';
import MovieContext from '../Context/MoviesContext';

const FormAddMovie = () => {
    const { movies, setMovies } = useContext(MovieContext);
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

    const addMovie = () => {
        const newMovie = {
            id: nanoid(),
            title: formData.title,
            date: formData.date,
            poster: formData.posterUrl || "https://picsum.photos/300/400",
            type: formData.movieType,
        };

        setMovies([...movies, newMovie]);
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
            addMovie();
        }
    };

    return (
        <Container>
            <Poster>
                <img src={formData.posterUrl || "https://picsum.photos/535/354"} alt="Poster" />
            </Poster>
            <Form>
                <h2>Add Movie</h2>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <label htmlFor='title'>Title:</label>
                        <input
                            id='title'
                            type="text"
                            value={formData.title}
                            onChange={handleChange}
                            name='title'
                        />
                    </FormGroup>
                    {formErrors.title && <AlertSpan>Title is required</AlertSpan>}

                    <FormGroup>
                        <label htmlFor='date'>Date:</label>
                        <input
                            id='date'
                            type="text"
                            value={formData.date}
                            onChange={handleChange}
                            name='date'
                        />
                    </FormGroup>
                    {formErrors.date && <AlertSpan>Date is required</AlertSpan>}

                    <FormGroup>
                        <label htmlFor='posterUrl'>Poster URL:</label>
                        <input
                            id='posterUrl'
                            type="text"
                            value={formData.posterUrl}
                            onChange={handleChange}
                            name='posterUrl'
                        />
                    </FormGroup>
                    {formErrors.posterUrl && <AlertSpan>Poster URL is required</AlertSpan>}

                    <FormGroup>
                        <label htmlFor='movieType'>Movie Type:</label>
                        <select
                            id='movieType'
                            value={formData.movieType}
                            onChange={handleChange}
                            name='movieType'
                        >
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                            <option value="Comedy">Comedy</option>
                        </select>
                    </FormGroup>

                    <SubmitButton type="submit">Submit</SubmitButton>
                </form>
            </Form>
        </Container>
    );
};

export default FormAddMovie;
