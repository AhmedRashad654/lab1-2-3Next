import Image from "next/image"
import { useRouter } from "next/router";

export default function NotFound() {
  const router  = useRouter()
  function back() {
    router.push('/')
  }
  return (
    <>
      <Image src="/images.png" alt="notFound" width={300} height={300} />
      <button className="btn btn-primary" onClick={back}>back</button>
    </>
  );
}
NotFound.getLayout = function pageLayout( page ) {
    return <>{ page}</>
}