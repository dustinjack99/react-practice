import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  const color = 'pink';

  return (
    <header
      css={css`
        background-color: ${color};
        padding: ${padding}px;
      `}
      onClick={() => setPadding(padding + 15)}
    >
      <Link to='/'>Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
        `}
        role='img'
        aria-label='logo'
      >
        Dog Emoji
      </span>
    </header>
  );
};

export default NavBar;
