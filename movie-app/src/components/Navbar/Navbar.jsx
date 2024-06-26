import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Icon, LeftLinks, NavbarContainer, NavbarItem, NavbarTitle, RightLinks } from './StyleNavbar';


const Navbar = () => {
    const [responsive, setResponsive] = useState(false);

    const toggleResponsive = () => {
        setResponsive(!responsive);
    };

    return (
        <NavbarContainer className={responsive ? 'responsive' : ''}>
            <LeftLinks>
                <NavbarTitle className="active">Movie App</NavbarTitle>
            </LeftLinks>
            <RightLinks className={responsive ? 'responsive' : ''}>
                <NavbarItem to="/">Home</NavbarItem>
                <NavbarItem to="/movie/about">About</NavbarItem>
                <NavbarItem to="/movie/add-movie">Add Movie</NavbarItem>
                <NavbarItem to="/movie/pouler">Populer</NavbarItem>
                <NavbarItem to="/movie/new-play">Now Play</NavbarItem>
                <NavbarItem to="/movie/top-rated">Top Rated</NavbarItem>
            </RightLinks>
            <Icon className="icon" onClick={toggleResponsive}>
                <FontAwesomeIcon icon={faBars} />
            </Icon>
        </NavbarContainer>
    );
};

export default Navbar;
