import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll';
import {
   Nav,
   NavbarContainer,
   NavLogo,
   MobileIcon,
   NavMenu,
   NavItem,
   NavLinks,
   NavBtn,
   NavBtnLink
  } from './NavbarElements'; 


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav  = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => (
    scroll.scrollToTop()
  )
  return (
    <>
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}> hello </NavLogo> 
              <MobileIcon onClick={toggle} >
                <FaBars/>
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks id='about' onClick={toggleHome}
                   to='about'
                   smooth={true}
                   duration={500}
                   spy={true}
                   exact='true'
                   offset={-80}
                  >
                      About
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks id='discover' onClick={toggleHome}
                   to="discover"
                   smooth={true}
                   duration={500}
                   spy={true}
                   exact='true'
                   offset={-80}
                  >
                      Discover
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks id='services' onClick={toggleHome}
                   to="services"
                   smooth={true}
                   duration={500}
                   spy={true}
                   exact='true'
                   offset={-80}
                  >
                      Services
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="signup">
                      Sign Up
                  </NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to="/signin">
                  Sign In
                </NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
    </>
  );
}; 

export default Navbar;