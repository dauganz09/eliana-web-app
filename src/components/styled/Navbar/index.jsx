import React from 'react'
import {Nav,NavbarContainer,NavBtn,NavBtnLink,NavItem,NavLinks,NavLogo, NavMenu,} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'
const Navbar = () => {

        const toggleHome = () => {
            scroll.scrollToTop();
        }

  return (
   <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
                ELIANA RAPHA MINERAL TRADING
            </NavLogo>
            <NavMenu>
                <NavItem>
                    <NavLinks to='home'  spy={true} smooth='easeInSine' offset={-100} duration={800}>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='about'  spy={true}   smooth='easeInSine' offset={-90}  duration={800}>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='products' spy={true}   smooth='easeInSine' offset={-90}  duration={800}>Products</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='contact'  spy={true}   smooth='easeInSine' offset={-90}  duration={800}>Contact</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='login'>Log In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar