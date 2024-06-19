import styled, { css } from "styled-components";


const Button = styled.button`
background-color: ${props => props.theme.colors[props.variant] || props.theme.colors.primary};
${props => props.theme.size[props.size] || props.theme.size.md};
border: none;
color: #fff;
border-radius: 10px;
cursor: pointer;
    
    `
export default Button;

// ${props => props.full && css`
//     width: 100%;
//     display: inline-block;};` }
