import Link from "next/link";

export const metadata = {
  title: "Blogs",
  description: "This is a blogs page",
};

export default function Blogs(){

  const blogs = [
        {
            id: 1,
            title: "Blog 1",
            description: "Blog 1 description",
        },
        {
            id: 2,
            title: "Blog 2",
            description: "Blog 2 description",
        },
  ];

  return (
    <main className="blogs-main mt-10">
      <h1 className="blogs-title">All Blogs</h1>
      <ul className="blogs-list">
        {blogs.map((blog)=>(
          <Link key={blog.id} href={`/blogs/${blog.id}`} className="blogs-link">
            <li className="blogs-list-item mb-5">{blog.title}</li>
          </Link>
        ))}
      </ul>
    </main>
  )
}