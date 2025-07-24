import getAllPosts from '@/lib/getAllPosts';
import React from 'react';

const Posts = async () => {
  const posts = await getAllPosts();
  console.log(posts); // Debugging line to check fetched posts
  return (
    <div className='mt-6'>
        <h1>All Posts</h1>
        <ul className='mt-4'>
            {posts.map((post) => (
                <li key={post.id} className='mb-4'>
                    <h2 className='text-lg font-bold'>{post.title}</h2>
                    <p className='text-gray-600'>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Posts;