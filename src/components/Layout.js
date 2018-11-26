import React from 'react';

import Header from './header/Header';
// import { rhythm } from '../utils/typography';

import '../styles.css';

class Layout extends React.PureComponent {
  defaultProps = {
    wrapperStyle: true,
  }

  render() {
    const { children } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div>
        <Header />
        <div style={{ paddingTop: 100 }}>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
