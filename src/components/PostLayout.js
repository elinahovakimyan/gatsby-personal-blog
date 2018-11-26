import React from 'react';

import Header from './header/Header';
import { rhythm } from '../utils/typography';

import '../styles.css';

class PostLayout extends React.PureComponent {
  render() {
    const { children } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;
    const styles = {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(30),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      paddingTop: 100,
    };

    return (
      <div>
        <Header />
        <div style={styles}>
          {children}
        </div>
      </div>
    );
  }
}

export default PostLayout;
