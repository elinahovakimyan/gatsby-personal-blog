import React from 'react';
import Grid from '@material-ui/core/Grid';

import PostCard from './PostCard';

class PostGrid extends React.PureComponent {
  render() {
    const { posts } = this.props;
    return (
      <Grid container spacing={16}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;

          return (
            <Grid key={node.fields.slug} item xs={12} sm={6} md={4}>
              <PostCard
                title={title}
                excerpt={node.excerpt}
                url={node.fields.slug}
                date={node.frontmatter.date}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default PostGrid;
