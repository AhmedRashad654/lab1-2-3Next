export default function productId({ data }) {
  return (
    <div style={{ padding: "50px" }}>
      <div
        style={{
          width: "70%",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "20px",
          margin: "20px",
        }}
      >
        <p>{data.category}</p>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <p>{data.price}</p>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const data = await response.json();

  return {
    props: { data },
    revalidate: 30,
  };
}
////////////////////
export function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }, { params: { productId: "2" } }],
    fallback: "blocking",
  };
}

/////////////////


