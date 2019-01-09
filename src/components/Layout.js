import React from 'react';

import Header from './header/Header';
// import { rhythm } from '../utils/typography';

import '../styles.css';

class Layout extends React.PureComponent {
  render() {
    const { children, location } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div>
        <Header pathname={location.pathname} />
        <div style={{ paddingTop: 100 }}>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
