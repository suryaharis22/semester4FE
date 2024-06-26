import { Link } from 'react-router-dom';
import StyleMovie from './StyleMovie';

const CardMovie = ({ data }) => {
    return (
        <StyleMovie>
            <Link to={`/movie/${data.id}`}>
                <img
                    src={data.poster || `${import.meta.env.VITE_IMAGE}/${data.poster_path}`}
                    alt="Movie"
                />
                <h3>{data.title}</h3>
                <p>{new Date(data.release_date).getFullYear()}</p>
            </Link>
        </StyleMovie>
    );
}

export default CardMovie;
