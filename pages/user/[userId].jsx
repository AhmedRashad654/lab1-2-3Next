
export default function UserId( { data } ) {
  return (
    <div style={{padding:'50px'}}>
      <p>{data.name}</p>
      <p>{data.username}</p>
      <p>{data.website}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.company.name}</p>
    </div>
  );
}
/////////////////////////
export async function getStaticProps( {params}) {
  const { userId } = params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const posts = await res.json();

  return {
    props: {
      data: posts,
    },
  };
}
///////////////////////////////
// UserId.js
export function getStaticPaths() {
  return {
    paths: [
      { params: { userId: "1" } },
      { params: { userId: "2" } }
    ],
    fallback: "blocking",
  };
}
