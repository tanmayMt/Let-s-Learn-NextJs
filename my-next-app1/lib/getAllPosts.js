export default async function getAllPosts(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
    // console.log(await result.json());
    return result.json();
}
