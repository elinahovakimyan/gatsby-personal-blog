import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1 style={{ textAlign: 'center ' }}>Not Found</h1>
        <p style={{ textAlign: 'center ' }}>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
