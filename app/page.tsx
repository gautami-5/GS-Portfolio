import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Journey from "../components/Journey";
import Blueprint from "../components/Blueprint";
import Network from "../components/Network";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative">
        <Hero />
        <About />
        <Journey />
        <Blueprint />
        <Network />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
