import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { useSpring, animated } from 'react-spring';

import Logo from "./Logo"
import MenuLogo from "./MenuLogo"
import MobileNav from './MobileNav';
import FullNav from './FullNav';

function Header() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })

  // Animate MobileNav
  const [ isNavOpen, setNavOpen ] = useState(false);
  const navAnimation = useSpring({ 
      transform: isNavOpen ? `translate3d(0, 0, 0) scale(1)` : `translate3d(100%, 0, 0) scale(1)` 
  })
  
  return (
    <HeaderWrapper>
      <Logo />
      {isDesktopOrLaptop ? <FullNav /> 
      : 
      <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          {isNavOpen ? 'X' : <MenuLogo />}
      </button>
      }
      <MobileNav style={navAnimation} />
    </HeaderWrapper>
  )
}
export default Header

const HeaderWrapper = styled.header`
    ${'' /* position: absolute;
    top: 0;
    left: 0;
    right: 0; */}
    display: flex;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    padding: 20px 5%;
    background-color: none;
    background-color: var(--cream);

    .menu-button {
      width: 50px;
      appearance: none;
      color: var(--black);
      font-weight: bold;
      font-size: 2rem;
      background: transparent;
      border: none; 
      z-index: 40;
    }
`;