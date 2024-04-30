import Link from "next/link";

export default function Product({ data }) {
  return (
    <div style={{padding:'50px'}}>
      {data.map((prod) => (
        <div key={prod.id} style={{width:'70%',backgroundColor:'#ddd',borderRadius:'10px',padding:'20px',margin:'20px'}}>
          <p>{prod.title}</p>
          <p>{prod.description}</p>
          <p>{ prod.price }</p>
          <Link className="btn btn-primary" href={`/product/${prod.id}`}>details</Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return {
    props: { data },
    revalidate: 30,
  };
}
