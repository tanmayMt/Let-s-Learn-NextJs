export default async function Comments({ promise }) {
    const comments = await promise;
   
    return (
        <div className="comments-section bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-6 shadow-inner">
          <h3 className="comments-title text-xl font-semibold text-pink-700 mb-4 text-center">💬 Comments</h3>
          <ul className="comments-list space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className="comment-item bg-white/80 rounded-xl p-4 shadow flex flex-col gap-2 border-l-4 border-pink-400 hover:scale-105 transition-transform">
                <span className="comment-id text-xs text-blue-500 font-bold">{comment.email}</span>
                <p className="comment-body text-gray-800">{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
    );
}
