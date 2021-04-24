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
          className="background-image"
          fluid={data.background.childImageSharp.fluid}
          style={{
            backgroundColor: '#040e18',
            backgroundAttachment: 'fixed',
          }}
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
            <span className="subheader"> Developer. Geek. Techie. </span>
            <FaAngleDoubleDown className="arrow-down" onClick={() => scrollTo('#second-section')} />
          </div>
        </BackgroundImage>
      )}
    />
  </Fragment>
);

const query = graphql`
  query {
    background: file(relativePath: { eq: "bg.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
