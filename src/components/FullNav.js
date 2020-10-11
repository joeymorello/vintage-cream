import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';
import { window } from 'browser-monads';

const FullNav = ({ title }) => {
  return (
      <FullNavWrapper>
          <nav>
            <ul>
              <li>
                <Link to="/" className={window.location.href === 'http://localhost:8000/' && 'active'}>home</Link>
              </li>
              <li>
                <Link to="/">shop</Link>
              </li>
              <li>
                <Link to="/">instagram</Link>
              </li>
              <li>
                <Link to="/collection" className={window.location.href.indexOf('collection') > 0 && 'active'}>collection</Link>
              </li>
            </ul>
          </nav>
      </FullNavWrapper>
  );
}

export default FullNav;

const FullNavWrapper = styled.div`
    text-transform: uppercase;
    font-family: monospace;

    li {
        display: inline;
        padding: 0 20px;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }

    .active {
        border-bottom: 3px solid var(--yellow);
    }
`;