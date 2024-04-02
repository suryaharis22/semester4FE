import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css'; // Import stylesheet
import { useState } from 'react';

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
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <a href="javascript:void(0);" className={`${styles.icon} ${styles.rightIcon}`} onClick={toggleResponsive}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
    );
}

export default Navbar;
