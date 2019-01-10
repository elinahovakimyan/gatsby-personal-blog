import React from 'react';
import Layout from '../components/Layout';

import { colors } from '../utils/colors';

class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1 style={{ textAlign: 'center' }}>Books I recommend</h1>
        <div className="about-wrapper">
          <h2 style={{ color: colors.brown }}>This page is still under construction. 😟 </h2>
          <p>
            But while you are waiting, pick one of my top 3 favorite books.
          </p>

          <p style={{ color: colors.blue }}>
            <span style={{ color: colors.orange }}> 1. </span>
            {' '}
            Rich Dad, Poor Dad
            {' '}
            <span style={{ color: colors.orange, fontStyle: 'italic' }}>(by Robert Kiyosaki)</span>
          </p>
          <p style={{ color: colors.blue }}>
            <span style={{ color: colors.orange }}> 2. </span>
            {' '}
            Who Moved My Cheese?
            {' '}
            <span style={{ color: colors.orange, fontStyle: 'italic' }}>(by Spencer Johnson)</span>
          </p>
          <p style={{ color: colors.blue }}>
            <span style={{ color: colors.orange }}> 3. </span>
            {' '}
            Winning
            {' '}
            <span style={{ color: colors.orange, fontStyle: 'italic' }}>(by Jack Welch)</span>
          </p>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
