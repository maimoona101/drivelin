import Navbar from "./navbar/page";
import HeroPage from "./home/page";
// You can uncomment and add more components as you build them
// import Contact from "./contact/page";
// import About from "./about/page";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Car Dealership - Drive Your Dream</title>
        <meta name="description" content="Explore and buy the best cars with us." />
      </Head>
      <Navbar />
      <HeroPage />
      {/* Uncomment and add sections as needed */}
      {/* <About /> */}
      {/* <Contact /> */}
    </>
  );
}