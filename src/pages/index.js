import React, { Component } from 'react';
import Helmet from 'react-helmet';

import 'assets/montserrat/_index.scss';
import 'assets/palanquin/_index.scss';
import 'assets/muli/_index.scss';

import 'stylesheets/_index.scss';

import { Header, AboutMe, Fallback, Experience, FourthSection } from '../sections';
import meta, { TITLE, link } from '../meta';

class Site extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFixed: false,
      isPastBottom: false,
    };
  }

  fix_me_func = () => {
    const scrolling_section = document.getElementsByClassName('scrolling-section')[0];

    let is_past_bottom =
      -scrolling_section.getBoundingClientRect().y >
      scrolling_section.offsetHeight - window.innerHeight - 25;

    if (
      scrolling_section.getBoundingClientRect().top <= 0 &&
      scrolling_section.getBoundingClientRect().bottom > window.innerHeight
    ) {
      this.setState({ isFixed: true });
    } else {
      this.setState({ isFixed: false });
    }

    if (is_past_bottom) {
      this.setState({ isPastBottom: true });
    } else {
      this.setState({ isPastBottom: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.fix_me_func);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fix_me_func);
  }

  render() {
    return (
      <main>
        <Helmet title={TITLE} meta={meta()} link={link} />
        <Header />
        <AboutMe />
        <Fallback />
        <Experience isFixed={this.state.isFixed} isPastBottom={this.state.isPastBottom} />
        <FourthSection />
      </main>
    );
  }
}

export default Site;
