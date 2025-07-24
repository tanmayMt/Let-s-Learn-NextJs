import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'All Posts',
    description: 'A list of all posts available on the platform.',
    };

const Posts = async () => {
  const posts = await getAllPosts();
  console.log(posts); // Debugging line to check fetched posts
  return (
    <div className="posts-main mt-6">
        <h1 className="posts-title">All Posts</h1>
        <ul className="posts-list mt-4">
            {posts.map((post) => (
                <Link href={`/posts/${post.id}`} className="posts-link" key={post.id}>
                    <li className="posts-list-item mb-4">
                        <h2 className="posts-item-title">{post.title}</h2>
                        <p className="posts-item-body">{post.body}</p>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default Posts;