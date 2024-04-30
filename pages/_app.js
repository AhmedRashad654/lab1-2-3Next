import Navbar from "@/componant/Navbar/Navbar";
import "@/styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {SessionProvider} from 'next-auth/react'
export default function App( { Component, pageProps:{session,...pageProps} } ) {
  if ( Component.getLayout )
    return Component.getLayout(<Component {...pageProps} />);
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />;
    </SessionProvider>
  ); 
}
