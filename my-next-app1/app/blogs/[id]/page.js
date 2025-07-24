import { notFound } from 'next/navigation';
import React from 'react'


const BlogPage = async ({ params }) => {
  const { id } = await params;

  if (id >= "3") {
    notFound(); // This will trigger a 404 page if the id is 3
  }
  return (
    <div className="blog-detail-container">The Blog ID is :{id}</div>
  );
}

export default BlogPage;