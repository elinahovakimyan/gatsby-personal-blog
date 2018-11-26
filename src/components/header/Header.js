import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'gatsby';

import { colors } from '../../utils/colors';
// import { rhythm } from '../../utils/typography';
import './index.css';

class Header extends React.PureComponent {
  render() {
    return (
      <div
        className="header-container"
      >
        <div
          className="header-first-layer"
          style={{
            backgroundColor: colors.blue,
            paddingLeft: '25%',
            paddingRight: '25%',
          }}
        >
          <Link to="/">
            <h3>Logo</h3>
          </Link>

          <div>
            <TextField
              id="input-with-icon-textfield"
              className="search-input"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <img
                    alt="Search in Elina Hovakimyan Blog"
                    src="https://static.thenounproject.com/png/101791-200.png"
                    className="header-search-icon"
                  />
                ),
              }}
            />

            <img
              alt="Search in Elina Hovakimyan Blog"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Black_Instagram_icon.svg/2000px-Black_Instagram_icon.svg.png"
              className="header-social-icon"
            />

            <img
              alt="Search in Elina Hovakimyan Blog"
              src="https://www.clipartmax.com/png/small/304-3041366_linkedin-logotype-button-free-icon-linkedin-logo-b-w.png"
              className="header-social-icon"
            />

            <img
              alt="Search in Elina Hovakimyan Blog"
              src="https://www.clipartmax.com/png/small/98-987640_follow-him-on-black-twitter-logo-transparent-background.png"
              className="header-social-icon"
            />
          </div>
        </div>

        <div className="header-second-layer" style={{ backgroundColor: colors.yellow }}>
          <span style={{ color: colors.blue }}>Blog</span>
          <span style={{ color: colors.blue }}>Tutorials</span>
          <span style={{ backgroundColor: colors.blue, color: colors.gray }}>Self-growth</span>
          <span style={{ color: colors.blue }}>About</span>
        </div>

      </div>
    );
  }
}

export default Header;
