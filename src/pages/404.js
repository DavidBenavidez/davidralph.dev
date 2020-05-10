import React, { Component } from 'react';

import 'assets/montserrat/_index.scss';
import 'assets/palanquin/_index.scss';
import 'assets/muli/_index.scss';

import 'stylesheets/_index.scss';

import { Page404 } from '../sections';

class Site404 extends Component {
  render() {
    return (
      <main>
        <Page404 />
      </main>
    );
  }
}

export default Site404;
