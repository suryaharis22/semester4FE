import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../Button';
import {
    Container,
    SectionHero,
    HeroLeft,
    HeroRight,
    HeroTitle,
    HeroGenre,
    HeroDescription,
    HeroImage
} from './StyleHero';
import { ENDPOINTS } from '../../utils/endpoints';

const Hero = () => {
    const [dataApi, setDataApi] = useState(null);
    const VideoUrl = dataApi && dataApi.videos.results.length > 0 ? `https://www.youtube.com/watch?v=${dataApi.videos.results[0].key}` : '';

    useEffect(() => {
        const fetchDetails = async () => {
            const trendingMovie = await getTrending();
            if (trendingMovie) {
                await getDetail(trendingMovie.id);
            }
        };

        fetchDetails();
    }, []);

    const getTrending = async () => {
        try {
            const response = await axios.get(ENDPOINTS.TRENDING);
            if (response.status === 200) {
                const movies = response.data.results;
                return movies[Math.floor(Math.random() * movies.length)];
            } else {
                console.error(`Error: ${response.status_message}`);
            }
        } catch (error) {
            console.error("Error fetching trending movie:", error);
        }
    };

    const getDetail = async (id) => {
        try {
            const response = await axios.get(ENDPOINTS.DETAIL(id));
            if (response.status === 200) {
                setDataApi(response.data);
            } else {
                console.error(`Error: ${response.status_message}`);
            }
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };

    return (
        <Container>
            <SectionHero>
                <HeroLeft>
                    <HeroTitle>{dataApi?.title}</HeroTitle>
                    <HeroGenre>Genre: {dataApi?.genres.map(genre => genre.name).join(', ')}</HeroGenre>
                    <HeroDescription>{dataApi?.overview}</HeroDescription>
                    <Button as={'a'} href={VideoUrl} target="_blank" variant="success" size="full" disabled={!VideoUrl}>Watch</Button>
                </HeroLeft>
                <HeroRight>
                    <HeroImage src={`https://image.tmdb.org/t/p/w500${dataApi?.poster_path}`} alt="Movie poster" />
                </HeroRight>
            </SectionHero>
        </Container>
    );
}

export default Hero;