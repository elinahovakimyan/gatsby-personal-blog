import React from 'react';
import { graphql } from 'gatsby';
// import get from 'lodash/get';
import Helmet from 'react-helmet';

import { rhythm } from '../utils/typography';
import { colors } from '../utils/colors';
// import Bio from '../components/Bio';
import PostGrid from '../components/PostGrid';
import Layout from '../components/Layout';

class BlogIndex extends React.PureComponent {
  render() {
    const { site, allMarkdownRemark } = this.props.data;
    const siteTitle = site.siteMetadata.title;
    const siteDescription = site.siteMetadata.description;
    const posts = allMarkdownRemark.edges;
    const categories = ['JavaScript', 'React', 'Time Management', 'Productivity'];

    return (
      <Layout location={this.props.location} title={siteTitle} wrapperStyle={false}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <div className="category-banner">
          {categories.map(category => (
            <span style={{ color: colors.orange }}>{`#${category}`}</span>
          ))}
        </div>

        <div
          className="homepage-content"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(30),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {/* <Bio />
          Main Expertise */}

          <PostGrid posts={posts} />
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
