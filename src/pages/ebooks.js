import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1 style={{ textAlign: 'center' }}>Books I recommend</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
