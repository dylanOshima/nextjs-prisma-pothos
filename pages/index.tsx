import { GetStaticProps } from "next";
import React, { Suspense } from "react";
import Layout from "../components/Layout";
import MorePosts from "../components/MorePosts";
import Post, { PostProps } from "../components/Post";
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    select: {
      id: true,
      title: true,
      content: true,
      published: true,
      author: {
        select: {
          name: true,
          email: true,
        },
      },
      createdAt: false,
      updatedAt: false,
    },
    take: 2,
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  const endCursor = props.feed[props.feed.length - 1].id;
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
          <h2>See more...</h2>
          <Suspense fallback={<div>Loading...</div>}>
            <MorePosts endCursor={endCursor} />
          </Suspense>
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
