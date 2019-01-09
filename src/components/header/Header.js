import React from 'react';
// import TextField from '@material-ui/core/TextField';
import { Link } from 'gatsby';

import { colors } from '../../utils/colors';
// import { rhythm } from '../../utils/typography';
import './index.css';

const HeaderLogo = require('../../assets/logo-header.png');
const TwitterIcon = require('../../assets/twitter-dark.png');
const InIcon = require('../../assets/in-dark.png');
const GithubIcon = require('../../assets/github-dark.png');

class Header extends React.PureComponent {
  render() {
    const { pathname } = this.props;
    const activeStyle = { backgroundColor: colors.blue, color: colors.white };
    const casualStyle = { backgroundColor: colors.white, color: colors.blue };

    console.log('this.props :', this.props);
    return (
      <div className="header-container">
        <div
          className="header-first-layer"
          style={{
            backgroundColor: colors.blue,
          }}
        >
          <Link className="header-logo-wrap" to="/">
            <img alt="Digio Reader Logo" className="header-logo" src={HeaderLogo} />
          </Link>

          <div>
            {/* <TextField
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
            /> */}

            <a href="https://twitter.com/HovakimyanElina" rel="noopener noreferrer" target="_blank">
              <img
                alt="Elina Hovakimyan Twitter"
                src={TwitterIcon}
                className="header-social-icon"
              />
            </a>

            <a href="https://www.linkedin.com/in/elina-hovakimyan/" rel="noopener noreferrer" target="_blank">
              <img
                alt="Elina Hovakimyan Linkedin"
                src={InIcon}
                className="header-social-icon"
              />
            </a>

            <a href="https://github.com/elinahovakimyan/" rel="noopener noreferrer" target="_blank">
              <img
                alt="Elina Hovakimyan's Github link"
                src={GithubIcon}
                className="header-social-icon"
              />
            </a>
          </div>
        </div>

        <div className="header-second-layer" style={{ backgroundColor: colors.white }}>
          <Link to="/" style={(pathname.includes('blog') || pathname.includes('posts') || pathname === '/') ? activeStyle : casualStyle}>
            <span>Blog</span>
          </Link>

          <Link to="/ebooks" style={pathname.includes('ebooks') ? activeStyle : casualStyle}>
            <span>E-books</span>
          </Link>

          {/* <Link to="/tutorials" style={pathname.includes('tutorials') ? activeStyle : casualStyle}>
            <span>Tutorials</span>
          </Link> */}

          <Link to="/about" style={pathname.includes('about') ? activeStyle : casualStyle}>
            <span>About</span>
          </Link>

        </div>
      </div>
    );
  }
}

export default Header;
