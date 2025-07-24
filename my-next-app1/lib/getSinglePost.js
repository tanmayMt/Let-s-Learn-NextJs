export default async function getSinglePost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching post with id ${id}: ${response.statusText}`);
    }
    const post = await response.json();
    return post;
  }
  catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch post with id ${id}`);
  }
}