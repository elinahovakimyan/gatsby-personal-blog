import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';
import { colors } from '../utils/colors';

class BlogIndex extends React.Component {
  render() {
    const { site, allMarkdownRemark } = this.props.data;
    const siteTitle = site.siteMetadata.title;
    const siteDescription = site.siteMetadata.description;
    const posts = allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  color: colors.blue,
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small
                style={{
                  color: colors.gray,
                }}
              >
                {node.frontmatter.date}
              </small>
              <p
                style={{
                  color: colors.orange,
                }}
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
            </div>
          );
        })}
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
