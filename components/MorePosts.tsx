"use client";

import { graphql, useLazyLoadQuery } from "react-relay";
import { MorePostsQuery } from "../__generated__/relay/MorePostsQuery.graphql";
import Post from "./Post";

const postsQuery = graphql`
  query MorePostsQuery($before: String) {
    posts(first: 5, before: $before) {
      edges {
        node {
          id
          title
          author {
            name
            email @required(action: THROW)
          }
          content @required(action: THROW)
          published
        }
      }
    }
  }
`;

type Props = {
  endCursor: string;
};

/**
 * What does this component do?
 */
const MorePosts = ({ endCursor }: Props) => {
  const data = useLazyLoadQuery<MorePostsQuery>(postsQuery, {
    before: new Date().toString(),
  });
  if (data == null) {
    return null;
  }
  return data.posts.edges.map((edge) => {
    if (edge == null || edge.node == null) {
      return null;
    }
    return (
      <div key={edge.node.id} className="post">
        <Post post={edge.node} />
      </div>
    );
  });
};

export default MorePosts;
