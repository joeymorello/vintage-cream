import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';
import { animated } from 'react-spring';

import "./mobile-nav.css"

const MobileNav = ({style}) => {
  return (
      <animated.div className="nav-wrapper" style={style}>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/">shop</Link>
              </li>
              <li>
                <Link to="/">instagram</Link>
              </li>
              <li>
                <Link to="/collection">collection</Link>
              </li>
            </ul>
          </nav>
      </animated.div>
  );
}

export default MobileNav;