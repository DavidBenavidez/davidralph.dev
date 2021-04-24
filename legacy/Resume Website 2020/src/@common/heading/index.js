import React from 'react';
import PropTypes from 'prop-types';

export const Heading = props => {
  const { size, children, accent, center, white } = props;

  switch (size) {
    case 'hero':
      return (
        <h1
          className={`heading heading-hero ${white ? 'heading-white' : 'heading-black'} ${
            accent ? 'heading--accent' : ''
          } ${center ? 'heading--accent-center' : ''}`}
        >
          {children}
        </h1>
      );
    case 'h1':
      return (
        <h2
          className={`heading heading-1 ${white ? 'heading-white' : 'heading-black'} ${
            accent ? 'heading--accent' : ''
          } ${center ? 'heading--accent-center' : ''}`}
        >
          {children}
        </h2>
      );
    case 'h2':
      return (
        <h3
          className={`heading heading-2 ${white ? 'heading-white' : 'heading-black'} ${
            accent ? 'heading--accent' : ''
          } ${center ? 'heading--accent-center' : ''}`}
        >
          {children}
        </h3>
      );
    default:
      return null;
  }
};

Heading.propTypes = {
  size: PropTypes.oneOf(['hero', 'h1', 'h2']).isRequired,
  accent: PropTypes.bool,
  center: PropTypes.bool,
};
