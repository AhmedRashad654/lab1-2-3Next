import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
export default function Navbar() {
  const { data } = useSession()
  if(data) return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href={"/user"} className="nav-link">
                  user
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/product"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/posts"}>
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/comments"}>
                  comments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={"/Home"}>
                  Home
                </Link>
              </li>
        
                <li className="nav-item">
                  <Link className="nav-link" href={"/about"}>
                    about
                  </Link>
                </li>
            

         
                <li className="nav-item">
                  <Link className="nav-link" href={"/dashboard"}>
                    Dashboard
                  </Link>
                </li>
      
          
                <li className="nav-item">
                  <Link className="nav-link" href={"/api/auth/signout"}>
                    signout
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
  else return (
     <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container">
           <a class="navbar-brand" href="#">
             Navbar
           </a>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <Link href={"/user"} className="nav-link">
                   user
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" href={"/product"}>
                   Product
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" href={"/posts"}>
                   Posts
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" href={"/comments"}>
                   comments
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" href={"/Home"}>
                   Home
                 </Link>
               </li>
            

            
                 <li className="nav-item">
                   <Link className="nav-link" href={"/api/auth/signin"}>
                     signin
                   </Link>
                 </li>
       
             </ul>
           </div>
         </div>
       </nav>
     </div>)
}
