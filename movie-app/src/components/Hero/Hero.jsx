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

const Hero = () => {
    const [dataApi, setDataApi] = useState();

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
        <Container>
            <SectionHero>
                <HeroLeft>
                    <HeroTitle>{dataApi?.Title}</HeroTitle>
                    <HeroGenre>Genre: {dataApi?.Genre}</HeroGenre>
                    <HeroDescription>{`${dataApi?.Plot}`}</HeroDescription>
                    <Button variant="success" size="full">Watch</Button>
                </HeroLeft>
                <HeroRight>
                    <HeroImage src={`${dataApi?.Poster}`} alt="placeholder" />
                </HeroRight>
            </SectionHero>
        </Container>
    );
}

export default Hero;
