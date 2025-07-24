import React from 'react';
import getSinglePost from '@/lib/getSinglePost';

const PostPage = async ({ params }) => {
  const { id } = params;
  const post = await getSinglePost(id);

  return (
    <div>
      <h1>Post ID: {id}</h1>
      <h2>Title: {post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostPage;
