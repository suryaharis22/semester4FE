import { useEffect, useState } from 'react';
import styles from './Hero.module.css'
import axios from 'axios';

const Hero = () => {
    const [dataApi, setDataApi] = useState();

    // useState(() => {
    //     fetch('https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590')
    //         .then((response) => response.json())
    //         .then((data) => setDataApi(data));
    // }, []);

    useEffect(() => {
        axios.get('https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590')
            .then((response) => {
                setDataApi(response.data);
                console.log('data Api', dataApi);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{dataApi?.Title}</h2>
                    <h3 className={styles.hero__genre}>Genre: {dataApi?.Genre}</h3>
                    <p className={styles.hero__description}>{`${dataApi?.Plot}`}</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image}
                        src={`${dataApi?.Poster}`}
                        alt="placeholder" />
                </div>
            </section>
        </div>
    );
}

export default Hero;