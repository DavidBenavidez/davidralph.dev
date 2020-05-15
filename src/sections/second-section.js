import React, { Fragment } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Heading } from '@common';
import resume from '../assets/resume.pdf';

const EducationItem = ({ image, description, subdescription }) => (
  <div>
    <div className="about-me-item-education-item">
      <Image fixed={image.childImageSharp.fixed} />
      <span> {description} </span>
      <span className="about-me-item-education-course"> {subdescription} </span>
    </div>
  </div>
);

export default () => (
  <Fragment>
    <div id="second-section" className="section second-section">
      <div className="content-container">
        <div className="about-me-containter">
          <div className="about-me-item" data-sal="slide-up">
            <Heading size="h1" accent>
              About Me
            </Heading>
            <span className="about-me-item-intro">
              Hi there! I’m David. I’m a Software Engineer from Metro Manila, Philippines. I love
              developing web applications and I look forward to forging a steady career path in the
              field of Software Engineering.
            </span>
          </div>

          <div className="about-me-item" data-sal="slide-up">
            <Heading size="h1" accent>
              Education
            </Heading>
            <StaticQuery
              query={query}
              render={data => (
                <div className="about-me-item-education">
                  <EducationItem image={data.rural} description="High School" />
                  <EducationItem
                    image={data.uplb}
                    description="College"
                    subdescription="BS Computer Science"
                  />
                </div>
              )}
            />
            <span className="download-resume-label-mobile">
              Want to know more?{' '}
              <a className="download-resume" href={resume} download>
                Download my resume.
              </a>
            </span>
          </div>
        </div>

        <div className="profile-picture-container">
          <div className="profile-picture" />
          <span className="download-resume-label-pc">
            Want to know more?{' '}
            <a className="download-resume" href={resume} download>
              Download my resume.
            </a>
          </span>
        </div>
      </div>
    </div>
  </Fragment>
);

const query = graphql`
  query {
    rural: file(relativePath: { eq: "education/rural.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    uplb: file(relativePath: { eq: "education/uplb.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
