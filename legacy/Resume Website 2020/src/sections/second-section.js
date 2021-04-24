import React, { Fragment } from 'react';
import { Heading } from '@common';
import resume from '../assets/resume.pdf';

import * as primaryTechImages from '../assets/images/primary-tech';
import * as secondaryTechImages from '../assets/images/secondary-tech';

export default () => (
  <Fragment>
    <div id="second-section" className="section second-section">
      <div className="content-container">
        <div className="about-me-containter">
          <div className="about-me-item" data-sal="slide-up">
            <Heading size="h1" accent>
              Primary Technologies
            </Heading>
            <div className="about-me-item__images">
              {Object.keys(primaryTechImages).map(key => (
                <img src={primaryTechImages[key]} alt={key} />
              ))}
            </div>
          </div>

          <div className="about-me-item" data-sal="slide-up">
            <Heading size="h1" accent>
              Secondary Technologies
            </Heading>
            <div className="about-me-item__images">
              {Object.keys(secondaryTechImages).map(key => (
                <img src={secondaryTechImages[key]} alt={key} />
              ))}
            </div>
          </div>

          <span className="download-resume-label-mobile">
            Want to know more?{' '}
            <a className="download-resume" href={resume} download>
              Download my resume.
            </a>
          </span>
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

// const query = graphql`
//   query {
//     javascript: file(relativePath: { eq: "images/primary-tech/javascript.svg" }) {
//       childImageSharp {
//         fixed(height: 100) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;
