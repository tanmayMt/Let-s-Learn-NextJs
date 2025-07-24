import Link from "next/link";
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
    <main className="mt-10">
      <h1>All Blogs</h1>
      <ul>
        {blogs.map((blog)=>(
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <li className="mb-5">{blog.title}</li>
          </Link>
        ))}
      </ul>
    </main>
  )
}