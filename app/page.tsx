import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar/page";
import HeroPage from "./home/page";
import Contact from "./contact/page";
import About from "./about/page";

// Thank you for taking the time to visit my website!

export default function Home() {
  return (
    <>
    < Navbar />
    <HeroPage />
    </>
  );
}