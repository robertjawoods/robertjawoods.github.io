import { Navbar } from "../components/navbar";
import { About } from "../components/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <body className="bg-brown">
        <div>
          <h1 className="font-raleway">Portfolio!</h1>
          <About />
        </div>
      </body>
    </>
  )
}
