import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
    overflow: hidden;
    background-color: #4361ee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    &.responsive {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const LeftLinks = styled.div`
    flex: 1;
`;

export const RightLinks = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        display: ${({ isResponsive }) => (isResponsive ? 'block' : 'none')};

        a {
        display: block;
        text-align: left;
        width: 100%;
        }
    }`;

export const NavbarItem = styled(Link)`
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    margin: auto;

    &:hover {
        background-color: #ddd;
        border-radius: 10px;
        color: black;
    }
`;

export const NavbarTitle = styled.h1`
  color: white;
  margin: 0;

  &.active {
    color: white;
  }
`;

export const Icon = styled.a`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
