import styled from "styled-components";

const StyleMovie = styled.div`
    margin: 1rem;

    img {
        border-radius: 10px;
        max-width: 100%;
        height: auto;
        margin-bottom: 0.5rem;
    }

    h3 {
        color: #4361ee;
        font-size: 1.95rem;
        margin-bottom: 0.5rem;
    }

    p {
        color: #64748b;
    }
    @media (max-width: 768px) {
        flex-basis: 50%;
    }
    @media (max-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
    }
`

export default StyleMovie