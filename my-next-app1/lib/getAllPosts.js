export default async function getAllPosts(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12',
    {
        next: {
            revalidate: 10 // Revalidate every 10 seconds
        }
    });
    // console.log(await result.json());
    return result.json();
}
