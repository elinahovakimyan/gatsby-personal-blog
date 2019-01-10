import React from 'react';
import Layout from '../components/Layout';
import Avatar from '../components/Avatar';

class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1 style={{ textAlign: 'center' }}>About me</h1>
        <div className="about-wrapper">
          <Avatar />
          <p>
            Hi! I am Elina - a software engineer and startup enthusiast.
            I am an experienced JavaScript Developer
            specializing in development cycles for dynamic web and mobile projects.
            I am passionate about creating new stuff that are helpful for people
            and to meet my passion I am working with high-end technologies, such as React.js, React Native, Node.js, etc.
            I have founded this page to share my knowledge with you, help you to grow, and make new connections.
          </p>

          <p>
            Below is the list of skills I have, so feel free to ping me and ask questions on those
            {' '}
            <span role="img">😉</span>
          </p>

          <div className="lists-wrapper">

            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>Redux-Thunk</li>
              <li>SASS</li>
              <li>Ant Design</li>
              <li>Babel</li>
              <li>Gulp</li>
              <li>Webpack</li>
              <li>Typescript</li>
              <li>Flow Typing</li>
              <li>Git</li>
            </ul>

            <ul>
              <li>React Native</li>
              <li>React Navigation</li>
              <li>Expo.io</li>
              <li>Mobx</li>
              <li>Gatsby</li>
              <li>GraphQL</li>
              <li>REST API</li>
              <li>Firebase</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>

            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Koa.js</li>
              <li>PHP</li>
              <li>Java</li>
              <li>ESLint</li>
              <li>Prettier</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>AWS</li>
            </ul>

          </div>

          <p>
            Also, I would love to hear article topic suggestions from you
            (connect with me on Twitter or LinkedIn and share your ideas
            {' '}
            <span role="img">🤗</span>
            )
          </p>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
