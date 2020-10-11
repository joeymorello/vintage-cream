import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';

function Logo() {
    return (
          <Link to="/">
              <LogoVC>
                  <p>VINTAGE<br /><span>CREAM</span></p>
              </LogoVC>
          </Link>
    );
}

export default Logo;

const LogoVC = styled.div`
    width: 115px;
    height: auto;
    border: 2px solid var(--black);
    border-radius: 2px;
    text-align: center;
    box-shadow: 
        -1px 1px var(--black),
        -2px 2px var(--black),
        -3px 3px var(--black),
        -4px 4px var(--black),
        -5px 5px var(--black)
        ;
    cursor: pointer;
    overflow: hidden;

    p {
        font-family: monospace;
        font-size: 1.25rem;
        color: var(--black);
        letter-spacing: 2px;
        margin: 5px;
        ${'' /* font-family: var(--secondary-font); */}
    }

    span {
        letter-spacing: 9px;
    }

    a {
        text-decoraction: none !important;
    }
`;