import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import profilePic from '../assets/profile.png';
import { rhythm } from '../utils/typography';

class Bio extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt="Elina Hovakimyan"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by
          {' '}
          <strong>Elina Hovakimyan</strong>
          {' '}
          who lives and works in Armenia, building useful things - projects, startups, businesses.
          {' '}
          <a target="_blank" href="https://twitter.com/HovakimyanElina">
            You should follow her on Twitter
          </a>
        </p>
      </div>
    );
  }
}

export default Bio;
