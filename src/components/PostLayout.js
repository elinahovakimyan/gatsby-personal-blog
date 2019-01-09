import React from 'react';

import Header from './header/Header';
import { rhythm } from '../utils/typography';

import '../styles.css';

class PostLayout extends React.PureComponent {
  render() {
    const { children, location } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;
    const styles = {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(30),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      paddingTop: 100,
    };

    return [
      <Header key="header" pathname={location.pathname} />,
      <div key="children" style={styles}>
        {children}
      </div>,
    ];
  }
}

export default PostLayout;
