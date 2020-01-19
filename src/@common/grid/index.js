import React from 'react';
import PropTypes from 'prop-types';

export const Grid = ({ children, className }) => (
  <div className={`grid ${className}`}>{children}</div>
);

export const GridColumn = props => {
  const {
    children,
    size,

    tablet,
    desktop,
    desktoplg,
    desktopxl,
  } = props;

  const responsiveClasses = [tablet, desktop, desktoplg, desktopxl].reduce((str, size, index) => {
    if (!size) return str;

    switch (index) {
      case 0:
        str += ' grid-col-tablet-';
        break;
      case 1:
        str += ' grid-col-desktop-';
        break;
      case 2:
        str += ' grid-col-desktop-large-';
        break;
      case 3:
        str += ' grid-col-desktop-xlarge-';
        break;
      default:
        str += '';
    }

    str += size;
    return str;
  }, '');

  return <div className={`grid-col grid-col-${size} ${responsiveClasses}`}>{children}</div>;
};

GridColumn.propTypes = {
  align: PropTypes.oneOf(['left', 'right', 'center']),
  size: PropTypes.number.isRequired,

  tablet: PropTypes.number,
  desktop: PropTypes.number,
  desktoplg: PropTypes.number,
  desktopxl: PropTypes.number,
};
