import styled from 'styled-components';

const StyledDetail = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .poster {
        margin: 0;
        width: 100%;
        max-width: 350px;
        height: auto;
    }

    .poster img {
        width: 100%;
        height: auto;
        border-radius: 20px;
    }

    .info {
        padding: 20px;
        text-align: center;
    }

    .info h2 {
        color: #06D6A0;
        font-size: 2rem;
    }

    .info h3 {
        color: #118AB2;
        font-size: 1.5rem;
    }

    .info p {
        color: #64748B;
        font-size: 1rem;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        .info {
            text-align: left;
            padding-left: 2rem;
            max-width: 60%;
        }

        .info h2 {
            font-size: 3rem;
        }

        .info h3 {
            font-size: 2rem;
        }

        .info p {
        margin-bottom: 20px;
            font-size: 1.25rem;
        }
    }
`;

export default StyledDetail;
