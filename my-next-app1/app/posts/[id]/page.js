import Comments from '@/app/components/Comments';
import React from 'react';
import getSinglePost from '@/lib/getSinglePost';
import getPostComments from '@/lib/getPostComment';

export async function generateMetadata({ params }) {
  const post = await getSinglePost(params.id);
  return {
    title: post.title,
    description: post.body,
  };
}


const PostPage = async ({ params }) => {
  const { id } = params;
  // const post = await getSinglePost(id);
  const postPromise = getSinglePost(id);
  // const comments = await getPostComments(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;

  return (
    <div className="post-container bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="post-card bg-white/90 shadow-2xl rounded-3xl p-10 max-w-2xl w-full border-4 border-pink-300 relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full p-2 shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="url(#grad1)" /><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">{id}</text></svg>
          </span>
        </div>
        <h1 className="post-id text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-center mt-8 mb-2">{post.title}</h1>
        <p className="post-body text-lg text-gray-700 mb-8 text-center leading-relaxed">{post.body}</p>
        {/* Comments Section */}
        {/* <div className="comments-section bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-6 shadow-inner">
          <h3 className="comments-title text-xl font-semibold text-pink-700 mb-4 text-center">💬 Comments</h3>
          <ul className="comments-list space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className="comment-item bg-white/80 rounded-xl p-4 shadow flex flex-col gap-2 border-l-4 border-pink-400 hover:scale-105 transition-transform">
                <span className="comment-id text-xs text-blue-500 font-bold">{comment.email}</span>
                <p className="comment-body text-gray-800">{comment.body}</p>
              </li>
            ))}
          </ul>
        </div> */}
        <Comments promise={commentsPromise} />
      </div>
    </div>
  );
}

export default PostPage;
