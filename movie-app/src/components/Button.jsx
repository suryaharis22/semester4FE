import styled, { css } from "styled-components";


const Button = styled.button`
padding: 0.8rem 2rem,
border: none;
background-color: 
${props => props.theme.colors[props.variant] || props.theme.colors.primary};
color: #fff;
font-size: 1.5rem;
border-radius: 10px;
cursor: pointer;
${props => props.full && css`
    width: 100%;
    display: inline-block;};` }
    `

export default Button;