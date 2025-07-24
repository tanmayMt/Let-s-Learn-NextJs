import React from 'react';
import getSinglePost from '@/lib/getSinglePost';

export async function generateMetadata({ params }) {
  const post = await getSinglePost(params.id);
  return {
    title: post.title,
    description: post.body,
  };
}

const PostPage = async ({ params }) => {
  const { id } = params;
  const post = await getSinglePost(id);

  return (
    <div className="post-detail-main">
      <h1 className="post-detail-id">Post ID: {id}</h1>
      <h2 className="post-detail-title">Title: {post.title}</h2>
      <p className="post-detail-body">{post.body}</p>
    </div>
  )
}

export default PostPage;
