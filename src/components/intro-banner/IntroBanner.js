import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../../utils/typography';
import { colors } from '../../utils/colors';

import './index.css';

class IntroBanner extends React.PureComponent {
  render() {
    const categories = ['JavaScript', 'React', 'Time Management', 'Productivity'];

    return (
      <div className="intro-banner">
        <h3>&quot;Some cool really inspiring super puper quote&quot;</h3>
        <h6>Author name</h6>
        <img src="../../assets/profile.png" alt="Elina Hovakimyan" className="profile-img" />
        <h4>
          Pursue your software engineering career with Elina.
          <br />
          Let&apos;s rock together!
        </h4>
        <h3>Choose a category</h3>
        <div className="category-banner">
          {categories.map(category => (
            <Link to={`/posts?${category}`} key={category} className="category-link">
              <span style={{ color: colors.orange }}>{`#${category}`}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default IntroBanner;
