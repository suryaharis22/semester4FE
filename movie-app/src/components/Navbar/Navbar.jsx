import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css'; // Import stylesheet
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [responsive, setResponsive] = useState(false);

    const toggleResponsive = () => {
        setResponsive(!responsive);
    };

    return (
        <div className={`${styles.topnav} ${responsive ? styles.responsive : ''}`} id="myTopnav">
            <div className={styles.leftLinks}>
                <h1 href="#home" className={styles.active}>Movie App</h1>
            </div>
            <div className={styles.rightLinks}>
                <Link to={'/'}>Home</Link>
                <Link to={'/movie/about'}>About</Link>
                <Link to={'/movie/add-movie'}>Add Movie</Link>
                <Link to={'/movie/pouler'}>Populer</Link>
                <Link to={'/movie/new-play'}>New Play</Link>
                <Link to={'/movie/top-rated'}>Top Rated</Link>
            </div>
            <a href="javascript:void(0);" className={`${styles.icon} ${styles.rightIcon}`} onClick={toggleResponsive}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
    );
}

export default Navbar;
