import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Simplify from "./components/Simplify";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Simplify />
      <Footer />
    </div>
  );
}
