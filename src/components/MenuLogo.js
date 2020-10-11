import React from 'react';
import styled from 'styled-components';

function MenuLogo() {
  return (
    <MenuWrapper>
        <hr />
        <hr />
        <hr />
    </MenuWrapper>
  );
}

export default MenuLogo;

const MenuWrapper = styled.div`
    hr {
      margin: 8px 0;
      border: 2px solid var(--black);
      border-radius: 5px;
      background-color: var(--black);
    }
`;