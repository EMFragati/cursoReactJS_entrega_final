import CartWidget from './CartWidget';
import { Link }  from 'react-router-dom';
import { Brand , NavbarCategoryLinksContainer , NavBarContentContainer , NavBarLinksSections } from '../styles/NavBarStyles';

const NavBar = () => { 
    return(
        <>           
            <NavBarContentContainer>
                <Brand/>
                <NavBarLinksSections>                                               
                    <NavbarCategoryLinksContainer/>
                    <Link to="/cart" className="navbar-brand"><CartWidget/></Link>
                </NavBarLinksSections>
            </NavBarContentContainer>           
        </>
    )
};

export default NavBar;