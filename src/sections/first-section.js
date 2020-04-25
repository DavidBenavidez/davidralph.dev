import React, { Fragment } from 'react';
import GithubCorner from 'react-github-corner';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Heading } from '@common';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default () => (
  <Fragment>
    <div className="section first-section">
      <GithubCorner href="https://github.com/DavidBenavidez/davidralph.dev" direction="left" />
      <div className="title">
        <Heading size="hero" white>
          David Benavidez
        </Heading>
      </div>
      <span className="subheader"> Developer. Techie. Gamer. </span>
      <FaAngleDoubleDown className="arrow-down" onClick={() => scrollTo('#second-section')} />
    </div>
  </Fragment>
);
