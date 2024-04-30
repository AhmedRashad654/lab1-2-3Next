import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Posts( { posts } ) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>details</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <Link href={`/posts/${post.id}`}>details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export async function getServerSideProps() {
    const response = await fetch( "https://jsonplaceholder.typicode.com/posts" );
    const result = await response.json()
    return {props:{posts:result}}
}