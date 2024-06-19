import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;

  @media (min-width: 768px) {
    margin: 2rem;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

export const SectionHero = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export const HeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-basis: 40%;
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

export const HeroRight = styled.div`
  @media (min-width: 768px) {
    flex-basis: 60%;
    margin-left: 2rem;
  }

  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

export const HeroTitle = styled.h2`
  color: #4361ee;
  margin-bottom: 1rem;
  font-size: 2.44rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const HeroGenre = styled.h3`
  color: #b5179e;
  margin-bottom: 1rem;
  font-size: 1.59rem;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const HeroDescription = styled.p`
  color: #64748b;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;
