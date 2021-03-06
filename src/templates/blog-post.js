import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Bio from '../components/Bio';
import PostLayout from '../components/PostLayout';
import { rhythm } from '../utils/typography';
import { colors } from '../utils/colors';

class BlogPostTemplate extends React.PureComponent {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;

    return (
      <PostLayout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1 style={{ color: colors.blue }}>{post.frontmatter.title}</h1>
        <div style={{ color: colors.yellow }} className="post-subheader">
          <p>{post.frontmatter.category}</p>
          {/* <p>{post.frontmatter.date}</p> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              previous
              && (
                <Link to={previous.fields.slug} rel="prev">
                  ←
                  {' '}
                  {previous.frontmatter.title}
                </Link>
              )
            }
          </li>
          <li>
            {
              next
              && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                  {' '}
                  →
                </Link>
              )
            }
          </li>
        </ul>
      </PostLayout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
