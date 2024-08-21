import { Inter } from "next/font/google";
// import Gallery from "./Page/Gallery";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      
      <Link className="btn btn-primary" href="/Page/Home"> Create </Link> <br/>
      <Link className="btn btn-primary" href="/Page/Read"> Read </Link> <br/>
      <Link className="btn btn-primary" href="/Page/Read"> Update </Link> <br/>
      <Link className="btn btn-primary" href="/Page/Read"> Delete </Link> <br/><br/>

      <Link className="btn btn-success" href="/Page/Gallery"> Gallery </Link> <br/>


      {/* <Gallery/> */}
    </main>
  );
}
