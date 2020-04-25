import React, { Fragment } from 'react';
import GithubCorner from 'react-github-corner';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Heading } from '@common';
import scrollTo from 'gatsby-plugin-smoothscroll';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';

export default () => (
  <Fragment>
    <StaticQuery
      query={query}
      render={data => (
        <BackgroundImage
          Tag="section"
          fluid={data.background.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
          <div className="section first-section">
            <GithubCorner
              href="https://github.com/DavidBenavidez/davidralph.dev"
              direction="left"
            />
            <div className="title">
              <Heading size="hero" white>
                David Benavidez
              </Heading>
            </div>
            <span className="subheader"> Developer. Techie. Gamer. </span>
            <FaAngleDoubleDown className="arrow-down" onClick={() => scrollTo('#second-section')} />
          </div>
        </BackgroundImage>
      )}
    />
  </Fragment>
);

/**
 * @TODO: Add breakpoints for background image; Render HD/4k version of background;
 */

const query = graphql`
  query {
    background: file(relativePath: { eq: "bg_retina.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
