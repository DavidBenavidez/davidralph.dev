import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

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

  fix_third_section = () => {
    const scrolling_section = document.getElementsByClassName('scrolling-section')[0];

    const is_element_past_bottom =
      -scrolling_section.getBoundingClientRect().top >
      scrolling_section.offsetHeight - window.innerHeight - 25;
    const is_element_past_top =
      scrolling_section.getBoundingClientRect().top <= 0 &&
      scrolling_section.getBoundingClientRect().bottom > window.innerHeight;

    is_element_past_top ? this.setState({ isFixed: true }) : this.setState({ isFixed: false });
    is_element_past_bottom
      ? this.setState({ isPastBottom: true })
      : this.setState({ isPastBottom: false });
  };

  do_on_scroll = () => {
    this.fix_third_section();
  };

  componentDidMount() {
    window.addEventListener('scroll', this.do_on_scroll);
  }

  render() {
    return (
      <main>
        <Helmet title={TITLE} meta={meta()} link={link}></Helmet>
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
