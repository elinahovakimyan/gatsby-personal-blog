import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1 style={{ textAlign: 'center' }}>About me</h1>
        <p>Hi. I am a software engineer and startup enthusiast.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
