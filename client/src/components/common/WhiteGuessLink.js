import React from 'react';
import whiteGlass from './white-glass-full.png';

export default () => {
  return (
      <div>
        <a href="/guess-white">
          <img
              src={whiteGlass}
              alt="Guess a white wine."
          />
        </a>
      </div>
  );
};