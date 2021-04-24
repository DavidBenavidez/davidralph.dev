import React, { Fragment } from 'react';
import { Heading } from '@common';

import facebook from 'assets/images/social/light/facebook.png';
import twitter from 'assets/images/social/light/twitter.png';
import github from 'assets/images/social/light/GitHub-Mark-Light-64px.png';
import linkedin from 'assets/images/social/light/linkedin.png';
import spotify from 'assets/images/social/light/Spotify_Icon_RGB_White.png';

export default () => (
  <Fragment>
    <div className="section-half fourth-section">
      <Heading size="hero" white>
        {' '}
        Contact Me
      </Heading>
      <div className="content-container">
        <div className="social-media-container">
          <a
            href="https://www.linkedin.com/in/radicalralph/"
            className="icon"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="" />
            <span className="icon-label">Linkedin</span>
          </a>
          <a
            href="https://www.github.com/DavidBenavidez"
            className="icon"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" />
            <span className="icon-label">GitHub</span>
          </a>
          <a
            href="https://open.spotify.com/user/22jbm4olopc7jad5pp3qpqopy?si=VYS47wSXSvK7iz0dPLY8yg"
            className="icon"
            title="Spotify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={spotify} alt="" />
            <span className="icon-label">Spotify</span>
          </a>
          <a
            href="https://twitter.com/RadicalRalph/"
            className="icon"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="" />
            <span className="icon-label">Twitter</span>
          </a>
          <a
            href="https://www.facebook.com/davidbenavidez42/"
            className="icon"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="" />
            <span className="icon-label">Facebook</span>
          </a>
        </div>
        <span className="copyright">(c) 2020 David Ralph Benavidez. All rights reserved.</span>
      </div>
    </div>
  </Fragment>
);
