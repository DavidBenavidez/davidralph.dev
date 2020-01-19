import React, { Fragment } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Heading } from '@common';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default () => (
  <Fragment>
    <div className="section first-section">
      <a
        href="https://github.com/DavidBenavidez/davidralph.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="git-ribbon-icon-container">
          <StaticQuery
            query={query}
            render={data => <Image fixed={data.logo.childImageSharp.fixed} />}
          />
        </div>
      </a>
      <div className="title">
        <Heading size="hero" white>
          David Benavidez
        </Heading>
      </div>
      <span className="subheader"> Developer. Geek. Know-it-all. </span>
      <FaAngleDoubleDown onClick={() => scrollTo('#second-section')} />
    </div>
  </Fragment>
);

const query = graphql`
  query {
    logo: file(relativePath: { eq: "GitHub.png" }) {
      childImageSharp {
        fixed(height: 104) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
