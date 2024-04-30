
import Link from "next/link";
export default function User({ data }) {
   return (
     <>
       <table className="table">
         <thead>
           <tr>
             <td>id</td>
             <td>name</td>
             <td>phone</td>
             <td>details</td>
           </tr>
         </thead>
         <tbody>
           {data.map((user) => (
             <tr key={user.id}>
               <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.phone}</td>
               <td>
                 <Link href={`/user/${user.id}`}>details</Link>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </>
   );
}
///////////////////////
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();

  return {
    props: {
      data: posts,
    },
  };
}
